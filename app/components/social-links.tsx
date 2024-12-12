import { Button } from "@/components/button";

import { SITE_CONSTANTS } from "@/constants/site-constants";

import GithubIcon from "@/images/github.svg";
import LinkedInIcon from "@/images/linkedin.svg";
import BlueskyIcon from "@/images/bluesky.svg";

/**
 * Social media links
 */
export function SocialLinks() {
  return (
    <div className="social-links flex space-x-2">
      <Button
        title={SITE_CONSTANTS.LINKEDIN_TITLE}
        iconButton={true}
        target="_"
        href={SITE_CONSTANTS.LINKEDIN_URL}
      >
        <LinkedInIcon />
      </Button>
      <Button
        title={SITE_CONSTANTS.BLUESKY_TITLE}
        iconButton={true}
        target="_"
        href={SITE_CONSTANTS.BLUESKY_URL}
      >
        <BlueskyIcon />
      </Button>
      <Button
        title={SITE_CONSTANTS.GITHUB_TITLE}
        iconButton={true}
        target="_"
        href={SITE_CONSTANTS.GITHUB_URL}
      >
        <GithubIcon />
      </Button>
    </div>
  );
}
