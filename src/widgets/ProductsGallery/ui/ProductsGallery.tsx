import s from "../styles/ProductsGallery.module.scss";
import { ProductCard } from "../../../entities/ProductCard";
import { PRODUCTS_DATA_MOCK } from "../MOCK";

const ProductsGallery = () => {
  return (
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
  );
};

export default ProductsGallery;
