class Animal:
    counter=0#Class Variable
    #we define the class variable outside the methods
    #All the object can access and use that variable
    #This one is maily used in Python
    #class variable are remain same in all created objects

    def __init__(self,type=None,age=None):
        #This is init in python
        #The below variables are called Instance variable
        #Instance Variables are owned by instance of class
        #fo each object,instance variable are different
        #Every time we create object using class are different variables

        self.type=type
        self.age=age
        Animal.counter=Animal.counter+1 #class Variable
        #I can call wherever I want):
    def typeAnimal(self):
        print(f"The Type of animal is {self.type}")
    @classmethod
    def numberOfClassCalls(cls):#We can call class method both object and Class to 
        print(Animal.counter)
animal=Animal()
animal.type="Cat"
animal.typeAnimal()

cat=Animal()

dog=Animal()
animal.numberOfClassCalls()
    


class calculatePercentage:
    def __init__(self,name=None,marks=None):
        self.marks=marks
        self.name=name
    def displayPercentage(self):
        print(f"{self.name} has scored {self.marks}%")
    @classmethod
    def percentage(cls,name,marks):
        return cls(name,round(marks/600*100,2))
#percent=calculatePercentage()
name="Mohamed Kalanthar Hussain"
marks=572
#percent.marks=(round(572/600,2)*100)
#percent.percentage(name,marks)
#percent.displayPercentage()
##Whenever i create the object I want to convert the marks in percentage
#So i can perform same operation in class method also

s2=calculatePercentage.percentage(name,marks)       
s2.displayPercentage()

#In Instance method we pass the Object(self)
#But In class Method we pass def name(cls)->class
#We use Class Decorators @classmethod