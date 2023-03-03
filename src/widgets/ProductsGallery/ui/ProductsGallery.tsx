import s from "../styles/ProductsGallery.module.scss";
import { ProductCard } from "../../../entities/ProductCard";
import { PRODUCTS_DATA_MOCK } from "../MOCK";

// const userId = "6401c5b3b6f14c86085ddf55";

const ProductsGallery = () => {
  return (
    <>
      {/*<div className={s.top}></div>*/}
      <div className={s.productsGallery}>
        {PRODUCTS_DATA_MOCK.map(({ price, title, url }) => (
          <ProductCard
            key={Math.random()}
            title={title}
            price={price}
            url={url}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsGallery;
