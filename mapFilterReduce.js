//map Function
//This only work with arrays
function mapedValue(){
    var listValue=[3,2,1,3,8,1,3,1]
    var mapedValue=listValue.map(function(n){
        n+=1
        return n
    });
    console.log(mapedValue)
}
function filteredValue(){
    var listValue=[3,2,1,3,8,1,3,1]
    var filteredValue=listValue.filter(function(n){
        if (n%2==0){
            return n +" is Even"
        }

    });
    console.log(filteredValue)
}

function reducedValue(){
    var listValue=[3,2,1,3,8,1,3,1]
    var filteredValue=listValue.reduce(function(accumulate,current){
       accumulate=accumulate+current
       return  accumulate
        
    });
    console.log(filteredValue)
}
reducedValue()
