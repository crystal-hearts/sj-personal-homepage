export function FlavorButton({ flavor }: { flavor: string }) {
  const buttonClasses =
    "flavor-button mb-1 h-8 w-8 rounded bg-[var(--" +
    flavor +
    "-500)] px-2 py-1 shadow-drop-3 transition duration-150 hover:scale-105 active:scale-105";

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
      <button
        className={buttonClasses}
        onClick={() => changeThemeColor(flavor)}
      />
      <span className="flavor-button-label ml-1 w-full text-center text-xs font-semibold">
        {flavor}
      </span>
    </div>
  );
}
