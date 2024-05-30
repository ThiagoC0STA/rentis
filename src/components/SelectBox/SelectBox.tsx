import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import "./styles.scss";

interface SelectBoxProps {
  options: any[];
  onSelect?: any;
  keyItem?: any;
  label?: string;
  value?: any;
  wFull?: boolean;
  className?: string;
  isRequired?: boolean;
  disabled?: boolean;
  action?: any;
  onChangeObj?: any;
  onCurrentList?: any;
  indexItem?: number;
  onSelectFunction?: any;
  showError?: boolean;
  onClick?: any;
}

export default function SelectBox({
  options,
  onSelect,
  onSelectFunction,
  keyItem = null,
  label = "Selecione uma opção",
  value = "",
  wFull = false,
  className,
  isRequired = false,
  disabled = false,
  action,
  onChangeObj,
  onCurrentList,
  indexItem = 0,
  showError,
  onClick
}: SelectBoxProps) {
  const [selectedOption, setSelectedOption] = useState<string>(value);
  const [currentList, setCurrentList] = useState(onCurrentList);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const handleSelectChange = (event: any, keyItem?: string) => {
    const selectedValue = event.target.value as string;
    setIsError(isRequired && !selectedValue);
    setSelectedOption(selectedValue);

    if (onSelectFunction) {
      onSelectFunction(selectedValue);
    }

    if (keyItem) {

      let list: any[] = currentList;

      if (list?.length > 0) {
        list[indexItem] = {
          ...list[indexItem],
          [keyItem]: selectedValue,
        };

        onChangeObj(() => list);
        setCurrentList(list);
      } else {
        if (onSelect)
          onSelect((elem: any) => ({
            ...elem,
            [keyItem]: selectedValue,
          }));
      }
    } else {
      if (onSelect) onSelect(selectedValue);
    }
  };

  function onHandleSelect(e: any) {
    e.preventDefault();

    action();
  }

  useEffect(() => {
    if (showError && !selectedOption) {
      if (value === 0) {
        setIsError(false);
      } else {
        setIsError(true);
      }
    } else {
      setIsError(false);
    }
  }, [showError]);

  return (
    <Box
      className={`select-box ${className ? className : ""}`}
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        "::after": isError
          ? {
              content: '"Campo obrigatório *"',
              color: "var(--danger)",
              fontSize: 12,
              marginTop: "5px",
              marginBottom: "10px",
            }
          : {},
        "&": {
          opacity: disabled ? 0.65 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          <div className="flex gap-[4px]">
            {label} {isRequired && <p className="asterisk-select">*</p>}
          </div>
        </InputLabel>
        <Select
          value={selectedOption}
          onChange={(e) => handleSelectChange(e, keyItem)}
          onBlur={(e) => setIsError(isRequired && !e.target.value)}
          displayEmpty
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          MenuProps={{ disableScrollLock: true }}
          sx={{
            width: `${wFull ? "100%" : "initial"}`,
          }}
          required={isRequired}
          label={label}
          inputProps={{ shrink: "true" }}
          readOnly={disabled}
          endAdornment={
            action && (
              <InputAdornment
                position="end"
                sx={{
                  color: "var(--primary-green)",
                  marginInlineEnd: "20px",
                  cursor: "pointer",
                }}
                onClick={action}
              >
                <span className="material-symbols-outlined">add_circle</span>
              </InputAdornment>
            )
          }
        >
          <MenuItem disabled={true}>
            <Typography sx={{ color: "var(--text-color)" }}>
              Selecione
            </Typography>
          </MenuItem>
          {options.map((option: any, index: number) => (
            <MenuItem key={`${option.key} - ${index}`} value={option.key}>
              <Typography sx={{ color: "var(--text-color)" }}>
                {option.label}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
