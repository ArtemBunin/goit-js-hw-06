// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает
//  кнопку Создать, после чего рендерится коллекция.При нажатии
//   на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую
//  функцию getRandomHexColor для получения цвета.

const divRef = document.querySelector("#boxes");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");
let size = 30;  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let elements = [];
function createBoxes(amount) {
  

  for (let index = 0; index <amount; index++) {
    
     const div = document.createElement("div");
  div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(div); 
  }
  divRef.append(...elements);
}

btnCreateRef.addEventListener('click', (event) => {
  createBoxes(inputRef.value)
});
btnDestroyRef.addEventListener('click', (event) => {
  divRef.innerHTML = "";
  elements = [];
  size = 30;
});
