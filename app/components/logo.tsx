import { ContentContainer } from "@/components/content-container";

import LogoDesktop from "@/images/logo-desktop.svg";
import LogoMobile from "@/images/logo-mobile.svg";

/**
 * The site's logo. Displays different images for desktop and mobile
 * @param {string} className Any custom class names passed to the component
 */
export function Logo({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <h1 aria-label="Sarah Jacques">
        <div className="logo w-screen max-w-xl md:w-3xl md:max-w-3xl">
          <div className="logo-desktop hidden md:block">
            <LogoDesktop className="stroke-1.5" title="Sarah Jacques logo" />
          </div>
          <div className="logo-mobile block md:hidden">
            <LogoMobile className="stroke-1.5" title="Sarah Jacques logo" />
          </div>
        </div>
      </h1>
    </ContentContainer>
  );
}
