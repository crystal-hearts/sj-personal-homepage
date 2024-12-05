import { Button } from "./button";

import { SITE_CONSTANTS } from "../constants/site-constants";

import HomeIcon from "../images/home-icon-svgrepo-com.svg";

export function HomeButton({ inverseIcon = false }: { inverseIcon?: boolean }) {
  return (
    <Button
      title={SITE_CONSTANTS.HOME_TITLE}
      href="/"
      iconButton={true}
      inverseIcon={inverseIcon}
    >
      <HomeIcon />
    </Button>
  );
}
