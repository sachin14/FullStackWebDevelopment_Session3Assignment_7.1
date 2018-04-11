
//initializing variables
var num1 = -8;
var num2 = 12.5;
var num3 = -6.769;
var num4 = 0;
var num5 = -1;

//initialize largest number as num1 to start with
var largestNumber = num1;

//Finding largest number

if(num2 > largestNumber){
    largestNumber = num2;
}else if(num3 > largestNumber){
    largestNumber = num3;
}else if(num4 > largestNumber){
    largestNumber = num4;
}else{
    largestNumber = num5;
}

//printing largest number
console.log('Largest number is: ' + largestNumber);