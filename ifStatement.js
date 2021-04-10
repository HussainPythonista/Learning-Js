//If Statement
function ifStatement(age){
    if (age==18){
        console.log("You are Eligible to cast the vote")
    }
    else if (age==17){
        console.log("You -should- wait one Year to cast the Vote")
    
    }
    else{
        console.log("You are a kid, So Fuck off")
    }
}
age=12
ifStatement(age)