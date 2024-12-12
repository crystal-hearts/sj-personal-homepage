import { Button } from "@/components/button";

import { SITE_CONSTANTS } from "@/constants/site-constants";

/**
 * Button that changes the site's theming
 * @param {string} flavor Theme to change site to when clicked
 */
export function FlavorButton({ flavor }: { flavor: string }) {
  function changeThemeColor(flavor: string) {
    const pageElement = document.getElementById(SITE_CONSTANTS.PAGE_ID);
    if (pageElement && flavor) {
      pageElement.setAttribute("data-theme-color", flavor);
    }
  }
  return (
    <div className="flavor-button-container flex min-w-14 flex-col items-center">
      <Button
        iconButton={true}
        title={flavor}
        smallShadow={true}
        bgColor={flavor}
        onClick={() => changeThemeColor(flavor)}
      />
      <span className="flavor-button-label ml-1 mt-1 w-full text-center text-xs font-semibold">
        {flavor}
      </span>
    </div>
  );
}
