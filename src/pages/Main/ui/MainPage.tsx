import { MainPageTop } from "widgets/MainPageTop";
import { ProductsGallery } from "widgets/ProductsGallery";

import s from "../styles/MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <section className={s.mainPage__top}>
        <MainPageTop />
      </section>
      <nav className={s.mainPage__nav}></nav>
      <main className={s.mainPage__main}>
        <ProductsGallery />
      </main>
    </div>
  );
};

export default MainPage;
