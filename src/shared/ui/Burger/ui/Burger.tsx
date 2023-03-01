import { useState } from "react";

import s from "../styles/Burger.module.scss";

const Burger = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClickBurger = () => {
    setIsClosed((prevState) => !prevState);
  };
  return (
    <button
      className={`${s.burger} ${isClosed ? s.burger_closed : undefined}`}
      onClick={handleClickBurger}
    >
      <div className={s.burger__firstPlate}></div>
      <div className={s.burger__secondPlate}></div>
      <div className={s.burger__thirdPlate}></div>
    </button>
  );
};

export default Burger;
