let obj = {};
obj.name = "Ivan";
obj.surName = "Ivanov";
obj.middleName  = 6;
obj.firstMethod = function(){
    alert("Метод 1");
}
obj.SecondMethod = function(){
    alert("Метод 2");
}

let getInfo = (obj) =>{
    let counterMea = 0;
    let counterMet = 0;
    let strCountMea="";
    for(let i in obj){
        if(typeof obj[i] != "function"){
            strCountMea += " "+ obj[i];
            counterMea++;
        }
        else{
            counterMet++;
        }
    }
    alert("Количество значений: "+counterMea+"\nВывожу значения: "+ strCountMea+"\nКоличество методов: "+counterMet);
}
getInfo(obj);