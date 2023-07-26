
// problem 1

// let str= "hello world";
// let f = str.split("").reverse().join("")
// console.log(f);



// problem 2

// let array =[2,-5,3,-4,5,2];
// let sum=0;
// for(let i=0; i<array.length; i++){
//     if(array[i] > 0){
//         sum+= array[i]
//     }
// }
// console.log(sum);





// problem 3


// let array= [1,2,3,22,4,5,4,4,5,5,5,5,5,7];
// let itmap={};
// let value =0;
// let count = 0;

// for(let i of array){
//     if(itmap[i]== null){
//          itmap[i]= 1
//     }
//     else{
//         itmap[i]++
//     }

//     if(itmap[i] > count){
//         value=i;
//         count = itmap[i]
//     }
// }

// console.log(`Value : ${value}, Count : ${count}`)

const givenArray = [1,2, 3, 4, 1,3,3,3, 2, 3, 4];

const maxValue = givenArray.reduce((previous, current, _, arr) => {
  if (
    arr.filter((item) => item === previous).length >
    arr.filter((item) => item === current).length
  ) {
    return previous;
  } else {
    return current;
  }
});

console.log(`Element with highest frequency: ${maxValue}`);