import { ReactNode } from "react";

import s from "../styles/BasketCounter.module.scss";

type BasketCounterProps = {
  ordersAmount: number;
  children: ReactNode;
};

const BasketCounter = ({ ordersAmount, children }: BasketCounterProps) => {
  return (
    <div className={s.basketCounter}>
      {children}
      {!!ordersAmount && (
        <>
          <div className={s.basketCounter__cutReal}>
            <div className={s.basketCounter__counter}>
              <span>{ordersAmount}</span>
            </div>
          </div>
          <div className={s.basketCounter__cutFake}></div>
        </>
      )}
    </div>
  );
};

export default BasketCounter;
