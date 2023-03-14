import s from "../styles/Counter.module.scss";

type CounterProps = {
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
};

const Counter = ({ onIncrement, onDecrement, value }: CounterProps) => {
  return (
    <div className={s.counter}>
      <button className={s.counter__btn} onClick={onDecrement}>
        -
      </button>
      <div className={s.counter__val}>
        <span>{value}</span>
      </div>
      <button className={s.counter__btn} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
