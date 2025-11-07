import Item from "./Item";

function ItemList({ items }) {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <Item key={index} name={item} />
      ))}
    </ul>
  );
}

export default ItemList;
