import LogoDesktop from "@/images/logo-desktop.svg";
import LogoMobile from "@/images/logo-mobile.svg";

export function Logo() {
  return (
    <h1>
      <div className="logo mb-20 w-75vw max-w-3xl">
        <div className="logo-desktop hidden md:block">
          <LogoDesktop />
        </div>
        <div className="logo-mobile block md:hidden">
          <LogoMobile />
        </div>
      </div>
    </h1>
  );
}
