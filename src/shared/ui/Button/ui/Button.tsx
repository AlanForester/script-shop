import { ElementType } from "react";

import s from "../styles/Button.module.scss";

type ButtonProps = {
  className: string;
  disabled?: boolean;
  logo: ElementType;
  onClick?: () => void;
};

const Button = ({
  className,
  disabled = false,
  logo: Logo,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${s.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      <Logo className={s.button__svg} />
    </button>
  );
};

export default Button;
