import { Link } from "react-router-dom";

import s from "../styles/ProductCard.module.scss";
import { ROUTES } from "../../../shared/lib/constants/routes";
import { IProduct } from "../../../shared/types";
import { ReactComponent as ShopBasket } from "../../../shared/lib/assets/BasketSvg.svg";
import { useProductBasket } from "../../../shared/lib/hooks";
import { Counter } from "../../../shared/ui/Counter";

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
        <div className={s.productCard__basketWrapper}>
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
      <div className={s.productCard__bottomWrapper}>
        <h3 className={s.productCard__title}>{title}</h3>
        <div className={s.productCard__priceWrapper}>
          <p className={s.productCard__price}>{`${price}$`}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
