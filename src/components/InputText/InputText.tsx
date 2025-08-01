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
  placeholder = "",
  name = "",
  value = "",
  onChange,
  required = false,
}) => {
  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "").slice(0, 9);
    const customEvent = {
      ...e,
      target: {
        ...e.target,
        value: onlyNumbers,
      },
    };
    onChange(customEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={classes.fieldContainer}>
      <div className={classes.fieldContainer__content}>
        {label && (
          <label htmlFor={name} className={classes.fieldContainer__label}>
            {label}
          </label>
        )}
        <input
          className={classes.fieldContainer__styledInput}
          type="text"
          inputMode="numeric"
          pattern="\d{9}"
          title="Ingrese un número válido de 9 dígitos"
          maxLength={9}
          minLength={9}
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={handleNumericInput}
          required={required}
        />
      </div>
    </div>
  );
};

export default InputText;
