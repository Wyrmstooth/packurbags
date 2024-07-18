import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ handleAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText.trim()) {
      alert("Please enter an item");
      inputref.current.focus();
      return;
    }
    handleAddItem(itemText);
    setItemText(""); // Clear the input
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputref}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        value={itemText}
        type="text"
        placeholder="Type something..."
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
