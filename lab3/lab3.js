/**
 * @param {number} num
 * @returns {number}
 */
export function getDecimal(num) {
  const intPart = Math.trunc(Math.abs(num));
  let decimal = Math.abs(num) - intPart;

  decimal = Math.round(decimal * 100) / 100;

  if (num < 0) {
    decimal = 1 - decimal;
  }

  return decimal;
}

/**
 * Нормализует URL, добавляя https:// в начало
 * @param {string} url - адрес сайта
 * @returns {string} нормализованный URL
 */
export function normalizeUrl(url) {
  if (url.startsWith("http://")) {
    return "https://" + url.slice(7);
  }
  if (url.startsWith("https://")) {
    return url;
  }
  return "https://" + url;
}

/**
 * Проверяет строку на наличие спам-слов
 * @param {string} str - проверяемая строка
 * @returns {boolean} true если содержит 'viagra' или 'XXX'
 */
export function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

/**
 * Усекает строку до указанной длины
 * @param {string} str - исходная строка
 * @param {number} maxlength - максимальная длина
 * @returns {string} усеченная строка
 */
export function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0, maxlength - 1) + "…";
}

/**
 * Преобразует строку с дефисами в camelCase
 * @param {string} str
 * @returns {string}
 */
export function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

/**
 * Возвращает массив чисел Фибоначчи
 * @param {number} n - количество чисел
 * @returns {bigint[]} массив чисел Фибоначчи
 */
export function fibs(n) {
  const result = [];
  let a = 0n,
    b = 1n;

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }

  return result;
}

/**
 * Возвращает новый массив, отсортированный по убыванию
 * @param {number[]} arr - исходный массив
 * @returns {number[]} отсортированный массив
 */
export function arrReverseSorted(arr) {
  return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений
 * @param {Array} arr - исходный массив
 * @returns {Array} массив уникальных значений
 */
export function unique(arr) {
  return [...new Set(arr)];
}
