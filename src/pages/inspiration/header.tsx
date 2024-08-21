interface props {
  title: string;
  itemTotal: number;
}

export const Header = ({ title, itemTotal }: props) => {
  return (
    <header className="flex justify-between bg-red-400 p-4 text-white">
      <h1>{title}</h1>
      <span className="total-items">Items: {itemTotal}</span>
    </header>
  );
};
