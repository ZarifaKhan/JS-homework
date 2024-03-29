//Move all the negative elements to one side of the array

let negativeElement = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ]; 


let negative = negativeElement.sort((a,b)=>{
     return a-b
    
})

console.log(negative)
