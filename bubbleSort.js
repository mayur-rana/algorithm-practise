function bubbleSort(myArr) {
    for (let i = myArr.length; i > 0; i--){
        for (let j = 0; j < i; j++){
            if (myArr[j] > myArr[j+1]){
                let temp = myArr[j]
                myArr[j] = myArr[j+1]
                myArr[j+1] = temp
            }
        }
    }
    return myArr
}

const a = [7, 6, 3, 9, 16, 14, 5, 4, 25, 1]
const b = [5, -1, 7, -6, 4, 9, 22, 1]
const c = [15, 15, 3, 9, 16, -5, 10, 23, -10, 4, -7, -10]

console.log(bubbleSort(a))
console.log(bubbleSort(b))
console.log(bubbleSort(c))