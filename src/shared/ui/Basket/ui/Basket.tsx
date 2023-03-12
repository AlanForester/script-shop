import { ReactComponent as BasketSvg } from "assets/shoppingBag.svg";

import s from "../styles/Basket.module.scss";

type BasketProps = {
  ordersAmount: number;
};

const Basket = ({ ordersAmount }: BasketProps) => {
  return (
    <div className={s.basket}>
      <BasketSvg className={s.basket__svg} />
      {!!ordersAmount && (
        <div className={s.basket__counter}>
          <span>{ordersAmount}</span>
        </div>
      )}
    </div>
  );
};

export default Basket;
