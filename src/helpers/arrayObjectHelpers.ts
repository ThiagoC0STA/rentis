export function controlInputsRequired(
  obj: any,
  camposObrigatorios: string[]
): boolean {
  if (!obj || Object.keys(obj).length === 0) {
    return true;
  }

  for (const campo of camposObrigatorios) {
    var campControl =
      typeof obj[campo] === "number" ? obj[campo].toString() : obj[campo];

    if (!obj.hasOwnProperty(campo) || !campControl || campControl === "") {
      return true;
    }
  }

  return false;
}
