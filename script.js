'use strict';

let str;

const funnyBunny = function () {
    str = prompt('Введите текст');
    if (typeof str !== 'string') {
        alert('Ну серьезно, напиши текст');
        console.log(typeof str);
        funnyBunny();

    } else {

        console.log('Действительная запись: ' + str);
        str.trim();
        if (str.length > 30) {
            str = str.trim().substring(0, 30);
            str += '...';
            console.log('Отрекдактированная запись: ' + str);
        }
    }
};

funnyBunny();