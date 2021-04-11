//If we use const keyword before the declare variabe,It does not allow us to reassign the existing value
//Example...
var name="Mohamed Kalanthar Hussain"
name=23
name="kottaipattinam"
console.log(name)//---->It will return name as "Kottaipatinam"--->Because it reassign the existing value

//But If I use const keyword,It will raise the error if i change the variable
//Example..
const city="Kottaippatinam"
city="Mumbai"

city="Chennai"
//It will raise the error as "Assignment to constant variable."

