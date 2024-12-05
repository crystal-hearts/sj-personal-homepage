import { Button } from "./button";

import { SITE_CONSTANTS } from "../constants/site-constants";

import GithubIcon from "../images/github.svg";
import LinkedInIcon from "../images/linkedin.svg";
import BlueskyIcon from "../images/bluesky.svg";

export function SocialIcons() {
  return (
    <div className="social-icons flex space-x-2">
      <Button
        title={SITE_CONSTANTS.LINKEDIN_TITLE}
        isLink={true}
        iconButton={true}
        target="_"
        href={SITE_CONSTANTS.LINKEDIN_URL}
      >
        <LinkedInIcon />
      </Button>
      <Button
        title={SITE_CONSTANTS.BLUESKY_TITLE}
        isLink={true}
        iconButton={true}
        target="_"
        href={SITE_CONSTANTS.BLUESKY_URL}
      >
        <BlueskyIcon />
      </Button>
      <Button
        title={SITE_CONSTANTS.GITHUB_TITLE}
        isLink={true}
        iconButton={true}
        target="_"
        href={SITE_CONSTANTS.GITHUB_URL}
      >
        <GithubIcon />
      </Button>
    </div>
  );
}
