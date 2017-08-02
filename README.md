# Обзор 
Демонстрация платежных методов и взаимодействия с QIWI кошельком.

Приложение для Node.js спроектировано для визуализации возможностей продуктов QIWI и показывает наиболее эффективный подход к их реализаци для вашего бизнеса.
Вы можете использовать данное приложение как для ознакомления с примерами интеграций, так использовать готовый исходный код в ваших приложениях. 
Для запуска приложения вам понадобится 

* Склонировать репозиторий, установить зависимости и запустить приложение
~~~shell
git clone https://github.com/QIWI-API/demo-app.git
cd demo-app/Node
npm install
npm start
~~~

# Файл конфигурации
Данные авторизации и другие параметры вынесены в конфигурационный файл. 
~~~shell
Node/server/config.js
~~~

# QIWI pull-payments demo application
Собранные в приложении примеры расположены в папке *node/examples*

API|Описание|Возможности|
---------|--------|---
*pull-payments-example*|API для работ со счетами и интеграции в вашем интернем магазине|Выставление и отмена счета, проверка статуса, платежная веб-форма|
*pull-payments-white-label-example*|Мобильная коммерция white label|Выставление счета, оплата с баланса мобильного оператора, подтверждение платежа по смс
