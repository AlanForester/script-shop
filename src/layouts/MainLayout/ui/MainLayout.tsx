import { Outlet } from "react-router-dom";

import s from "../styles/MainLayout.module.scss";
import { MainPageTop } from "../../../widgets/MainPageTop";
import { Navigation } from "../../../widgets/Navigation";

const MainLayout = () => {
  return (
    <>
      <div className={s.mainPage}>
        <section className={s.mainPage__nav}>
          <Navigation />
        </section>
        <section className={s.mainPage__top}>
          <MainPageTop />
        </section>
        <main className={s.mainPage__main}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
