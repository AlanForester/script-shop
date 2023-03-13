import s from "../styles/Order.module.scss";
import { Counter } from "../../../shared/ui/Counter";

type OrderProps = {
  id: string;
  title: string;
  img: string;
};

const URL_MOCK =
  "https://static.nike.com/a/images/t_PDP_1728_v1/474283ed-2265-4fc0-b394-04e0a379ce7c/jordan-retro-6-g-mens-golf-shoes-t9bR21.png";
const TITLE_MOCK = "Title";
const DESCR_MOCK =
  "Nike Crater Impact is part of our sustainability journey to transform trash into shoes that tread a little lighter. Made from at least 25% recycled material by weight, it brings in unique design choices that reduce waste when compared with traditional methods––like an embroidered Swoosh logo, efficient overlays and of course its Crater foam midsole.";
const Order = ({ id, title, img }: any) => {
  return (
    <article className={s.order}>
      <img src={URL_MOCK} alt="order item" className={s.order__img} />
      <div className={s.order__info}>
        <h3 className={s.order__title}>{TITLE_MOCK}</h3>
        <p className={s.order__description}>{DESCR_MOCK}</p>
        <p className={s.order__price}>105$</p>
      </div>
      <div className={s.order__counter}>
        <Counter />
      </div>
    </article>
  );
};

export default Order;
