//Switch Statement
var person={
    name:"Mohamed kalanthar Hussain",
    age:1
}//This is dictionary in JavaScript

function switchStatement(person){
    switch (person.age) {
        case 17:
            console.log(person.name+" is to be a adult")
            break
            
        case 18:
            console.log(person.name+" You are eligible to cast Vote")
        
            break
        
        
        default:
            console.log("You are supposed to be a kid , So fuck off")

            break;
    }

}
switchStatement(person)