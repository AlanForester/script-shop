import s from "../styles/MainPageTop.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { Basket } from "../../../shared/ui/Basket";
import { useAppSelector } from "../../../app/store/hooks/hooks";
import { RootState } from "../../../app/store/store";

const MainPageTop = () => {
  const { value } = useAppSelector((state: RootState) => state.basketReducer);
  return (
    <header className={s.mainPageTop}>
      <Logo className={s.mainPageTop__logo} />
      <div className={s.mainPageTop__basketWrapper}>
        <Basket ordersAmount={value} />
      </div>
    </header>
  );
};

export default MainPageTop;
