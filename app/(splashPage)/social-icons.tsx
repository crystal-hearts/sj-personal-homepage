import GithubIcon from "../images/github.svg";
import LinkedInIcon from "../images/linkedin.svg";
import BlueskyIcon from "../images/bluesky.svg";

export function SocialIcons() {
  return (
    <div className="social-icons flex space-x-2">
      <a
        title="LinkedIn"
        className="linkedin-icon h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
        href="https://www.linkedin.com/in/sarah-c-jacques/"
        target="_"
      >
        <LinkedInIcon />
      </a>
      <a
        title="Bluesky"
        className="bluesky-icon h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
        href="https://bsky.app/"
        target="_"
      >
        <BlueskyIcon />
      </a>
      <a
        title="Github"
        className="github-icon h-8 w-8 rounded border-1 border-solid border-[var(--theme-color-500)] border-opacity-80 bg-[var(--theme-color-100)] fill-[var(--theme-color-700)] p-1 shadow-drop-5 transition duration-150 hover:scale-110 active:scale-110"
        href="https://github.com/crystal-hearts/"
        target="_"
      >
        <GithubIcon />
      </a>
    </div>
  );
}
