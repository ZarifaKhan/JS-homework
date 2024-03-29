//Find the occurrence of an integer in the array


let numbers = [1, 2, 3, 2, 3, 4, 5, 5, 6, 1, 1, 4, 5, 7, 8, 8,];

const obj ={}

numbers.map((element)=>{
if(obj[element]){
    obj[element]++
}else{
    obj[element]=1
}
})

console.log(obj)