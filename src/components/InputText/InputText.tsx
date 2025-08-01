import React from "react";
import classes from "./InputText.module.scss";

interface InputTextProps {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  label = "",
  type = "text",
  placeholder = "",
  name = "",
  value = "",
  onChange,
  required = false,
}) => {
  return (
    <div className={classes.fieldContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={classes.fieldContainer__content}>
        <input
          className={classes.fieldContainer__styledInput}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
};

export default InputText;
