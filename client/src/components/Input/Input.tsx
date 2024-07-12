import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import classes from "./Input.module.scss";

interface DropdownOption {
  value: string;
  label: string;
}

interface InputProps {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues & any>;
  required?: boolean;
  error: any;
  type?: "text" | "date";
  placeHolder?: string;
  disabled?: boolean;
  isDropdown?: boolean;
  dropdownOptions?: DropdownOption[];
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  required,
  register,
  error,
  type = "text",
  placeHolder,
  disabled,
  isDropdown = false,
  dropdownOptions = [],
}) => {
  return (
    <div className={classes["input-wrap"]}>
      <label htmlFor="name" className={classes.label}>
        {label}
      </label>
      {isDropdown ? (
        <select
          id={name}
          className={`${classes.input} ${error ? classes.error : ""}`}
          {...register(name, { required })}
          disabled={disabled}
        >
          <option value="">Please select</option>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={`${classes.input} ${error ? classes.error : ""}`}
          {...register(name, {
            required,
          })}
          type={type}
          placeholder={placeHolder}
          disabled={disabled}
        />
      )}
      {error && (
        <div className={classes.errorMessage}>
          {!error?.message && error?.type === "required"
            ? "This field is required"
            : error?.message}
        </div>
      )}
    </div>
  );
};

export default Input;
