import { useLocation, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";

import "swiper/css/pagination";
import { useEffect } from "react";

import s from "../styles/Product.module.scss";
import { IProduct } from "../../../shared/types";
import { ROUTES } from "../../../shared/lib/constants/routes";
import { useProductBasket, useTelegram } from "../../../shared/lib/hooks";
import { showBackArrow } from "../../../app/store/ui/slice";
import { useAppDispatch } from "../../../app/store/hooks/hooks";

const Product = () => {
  const dispatch = useAppDispatch();
  const { state }: { state: IProduct } = useLocation();
  const { title, description, price } = state;
  const { handleAddProductToBasket, amountOfProductInBasket } =
    useProductBasket({ product: state });
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

  useEffect(() => {
    if (amountOfProductInBasket) {
      showMainButton();
    }
  }, [amountOfProductInBasket]);

  useEffect(() => {
    dispatch(showBackArrow({ goTo: ROUTES.PRODUCTS }));
    showMainButton();
  }, []);

  return (
    <div className={s.product}>
      <section className={s.product__galleryWrapper}>
        <div className={s.gallery}>
          <Swiper
            style={{ height: "100%" }}
            pagination={true}
            modules={[Pagination]}
            grabCursor
          >
            {state.pictures.map((pictureUrl) => {
              return (
                <SwiperSlide key={pictureUrl}>
                  <img
                    className={s.gallery__image}
                    src={pictureUrl}
                    alt="item"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className={s.product__top}>
        <h2 className={s.product__title}>{title}</h2>
        <h3 className={s.product__price}>{`${price}$`}</h3>
      </section>
      <p className={s.product__description}>{description}</p>
      <section className={s.product__order}>
        <button
          className={s.product__addToBagBtn}
          type="button"
          onClick={handleAddProductToBasket}
        >
          Add to Bag
        </button>
      </section>
    </div>
  );
};

export default Product;
