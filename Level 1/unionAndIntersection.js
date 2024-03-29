//Find the Union and Intersection of the two sorted arrays

let a = [6, 2];
let b = [85, 25, 1, 32, 54, 6];
let c = [85, 2];


let concat = [...a,...b,...c]

let unique = new Set(concat)
console.log(unique)
