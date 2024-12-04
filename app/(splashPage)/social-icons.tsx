import { Button } from "./button";

import GithubIcon from "../images/github.svg";
import LinkedInIcon from "../images/linkedin.svg";
import BlueskyIcon from "../images/bluesky.svg";

export function SocialIcons() {
  return (
    <div className="social-icons flex space-x-2">
      <Button
        title="LinkedIn"
        isLink={true}
        iconButton={true}
        target="_"
        href="https://www.linkedin.com/in/sarah-c-jacques"
      >
        <LinkedInIcon />
      </Button>
      <Button
        title="Bluesky"
        isLink={true}
        iconButton={true}
        target="_"
        href="https://bsky.app/profile/sarahjacques.bsky.social"
      >
        <BlueskyIcon />
      </Button>
      <Button
        title="Github"
        isLink={true}
        iconButton={true}
        target="_"
        href="https://github.com/crystal-hearts/sj-personal-homepage"
      >
        <GithubIcon />
      </Button>
    </div>
  );
}
