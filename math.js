
// print negative number to positive number
// const number = -5;
// const output = Math.abs(number);

const number = 2.6398;

//const output = Math.ceil(number);
// const output = Math.floor(number);
//const output = Math.round(number); // put nearest integer

for(let i = 0; i<=10; i++){
    const output = Math.random() * 10;
const rounded = Math.round(output)
console.log(rounded);
}

var a = 5; var b = 8; var c = 4; var d = 6;

var hight = Math.max(a, b, c, d);
console.log(hight);

var a=2; var b=3; if(a<b){
    console.log("Hello");
}

function add(a, b){ return a + b;}

var sum = add(2,3);
console.log(sum);

function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))
  
  var first = "Rafsan";
var second = "Samira";

var temp = first;
first = second;
second = temp;

console.log(first, second);