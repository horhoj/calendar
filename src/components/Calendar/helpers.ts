export const getDays = (): number[] => {
  const result = [];

  for (let i = 1; i <= 31; i++) {
    result.push(i);
  }

  return result;
};

export const getDayColumns = (): string[] => {
  return ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
};
