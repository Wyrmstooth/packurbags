import ReactSelect from "react-select";
import { useItemsStore } from "../stores/itemsStore";
import { useState } from "react";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

function ItemList() {
  const handleCheckItem = useItemsStore((state) => state.check);
  const handleDeleteItem = useItemsStore((state) => state.delete);
  const items = useItemsStore((state) => state.items);
  const [sortBy, setSortBy] = useState("default");
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "default") {
      return 0;
    }
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }
    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
  });

  return (
    <ul className="item-list">
      {items.length === 0 && (
        <section className="empty-state">
          <h3>Empty Packing List</h3>
          <p>Start by adding some items you don&apos;t want to forget!</p>
        </section>
      )}

      {Item.length > 0 ? (
        <section className="sorting">
          <ReactSelect
            onChange={(selectedOption) => setSortBy(selectedOption.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleCheckItem={handleCheckItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handleCheckItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onClick={() => {
            handleCheckItem(item.id);
          }}
        />
        {item.item}
      </label>
      <button
        onClick={() => {
          handleDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default ItemList;
