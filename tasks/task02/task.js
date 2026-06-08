/**
 * ЗАДАНИЕ 2: Сумма элементов массива
 *
 * Напишите функцию sumArray(arr), которая принимает массив чисел
 * и возвращает сумму всех его элементов.
 * Используйте цикл (for или while).
 *
 * Пример:
 *   sumArray([1, 2, 3, 4, 5]) => 15
 *   sumArray([])              => 0
 */

function sumArray(arr) {
  
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;


}

module.exports = { sumArray };
