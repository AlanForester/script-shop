import React from "react";

import { ProductCard } from "entities/ProductCard";
import { productsAPI } from "app/store/products/service";

import s from "../styles/ProductsGallery.module.scss";

const ProductsGallery = ({ userId }: { userId: string | null }) => {
  const userIdSafe =
    process.env.REACT_APP_STAGE === "DEV"
      ? process.env.REACT_APP_USER_ID
      : userId;

  const { data } = productsAPI.useGetAllProductsQuery(userIdSafe as string);
  return (
    <>
      <div className={s.productsGallery}>
        {data?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductsGallery;
