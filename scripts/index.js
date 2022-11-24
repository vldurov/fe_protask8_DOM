/*
Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло". Дана кнопка повинна бути єдиним контентом у 
тілі HTML документа, решта контенту повинен бути створений і доданий на сторінку за допомогою Javascript
При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола. При натисканні на кнопку "Намалювати" 
створити на сторінці 100 кіл (10*10) випадкового кольору. При натисканні на конкретне коло - це коло повинен зникати, 
при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.
*/
let circleInfo;
const btn = document.querySelector('.btn');

btn.onclick = function () {
    btn.remove();
    const firstDiv = document.querySelector('.firstDiv');
    firstDiv.style.margin = "0";
    circleInfo = prompt("Введите диаметр круга в rem");
    if (circleInfo == "") {
        alert("Вы ничего не ввели, попробуйте снова");
        location.reload();
    };
        

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.className = "circle";
        div.style.borderRadius = "50%";
        div.style.display = "inline-block";
        div.style.cursor = "pointer"
        div.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
        div.style.width = circleInfo + "rem";
        div.style.height = circleInfo + "rem";
        document.body.append(div);
        div.onclick = function () {
            this.remove();
        }
    };
};
