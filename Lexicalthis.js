const person={
    name:"Mohamed Kalanthar Hussain",
    favoritePornstars:["Mia Khalifa","chole lamour","Angela White","Priya rai"],
    details:function(){
        //console.log("These are ",this.name+"'s Favorite Pornstars ")
        this.favoritePornstars.forEach(function(names){
            console.log(this.name+" favorite pornstar is "+ names)
        }.bind(this))//We bind the this because we lost the connection in top name
    }
}
person.details();

//this means the function by itself