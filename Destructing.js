let user=["Mia Khalifa","Lisa Ann","Sasha Grey","Kiara Mia"]
/*
var top="Mia Khalifa"
var second="Lisa Ann"
var third="Sasha Grey"
var fourth="Kiara Mia"
*/
// we use below statement instead of above statement
const [top,second,third,fourth]=user;



///In objects
console.log("Hello world")

var person1={
    name:"Mohamed Kalanthar Hussain",
    age:23,
    address:{
        DoorNo:1058,
        street:"Satham Nagar",
        city: "Kottaipattinam"
    }
}
/*
var name=person.name
var age=person.age
var city=person.city
console.log(name)
*/
//We use below statement instead of above statement
console.log(person1.address.DoorNo)
var {name,age,address:{DoorNo,street,city}}=person1
//We can write like that
var {name:theName,age:theAge,address:{DoorNo:no,street:s,city:c}}=person1
//After the : all are Variable
console.log(street,s)//Both of them return same Value


