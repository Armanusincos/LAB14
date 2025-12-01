function factorial(n) {
    if (n < 0) return null;
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}


function findMax(arr) {
    return Math.max(...arr);
}


function findMaxBroken(arr) {
    let max = 0   
    for (let i = 0 i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}



function findMaxFixed(arr) {
    let max = arr[0];    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}



function detectError(arr) {
    const broken = findMaxBroken(arr);
    const correct = findMaxFixed(arr);

   
    if (broken !== correct) {
        return "⚠ Обнаружена ошибка в findMaxBroken():\n" +
               "Функция вернула " + broken + ", но правильное значение — " + correct;
    }

    
    if (!arr.includes(broken)) {
        return "⚠ findMaxBroken() вернула число, которого нет в массиве: " + broken;
    }

    return "Ошибок не обнаружено.";
}


function runDemo() {
    const out = document.getElementById("output");

    const fact = factorial(5);

    const testArray = [-5, -2, -9];

    const maxCorrect = findMax(testArray);
    const maxBroken = findMaxBroken(testArray);
    const maxFixed = findMaxFixed(testArray);
    const errorCheck = detectError(testArray);

    out.textContent =
        "factorial(5) = " + fact + "\n" +
        "Массив: [" + testArray.join(", ") + "]\n\n" +
        "findMax = " + maxCorrect + "\n" +
        "findMaxBroken = " + maxBroken + "\n" +
        "findMaxFixed = " + maxFixed + "\n\n" +
        errorCheck;
}
