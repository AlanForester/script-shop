import s from "../styles/ProductsGallery.module.scss";
import { ProductCard } from "../../../entities/ProductCard";
import { productsAPI } from "../../../app/store/products/service";

// const userId = "6401c5b3b6f14c86085ddf55";

const ProductsGallery = () => {
  const { data } = productsAPI.useGetAllProductsQuery("");

  return (
    <>
      <div className={s.productsGallery}>
        {data?.map(({ price, title, pictures }) => (
          <ProductCard
            key={Math.random()}
            title={title}
            price={price}
            url={`${process.env.REACT_APP_API_URL}/${pictures[0]}`}
          />
        ))}
        {/*{PRODUCTS_DATA_MOCK?.map(({ price, title, url }) => (*/}
        {/*  <ProductCard key={Math.random()} title={title} price={20} url={url} />*/}
        {/*))}*/}
      </div>
    </>
  );
};

export default ProductsGallery;
