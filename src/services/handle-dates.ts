export function addMaskDate(value: string) {
  if (value.length == 8) {
    return `${value[0]}${value[1]}/${value[2]}${value[3]}/${value[4]}${value[5]}${value[6]}${value[7]}`;
  }
  return value;
}

export function reverseDate(value: string) {
  if (value.length == 10) {
    return `${value[6]}${value[7]}${value[8]}${value[9]}-${value[3]}${value[4]}-${value[0]}${value[1]}`;
  }
  return value;
}
