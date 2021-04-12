const listPornstar1=["Julia Ann","lisa Ann","Mia Malkova","Nicholate shea","Rome rain"]
const listPornstar2=["Mia Khalifa","nadia Ali","Pheonix Marie","Priya rai","Valentina Nappi"]
const listPornstar3=["Diamond Jackson","Diamond Kitty","Gina Valentine","Bridgette B","Luna Star"]
//We should use spread operator by [...]
const concatArray=[...listPornstar1,...listPornstar2,...listPornstar3]
concatArray.forEach(function(index,name){
    console.log(name,"-",index)
})

console.log(listPornstar1)

const name="Kiara Mia"
const toLetter=[...name]
toLetter.forEach(function(letter){
    console.log(letter)
})

function addnum(n){
   
    var val=n[0]
    for (let i=1;i<n.length;i++){
        val+=n[i]
        
    }
    return val
}

const numbers=[2,3,1,4]

//var sepNumbers=addnum(numbers)







//Spread Function in Objects

const address={
   DoorNo:1058,
   StreetName:"Satham Nagar",
   city:"Kottaipattinam",
   Dist:"Pudukottai"
}

const nameDetails={
    first_name:"Mohamed",
    middle_name:"Kalanthar",
    last_name:"Hussain"
}

//We can use spread operator to combine both objects
const person={...nameDetails,...address}
console.log(person)
