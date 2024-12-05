import { Button } from "./button";

export function HeaderMenuItem({
  itemLabel,
  href,
}: {
  itemLabel: string;
  href: string;
}) {
  return (
    <Button title={itemLabel} href={href}>
      {itemLabel}
    </Button>
  );
}
