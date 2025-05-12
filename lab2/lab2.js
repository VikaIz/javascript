/**
 * Возводит x в степень n (n - целое число)
 * @param {number} x - основание степени
 * @param {number} n - показатель степени (целое число)
 * @returns {number} результат возведения в степень
 */
function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);

  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

/**
 * Вычисляет сумму чисел от 1 до n включительно
 * @param {number} n - натуральное число
 * @returns {number} сумма чисел от 1 до n
 */
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

/**
 * Проверяет год на високосность
 * @param {number} year - год для проверки
 * @returns {boolean} true если год високосный, иначе false
 */
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n (рекурсивно)
 * @param {number} n - число для вычисления факториала
 * @returns {bigint} факториал числа n
 */
function factorial(n) {
  if (n === 0) return 1n;
  return BigInt(n) * factorial(n - 1);
}

/**
 * Вычисляет n-е число Фибоначчи
 * @param {number} n - номер числа Фибоначчи
 * @returns {bigint} n-е число Фибоначчи
 */
function fib(n) {
  let a = 0n,
    b = 1n;
  if (n === 0) return a;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

/**
 * Создает функцию для сравнения с заданным числом
 * @param {number} x - число для сравнения
 * @returns {function} функция, сравнивающая свой аргумент с x
 */
function compare(x) {
  return function (y) {
    if (y > x) return true;
    if (y < x) return false;
    return null;
  };
}

/**
 * Суммирует все переданные аргументы
 * @param {...number} args - числа для суммирования
 * @returns {number} сумма всех аргументов
 */
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

/**
 * Добавляет символьное свойство blackSpot к объекту
 * @param {object} obj - объект для модификации
 * @returns {object} исходный объект с добавленным свойством
 */
function addBlackSpot(obj) {
  obj[Symbol.for("blackSpot")] = true;
  return obj;
}

// Экспорт функций для тестирования
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    pow,
    sumTo,
    isLeapYear,
    factorial,
    fib,
    compare,
    sum,
    addBlackSpot,
  };
}
