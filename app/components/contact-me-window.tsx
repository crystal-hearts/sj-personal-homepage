import { SITE_CONSTANTS } from "@/constants/site-constants";

import { ContentWindow } from "@/components/content-window";
import { InlineLink } from "@/components/inline-link";

import LinkedInIcon from "@/images/linkedin.svg";

export function ContactMeWindow() {
  return (
    <ContentWindow windowTitle="contact me" href="/" returnID="contact-button">
      <p className="text-center">
        <span>
          <strong>Thanks for visiting!</strong>
        </span>
      </p>
      <InlineLink href={SITE_CONSTANTS.LINKEDIN_URL} target="_">
        <div className="icon mr-1 inline-block h-4 w-4 pt-0.5">
          <LinkedInIcon />
        </div>
        {SITE_CONSTANTS.LINKEDIN_URL}
      </InlineLink>
    </ContentWindow>
  );
}
