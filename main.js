// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
// Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

<<<<<<< HEAD
function solution(num) {
    let counter = 0
    for(let i = 3; i < num; i++) {
        if(i % 3 === 0 || i % 5 ===0) {
            counter += i
        }
    }
    return counter
}
console.log(solution(10)) // returns (3 + 5 + 6 + 9) = 23
=======
function solution (num) {
    let counter = 0
    for(let i = 3; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            counter += i
        }
    }
    return counter 
}
console.log(solution(10))




// function solution (num) {
//     let counter = 0
//     for ( let i = 3; i < num; i++) {
//         if(i % 3 === 0 || i % 5 === 0) {
//             counter += i
//         }
//     }
//     return counter
// }
// console.log(solution(10))

// function result (number) {
//     let addition = 0
//     for(let i = 3; i < number; i++)
//         if(i % 3 === 0 || i % 5 === 0) {
//             addition += i
//         }
//         return addition
// }
// console.log(result(10))
>>>>>>> ec7940802c76ed39f3623a90f5a66ff4a7172721
<<<<<<< HEAD

function fizzBuzz(num) {
    for(let i = 0; i <= num) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log('FizzBuzz')
        }else if(i % 3 === 0) {
            console.log('Fizz')
        }else if(i % 5 === 0) {
            console.log('Buzz')
        }else {
            console.log(i)
        }
    }
}
fizzBuzz(100)
=======
>>>>>>> 306b273ab0a40d89ce674f33462356fd72388e7a
