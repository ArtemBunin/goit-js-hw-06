// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод
// document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
// const tegEl = document.createElement('li');
// tegEl.classList.add("item");
// tegEl.textContent = [ingredients[0]];

// const ulEL = document.querySelector('#ingredients');
// ulEL.append(tegEl)

const makeTeg = ingredients
.map((ingredient)  => {const tegEl = document.createElement('li');
tegEl.classList.add("item");
 tegEl.textContent = ingredient;
 
  return tegEl;
 
})
console.log(makeTeg)

//  ulEL.append(tegEl)
 const ulEL = document.querySelector('#ingredients');
ulEL.append(...makeTeg)