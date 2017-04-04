let globalArray = {};
let counter = 0;
function getTypeOf(n){
    let str = typeof n;
    globalArray[counter++] = str;
    return str;
}
console.log(getTypeOf(1));
console.log(getTypeOf("lol"));
console.log(getTypeOf({}));
console.log(getTypeOf(true));
console.log(getTypeOf(undefined));
console.log(getTypeOf(function(){} ));
console.log(globalArray);