# mvp-bookmark-manager

MVP позволяет посмотреть список Закладок (например fetchBookmarksList сейчас возвращает пример массива, который можно получать по апи)
Что можно -

* Добавлять закладки
* Удалять закладки
* Редактировать закладки

Если поля пустые, показывает предупреждение.

Все изменения хранятся только в store и пропадают при перезагрузке страницы.

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
