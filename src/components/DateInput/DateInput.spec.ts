import { getDateStr } from './helpers';

describe('getDateStr', () => {
  it.each([
    ['2021-07-20'],
    ['2021-07-21'],
    ['2001-04-22'],
    ['2021-01-22'],
    ['2020-07-22'],
    ['2020-11-22'],
    ['2020-12-22'],
    ['2020-12-15'],
  ])('', (dateStr) => {
    const date = new Date(dateStr);
    const actualDateStr = getDateStr(date);

    expect(actualDateStr).toBe(dateStr);
  });
});
