

//3*3*3*3
// function mult(n){
//     if (n==1) return 3
//    return  3*mult(n-1)
// }
// alert(mult(3))

//Вывести числа от 1 до введенного пользователем (10)
// function number(n){
//     if (n==1) return 1
//     return   n + ' '+number(n-1)
// }
// alert(number(10))

//Вывести число в обратном порядке 123 ->321

// function revers(n){
//     if (n<10) return n
//     return n%10 + ""+revers(Math.floor(n/10)) 
// }
// alert(revers(123))

// const first=()=>{
//     console.log(1);
// }

// const second=()=>{
//     console.log(2);
// }
// setTimeout(first,2000);
// setTimeout(second,1000);

// function hello() {
//     return "Hello";
// }

// function display(name, callback) {
//     alert (callback() + ', ' + name)
// }



// function bye() {
//     return "Bye";
// }

// function display(name, callback) {
//     alert (callback() + ', ' + name)
// }

// display('JS', hello)
// display('JS', bye)

// function makePizza(caption, callback, callback2) {
//     alert(`Заказ на приготовление пиццы ${caption} принят. Ожидайте...`)
//     callback2();
//     setTimeout(callback,3000);

// }
// function response() {
//     alert("Заказ готов")
// }
// function free () {
//     alert("Ожидаю и читаю книгу по JS")
// }

// makePizza('Маргарита',response,free)

//Факториал числа n

// function factorial(n) {
//     if(n===1) return 1;
//     else return n*factorial(n-1);
// }
// alert(factorial(4))

// function deg(n) {
//     if(n===1) return 3;
//     else return 3*deg(n-1);
// }

// alert(deg(5));

// let num = +prompt('Введите число');
// function showNumber(n) {
//     if(n===1) return 1;
//     else return n + ' ' + showNumber(n-1);
// }
// alert(showNumber());

//вывести 12 10 8 6 4 .... до 2

// let num = +prompt('Введите число');
// function showNumber(n) {
//     if(n===2) return 2
//     else return showNumber(n-2) + ' ' (n -2) ;
// }
// alert(showNumber(num));


//выыести число в обратном порядке

// let num = +prompt('Введите число');
// function showNumber(n) {
//     if(n<10) return n
//     return  n%10 + "" + showNumber(Math.floor(n/10))
// }
// alert(showNumber(num))
//--------------------------------------------------------

// 1. Написать функцию, которая проверяет, является ли переданное ей число
// совершенным. Совершенное число – это число, равное сумме всех своих
// собственных делителей ( 6 = 1 + 2 + 3 и 28 = 1 + 2 + 4 + 7+14)

// let num = +prompt('Введите число');
// let sum = 0;
// function calc() {
//     for (let i = 1; i < num; i++) {
//         if (num%i == 0) {
//             sum += i;
//         }
//     }
//     if(sum == num) {
//         alert('Число ' + num + ' является совершенным')
//     }
//     else alert('Число '+ num + ' не является совершенным')
// }
// calc(num)

//--------------------------------------------------------

// 2. Написать функцию возведения числа в степень (Рекурсии)

// let number = +prompt('Введите число');
// let deg = +prompt('Введите степень');
// function expon (number,deg) {

//      if (number==1 || number ==0) 
//      {
//         return number;
//     }
//      if (deg > 1) {
//         return number*expon(number,--deg);
//      }
//      if (number < 1) return 1 / number * expon(number, ++deg);
//      return number;
// }
// alert(expon(number,deg))

//--------------------------------------------------------

// 3. Написать функцию поиска наибольшего общего делителя (Рекурсии???)

// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');
// function gcd(num1, num2) {
//     if (num2 > num1) {
//         return gcd(num2, num1);
//     }
//     if (num2==0) {
//         return num1;
//     }
//     return gcd(num2, num1%num2)
// }
// alert(gcd(num1,num2))

