/**
 * ЗАДАНИЕ 3: FizzBuzz
 *
 * Напишите функцию fizzBuzz(n), которая принимает число n и возвращает массив
 * строк от 1 до n по следующим правилам:
 *   - если число делится на 3 → "Fizz"
 *   - если число делится на 5 → "Buzz"
 *   - если делится на 3 и на 5 → "FizzBuzz"
 *   - иначе → само число в виде строки
 *
 * Пример:
 *   fizzBuzz(5) => ["1", "2", "Fizz", "4", "Buzz"]
 *   fizzBuzz(15) => [..., "FizzBuzz"]
 */

function fizzBuzz(n) {
  
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i)); // или i.toString()
    }
  }
  
  return result;
}

module.exports = { fizzBuzz };
