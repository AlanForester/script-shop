import { Link } from "react-router-dom";

import s from "../styles/MainPageTop.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { Basket } from "../../../shared/ui/Basket";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks/hooks";
import { RootState } from "../../../app/store/store";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import { hideBackArrow } from "../../../app/store/ui/slice";

const MainPageTop = () => {
  const { totalProductsInBasket } = useAppSelector(
    (state: RootState) => state.basketReducer
  );
  const dispatch = useAppDispatch();
  const { isVisible, goTo } = useAppSelector(
    (state: RootState) => state.uiReducer.backArrow
  );

  const handleClickBackButton = () => {
    dispatch(hideBackArrow());
  };

  return (
    <header className={s.mainPageTop}>
      <Link
        className={[
          s.mainPageTop__arrowWrapper,
          isVisible || s.mainPageTop__arrowWrapper_hidden,
        ].join(" ")}
        to={goTo}
        onClick={handleClickBackButton}
      >
        <Arrow className={s.mainPageTop__arrow} />
      </Link>
      <Logo className={s.mainPageTop__logo} />
      <div className={s.mainPageTop__basketWrapper}>
        <Basket ordersAmount={totalProductsInBasket} />
      </div>
    </header>
  );
};

export default MainPageTop;
