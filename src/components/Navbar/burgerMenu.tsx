export const BurgerMenu = () => {
  return (
    <>
      <div className="z-10 flex h-8 w-8 flex-col flex-nowrap justify-around">
        <div className="burger-1 h-1 w-8 origin-[1px] rounded-xl bg-black transition-all duration-75 ease-linear"></div>
        <div className="burger-2 h-1 w-8 origin-[1px] rounded-xl bg-black transition-all duration-75 ease-linear"></div>
        <div className="burger-3 h-1 w-8 origin-[1px] rounded-xl bg-black transition-all duration-75 ease-linear"></div>
      </div>
    </>
  );
};
