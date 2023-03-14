import s from "../styles/Order.module.scss";
import { Counter } from "../../../shared/ui/Counter";
import { IProduct } from "../../../shared/types";

import { useProductBasket } from "../../../shared/lib/hooks";

type OrderProps = {
  product: IProduct;
};

const Order = ({ product }: OrderProps) => {
  const {
    amountOfProductInBasket,
    handleAddProductToBasket,
    handleRemoveProductFromBasket,
  } = useProductBasket({ product: product });

  return (
    <article className={s.order}>
      <img
        src={product.pictures[0]}
        alt="order item"
        className={s.order__img}
      />
      <div className={s.order__info}>
        <h3 className={s.order__title}>{product.title}</h3>
        <p className={s.order__description}>{product.description}</p>
        <p className={s.order__price}>{`${product.price}$`}</p>
      </div>
      <div className={s.order__counter}>
        <Counter
          value={amountOfProductInBasket}
          onDecrement={handleRemoveProductFromBasket}
          onIncrement={handleAddProductToBasket}
        />
      </div>
    </article>
  );
};

export default Order;
