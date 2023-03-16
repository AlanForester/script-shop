import React, { useEffect } from "react";

import { productsAPI } from "app/store/products/service";

import { useNavigate } from "react-router-dom";

import s from "../styles/ProductsGallery.module.scss";
import { ProductCard } from "../../../entities/ProductCard";
import { useAppSelector } from "../../../app/store/hooks/hooks";
import { RootState } from "../../../app/store/store";
import { useTelegram } from "../../../shared/lib/hooks";
import { ROUTES } from "../../../shared/lib/constants/routes";

const userId =
  process.env.REACT_APP_STAGE === "DEV"
    ? "6401c5b3b6f14c86085ddf55"
    : "6401be7c6a607f6f5ad28743";

const ProductsGallery = () => {
  const { data } = productsAPI.useGetAllProductsQuery(
    "6401be7c6a607f6f5ad28743"
  );
  const { totalProductsInBasket } = useAppSelector(
    (state: RootState) => state.basketReducer
  );
  const { mainButton } = useTelegram();
  const navigate = useNavigate();

  const handleClickMainButton = () => {
    navigate(ROUTES.ORDERS);
    hideMainButton();
  };

  const { showMainButton, hideMainButton } = mainButton({
    onBtnClick: handleClickMainButton,
    text: "View orders",
  });

  const test = data?.map((product) => {
    const mapped = product.pictures.map(
      (pictureUrl) => `${process.env.REACT_APP_API_URL}/${pictureUrl}`
    );
    return { ...product, pictures: mapped };
  });

  useEffect(() => {
    if (totalProductsInBasket) {
      showMainButton();
    } else {
      hideMainButton();
    }
  }, [totalProductsInBasket]);

  return (
    <div className={s.productsGallery}>
      <p className={s.productsGallery__subtitle}>Welcome</p>
      <h1 className={s.productsGallery__title}>Script shop store!</h1>
      <div className={s.productsGallery__products}>
        {test?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsGallery;
