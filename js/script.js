'use strict';
window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

    // скрываем весь контент котрый есть на сайте - функция занимается скрытием табов
    function hideTabContent() {
        tabsContent.forEach(item => { //внутри будет отдельный контент
        item.style.display = 'none';
        });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');//у каждого элемента таба будем удалять класс активности
        });
    }

    function showTabContent(i = 0) { //если функция вызывается без аргумента то по умолчанию будет 0
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) =>  {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i)  => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i); //i-номер элемента котрый совпал 
                }
            });
        }
    });

});