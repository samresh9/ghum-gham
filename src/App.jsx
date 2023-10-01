import { useEffect, useState } from "react";
import Form from "./components/Form";
import { Stats } from "./components/Stats";
import { PackagingList } from "./components/PackagingList";

function App() {
  const API_URI = import.meta.env.VITE_API_URL;
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchItems() {
      try {
        setIsLoading(true);
        const response = await fetch(API_URI);
        if (!response.ok) throw Error("Something Went wrong try again");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setErrors("");
      } catch (err) {
        console.log(err);
        setErrors(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchItems();
  }, [API_URI]);
  async function handleAddItems(newItem) {
    try {
      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      };
      const result = await fetch(API_URI, postOptions);
      console.log(result);
      if (!result) throw Error("Something went wrong");
      setItems((items) => [...items, newItem]);
    } catch (err) {
      setErrors(err);
    }
  }
  async function handleDeleteItems(id) {
    try{
    const deleteOptions = { method: "DELETE" };
    const result = await fetch(`${API_URI}${id}`, deleteOptions);
     if (!result) throw Error("Something went wrong");
    setItems((items) => items.filter((item) => item.id !== id));
    }catch(err){
      setErrors(err)
    }
  }
  async function handleToggeleItems(id) {
    try{
    const listItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ packed: myItem[0].packed }),
    };
    const result = await fetch(`${API_URI}${id}`, updateOptions);
    if (!result) throw Error("Something went wrong");
    setItems(listItems);
  }catch(err){
    setErrors(err);
  }
  }
  function handleDeleteAllItems() {
    setItems((items) => items.slice(items.length));
  items.map(item=>handleDeleteItems(item.id))
  }
  return (
    <>
      <div className="app">
        <Form onAddItems={handleAddItems} />
        <main>
          {isLoading && <p>Loading Items ...</p>}
          {errors && <p style={{ color: "red" }}>{`Error: ${errors}`}</p>}
          {!errors && !isLoading && (
            <PackagingList
              items={items}
              onDeleteItems={handleDeleteItems}
              onUpdateItems={handleToggeleItems}
              onDeleteAllItems={handleDeleteAllItems}
            />
          )}
        </main>
        <Stats items={items} />
      </div>
    </>
  );
}
export default App;
