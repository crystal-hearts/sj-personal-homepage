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
      <span className="text-center text-xs">
        The site is built by me, Sarah Jacques, using Next.js and Tailwind CSS
        and deployed with Vercel. You can view its code at{" "}
        <InlineLink href={SITE_CONSTANTS.GITHUB_URL} target="_">
          the GitHub repository for the project
        </InlineLink>
      </span>
      <span className="text-center text-xs">
        Icons by{" "}
        <InlineLink href="https://www.svgrepo.com" target="_blank">
          SVG Repo
        </InlineLink>
      </span>
      <span className="text-center text-xs">
        It&lsquo;s best viewed while listening to{" "}
        <InlineLink
          href="https://archive.org/details/jet-set-radio-ost-flac"
          target="_"
        >
          Hideki Naganuma&lsquo;s soundtrack to Jet Set Radio (2000)
        </InlineLink>
      </span>
    </ContentContainer>
  );
}
