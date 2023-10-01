import PropTypes from "prop-types";
export function Stats({ items }) {
  if (!items.length) {
    return (
      <>
        <p className="stats">
          <em>Start adding some items in your packing list 🚀</em>
        </p>
      </>
    );
  }

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? `You are ready to go ✈️`
            : `You have ${totalItems}  items on your list, and you have alreday packed ${packedItems} (${percentage}%) `}
        </em>
      </footer>
    </>
  );
}

Stats.propTypes ={
  items : PropTypes.array,
}
