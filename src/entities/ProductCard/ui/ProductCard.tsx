import { Link } from "react-router-dom";

import s from "../styles/ProductCard.module.scss";
import { ReactComponent as ShopBasket } from "../assets/shopBasket.svg";
import { ROUTES } from "../../../shared/lib/constants/routes";
import { IProduct } from "../../../shared/types";

import { Counter } from "../../../shared/ui/Counter";
import { useProductBasket } from "../../../shared/lib/hooks";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, price, id, discount } = product;

  const {
    amountOfProductInBasket,
    handleAddProductToBasket,
    handleRemoveProductFromBasket,
  } = useProductBasket({ product });

  return (
    <article className={s.productCard}>
      {!!discount && (
        <div className={s.productCard__discountWrapper}>
          <p className={s.productCard__discount}>{`${discount}%`}</p>
        </div>
      )}
      <div className={s.productCard__imgWrapper}>
        <Link to={`${ROUTES.PRODUCTS}/${id}`} state={product}>
          <img
            src={product.pictures[0]}
            className={s.productCard__img}
            alt={`Product ${title}`}
          />
        </Link>
      </div>
      <div className={s.productCard__bottomWrapper}>
        <div className={s.productCard__titleWrapper}>
          <h3 className={s.productCard__title}>{title}</h3>
        </div>
        <div className={s.divider}></div>
        <div className={s.productCard__footerWrapper}>
          <p className={s.productCard__price}>{`${price}$`}</p>
          {amountOfProductInBasket ? (
            <Counter
              value={amountOfProductInBasket}
              onIncrement={handleAddProductToBasket}
              onDecrement={handleRemoveProductFromBasket}
            />
          ) : (
            <button
              className={s.productCard__shopBasketBtn}
              onClick={handleAddProductToBasket}
            >
              <ShopBasket />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
