import React from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  children: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  required = false,
  children,
}) => {
  return (
    <div className={styles.content}>
      <input
        id={id}
        type="checkbox"
        className={styles.content__styledCheckbox}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default Checkbox;
