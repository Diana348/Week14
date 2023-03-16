# Week14
/ ------------- Вопрос 1 ------------- /
Массив - вид обьекта, в котором может хранится коллекция элементов, например: числа, строки, другие массивы и т.д. Элементы в нем нумеруются и хранятся в том порядке, в котором их поместили в массив. Элементов может быть сколько угодно и они могут быть какими-угодно.

/ ------------- Вопрос 2 ------------- /
элементы массива нумеруются слева-направо, начиная с 0.

/ ------------- Вопрос 3 ------------- /
массив может иметь множество значений

/ ------------- Вопрос 4 ------------- /
<form action="start.php" method="post" name="fld">
	<input type="text" name="field" value="Text field">
	<input type="submit" value="Старт" name="btn">
</form>

Получить значение текстового поля: textContent = document.fld.field.value;

/ ------------- Вопрос 5 ------------- /
let mas = new Array(2);
mas[3] = 5;
console.log(mas[3]); // результат 5

/ ------------- Вопрос 6 ------------- /
let mas = new Array(2);
mas[3] = 5;
console.log(mas3); // результат mas3 is not defined 

/ ------------- Вопрос 7 ------------- /
new Array() - еще один вариант создания массива, но он редко используется.
*если new Array() вызывается с одним аргументом, который является числом, то он создает массив без элементов, но с заданной этим числом длинной.

/ ------------- Вопрос 8 ------------- /
да, массив может состоять из элементов разных типов: строк, чисел, функций 

/ ------------- Вопрос 9 ------------- /
let a = new Array(2);
a[1] = null; // длинна массива 2

/ ------------- Вопрос 10 ------------- /
const students = [“Lena", “Olya", "Ylia", "Roma" ,  "Vova" ];
console.log(students[3]); // результат Invalid or unexpected token

но, если в первых 2-х элементах массива поменять кавычки, то консоль выведет "Roma"

/ ------------- Вопрос 11 ------------- /
const fruits = [ "Груша", "Яблоко", "Лимон", "Ананас",];
console.log(fruits.shift()); 

console.log(fruits); // результат ["Яблоко","Лимон","Ананас"]