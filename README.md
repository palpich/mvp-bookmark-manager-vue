# mvp-bookmark-manager

Приложение (MVP) позволяет посмотреть список Закладок

Что можно -

* Добавлять закладки **(изменения хранятся только в store)**
* Удалять закладки **(изменения хранятся только в store)**
* Редактировать закладки **(изменения хранятся только в store)**
* action fetchBookmarksList можно использовать для работы с асинхронным апи

Если поля пустые, показывает предупреждение.

TODO:

* При первом нажатии изменить, данные для формы не предзагружаются
* Допилить дизайн
* Отрефакторить UpdateForm.vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
