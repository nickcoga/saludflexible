import React from "react";
import classes from "./Button.module.scss";
import IconChevronRight from "../../icons/chevronRight";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  disabled?: boolean;
  fullWidth?: boolean;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = true,
  showArrow = false,
}) => {
  const buttonClass = [
    classes.button,
    classes[variant],
    fullWidth ? classes.fullWidth : "",
  ].join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
      {showArrow && <IconChevronRight />}
    </button>
  );
};

export default Button;
