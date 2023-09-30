/* eslint-disable react/prop-types */
import { useState } from "react";
import  Form  from "./Form";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];
function App() {
    const [items,setItems] = useState([]);
  function handleAddItems(item){
  setItems(items=>[...items, item])
  }
  function handleDeleteItems(id){
    setItems(items=>items.filter(item=>item.id !== id))
  }
  function handleToggeleItems(id){
    setItems(items=>items.map(item=>item.id === id ? {...item, packed:!item.packed}:item))
  }
  function handleDeleteAllItems(){
    setItems(items=>items.slice(items.length))
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems}/>
        <PackagingList items={items} onDeleteItems={handleDeleteItems} onUpdateItems={handleToggeleItems} onDeleteAllItems={handleDeleteAllItems}/>
        <Stats items={items} />
      </div>
    </>
  );
}
function Logo() {
  return <h1>Ghum-Gham</h1>;
}
function PackagingList({items, onDeleteItems , onUpdateItems , onDeleteAllItems}) {
  const[sortBy ,setSortBy] = useState("input")
  let sortedItems;
  if(sortBy === "input") sortedItems = items;
  if(sortBy==="description") sortedItems = items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  if(sortBy === "packed") sortedItems = items.slice().sort((a,b)=>Number(b.packed) - Number(a.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Items item={item} key={item.id} onDeleteItems={onDeleteItems} onUpdateItems={onUpdateItems} />
          )) }
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
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
function Items({item,  onDeleteItems, onUpdateItems}){
  return (
    <li>
      <input type="checkbox" onChange={()=>{onUpdateItems(item.id)}}></input>
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
function Stats({items}) {
  if(!items.length){
    return(
      <>
      <p className="stats">
        <em>Start adding some items in your packing list 🚀</em>
      </p>
      </>
    )
  }

  const totalItems= items.length;
  const packedItems = items.filter(item=>item.packed).length;
  const percentage = Math.round((packedItems/totalItems)*100);
  return (
    <>
    
      <footer className="stats">
        <em>{percentage===100 ? `You are ready to go ✈️` :`You have ${totalItems}  items on your list, and you have alreday packed ${packedItems} (${percentage}%) `}</em>
      </footer>
    </>
  );
}
export default App;
