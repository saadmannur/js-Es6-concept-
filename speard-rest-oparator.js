// rest operator....
function restOperator(a, b, ...rest) {
    console.log(a, b, rest)
}

restOperator(1, 4, 5, 7, 3, 5, 7, 9, 3, 7, 3,)

// spread operator.....

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const array2 = [9, 10, 11, 12, 13, 14, 15]
const array3 = [...array, ...array2]
console.log(array3)
const array4 = [...array]

array.push(500, 100)
// array.push(200)
console.log(array)
console.log(array4)
