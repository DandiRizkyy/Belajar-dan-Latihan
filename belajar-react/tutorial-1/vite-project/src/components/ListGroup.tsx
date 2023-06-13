import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  //   const noItemsFound = () => {
  //     return props.items.length === 0 && <p>No item found</p>;
  //   };

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { items, heading, onSelectItem } = props;
  return (
    <>
      <h1>{heading}</h1>
      {/* {noItemsFound()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
