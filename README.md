<h1 align="center">Script Shop</h1>


![Main](https://downloader.disk.yandex.ru/preview/fa3d3598360738b3e69fbb5665b238727d5d0f697b3a885847dfb929cc4f9c12/641d972a/MzOTkVXXfZL-UxI-piDe9fzU5zU88FyzTCxz_mgp4F_FoKcb8ppCyhlmrYyhAbm_WTd84EOpVWmXfh8MYu9gJA%3D%3D?uid=0&filename=2023-03-24_11-26-22.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048)
> Онлайн магазин для Телеграм.
>
> Откройте магазин по ссылке [_Script Shop_](https://t.me/script696_bot).

## Навигация
* [О проекте](#О-проекте)
* [Сценарии](#Сценарии)
* [Использованные технологии](#Использованные-технологии)
* [Реализованные возможности](#Реализованные-возможности)
* [Скриншоты](#Скриншоты)
* [Как это использовать](#Как-это-использовать)
* [Статус проекта](#Статус-проекта)
* [Контакты](#Контакты)


## О проекте

Первоначальной идеей, обуславливающей разработку данного проекта, было создание
Web-App приложения для Телеграм

В качестве Web приложения был выбран e-commerce online shop, так как, на данный момент, ниша
интернет магазинов в TG полностью свободна.\

#### Комментарии к проекту
- Проект выполнен на React с необходимым дополнительным окружением
- Выполнен деплой проекта на VPS
- Применен CI/CD с использованием GitHub workflows с автоматическим запуском тестов и деплоем
  на VPS. Flow деплоя описан в [Repo](https://github.com/script696/script-deploy)
- В качестве средства доставки приложения используется Docker контейнер
- Статика приложения раздается с помощью nginx
- Для сохранения консистентности кода применены линтеры Prettier & EsLint

## Сценарии

- предприниматель (далее user), желающий открыть магазин в телеграм, обращается к поставщику данного продукта
  и приобретает бота
- под user создается сам бот и аккаунт для доступа к данной административной панели
- user имеет возможность зайти под своими кредами и управлять товарами в своем магазине

> Панель управления не входит рамки данного проекта, но вы можете перейти и ознакомиться с ней
>
> к репозиторию на github [Repo](https://github.com/script696/script-panel).
>
> к боту в телеграм [Bot](https://t.me/script696_bot).

## Использованные технологии

- React
- Typescript
- Telegram Web App Api
- SCSS
- Redux Toolkit
- redux Toolkit Query
- Feature Sliced Design
- Docker
- nginx
- Prettier
- EsLint

## Реализованные возможности

- Просмотр всех товаров магазина
- Просмотр отдельного товара
- Добавление товаров в корзину
- Просмотр товаров в корзине

## Скриншоты

![Main](https://downloader.disk.yandex.ru/preview/0734e1f29a466c2c48182cbbb4bfc429bc156e1680fceb4621c7bc9692867fa7/641d9761/N9YcdkUv-LX7bMywcNoEFXD9OxUCt05lzB5yeV1Bels2hfy6Lb-3HGiLoVMO6_knzv2ZbzDQo9EESACI9d8ZBQ%3D%3D?uid=0&filename=2023-03-24_11-23-31.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048)
![Main](https://downloader.disk.yandex.ru/preview/15fc838cae24606268883cc37f30d42b594d2da062b011d4cd6a369e007b8799/641d977d/x7fLV86CHHem0XZmsXMF43D9OxUCt05lzB5yeV1BeluN-LJlH1EJovT-MK37EKXH_JvMvARRJW29NcZBRlUl6w%3D%3D?uid=0&filename=2023-03-24_11-24-07.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048)
![Main](https://downloader.disk.yandex.ru/preview/54fd61ee98fb42ac54f5d2f33e3465eb417e4ae3d296529416a1c5b405046c5f/641d9798/2PEkD4WNhIBbU9fi5k_2qHD9OxUCt05lzB5yeV1BelvFTVh-Q2-8XzGyKRuWjUqSY0ltWtFAxX5UTJMU09fsgw%3D%3D?uid=0&filename=2023-03-24_11-24-34.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048)

## Как это использовать

- Откройте бота в Телеграм по ссылке [Bot](https://t.me/script696_bot)
- В чате вы увидите появившееся сообщение с двумя кнопками - 'Open Shop' и 'Open Dashboard'
- Нажмите на кнопку 'Open Shop' - откроется демо версия магазина Script Shop
- Нажмите на правую кнопку 'Open Dashboard' и перейдите к админ панели
- На странице логина при нажатии на кнопку 'Login' выполнится редирект на страницу панели
- Попробуйте добавить свой товар или отредактировать существующие
- Обновите магазин в Телеграм нажав на три точки в правом верхнем углу и вы увидите внесенные изменения

> Пожалуйста, не удаляйте все товары и ведите себя хорошо =)
>
> Приложения админ панели и бота находятся в разработке, какой-то функционал может не работать
> или присутствовать различные баги
>
> Напишите мне, если найдете один из них, спасибо!

## Статус проекта

В разработке

## Контакты

Если вам понравился мой проект и вы хотели бы принять участие в его разработке/
у вас есть идеи по улучшению или хотели бы принять участие в тестировании как пользователь,/
пожалуйста, свяжитесь со мной в [Telegram](https://t.me/script696)