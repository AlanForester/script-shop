import s from "../styles/ProductCard.module.scss";
import { AddToBasketButton } from "../../../shared/ui/AddToBasketButton";

type ProductCardProps = {
  url: string;
  title: string;
  price: string;
};

const ProductCard = ({ url, title, price }: ProductCardProps) => {
  return (
    <article className={s.productCard}>
      <img src={url} className={s.productCard__img} />
      <h3 className={s.productCard__title}>{title}</h3>
      <div className={s.productCard__payRow}>
        <div className={s.productCard__priceWrapper}>
          <p className={s.productCard__price}>{price}</p>
        </div>
        <AddToBasketButton />
      </div>
    </article>
  );
};

export default ProductCard;
