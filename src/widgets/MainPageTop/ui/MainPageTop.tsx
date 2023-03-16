import { useNavigate } from "react-router-dom";

import s from "../styles/MainPageTop.module.scss";
import { ReactComponent as Logo } from "../../../shared/lib/assets/logo.svg";
import { Button } from "../../../shared/ui/Button";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks/hooks";
import { RootState } from "../../../app/store/store";
import { ReactComponent as Arrow } from "../../../shared/lib/assets/arrow.svg";
import { ReactComponent as Basket } from "../../../shared/lib/assets/BasketSvg.svg";
import { hideBackArrow } from "../../../app/store/ui/slice";
import { BasketCounter } from "../../../shared/ui/BasketCounter";
import { ROUTES } from "../../../shared/lib/constants/routes";

const MainPageTop = () => {
  const navigate = useNavigate();
  const { totalProductsInBasket } = useAppSelector(
    (state: RootState) => state.basketReducer
  );
  const dispatch = useAppDispatch();
  const { isVisible, goTo } = useAppSelector(
    (state: RootState) => state.uiReducer.backArrow
  );

  const handleClickBackButton = () => {
    navigate(ROUTES.PRODUCTS);
    dispatch(hideBackArrow());
  };

  return (
    <header className={s.mainPageTop}>
      {/*<Link*/}
      {/*  className={[*/}
      {/*    s.mainPageTop__arrowWrapper,*/}
      {/*    isVisible || s.mainPageTop__arrowWrapper_hidden,*/}
      {/*  ].join(" ")}*/}
      {/*  to={goTo}*/}
      {/*  onClick={handleClickBackButton}*/}
      {/*>*/}
      {/*<Arrow className={s.mainPageTop__arrow} />*/}
      <div className={s.mainPageTop__basketWrapper}>
        <Button
          className={[
            s.mainPageTop__arrow,
            isVisible ? "" : s.mainPageTop__arrow_hidden,
          ].join(" ")}
          logo={Arrow}
          onClick={handleClickBackButton}
        />
      </div>
      <Logo className={s.mainPageTop__logo} />
      <div className={s.mainPageTop__basketWrapper}>
        <BasketCounter ordersAmount={totalProductsInBasket}>
          <Button
            className={s.mainPageTop__shopBasket}
            logo={Basket}
            disabled={true}
          />
        </BasketCounter>
      </div>
    </header>
  );
};

export default MainPageTop;
