import { useEffect } from "react";

import s from "../styles/Orders.module.scss";
import { Order } from "../../../entities/Order";
import { useAppDispatch } from "../../../app/store/hooks/hooks";
import { showBackArrow } from "../../../app/store/ui/slice";
import { ROUTES } from "../../../shared/lib/constants/routes";

const Orders = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showBackArrow({ goTo: ROUTES.PRODUCTS }));
  }, []);

  return (
    <div className={s.orders}>
      <h2 className={s.orders__title}>Orders</h2>
      <div className={s.orders__content}>
        <Order />
        <Order />
      </div>
      <div className={s.orders__total}>
        <p className={s.orders__totalTitle}>Total</p>
        <p className={s.orders__price}>1000 $</p>
      </div>
    </div>
  );
};

export default Orders;
