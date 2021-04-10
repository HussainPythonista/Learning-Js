//The function without the name is called callback function
function callbackExample(name,callback){
    console.log(callback(name));
}
callback=function(name){
    return "Hello "+name;
}
callbackExample("Mohamed Kalanthar Hussain",callback);


//We can write function like this
callbackExampl=(Element)=>{
    return Element%2==0
}//This is function is arrow format
console.log([2,3,1,3,4].every(callbackExampl))
