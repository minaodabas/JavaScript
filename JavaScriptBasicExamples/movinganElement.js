const numbers = [1,2,3,4];
const output = move(numbers,0,1);
console.log(output);

function move(array,index,offset){
    const output = [...array];
    const element = output.splice(index,1)[0];



}