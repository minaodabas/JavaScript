const numbers = [1,2,3,4]

console.log(includes(numbers,8));

function includes(array , searchElement){
    for(let index of array)
        if(index === searchElement)
            return true;
    return false;

}
