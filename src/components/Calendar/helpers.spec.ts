import { getDayOfWeekFirstDayOfMonth, getLastDayOfMonth } from './helpers';

describe('getCurrentDayOfWeek', () => {
  it.each([
    [new Date('2021-07-01'), 4],
    [new Date('2021-07-03'), 4],
    [new Date('2021-07-20'), 4],
    [new Date('2021-07-31'), 4],
    [new Date('2021-01-01'), 5],
    [new Date('2021-01-02'), 5],
    [new Date('2021-01-15'), 5],
    [new Date('2021-01-31'), 5],
    [new Date('2021-02-15'), 1],
    [new Date('2021-02-12'), 1],
    [new Date('2021-02-28'), 1],
    [new Date('2021-02-01'), 1],
  ])('should ', (date: Date, dayOfWeek: number) => {
    expect(getDayOfWeekFirstDayOfMonth(date)).toBe(dayOfWeek);
  });
});

describe('getLastDayOfMonth', () => {
  it.each([
    [new Date('2021-07-20'), 31],
    [new Date('2021-01-01'), 31],
    [new Date('2021-04-01'), 30],
    [new Date('2021-02-01'), 28],
    [new Date('2021-02-02'), 28],
    [new Date('2021-02-02'), 28],
    [new Date('2021-02-03'), 28],
    [new Date('2021-02-25'), 28],
    [new Date('2021-02-20'), 28],
  ])('should ', (date: Date, dayOfWeek: number) => {
    expect(getLastDayOfMonth(date)).toBe(dayOfWeek);
  });
});
