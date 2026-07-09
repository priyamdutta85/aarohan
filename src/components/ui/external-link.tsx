import { ExternalLink as ExternalLinkIcon } from "lucide-react";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a className={className} href={href} rel="noopener noreferrer" target="_blank">
      <span>{children}</span>
      <ExternalLinkIcon aria-hidden="true" size={17} />
      <span className="sr-only"> Opens in a new tab.</span>
    </a>
  );
}
