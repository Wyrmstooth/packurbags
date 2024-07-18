import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

function ButtonGroup() {
  const handleMarkAllComplete = useItemsStore((state) => state.markAllComplete);
  const handleMarkAllIncomplete = useItemsStore(
    (state) => state.markAllIncomplete
  );
  const handleReset = useItemsStore((state) => state.reset);
  const handleRemoveAllItems = useItemsStore((state) => state.removeAllItems);
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllComplete} btntype="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllIncomplete} btntype="secondary">
        Mark all as incomplete
      </Button>
      <Button btntype="secondary" onClick={handleReset}>
        Reset to Initial
      </Button>
      <Button onClick={handleRemoveAllItems} btntype="secondary">
        Remove all items
      </Button>
    </section>
  );
}

export default ButtonGroup;
