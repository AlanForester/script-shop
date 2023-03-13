import s from "../styles/Counter.module.scss";

type CounterProps = {
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
};

const Counter = ({ onIncrement, onDecrement, value }: any) => {
  return (
    <div className={s.counter}>
      <button className={s.counter__btn}>-</button>
      <div className={s.counter__val}>
        <span>0</span>
      </div>
      <button className={s.counter__btn}>+</button>
    </div>
  );
};

export default Counter;
