import { useState } from "react";
import { Header } from "./header";
import { Item } from "./item";

export default function Inspiration() {
  const [items, setItems] = useState([
    { name: "Apples", id: 1 },
    { name: "Orange", id: 2 },
    { name: "kiwi", id: 3 },
    { name: "Pineapple", id: 4 },
    { name: "Mango", id: 5 },
  ]);

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <>
      <div className="mx-auto max-w-7xl pt-20">
        <h1 className="mb-16 text-center text-5xl font-bold">Inspiration</h1>
        <div className="mx-auto flex w-5/12 flex-col">
          <Header title="Grocery List" itemTotal={items.length} />
          {items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              onRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
