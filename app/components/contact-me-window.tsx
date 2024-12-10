import { SITE_CONSTANTS } from "@/constants/site-constants";

import { ContentWindow } from "@/components/content-window";

import MailIcon from "@/images/email-1573-svgrepo-com.svg";
import LinkedInIcon from "@/images/linkedin.svg";

export function ContactMeWindow() {
  const mailTo = "mailto:" + SITE_CONSTANTS.EMAIL;
  return (
    <ContentWindow windowTitle="contact me" href="/" returnID="contact-button">
      <div className="item mb-1 flex flex-row items-center">
        <a className="mr-1 h-4 w-4" href={mailTo} tabIndex={-1}>
          <MailIcon />
        </a>
        <a className="font-semibold underline" href={mailTo}>
          {SITE_CONSTANTS.EMAIL}
        </a>
      </div>
      <div className="item flex flex-row items-center">
        <a
          className="mr-1 h-4 w-4"
          href={SITE_CONSTANTS.LINKEDIN_URL}
          tabIndex={-1}
        >
          <LinkedInIcon />
        </a>
        <a
          className="font-semibold underline"
          href={SITE_CONSTANTS.LINKEDIN_URL}
        >
          {SITE_CONSTANTS.LINKEDIN_URL}
        </a>
      </div>
    </ContentWindow>
  );
}
