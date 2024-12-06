import { SITE_CONSTANTS } from "@/constants/site-constants";

import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { TextSection } from "@/components/text-section";

import MailIcon from "@/images/email-1573-svgrepo-com.svg";
import LinkedInIcon from "@/images/linkedin.svg";

export default function Page() {
  const mailTo = "mailto:" + SITE_CONSTANTS.EMAIL;
  return (
    <Main>
      <Section>
        <div className="min-w-80">
          <TextSection sectionTitle="contact me">
            <div className="flex flex-col">
              <a className="item flex flex-row items-center" href={mailTo}>
                <span className="mr-1 h-4 w-4">
                  <MailIcon />
                </span>
                <span className="font-semibold underline">
                  {SITE_CONSTANTS.EMAIL}
                </span>
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
            </div>
          </TextSection>
        </div>
      </Section>
    </Main>
  );
}
