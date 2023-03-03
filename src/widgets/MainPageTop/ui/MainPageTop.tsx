import s from "../styles/MainPageTop.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";

const MainPageTop = () => {
  return (
    <header className={s.mainPageTop}>
      {/*<Burger />*/}
      <div className={s.mainPageTop__centerWrapper}>
        <Logo className={s.mainPageTop__logo} />
      </div>
      {/*<div*/}
      {/*  style={{ border: "1px dotted blue", height: "40px", width: "40px" }}*/}
      {/*></div>*/}
    </header>
  );
};

export default MainPageTop;
