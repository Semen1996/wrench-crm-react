# Проект: Wrench CRM на React.js
Сайт на GitHub Pages: https://semen1996.github.io/wrench-crm-react/ 

Панель управления CRM, которая подключена к сервису https://dadata.ru/api/suggest/address/ и выводить адреса введенные пользователем на страницу.

## Функционал:

* Поиск адресов из данных сервиса https://dadata.ru/api/suggest/address/
*  кнопка “Главная” ведет на страницу с новостями и открывается по умолчанию при запуске проекта
* кнопка “Поиск адресов” ведет на страницу поиска адресов

## Технологии: 

* HTML
* CSS
* JS
* React

## Инструкция по установке: 


Скопируйте проект к себе с помощью команды

```
git clone git@github.com:Semen1996/wrench-crm-react.git
```

Установить зависимости:

```
npm install
```

Запустить проект на локальном сервере:

```
npm run start
```


## Что необходимо доработать:

* Адаптивность страницы (на данный момент она сделана только под размер экрана 1440px)
* Проверить название классов по БЭМ (возможно, присутствует некорректная вложенность)
* Скрывать боковое меню, если разрешение <= 768px
* Ссылки в тексте в блоке “Новости” должны быть подсвечены и кликабельны, почтовые адреса - должны быть кликабельны и направлять в почтовый клиент с заполненным почтовым адресом