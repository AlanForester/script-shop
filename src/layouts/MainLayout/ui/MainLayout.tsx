import { Outlet } from "react-router-dom";

import s from "../styles/MainLayout.module.scss";
import { MainPageTop } from "../../../widgets/MainPageTop";

const MainLayout = () => {
  return (
    <>
      <div className={s.mainPage}>
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
