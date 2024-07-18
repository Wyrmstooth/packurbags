import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

function Header() {
  const items = useItemsStore((state) => state.items);
  console.log(items);
  return (
    <header>
      <Logo />
      <Counter
        itemsPacked={items.filter((item) => item.packed).length}
        totalItems={items.length}
      />
    </header>
  );
}

export default Header;
