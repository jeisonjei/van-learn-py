# ------------------------ #
# ######### DAY 8 ######## #
# ------------------------ #

# TOPIC: classes and introduction to an Object Oriented Programming

# In the real world we are dealing with objects, right? We are sleeping on a bed, drinking a tea, going to school etc.
# Why not to bring such real world object virtual copies into programming? Maybe this will simplify our
# ability to create useful programs for the people. And when we have such real world object emulation in
# our programms we call this Object Oriented Programming Style OR OOP
# По-русски это звучит как Объектно-Ориентированное Программирование
# Let's create simple class Dog

class Dog:
    pass

# For now our class does nothing - it is using keyword "pass" to tell python exactly this: do nothing. But we've just created class

# Let's go further. Objects in real world have functions, like this: dog can bark or sleep or eat, car can stay or run, accelecate or turn righ/left, etc
# Now we'll add functions to our Dog class

class Dog:
    def bark(self):
        print("Gav gav!")
    def sleep(self):
        print("Uff.....afff......")

# Good. But what we just did called "class definition" ie we defined a class, but didn't actually create it.
# To create a class instance we well use our magic symbols "()" - remember, we used to use them before?
# Also pay attention to the "self" keyword - this is first default parameter of every class function and we always add it.
# The "self" pointing out on the class instance itself - just remember this for now

import time # Importing time module

doggy = Dog()
doggy.bark()
time.sleep(5) # sleep for 5 seconds
doggy.sleep()

# TASK: learn to understand the difference between class definition and class instantiation

# Here we define some class - Class Definition. Another words we create template with will help us to create as many cats as we want

class Cat:
    def speak(self):
        print("Mew mew")

# And here we create an instance of this Cat class ie we're creating exactly 1 cat here ^_^

kitty = Cat()

# TASK: create simple class with couple of methods and then create an instance of your new class

class Pencil:
    def write(self):
        print("Pshhh... Fwphhh... Swsh...")
    def erase(self):
        print("ffffff.... ffff....")

pencil2 = Pencil()
pencil2.erase()