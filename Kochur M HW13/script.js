// Задание - Создать массив из 10 случайных чисел
// (Math.floor(Math.random() * 10)) и написать функции для
// работы с ним:

function getArray(n) {
        let number = [];
        for (let i = 0; i<n; i++) {
            number.push(Math.floor(Math.random()*10))
        }
        return number;
    }
    console.log('get Array', getArray(10));
//-----------------------------------------------------------------
// ● функция принимает массив возвращает новый массив,
// состоящий из разницы максимального и текущего
// элемента

let numberOrigin = getArray(10);
console.log('numberOrigin', numberOrigin);


let numberDifference = numberOrigin.map(function (item) {
    let max = numberOrigin.reduce(function(temp,item){
    return temp = temp<item ? item : temp
    });

    if (max>item) return max-item
    else if (max=item) return item
});
console.log('numberDifference',numberDifference);

//-----------------------------------------------------------------
// ● функция принимает массив и возвращает новый массив
// при условии, что в исходном массиве есть элемент равный
// 0 и новый массив будет состоять из всех элементов до
// первого 0. Например из массива [1,3,0,4,2,0,5,6] будет
// сформирован новый массив, состоящий из чисел до
// первого нуля [1,3]

let numberСut = (index) => {
   index = numberOrigin.indexOf(0);
   return numberOrigin.slice(0,index)
};

console.log('numberCut', numberСut());

//-----------------------------------------------------------------
// ● *Функция принимает массив и возвращает его без
// повторяющихся элементов
// При выполнении задания можете использовать следующие
// методы: push(), reduce(), splice(), map(), slice(), filter()

let numberNorepeat = [];
numberOrigin.forEach (function(item) {

    let k = 0;
    for (let i = 0; i < numberOrigin.length; i++) {

        if (item == numberOrigin[i]) {
            ++k;
        }
    }
        if (k == 1) {
        numberNorepeat.push(item)
    }
});
console.log('numberNorepeat',numberNorepeat);
