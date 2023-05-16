//привязка жанров к кнопкам
const knopka_1 = "latino"; 
const knopka_2 = "rock";
const knopka_3 = "electronic";
const knopka_4 = "relax";
//информация о привязке
const btn_janr = document.querySelector(".janr"); 
const htm = `<article >
knopka 1 = ${knopka_1}, knopka 2 = ${knopka_2}, knopka 3 = ${knopka_3}, knopka 4 = ${knopka_4}
  </article> `;

btn_janr.insertAdjacentHTML("beforeend", htm);

//перебирает элементы массива по жанру 
function getValue(array, knopka) { 
  let i = 0; //переменная для цикла 
  while (i < array.length) { //цикл для while который пока меньше длины массива 
    if (array[i].tags.includes(knopka)) { // проверяет совпадение тегов жанра
      window.open(array[i].homepage).focus(); // если находит, то окрывает страницу радиостанции в новой вкладке
      return; // и заканчивает функцию
    }
    i++; //если не нашли, то прибавляем к i 1 каждый проход цикла
  }
}

//функция, которая обрабатывает запрос к API
const krData = function (knopka) { 
  const strana_str = document.getElementById("strana").value; //получаем значение страны из импута и выводим в консоль
  console.log(strana_str);
  fetch(
    ` http://de1.api.radio-browser.info/json/stations/bycountry/${strana_str}`
  )
    .then((response) => {
      console.log(response.status);
      if (!response.ok) 
        throw new Error(`Ссылка не найдена. Ошибка ${response.status}`); //обработка ошибки
      return response.json();
    })
    .then(function (data) {
      getValue(data, knopka);
    });
};
