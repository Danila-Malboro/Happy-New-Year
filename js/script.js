let poems = [
    {
        poemText: `
        <p>
            С Новым годом! Волшебства, <br>
            Смеха, счастья и тепла, <br>
            Мира, радостей, достатка <br>
            И во всех делах порядка! <br>
        </p>
        <p>
            Пусть все серое, плохое <br>
            Старый год возьмет с собою. <br>
            Впредь лишь светлые мгновенья <br>
            Создают пусть настроенье! <br>
        </p>`,
        bg: `url(img/6233666.jpg)`
    },
    {
        poemText: `
        <p>
            С Новым годом поздравляем, <br>
            Счастья в жизни Вам желаем, <br>
            Много добрых пожеланий, <br>
            Исполненья всех мечтаний! <br>
        </p>
        <p>
            Самых ярких впечатлений, <br>
            Самых сказочных мгновений. <br>
            Пусть Вам этот год несет <br>
            Много радостных хлопот! <br>
        </p>`,
        bg: `url(img/christmas-decorations-on-blue-surface.jpg)`
    },
    {
        poemText: `
        <p>
            Желаю мира и добра, <br>
            Любви, душевного тепла! <br>
            Пускай вам этот Новый год <br>
            Успех и радость принесет! <br>
        </p>
        <p>
            Пусть Новый год откроет двери <br>
            В мир волшебства, заботы, веры. <br>
            И всё хорошее начнется! <br>
            Удача пусть вам улыбнется! <br>
        </p>`,
        bg: `url(img/top-view-festive-christmas-ornaments.jpg)`
    }

]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let poem = document.querySelector('.content__poem');


//Math — это объект, хранящий в себе различные математические константы (например число π) 
//и функции типа вычисления квадратного корня. 
//Обычно используется для генерации случайных чисел или округления значений.

// Math.floor() - кругление до целого числа в меньшую сторону.
// Math.random() - генерация псевдослучайных от 0 до 1 не включая 1.

btn.addEventListener('click', function () {
    let randomIndex;
    randomIndex = Math.floor(Math.random() * poems.length);
    console.log(randomIndex);
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;

})
