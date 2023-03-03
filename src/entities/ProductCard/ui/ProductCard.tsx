import s from "../styles/ProductCard.module.scss";
import { ReactComponent as ShopBasket } from "../assets/shopBasket.svg";

type ProductCardProps = {
  url: string;
  title: string;
  price: number;
};

const ProductCard = ({ url, title, price }: ProductCardProps) => {
  return (
    <article className={s.productCard}>
      <div className={s.productCard__discountWrapper}>
        <p className={s.productCard__discount}>5%</p>
      </div>
      <div className={s.productCard__imgWrapper}>
        <img
          src={url}
          className={s.productCard__img}
          alt={`Product ${title}`}
        />
      </div>
      <div className={s.productCard__bottomWrapper}>
        <h3 className={s.productCard__title}>{title}</h3>
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
