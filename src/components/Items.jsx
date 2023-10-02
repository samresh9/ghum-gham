import PropTypes from "prop-types";
export function Items({ item, onDeleteItems, onUpdateItems }) {
  return (
    <div className="flex-list">
    <li>
      <input
        checked={item.packed}
        type="checkbox"
        onChange={() => {
          onUpdateItems(item.id);
        }}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
    </div>
  );
}

Items.propTypes ={
  item : PropTypes.object,
  onDeleteItems: PropTypes.func,
  onUpdateItems: PropTypes.func
}
