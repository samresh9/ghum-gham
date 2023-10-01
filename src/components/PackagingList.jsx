import { useState } from "react";
import { Items } from "./Items";
import PropTypes from "prop-types";
export function PackagingList({
  items, onDeleteItems, onUpdateItems, onDeleteAllItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Items
              item={item}
              key={item.id}
              onDeleteItems={onDeleteItems}
              onUpdateItems={onUpdateItems} />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort By input order</option>
            <option value="description">Sort By description</option>
            <option value="packed">Sort By packed staus </option>
          </select>
          <button onClick={onDeleteAllItems}>Clear list</button>
        </div>
      </div>
    </>
  );
}

PackagingList.propTypes ={
  items : PropTypes.array,
  onDeleteItems: PropTypes.func,
  onUpdateItems: PropTypes.func,
  onDeleteAllItems:PropTypes.func
}
