import { ContentWindow } from "@/components/content-window";
import { WinterWindow } from "@/components/winter-window";

export function AboutMyCatWindow() {
  return (
    <ContentWindow windowTitle="about my cat" returnLocation="/">
      <div className="flex flex-col items-center sm:flex-row">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <WinterWindow />
      </div>
    </ContentWindow>
  );
}
