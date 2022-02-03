const numbers = [44, 23, 24, 45, 5, 6, 42, 64];
let sum = 0;
for(let i = 0; i<numbers.length; i++){
    const element = numbers[i];
  
   sum = sum + element;
}

console.log(sum);


function arraytotal(number){
let sum = 0;
for(let i=0; i<number.length; i++){
    const element = numbers[i];
    sum = sum + element;
   
}
return sum;
}

const total = arraytotal( [44, 23, 24, 45, 5, 6, 42, 64]);
console.log(total);