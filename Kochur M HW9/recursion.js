

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

