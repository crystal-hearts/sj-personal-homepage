import { Button } from "./button";
import { openModal } from "../helpers/helpers";

export function HeaderMenuItem({
  itemID,
  itemLabel,
}: {
  itemID: string;
  itemLabel: string;
}) {
  const buttonID = itemID + "-button";
  const modalID = itemID + "-modal";
  return (
    <Button
      buttonID={buttonID}
      title={itemLabel}
      clickHandler={() => openModal(modalID)}
    >
      {itemLabel}
    </Button>
  );
}
