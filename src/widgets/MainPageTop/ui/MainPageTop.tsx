import s from "../styles/MainPageTop.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";

const MainPageTop = () => {
  return (
    <div className={s.mainPageTop}>
      <h1 className={s.mainPageTop__title}>
        <span className={s.mainPageTop__titleTop}>shop</span>
        <span className={s.mainPageTop__titleBottom}>Name</span>
      </h1>
      <div className={s.mainPageTop__logoWrapper}>
        <Logo className={s.mainPageTop__logo} />
      </div>
    </div>
  );
};

export default MainPageTop;
