// problem 2

let array =[2,-5,3,-4,5,2];
let sum=0;
for(let i=0; i<array.length; i++){
    if(array[i] > 0){
        sum+= array[i]
    }
}
console.log(sum);