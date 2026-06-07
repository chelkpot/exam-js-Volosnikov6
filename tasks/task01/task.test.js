const { filterEven } = require('./task');

describe('Task 01 – filterEven', () => {
  test('возвращает только чётные числа', () => {
    expect(filterEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
  test('возвращает пустой массив если нет чётных', () => {
    expect(filterEven([7, 9, 11])).toEqual([]);
  });
  test('работает с одним чётным числом', () => {
    expect(filterEven([4])).toEqual([4]);
  });
  test('работает с пустым массивом', () => {
    expect(filterEven([])).toEqual([]);
  });
  test('все числа чётные', () => {
    expect(filterEven([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });
});
