import { Button } from "./button";

export function FlavorButton({ flavor }: { flavor: string }) {
  function changeThemeColor(colorName: string) {
    document.documentElement.style.setProperty(
      "--theme-color-100",
      "var(--" + colorName + "-100)",
    );
    document.documentElement.style.setProperty(
      "--theme-color-500",
      "var(--" + colorName + "-500)",
    );
    document.documentElement.style.setProperty(
      "--theme-color-700",
      "var(--" + colorName + "-700)",
    );
    document.documentElement.style.setProperty(
      "--theme-color-900",
      "var(--" + colorName + "-900)",
    );
  }

  return (
    <div className="flavor-button-container mb-2 mr-4 flex min-w-14 flex-col items-center">
      <Button
        iconButton={true}
        flavor={flavor}
        clickHandler={() => changeThemeColor(flavor)}
      />
      <span className="flavor-button-label ml-1 mt-1 w-full text-center text-xs font-semibold">
        {flavor}
      </span>
    </div>
  );
}
