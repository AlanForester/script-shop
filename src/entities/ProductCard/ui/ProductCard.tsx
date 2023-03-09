import { Link } from "react-router-dom";

import s from "../styles/ProductCard.module.scss";
import { ReactComponent as ShopBasket } from "../assets/shopBasket.svg";
import { ROUTES } from "../../../shared/lib/constants/routes";
import { IProduct } from "../../../shared/types";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { pictures, title, price, id, discount } = product;
  const pictureUrls = pictures.map(
    (picture) => `${process.env.REACT_APP_API_URL}/${picture}`
  );
  return (
    <article className={s.productCard}>
      {!!discount && (
        <div className={s.productCard__discountWrapper}>
          <p className={s.productCard__discount}>{`${discount}%`}</p>
        </div>
      )}
      <div className={s.productCard__imgWrapper}>
        <Link
          to={`${ROUTES.PRODUCTS}/${id}`}
          state={{ ...product, pictures: pictureUrls }}
        >
          <img
            src={pictureUrls[0]}
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
          <div className={s.productCard__shopBasket}>
            <ShopBasket />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
