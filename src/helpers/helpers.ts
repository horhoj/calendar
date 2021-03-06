export const getDateStr = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`;
};

export const LIST_OF_NAMES_OF_DAYS_OF_THE_WEEK: string[] = [
  'пн',
  'вт',
  'ср',
  'чт',
  'пт',
  'сб',
  'вс',
];

export const LIST_OF_NAMES_OF_MONTH: string[] = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const getDays = (numberOfDays: number): number[] => {
  const result = [];

  for (let i = 1; i <= numberOfDays; i++) {
    result.push(i);
  }

  return result;
};

export const getDayOfWeekFirstDayOfMonth = (date: Date): number => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDayOfMonth.getDay();
  return dayOfWeek === 0 ? 7 : dayOfWeek;
};

export const getLastDayOfMonth = (date: Date): number => {
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDayOfMonth.getDate();
};
