import s from "../styles/MainPage.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { MainPageTop } from "widgets/MainPageTop";

const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <section className={s.mainPage__top}>
        <MainPageTop />
      </section>
      <nav className={s.mainPage__nav}></nav>
      <main className={s.mainPage__main}></main>
    </div>
  );
};

export default MainPage;
