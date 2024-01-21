

// 7. Створення пустого масиву та заповнення його 10 випадковими числами
document.write("Масив1" + "</br>");
let mas1 = [];
for (let i = 0; i < 10; i++) {
    mas1[i] = Math.random();
    document.write(mas1[i] + '</br> ');
}

// 8. Помноження кожного елемента масиву на 10 та виведення результату
document.write("Масив2" + "</br>");
let mas2 = [];
for (let i = 0; i < 10; i++) {
    mas2[i] = Math.random() * 10;
    document.write(mas2[i] + '</br> ');
}

// 9. Округлення кожного елемента масиву та виведення результату
let mas3 = [];
document.write("Масив3" + "</br>");
for (let i = 0; i < 10; i++) {
    mas3[i] = Math.round(Math.random() * 10);
    document.write(mas3[i] + '</br> ');
}

let addArray = [1, 3, 1, 7, 9];
let filterArray = [1, 3, 1, 7, 9];
let reduceArray = [1, 3, 1, 7, 9];
let findArray = [6, 7, 3, 9, 5, 10, 15];
let fiArray = [27, 7, 3, 9, 5, 10, 15];
let colors = ["Yellow", "Pink", "Blue", "Green"];
let pushArray = [6, 7, 15, 9, 5, 10, 7];
let popArray = [6, 7, 15, 9, 5, 10, 7];
let shiftArray = [6, 7, 15, 9, 5, 10, 7];
let unshiftArray = [6, 7, 15, 9, 5, 10, 7];
let spliceArray = ['Daniil', 'Denis', 'Vitalik', 'Anton', 'Denis'];
let sliceArray = ['Daniil', 'Denis', 'Vitalik', 'Anton', 'Denis'];
let sortArray = [25, 12, 1, 28, 5];

// Метод map
let addArray2 = addArray.map(el => el + 20);
console.log("Mapped Array:", addArray2);

// Метод filter
let filterArray2 = filterArray.filter(el => el === 7 || el === 9);
console.log("Filtered Array:", filterArray2);

// Метод reduce
let reduceArray2 = reduceArray.reduce((total, current) => total * current);
console.log("Reduced Result:", reduceArray2);

// Метод find
let findArray2 = findArray.find(el => el < 15);
console.log("Found Element:", findArray2);

// Метод findIndex
let fiArray2 = fiArray.findIndex(el => el == 15);
console.log("Found Index:", fiArray2);

// Метод indexOf
let result = colors.indexOf("Green");
console.log("Index of 'Green':", result);

// Метод push
let pushed = pushArray.push(14);
console.log("Pushed Element:", pushed);
console.log("Updated Array:", pushArray);

// Метод pop
let popped = popArray.pop();
console.log("Popped Element:", popped);
console.log("Updated Array:", popArray);

// Метод shift
let shifted = shiftArray.shift();
console.log("Shifted Element:", shifted);
console.log("Updated Array:", shiftArray);

// Метод unshift
let unshifted = unshiftArray.unshift(5, 6, 7);
console.log("Unshifted Length:", unshifted);
console.log("Updated Array:", unshiftArray);

// Метод splice
spliceArray.splice(4, 1, 'Maksim');
console.log("Spliced Array:", spliceArray);

// Метод slice
let sliced = sliceArray.slice(1, 4);
console.log("Sliced Array:", sliced);

// Метод sort
sortArray.sort((firstEl, secondEl) => firstEl - secondEl);
console.log("Sorted Array:", sortArray);