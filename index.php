<!doctype html>
<html lang="ru">
  <head>
 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title></title>
  </head>
  <body>
    
<div class="container">
    <form id="form" novalidate>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Имя</label>
            <input type="text" class="form-control" id="inputName" >
         
          </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
          <div id="error" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input  type="password" class="form-control" id="password">
          <div id="errorPasswordlenght" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Повторите пароль</label>
            <input type="password" class="form-control" id="password2">
            <div id="errorPassword" class="form-text"></div>
          </div>
          <button id="buttonClear" type="button" class="btn btn-primary">Очистить форму</button>
        <button id="button" type="button" class="btn btn-primary">Отправить</button>
      </form>
    </div>
    <script src="./assets/js/script.js"></script>
  </body>
</html>