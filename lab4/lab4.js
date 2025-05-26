// 1. Класс Book с конструктором и методом show
class Book {
  constructor(title, pubYear, price) {
    this._title = title;
    this._pubYear = pubYear;
    this._price = price;
  }

  // Метод show
  show() {
    console.log(`Название: ${this._title}, Цена: ${this._price}`);
  }

  // Геттеры и сеттеры с проверками
  get title() {
    return this._title;
  }

  set title(value) {
    if (value === "") {
      throw new Error("Название не может быть пустым");
    }
    this._title = value;
  }

  get pubYear() {
    return this._pubYear;
  }

  set pubYear(value) {
    if (value <= 0) {
      throw new Error("Год публикации должен быть положительным числом");
    }
    this._pubYear = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value <= 0) {
      throw new Error("Цена должна быть положительным числом");
    }
    this._price = value;
  }

  // Статический метод сравнения
  static compare(a, b) {
    return a.pubYear - b.pubYear;
  }
}

// Создание экземпляра и вызов метода show
const book1 = new Book("JavaScript: The Good Parts", 2008, 29.99);
book1.show();

// Изменение свойств
book1.title = "Clean Code";
book1.pubYear = 2008;
book1.price = 39.99;

// 2. Сортировка массива книг
const books = [
  new Book("Book A", 2010, 15),
  new Book("Book B", 2005, 20),
  new Book("Book C", 2020, 25),
];

books.sort(Book.compare);
console.log("Отсортированные книги:", books);

// 3. Функция isEmpty
function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const testObj = { [Symbol()]: true };
console.log("Пуст ли объект?", isEmpty(testObj)); // false

// 4. Объект с методами для работы с классами
let obj = {
  className: "open menu",

  addClass(cls) {
    if (!this.className.split(" ").includes(cls)) {
      this.className += (this.className ? " " : "") + cls;
    }
    return this;
  },

  removeClass(cls) {
    this.className = this.className
      .split(" ")
      .filter((c) => c !== cls)
      .join(" ");
    return this;
  },
};

obj.addClass("new").addClass("open").removeClass("menu");
console.log("Объект после манипуляций:", obj.className);

// 5. Работа с JSON
const jsonStr = JSON.stringify(obj, null, 2);
console.log("JSON строка:", jsonStr);

const obj2 = JSON.parse(jsonStr);
console.log("Объекты равны?", JSON.stringify(obj) === JSON.stringify(obj2));

// 6. Функция getSecondsToday()
function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((now - today) / 1000);
}

console.log("Секунд с начала дня:", getSecondsToday());

// 7. Функция formatDate()
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  return `${day}.${month}.${year}`;
}

console.log("Форматированная дата:", formatDate(new Date()));
