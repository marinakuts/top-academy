// 1. Создать массив из n элементов массива (через push), пользователь
// вводит данные

let arr = [];
function array() {
    let n = prompt('Введите количество элементов массива')
    for (let i = 0; i <n; i++) {
    // let elem = prompt('Введите значение элемента массива');
    // arr.push(elem);
    arr.push(prompt('Введите значение элемента массива')); 
}
return arr;
}
alert (`Поздравляем! Вы создали массив: ${array()}`);

//---------------------------------
// 2. Создать новый массив только положительных чисел из ранее заданного
// массива
let arrPositive = [];
for (let z = 0; z < arr.length; z++) {
    if (arr[z]>0) {
        arrPositive.push(arr[z]);
    }
}
alert(`Положительные числа массива: ${arrPositive}`);

//---------------------------------
// 3. Подсчитать количество четных элементов ранее заданного массива

let arrEven = [];
let k = 0;
for (let j = 0; j < arr.length; j++) {
    if (arr[j]%2==0) {
        ++k;
    }
}
alert(`Число четных элементов массива arr: ${k}`);

// 4. Заменить все отрицательные элементы на нули

let arrReplase = arr.slice();
for (let x = 0; x < arrReplase.length; x++) {
    if (arrReplase[x] < 0) {
        console.log(arrReplase[x]);
        arrReplase.splice(x,1,0);
    }

}
alert(`Теперь все отрицательные числа массива arr - заменены на нули: ${arrReplase}`);

// 5. Последний элемент массива перенести на первую позицию
// (использовать методы стека/очереди)

let arrChange = arr.slice();
let lastElem = arrChange.pop();
let firstElem = arrChange.shift();
arrChange = [lastElem,...arrChange,firstElem];
alert(`Теперь мы поменяли местами первый и последний символы массива: ${arrChange}`);




