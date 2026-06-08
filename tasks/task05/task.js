/**
 * ЗАДАНИЕ 5: Переворот строки
 *
 * Напишите функцию reverseString(str), которая принимает строку
 * и возвращает её в обратном порядке символов.
 * Нельзя использовать .reverse() напрямую на строке.
 *
 * Пример:
 *   reverseString("hello")  => "olleh"
 *   reverseString("JavaScript") => "tpircSavaJ"
 *   reverseString("")        => ""
 */

function reverseString(str) {
  
  return str.split('').reverse().join('');
}


module.exports = { reverseString };
