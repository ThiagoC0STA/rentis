import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";
import { useEffect, useState } from "react";
import "./styles.scss";

export default function DatePickerValue({
  setDate,
  text,
  value,
  keyItem,
  className,
  wFull = false,
  disabled = false,
  haveTimeFormat = false,
  indexArray,
  isRequired,
  showError,
}: any) {
  dayjs.extend(updateLocale);
  const [isError, setIsError] = useState<boolean>(false);

  const customDayjsLocale = {
    ...dayjs.Ls[dayjs.locale()],
    weekStart: 0,
    weekdaysMin: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
  };

  dayjs.updateLocale(dayjs.locale(), customDayjsLocale);

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(
    value ? dayjs(value) : null
  );
  const [selectedTime, setSelectedTime] = useState<dayjs.Dayjs | null>(
    value ? dayjs(value) : null
  );

  function handleDateChange(newDate: dayjs.Dayjs | null) {
    if (newDate && dayjs.isDayjs(newDate)) {
      setSelectedDate(newDate);
      if (selectedTime && haveTimeFormat) {
        const newDateTime = newDate
          .hour(selectedTime.hour())
          .minute(selectedTime.minute());
        onChangeInputData(newDateTime);
      } else {
        onChangeInputData(newDate);
      }
    }
  }

  function handleTimeChange(newTime: dayjs.Dayjs | null) {
    if (newTime && dayjs.isDayjs(newTime)) {
      setSelectedTime(newTime);
      if (selectedDate) {
        const newDateTime = selectedDate
          .hour(newTime.hour())
          .minute(newTime.minute());
        onChangeInputData(newDateTime);
      } else {
        onChangeInputData(newTime);
      }
    }
  }

  function onChangeInputData(newDateTime: dayjs.Dayjs) {
    if (keyItem) {
      const formattedDate = haveTimeFormat
        ? newDateTime.format("YYYY-MM-DDTHH:mm")
        : newDateTime.format("YYYY-MM-DD");

      setDate((currentValue: any) => ({
        ...currentValue,
        [keyItem]: formattedDate,
      }));
    } else if (indexArray !== undefined && indexArray >= 0) {
      const formattedDate = haveTimeFormat
        ? newDateTime.format("YYYY-MM-DDTHH:mm")
        : newDateTime.format("YYYY-MM-DD");

      setDate((currentValue: any) => {
        const updatedArray = [...currentValue];
        updatedArray[indexArray] = formattedDate;
        return updatedArray;
      });
    } else {
      setDate(
        haveTimeFormat
          ? newDateTime.format("YYYY-MM-DDTHH:mm")
          : newDateTime.format("YYYY-MM-DD")
      );
    }
  }

  useEffect(() => {
    setIsError(showError && !selectedDate);
  }, [showError, selectedDate]);

  useEffect(() => {
    handleDateChange(value ? dayjs(value) : null);
    setSelectedTime(value ? dayjs(value) : null);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker" ]}
        sx={{
          "::after": isError
            ? {
                content: '"Campo obrigatório *"',
                color: "var(--danger)",
                fontSize: 12,
                marginTop: "50px",
                marginBottom: "10px",
                position: "absolute",
              }
            : {
                color: "var(--text-color)",
              },
          label: {
            color: "var(--text-color)",
            "&.Mui-focused": {
              color: "var(--text-color)",
            },
          },
          "&": {
            opacity: disabled ? 0.65 : 1,
          },
        }}
      >
        <DatePicker
          className={`datep !overflow-hidden ${className ? className : ""} ${
            isRequired ? "isRequired" : ""
          }`}
          disabled={disabled}
          sx={{
            width: `${wFull ? "100%" : "initial"}`,
          }}
          value={selectedDate}
          label={`${text}`}
          onChange={(newValue: any) => handleDateChange(newValue)}
          format="DD/MM/YYYY"
          
        />

        {haveTimeFormat && (
          <TimePicker
            value={selectedTime}
            onChange={(newTime: any) => handleTimeChange(newTime)}
            ampm={false}
            label="Hora e minuto"
          />
        )}
      </DemoContainer>
    </LocalizationProvider>
  );
}
