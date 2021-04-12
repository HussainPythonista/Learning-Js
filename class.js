/*
In common there are 2 Types of Variable
    1.Instance Variable
    2.Class Variable
and 3 Types of methods
    1.Instance Method
    2.Static Method
    3.Class Method
 */

class Animal{
    //const value=0 
    //we define the class variable outside the methods
    //All the object can access and use that variable
    //This one is maily used in Python
    //class variable are remain same in all created objects
    
    constructor(type=null,age=null){
        //This is init in python
        //The below variables are called Instance variable
        //Instance Variables are owned by instance of class
        //fo each object,instance variable are different
        //Every time we create object using class are different variables

        this.type=type
        this.age=age
    }
    walk(){
        //This one is comon in all language
        //This one is commonly used method
        //They can access unique data of their instance
        console.log(this.type+" is Walking")
    }
    talk(){
        console.log(this.type+ " is Talking")

    }
    old(breed){
        console.log("The Given "+this.type +" is "+breed+" and the Age is "+this.age)

        //console.log(this.name +" is "+this.age+" years Old")
    }
    //Static keyword allow us to create methods or properties that belongs the actual class not to the each individual object that we instantiate
    //
    static staticMethod(){
        console.log("Static method in animal")
    }
}

class Cat extends Animal{
    constructor(type,age){
        
        super(type,age)
    
    }
    breed(){
        console.log("The given Cat is "+ this.breed)
    }
    catAge(breed=null){
        super.old(breed)
   }


}

class Dog extends Animal{
    constructor(type,age){
        super(type,age)
    
    }
    breed(){
        console.log("The given dog is "+ this.breed)
    }
    dogAge(breed=null){
        super.old(breed)
   }


}
Animal.staticMethod()//We should call static like that


animal.staticMethod()


const cat=new Cat()
cat.type="Cat"
cat.age=2
//cat.breed("Tiger")
cat.age=2
cat.catAge("Pussey Cat")
const dog=new Dog()
dog.type="dog"
dog.age=2
dog.dogAge("Bull dog")


