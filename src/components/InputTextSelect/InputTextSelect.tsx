import React from "react";
import styles from "./InputTextSelect.module.scss";

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
  type = "text",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__contentSelect}>
        <select
          className={styles.container__styledSelect}
          value={valueSelect}
          name={nameSelect}
          onChange={onChangeSelect}
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

      <div className={styles.container__contentInputText}>
        <input
          className={styles.container__contentInputText__styledInputText}
          type={type}
          value={valueInput}
          name={nameInput}
          onChange={onChangeInput}
          required={required}
          placeholder={placeholderInput}
        />
      </div>
    </div>
  );
};

export default InputTextSelect;
