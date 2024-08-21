import { Counter } from "./counter";

interface props {
  name: string;
  id: number;
  onRemoveItem: (id: number) => void;
}

export const Item = ({ name, id, onRemoveItem }: props) => {
  return (
    <div className="item flex items-center justify-between border border-b-green-500 px-4 py-2">
      <button
        className="remove-item mx-6 h-5 w-5 cursor-pointer rounded-full border border-red-500 bg-none shadow-sm"
        onClick={() => onRemoveItem(id)}
      />
      <span className="item-name">{name}</span>
      <Counter />
    </div>
  );
};
