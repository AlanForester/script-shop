import React, { useEffect } from "react";

import { productsAPI } from "app/store/products/service";

import { useNavigate } from "react-router-dom";

import s from "../styles/ProductsGallery.module.scss";
import { ProductCard } from "../../../entities/ProductCard";
import { useAppSelector } from "../../../app/store/hooks/hooks";
import { RootState } from "../../../app/store/store";
import { useTelegram } from "../../../shared/lib/hooks";
import { ROUTES } from "../../../shared/lib/constants/routes";

const USER_ID_MOCK = "6401c5b3b6f14c86085ddf55";

const ProductsGallery = ({ userId }: { userId: string | null }) => {
  const { data } = productsAPI.useGetAllProductsQuery(USER_ID_MOCK ?? "");
  const { value } = useAppSelector((state: RootState) => state.basketReducer);
  const { mainButton } = useTelegram();
  const navigate = useNavigate();

  const handleClickMainButton = () => {
    navigate(ROUTES.ORDERS);
  };

  const { showMainButton, hideMainButton } = mainButton({
    onBtnClick: handleClickMainButton,
    text: "View orders",
  });

  useEffect(() => {
    if (value) {
      showMainButton();
    } else {
      hideMainButton();
    }
  }, [value]);

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
