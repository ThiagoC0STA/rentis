import moment from "moment";

export function formatDate(date: string, isDateHour: boolean = false) {
  if (!date) return "-";
  if (!isDateHour) return moment(date).format("DD/MM/YYYY");
  return moment(date).format("DD/MM/YYYY HH:mm:ss");
}

export function formatDateAndHour(date: string) {
  return moment(date).format("DD/MM/YYYY HH:mm:ss");
}

export function limitText(text: string, limit: number = 12) {
  if (text.length <= limit) {
    return text;
  } else {
    return text.slice(0, limit) + "...";
  }
}

export function secondFormatDate(date?: string) {
  return moment(date).format("YYYY-MM-DD");
}

export function formatCurrency(value: string | number): string {
  if (value || value === 0) {
    const numberValue = Number(value);

    if (value === 0 || value === "-") {
      return "R$ 0,00";
    }

    const formattedValue = numberValue.toLocaleString("pt-BR", {
      style: "decimal",
      minimumFractionDigits: numberValue % 1 === 0 ? 2 : 0,
      maximumFractionDigits: 2,
    });

    const currencyFormattedValue = `R$ ${formattedValue}`;

    return currencyFormattedValue;
  } else {
    return "";
  }
}

export function formatCurrencyInput(value: string | number): string {
  var currentValue;
  var numberValue;

  if (typeof value === "string") {
    currentValue = value.replace(/[^\d]/g, "");

    numberValue = parseFloat(currentValue) / 100;
  } else {
    currentValue = value;
    numberValue = currentValue / 100;
  }

  if (!currentValue) {
    return "R$ 0,00";
  }

  const formattedValue = numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue;
}

export function formatCurrencySecond(value: number | string): string {
  var currentValue;
  var numberValue;

  currentValue = value;

  if (typeof currentValue === "string") {
    if (currentValue.includes("R$")) {
      currentValue = removeFormatterPrice(currentValue);
    } else {
      currentValue = parseFloat(currentValue);
    }
  }

  numberValue = currentValue;

  if (!currentValue) {
    return "R$ 0,00";
  }

  const formattedValue = numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue;
}

export function convertObjectToUrlParameters(obj: any) {
  if (!obj) return "";

  const params = Object.keys(obj)
    .map((key) =>
      obj[key] ? `${key}=${encodeURIComponent(obj[key] || "")}` : ""
    )
    .filter((item) => !!item);

  return `?${params.join("&")}`;
}

export function formatCPF(cpf: string) {
  const cleanedCPF = cpf.replace(/\D/g, "");
  return (
    cleanedCPF.slice(0, 3) +
    "." +
    cleanedCPF.slice(3, 6) +
    "." +
    cleanedCPF.slice(6, 9) +
    "-" +
    cleanedCPF.slice(9)
  );
}

export function formatCNPJ(cnpj: string) {
  const cleanedCNPJ = cnpj.replace(/\D/g, "");
  return (
    cleanedCNPJ.slice(0, 2) +
    "." +
    cleanedCNPJ.slice(2, 5) +
    "." +
    cleanedCNPJ.slice(5, 8) +
    "/" +
    cleanedCNPJ.slice(8, 12) +
    "-" +
    cleanedCNPJ.slice(12)
  );
}

export function maskPercentage(value: any) {
  var currentValue;
  var numberValue;

  if (typeof value === "string") {
    currentValue = value.replace(/[^\d]/g, "");

    numberValue = parseFloat(currentValue) / 100;
  } else {
    currentValue = value;
    numberValue = currentValue / 100;
  }

  if (!currentValue) {
    return "% 0,00";
  }

  const formattedValue = numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue.replace("R$", "%");
}

export function limitOn99(inputValue: any) {
  if (inputValue > 99) {
    return 99;
  } else if (inputValue < 0) {
    return 0;
  } else {
    return inputValue.replace(/\D/g, "");
  }
}

export function limitOn10(inputValue: any) {
  if (inputValue > 10) {
    return 10;
  } else if (inputValue < 0) {
    return 0;
  } else {
    return inputValue.replace(/\D/g, "");
  }
}

export function spaceNumbers(numero: string): string {
  const numerosApenas = numero.replace(/\D/g, "");
  const numerosFormatados = numerosApenas.replace(/(\d{4})/g, "$1 ");

  if (numerosApenas.length >= 16) {
    const numerosIniciais = numerosFormatados.slice(0, 16);
    const numerosRestantes = numerosFormatados.slice(16);
    return numerosIniciais + numerosRestantes.replace(/\s/g, "");
  } else {
    return numerosFormatados;
  }
}

export function barDataformat(numero: string): string {
  const numerosApenas = numero.replace(/\D/g, "");
  const numerosFormatados = numerosApenas.replace(/(\d{2})/g, "$1/");

  return numerosFormatados.replace(/\/$/, "");
}

export function formatPlateCar(value: string | number): string {
  let toStringValue = typeof value === "string" ? value : value.toString();

  if (toStringValue.length === 4 && !toStringValue.includes("-")) {
    return `${toStringValue.slice(0, 3)}-${toStringValue.slice(
      3
    )}`.toUpperCase();
  } else {
    return toStringValue.toUpperCase();
  }
}

export function removeHyphen(value: string): string {
  return value.replace(/-/g, "");
}

export function maskPercentageSecond(value: any) {
  var currentValue;
  var numberValue;

  if (typeof value === "string") {
    currentValue = value.replace(/[^\d]/g, "");

    numberValue = parseFloat(currentValue);
  } else {
    currentValue = value;
    numberValue = currentValue;
  }

  if (!currentValue) {
    return "% 0,00";
  }

  const formattedValue = numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue.replace("R$", "%");
}

export function removeMaskPercentage(value: string): any {
  if (value && typeof value !== "number") {
    let formatedValue: any = value;

    formatedValue = parseFloat(value.replace("%", "").replace(",", "."));
    return formatedValue;
  } else {
    return value;
  }
}

export function mascaraCnpjCpf(value: string): string {
  var cleanedValue = value.replace(/\D/g, "");

  if (!cleanedValue) {
    return "";
  }

  const maxLength = 14;

  if (cleanedValue.length > maxLength) {
    cleanedValue = cleanedValue.slice(0, maxLength);
  }

  if (cleanedValue.length <= 11) {
    return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  } else {
    return cleanedValue.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  }
}
export function mascaraCnpj(value: string): string {
  var cleanedValue = value.replace(/\D/g, "");

  if (!cleanedValue) {
    return "";
  }

  const maxLength = 14;

  if (cleanedValue.length > maxLength) {
    cleanedValue = cleanedValue.slice(0, maxLength);
  }
  return cleanedValue.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );
}

export function mascaraCpf(value: string): string {
  var cleanedValue = value.replace(/\D/g, "");

  if (!cleanedValue) {
    return "";
  }

  const maxLength = 14;

  if (cleanedValue.length > maxLength) {
    cleanedValue = cleanedValue.slice(0, maxLength);
  }

  return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function mascaraCep(value: string): string {
  const cleanedValue = value.replace(/\D/g, "");

  if (!cleanedValue) {
    return "";
  }

  let limitedValue = cleanedValue.slice(0, 8);

  limitedValue = limitedValue.replace(/(\d{5})(\d{3})/, "$1-$2");

  if (limitedValue.replace(/\D/g, "").length > 8)
    limitedValue = limitedValue.slice(0, 8);

  return limitedValue;
}

export function formatPhoneNumber(value: string): string {
  if (value) {
    const cleanedValue = value.replace(/\D/g, "");

    if (!cleanedValue) {
      return "";
    }

    if (cleanedValue.length <= 10) {
      return cleanedValue.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      return cleanedValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  } else {
    return value;
  }
}

export function removeFormatterPrice(value: any): any {
  if (value && typeof value === "string") {
    let newValue = value
      .replaceAll(".", "")
      .replace(",", ".")
      .replace("R$", "");
    return +newValue;
  }
  return value;
}

export function maskDecimal(valor: string | number): string {
  if (valor && valor !== "") {
    let novoValor = valor.toString();

    novoValor = novoValor.replace(/[^\d]/g, "");

    if (novoValor.length > 3) {
      const parteInteira = novoValor.slice(0, -3);
      const parteDecimal = novoValor.slice(-3);
      novoValor = parteInteira + "," + parteDecimal;
    }

    return novoValor;
  }
  return valor.toString();
}
export function limitOnZero(value: string) {
  if (value == "0" || !value) {
    return "1";
  } else {
    return value;
  }
}

export function onlyNumber(value: string) {
  if (value) return value.replace(/\D/g, "");
  return value;
}

export const maskMoney = (valor: string) => {
  if (!valor || valor === "") return "R$ 0,00";
  let valorFormatado = valor.replace(/\D/g, "");
  valorFormatado = (parseFloat(valorFormatado) / 100).toFixed(2);
  return `R$ ${valorFormatado}`;
};
