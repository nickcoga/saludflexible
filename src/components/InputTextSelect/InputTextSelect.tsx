import React, { useEffect } from "react";
import styles from "./InputTextSelect.module.scss";
import IconArrowDown from "../../icons/arrowDown";

interface Option {
  value: string;
  text: string;
}

interface InputTextSelectProps {
  required?: boolean;
  placeholderInput?: string;
  placeholderSelect?: string;
  nameInput?: string;
  nameSelect?: string;
  valueInput: string;
  valueSelect: string;
  showDefaultOption?: boolean;
  options?: Option[];
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  type?: string;
}

const InputTextSelect: React.FC<InputTextSelectProps> = ({
  required = false,
  placeholderInput = "",
  placeholderSelect = "",
  nameInput = "",
  nameSelect = "",
  valueInput,
  valueSelect,
  showDefaultOption = false,
  options = [],
  onChangeInput,
  onChangeSelect,
}) => {
  const getMaxLength = () => {
    return valueSelect === "DNI" ? 8 : 12;
  };

  const getPattern = () => {
    return valueSelect === "DNI" ? "\\d{8}" : "\\d{12}";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Elimina cualquier carácter que no sea número
    const numericValue = input.replace(/\D/g, "");

    // Aplica el límite según el tipo de documento
    const maxLength = getMaxLength();
    const trimmedValue = numericValue.slice(0, maxLength);

    // Crea un nuevo evento simulado con el valor limpio
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: trimmedValue,
      },
    };

    onChangeInput(newEvent as React.ChangeEvent<HTMLInputElement>);
  };

  useEffect(() => {
    if (valueInput.length > getMaxLength()) {
      const trimmed = valueInput.slice(0, getMaxLength());
      onChangeInput({
        target: { value: trimmed, name: nameInput },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [valueSelect]);

  return (
    <div className={styles.container}>
      <div className={styles.selectWrapper}>
        <div className={styles.selectFake}>
          <span className={styles.selectText}>{valueSelect}</span>
          <IconArrowDown />
        </div>
        <select
          className={styles.hiddenSelect}
          value={valueSelect}
          name={nameSelect}
          onChange={onChangeSelect}
          required={required}
        >
          {showDefaultOption && (
            <option disabled value="">
              {placeholderSelect}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>

      <label className={styles.label}>
        {placeholderInput}
        <input
          className={styles.input}
          type="text"
          inputMode="numeric"
          pattern={getPattern()}
          title={
            valueSelect === "DNI"
              ? "Ingrese un número válido de 8 dígitos"
              : "Ingrese un número válido de 12 dígitos"
          }
          maxLength={getMaxLength()}
          value={valueInput}
          name={nameInput}
          onChange={handleChange}
          required={required}
        />
      </label>
    </div>
  );
};

export default InputTextSelect;
