//Generators
//It is a function that pause a function

//we should place the * in the up of star keyword
/*
const gen=function* functionName(){
        yield the value
        we can yield multiple values in the Generator function
            yield 1
            yield 2
            yield 3
}
*/
/*
we can use the next() keyword to call generator value 
gen.next()
gen.next().value
gen.next().done

Creating Generatore
*/

const gen=function* (){
    yield 1
    yield "Hello world"
    yield true
}

/*
const numberGen=gen()
console.log(numberGen.next().value)
console.log(numberGen.next().value)
console.log(numberGen.next().value)
console.log(numberGen.next().done)
*/

const num=function* (numbers){
    for (let i=0;i<numbers.length;i++){
       yield numbers[i]
    }
}
const number=num([1,2,3])
const interval=setInterval(()=>{
    const next=number.next();
    if (next.done){
        console.log("This generators is Done!!!")
        clearInterval(interval)
    }
    else{
        const numbe=next.value
        console.log(numbe)
    }
},1000)
