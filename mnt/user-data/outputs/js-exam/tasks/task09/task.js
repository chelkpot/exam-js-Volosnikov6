/**
 * ЗАДАНИЕ 9: Суммы строк матрицы
 *
 * Напишите функцию rowSums(matrix), которая принимает двумерный массив (матрицу)
 * и возвращает новый массив, где каждый элемент — это сумма соответствующей строки.
 *
 * Пример:
 *   rowSums([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) => [6, 15, 24]
 *   rowSums([[10, 20], [5, 5]])                 => [30, 10]
 *   rowSums([])                                 => []
 */

function rowSums(matrix) {
  const sums = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];
    let sum = 0;
    for (let j = 0; j < row.length; j += 1) {
      sum += row[j];
    }
    sums.push(sum);
  }
  return sums;
}

module.exports = { rowSums };
