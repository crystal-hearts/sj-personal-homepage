import { SITE_CONSTANTS } from "@/constants/site-constants";

import { ContentContainer } from "@/components/content-container";
import { InlineLink } from "@/components/inline-link";

import LinkedInIcon from "@/images/linkedin.svg";

export function ContactMe({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <p className="text-center">
        <span>
          <strong>Thanks for visiting!</strong>
        </span>
      </p>
      <InlineLink
        className="text-center"
        href={SITE_CONSTANTS.LINKEDIN_URL}
        target="_"
      >
        <div className="icon mr-1 inline-block h-4 w-4 pt-0.5">
          <LinkedInIcon />
        </div>
        {SITE_CONSTANTS.LINKEDIN_URL}
      </InlineLink>
    </ContentContainer>
  );
}
