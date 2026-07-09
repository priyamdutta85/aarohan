import { z } from "zod";

const optionalString = z
  .string()
  .optional()
  .transform((value) => {
    const trimmed = value?.trim();
    return trimmed ? trimmed : undefined;
  });

const publicEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: optionalString,
  NEXT_PUBLIC_MEMBERSHIP_FORM_URL: optionalString,
  NEXT_PUBLIC_CONTACT_EMAIL: optionalString,
  NEXT_PUBLIC_CONTACT_ADDRESS: optionalString,
});

export type PublicUrlState =
  | { status: "missing" }
  | { status: "invalid"; reason: string }
  | { status: "valid"; url: URL };

export type MembershipFormConfig =
  | { status: "missing" }
  | { status: "invalid"; reason: string }
  | { status: "direct"; directUrl: string; isGoogleForm: boolean }
  | { status: "embeddable"; directUrl: string; embedUrl: string; isGoogleForm: true };

export function parsePublicUrl(raw: string | undefined, nodeEnv = process.env.NODE_ENV): PublicUrlState {
  if (!raw?.trim()) {
    return { status: "missing" };
  }

  let url: URL;
  try {
    url = new URL(raw.trim());
  } catch {
    return { status: "invalid", reason: "The configured value is not a valid URL." };
  }

  if (nodeEnv === "production" && url.protocol !== "https:") {
    return { status: "invalid", reason: "Production URLs must use HTTPS." };
  }

  if (!["https:", "http:"].includes(url.protocol)) {
    return { status: "invalid", reason: "Only HTTP and HTTPS URLs are supported." };
  }

  return { status: "valid", url };
}

export function getMembershipFormConfig(
  raw = process.env.NEXT_PUBLIC_MEMBERSHIP_FORM_URL,
  nodeEnv = process.env.NODE_ENV
): MembershipFormConfig {
  const parsed = parsePublicUrl(raw, nodeEnv);

  if (parsed.status !== "valid") {
    return parsed;
  }

  const { url } = parsed;
  const isGoogleForm = url.hostname === "docs.google.com" && /^\/forms\/d\/e\/[^/]+\/viewform\/?$/.test(url.pathname);

  if (!isGoogleForm) {
    return {
      status: "direct",
      directUrl: url.toString(),
      isGoogleForm: url.hostname === "docs.google.com",
    };
  }

  const embedUrl = new URL(url.toString());
  embedUrl.searchParams.set("embedded", "true");

  return {
    status: "embeddable",
    directUrl: url.toString(),
    embedUrl: embedUrl.toString(),
    isGoogleForm: true,
  };
}

export function getPublicConfig() {
  const parsed = publicEnvSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_MEMBERSHIP_FORM_URL: process.env.NEXT_PUBLIC_MEMBERSHIP_FORM_URL,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    NEXT_PUBLIC_CONTACT_ADDRESS: process.env.NEXT_PUBLIC_CONTACT_ADDRESS,
  });

  const data: z.infer<typeof publicEnvSchema> = parsed.success
    ? parsed.data
    : {
        NEXT_PUBLIC_SITE_URL: undefined,
        NEXT_PUBLIC_MEMBERSHIP_FORM_URL: undefined,
        NEXT_PUBLIC_CONTACT_EMAIL: undefined,
        NEXT_PUBLIC_CONTACT_ADDRESS: undefined,
      };
  const email = data.NEXT_PUBLIC_CONTACT_EMAIL;
  const contactEmail = email && z.string().email().safeParse(email).success ? email : undefined;

  return {
    siteUrl: data.NEXT_PUBLIC_SITE_URL,
    membershipForm: getMembershipFormConfig(data.NEXT_PUBLIC_MEMBERSHIP_FORM_URL),
    contactEmail,
    contactAddress: data.NEXT_PUBLIC_CONTACT_ADDRESS,
    contactEmailInvalid: Boolean(email && !contactEmail),
  };
}
