const business = 950;
const minister = 750;
const army = 600;

// we can use here if else but we will use another method 



if (business > minister && business > army) {
    console.log('Business is bigger');
}

else if(minister > business && minister > army){
    console.log('Minister is bigger');
}

else {
    console.log('Army is bigger');
}

console.log(Math.max(business, minister, army))


function findmax(first, second, third){

    if(first > second && first >third){
        return first;
    }

    else if (second >first && second > third){
        return second;
    }

    else {
        return third;
    }
}

const large = findmax(200, 700, 400);
console.log(large);