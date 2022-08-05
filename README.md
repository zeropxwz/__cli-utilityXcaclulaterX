# cli-calculater  

### установка
скомпилировать утилитой pkg файл ./public/index/index.js  
```sh
pkg index.js
```
добавить скомпилированный исполняемый файл в /bin  

### использование 
при вызове утилиты просто передавайте математическое выражение в аргументы  
```sh
calc 2 + 2
```
операции выполняются последовательно одна за другой  
```sh
calc 2 + 2 * 2 # результат будет равен 8, а не 6 как в классическом математическом выражении
```
