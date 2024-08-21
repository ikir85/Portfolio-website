import { useState } from "react";

export const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity flex items-center gap-4">
      <span className="qty-label">QTY</span>
      <div className="flex flex-col">
        <button
          className="increment flex w-8 cursor-pointer items-center justify-center px-3 hover:bg-green-400 hover:text-white"
          onClick={incrementQuantity}
        >
          +
        </button>
        <button
          className="decrement flex w-8 cursor-pointer items-center justify-center px-3 hover:bg-red-500 hover:text-white"
          onClick={decrementQuantity}
        >
          -
        </button>
      </div>
      <span className="quantity-amount">{quantity}</span>
    </div>
  );
};
