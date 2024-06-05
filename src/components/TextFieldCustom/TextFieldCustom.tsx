'use client';

import {
  barDataformat,
  formatCurrency,
  formatCurrencyInput,
  formatPhoneNumber,
  formatPlateCar,
  limitOn10,
  limitOn99,
  limitOnZero,
  mascaraCep,
  mascaraCnpj,
  mascaraCnpjCpf,
  mascaraCpf,
  maskDecimal,
  maskPercentage,
  onlyNumber,
  spaceNumbers,
} from "@/helpers/formaters";
import { CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.scss";

export default function TextFieldCustom({
  onChange,
  label,
  icon,
  iconEvent,
  type = "text",
  isToRight = true,
  keyItem = null,
  value = "",
  isRequired = false,
  maskType = null,
  disabled = false,
  isLoading = false,
  min,
  max,
  onChangeObj,
  onCurrentList,
  indexItem = 0,
  onFocus,
  showError,
  showErrorForZero,
  inputRef,
  onEnterEvent,
  className,
  placeholder = ''
}: any) {
  const [isError, setIsError] = useState<boolean>(false);
  const [currentList, setCurrentList] = useState(onCurrentList);

  const handleMask = (inputValue: any): any => {
    switch (maskType) {
      case "cnpj-cpf":
        return mascaraCnpjCpf(inputValue);
      case "cpf":
        return mascaraCpf(inputValue);
      case "cnpj":
        return mascaraCnpj(inputValue);
      case "money":
        return formatCurrencyInput(inputValue);
      case "moneyStatic":
        return formatCurrency(inputValue);
      case "cep":
        return mascaraCep(inputValue);
      case "phone":
        return formatPhoneNumber(inputValue);
      case "percentage":
        return maskPercentage(inputValue);
      case "limit99":
        return limitOn99(inputValue);
      case "limit10":
        return limitOn10(inputValue);
      case "spaceNumbers":
        return spaceNumbers(inputValue);
      case "barDataformat":
        return barDataformat(inputValue);
      case "formatPlateCar":
        return formatPlateCar(inputValue);
      case "decimal":
        return maskDecimal(inputValue);
      case "limitOnZero":
        return limitOnZero(inputValue);
      case "onlyNumber":
        return onlyNumber(inputValue);

      default:
        return inputValue;
    }
  };

  const handleChange = (e: any) => {
    let newValue = e.target.value;
    const maskedValue = handleMask(newValue);

    value = maskedValue;

    if (type === "number" && max) {
      newValue = newValue.replace(/\D/g, "");

      if (newValue.length > max) {
        newValue = newValue.slice(0, max);
      }
    }

    if (keyItem) {
      const updatedValue = { [keyItem]: maskedValue };
      let list: any[] = currentList;

      if (list?.length > 0) {
        list[indexItem] = {
          ...list[indexItem],
          [keyItem]: maskedValue || "",
        };

        onChangeObj(() => list);
        setCurrentList(list);
      } else {
        onChange((elem: any) => ({
          ...elem,
          ...updatedValue,
        }));
      }
    } else {
      onChange(maskedValue);
    }
  };

  const handleBlur = (inputValue: string) => {
    setIsError(isRequired && !inputValue);
  };

  useEffect(() => {
    if (showError && !value) {
      setIsError(true);
    } else {
      if (value === "R$") {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }
  }, [showError]);

  useEffect(() => {
    if (
      showErrorForZero &&
      (!value || value === "R$" || value === "R$ 0,00" || value == 0)
    ) {
      setIsError(true);
    } else {
      if (value === "R$") {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }
  }, [showErrorForZero]);

  useEffect(() => {
    if (value) {
      setIsError(false);
    }
  }, [value]);

  function handleEnter(event: any) {
    if(onEnterEvent && event?.key === 'Enter') {
      onEnterEvent()
    }
  }

  return (
    <div className="iconDiv">
      {!isToRight && (
        <span
          onClick={() => iconEvent(value)}
          className="material-symbols-outlined icon"
        >
          {icon}
        </span>
      )}

      <TextField
        required={isRequired}
        label={label}
        variant="outlined"
        fullWidth
        type={type}
        inputProps={{
          min: min,
          max: max,
          minLength: min,
          maxLength: max,
        }}
        onFocus={onFocus}
        onChange={handleChange}
        onBlur={() => handleBlur(value)}
        className={`input-default ${isError ? "error" : ""} ${className}`}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        InputLabelProps={{ shrink: true }}
        onKeyDown={handleEnter}
        sx={{
          "::after": isError
            ? {
                content: '"Campo obrigatório *"',
                color: "var(--danger)",
                fontSize: 12,
                marginTop: "5px",
                marginBottom: "10px",
              }
            : {
                color: "var(--text-color)",
              },
          label: {
            color: "var(--text-color)",
            "&.Mui-focused": {
              color: "var(--primary-green)",
            },
          },
          ".MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: isError ? "var(--danger)" : "var(--text-color)",
            },
            "&:hover fieldset": {
              borderColor: isError ? "var(--danger)" : "var(--text-color)",
            },
            "&.Mui-focused fieldset": {
              borderColor: isError ? "var(--danger)" : "var(--primary-green)",
            },
          },
          "&": {
            opacity: disabled ? 0.65 : 1,
          },
        }}
        inputRef={inputRef}
      />

      {isToRight && !isLoading && (
        <span
          onClick={() => iconEvent(value)}
          style={{ position: "absolute", top: "10px" }}
          className="material-symbols-outlined icon"
        >
          {icon}
        </span>
      )}

      {isToRight && isLoading && (
        <CircularProgress
          className="!w-5 !h-auto"
          sx={{ position: "absolute", right: 0, marginRight: "20px" }}
        />
      )}
    </div>
  );
}
