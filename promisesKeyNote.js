/*
if i send use HTTP Request to the server but In Server has two state
1.Data Found
2.Data NotFound
if requested data found in server it will retrives the data
else:
    the Server will retrive the data is Not Found

*/

console.log("Hello world")
/*
This Promise Key Note Has Three State

I).Pending:
    intial state,not fulfilled or rejected

II).Fulfilled:
    Meaning that the operation completed successfully

    we use:
        .then()->To perform some operations

III).Rejected:
    Meaning that operation is Failed

    we use:
        .catch()->To Perform Some Operations
*/

//If we want to use Promese we should use promise Object


/*
const promise=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve("The datas are coming from server")
    },3000);
    setTimeout(()=>{
        rejected("The data are not Found")
    },3000)
});
promise.then(response=>{
    console.log(response)

}).catch(error =>{
   console.log(error)
})
*/

///Promise.All

const namepromise=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve(['Chole',"Julianna Vega","Priya Price","Diamond Jackson"])
    },3000);
    setTimeout(()=>{
        rejected("The data are not Found")
    },3000)
});


const surnamepromise=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve(['Lamour',"Mia Khalifa","Luna Star","Angela White"])
    },3000);
    setTimeout(()=>{
        rejected("The data are not Found")
    },3000);
});
Promise.all([namepromise,surnamepromise]).then(data=>{
   const [namepromise,surnamepromise]=data
   for (var i=0;i<namepromise.length;i++){
       console.log(`${namepromise[i]} ${surnamepromise[i]}`)
   }
}).catch(error=>{
    console.log(error)
});






