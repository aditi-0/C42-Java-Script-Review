//data types

//string
var a="aditi";
console.log(a);
console.log(a.toUpperCase());

//number 
var b= 11
console.log(b);

console.log(parseInt("4"));

//boolean
var c=true;
console.log(c);

//undefined
var d;
console.log(d);

//null
var d=null;
console.log(d);

//arithmetic operators
console.log(11+4);
console.log(234*12);
console.log(2-1);
console.log(81/3);
console.log(11%5);
console.log(21/0);

//comparative operators
console.log(24>23);
console.log(234<2);
console.log(0===0);
console.log(21!==4);

//conditional operator
if(7>5){
  console.log("7 is greater")

}
else{
  console.log("5 is greater")
}

if(7<5){
  console.log("7 is greater")

}
else{
  console.log("5 is greater")
}

if(10===20){
  console.log("true");
}
else{
  console.log("false");
}

//for loop
//displaying numbers from 1-10
for(var i=1;i<=10;i++){
  console.log(i);
}

//displaying numbers from 23-37
for(var j=23;j<=37;j++){
  console.log(j);
}

//while loop
//displaying numbers from 36 to 42
var k=36;
while(k<=42){
console.log(k);
k=k+1

}

//creating functions
function add(numb1,numb2){
var sum=numb1+numb2;
return sum;
}

console.log(add(12,42));

function multiplication(numb1,numb2){
var product=numb1*numb2;
return product;
}

console.log(multiplication(11,4));