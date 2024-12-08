import { SITE_CONSTANTS } from "@/constants/site-constants";

import { ContentWindow } from "@/components/content-window";

import MailIcon from "@/images/email-1573-svgrepo-com.svg";
import LinkedInIcon from "@/images/linkedin.svg";

export function ContactMeWindow() {
  const mailTo = "mailto:" + SITE_CONSTANTS.EMAIL;
  return (
    <ContentWindow windowTitle="contact me" returnLocation="/">
      <a className="item flex flex-row items-center" href={mailTo}>
        <span className="mr-1 h-4 w-4">
          <MailIcon />
        </span>
        <span className="font-semibold underline">{SITE_CONSTANTS.EMAIL}</span>
      </a>
      <a
        className="item mt-2 flex flex-row items-center"
        href={SITE_CONSTANTS.LINKEDIN_URL}
      >
        <span className="mr-1 h-4 w-4">
          <LinkedInIcon />
        </span>
        <span className="font-semibold underline">
          {SITE_CONSTANTS.LINKEDIN_URL}
        </span>
      </a>
    </ContentWindow>
  );
}
