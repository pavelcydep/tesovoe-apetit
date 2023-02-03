# Тестовое задание для компании "Аппетит"

Нужно сверстать стандартную html форму со следующими полями:
- Имя;
- Email;
- Пароль;
- Повторите пароль;
- Кнопка "Очистить форму";
- Кнопка "Отправить".

При отправке формы, нужна js-валидация по следующим параметрам:
- Имя не должно быть пустым;
- Email не должен быть пустым, в email должен быть один символ @ и как минимум одна точка;
- Пароль не должен быть пустым, в пароле минимум 6 символов
- Повторение пароля должно совпадать с полем Пароль.
Кнопка "Очистить форму", должна очищать все поля.

При отправке формы, php должен обработать полученный результат, а именно:
- Проверить, все ли поля были заполненны;
- Сравнить пароли на совпадение;
- Сделать sql запрос к таблице users, и проверить есть ли строка с таким email;
- Сделать sql запрос к таблице users и создать новго пользователя в таблице.

Ответы на вопросы и результаты практического задания нужно отправить на email: mfrf@bk.ru
