function Counter({ totalItems, itemsPacked }) {
  return (
    <p>
      <b>{itemsPacked}</b>/{totalItems} Items Packed
    </p>
  );
}

export default Counter;
