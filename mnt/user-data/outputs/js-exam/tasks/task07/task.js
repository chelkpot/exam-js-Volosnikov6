/**
 * ЗАДАНИЕ 7: Сглаживание вложенного массива (один уровень)
 *
 * Напишите функцию flattenOnce(arr), которая принимает массив,
 * который может содержать вложенные массивы (только один уровень вложенности),
 * и возвращает "плоский" массив всех элементов.
 * Нельзя использовать .flat().
 *
 * Пример:
 *   flattenOnce([1, [2, 3], [4, 5], 6]) => [1, 2, 3, 4, 5, 6]
 *   flattenOnce([[1, 2], [3, 4]])        => [1, 2, 3, 4]
 *   flattenOnce([1, 2, 3])              => [1, 2, 3]
 */

function flattenOnce(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j += 1) {
        result.push(item[j]);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

module.exports = { flattenOnce };
