// function largestArrayElement(numbers){
// let largest = 0;

// for (let i=0; i<numbers.length; i++){
// let element = numbers[i];
    
// if(element > largest){
//     largest = element;
// }
  
// }
// return largest;


// }

// const age = [23, 45,67,57, 33, 90]
// const largeArraElement = largestArrayElement(age);
// console.log(largeArraElement);

function largestArrayElement(numbers){
    let largest = 0;
    
    for (let i=0; i<numbers.length; i++){
    let element = numbers[i];
        
    if(element > largest){
        largest = element;
    }
      
    }
    return largest;
    
    
    }
    
    const age = [200, 45,67,57, 33, 90]
    const largeArraElement = largestArrayElement(age);
    console.log(largeArraElement);