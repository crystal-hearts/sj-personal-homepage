import { ContentContainer } from "@/components/content-container";

import LogoDesktop from "@/images/logo-desktop.svg";
import LogoMobile from "@/images/logo-mobile.svg";

export function Logo({ className }: { className?: string }) {
  return (
    <ContentContainer className={className}>
      <h1>
        <div className="logo w-screen max-w-3xl md:w-75vw">
          <div className="logo-desktop hidden md:block">
            <LogoDesktop className="stroke-1.5" />
          </div>
          <div className="logo-mobile block md:hidden">
            <LogoMobile className="stroke-1.5" />
          </div>
        </div>
      </h1>
    </ContentContainer>
  );
}
