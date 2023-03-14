import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import s from "../styles/Orders.module.scss";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks/hooks";
import { showBackArrow } from "../../../app/store/ui/slice";
import { ROUTES } from "../../../shared/lib/constants/routes";
import { RootState } from "../../../app/store/store";
import { Order } from "../../../entities/Order";
import { useTelegram } from "../../../shared/lib/hooks";

const Orders = () => {
  const { productsInBasket, totalPrice } = useAppSelector(
    (state: RootState) => state.basketReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mainButton, popup } = useTelegram();

  const handleCheckout = () => {
    showPopup();
  };

  const { hideMainButton, showMainButton } = mainButton({
    onBtnClick: handleCheckout,
    text: "Checkout",
  });

  const { showPopup } = popup({
    message: "Service on construction",
    title: "Checkout",
  });

  useEffect(() => {
    dispatch(showBackArrow({ goTo: ROUTES.PRODUCTS }));
    showMainButton();
  }, []);

  useEffect(() => {
    if (!Object.values(productsInBasket).length) {
      hideMainButton();
      navigate(ROUTES.PRODUCTS);
    }
  }, [productsInBasket]);

  return (
    <div className={s.orders}>
      <h2 className={s.orders__title}>Orders</h2>
      <div className={s.orders__content}>
        {Object.values(productsInBasket).map(({ product }) => (
          <Order key={product.id} product={product} />
        ))}
      </div>
      <div className={s.orders__total}>
        <p className={s.orders__totalTitle}>Total</p>
        <p className={s.orders__price}>{`${totalPrice} $`}</p>
      </div>
    </div>
  );
};

export default Orders;
