/**
 * ЗАДАНИЕ 6: Подсчёт вхождений
 *
 * Напишите функцию countOccurrences(arr, value), которая принимает
 * массив и значение, и возвращает количество раз, которое это
 * значение встречается в массиве.
 *
 * Пример:
 *   countOccurrences([1, 2, 3, 2, 1, 2], 2) => 3
 *   countOccurrences(["a", "b", "a", "c"], "a") => 2
 *   countOccurrences([1, 2, 3], 5) => 0
 */

function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) {
      count += 1;
    }
  }
  return count;
}

module.exports = { countOccurrences };
