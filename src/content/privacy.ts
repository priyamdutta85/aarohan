export const privacy = {
  reviewNotice: "Requires Aarohan review before production publication.",
  intro:
    "This page explains broad privacy principles for Aarohan Cultural Society's public website and external membership renewal flow. It is informational and should be reviewed by Aarohan before production publication.",
  sections: [
    {
      title: "Information Collected Through Membership Renewal",
      body: "When an approved external membership form is configured, the form may ask for information needed to manage membership renewal, participation, communication and society records. The exact fields should be reviewed before publication.",
    },
    {
      title: "Google Forms Processing",
      body: "If Aarohan uses a Google Form for membership renewal, Google may process the form interaction under Google's services and policies. The website provides a direct-link fallback instead of collecting this information natively in this phase.",
    },
    {
      title: "Use Principles",
      body: "Membership information should be used for legitimate society administration, communication, participation planning and governance needs. It should not be used for unrelated purposes without appropriate review.",
    },
    {
      title: "Retention Principles",
      body: "Aarohan should retain membership information only for as long as reasonably needed for membership administration, compliance, governance, financial reconciliation where applicable and community operations.",
    },
    {
      title: "Sensitive Information",
      body: "The public site should not collect or encourage collection of Aadhaar, passport numbers, payment card data, bank account details, passwords, unnecessary date of birth or unnecessary sensitive personal information.",
    },
  ],
} as const;
