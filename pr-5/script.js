let globalArray = {};
let counter = 0;
function getTypeOf(n){
    let str = typeof n;
    globalArray[counter++] = str;
    return str;
}
console.log(getTypeOf(1));
console.log(getTypeOf(1));
console.log(getTypeOf(1));
console.log(globalArray);