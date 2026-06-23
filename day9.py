# ------------------------ #
# ######### DAY 9 ######## #
# ------------------------ #

# This is day 9. You already made good progress! Today we'll continue to lear classes as we started in day8
# TOPIC: python classes state. So this is a topic of today lesson, but for the beginning let's clarify something from day8
# Do you remember how you've created a class withough parenthesis yesterday?

class Dog:
    def bark():
        print("Gav gav!")
    def sleep():
        print("Zzzzz.........")

# And I remember you did this:

doggy = Dog
doggy.bark()

# And surprisingly this worked, right?
# But now try to get type of this "doggy" object

print(type(doggy)) # <class 'type'> - WHAT? WHY?

# This is because we just assign CLASS DEFINITION to "doggy", we didn't create a class instance

# And now let's create dog instance correctly, with parenthesis:

# doggy1 = Dog()
# doggy1.bark() # TypeError: Dog.bark() takes 0 positional arguments but 1 was given - ERROR! BUT WHY?

# We should usually assign "self" parameter - this is class instance reference
# So, correct class definition will be

class Dog:
    def bark(self):
        print("Gav gav!")
    def sleep(self):
        print("Zzzzzz..........")

doggy1 = Dog()
doggy1.bark()

# And now let's try to know type of "doggy1"

print(type(doggy1)) # <class '__main__.Dog'> - class instance! GREAT!!

# Now let's go to today topic, we'll try to pass it fast
# Along with methods classes can contain fields. So class instance can have some STATE
# Let's demonstrate this

class SuperDog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def bark(self):
        print("Gav gav!")
    def sleep(self):
        print("Zzzzzz......")
    def what_is_my_name(self):
        print(f'My name is {self.name}')

superDoggy = SuperDog("Rex", 11)
superDoggy.what_is_my_name() # My name is Rex! GREAT!!

# Have you noticed new "__init__" method in the "SuperDog"? This method is called "class constructor"
# New "name" and "age" elements called "class instance attributes" - each dog has its own name and age

# That's it for today

# TASK0: explain difference between "class definition" and "class instance" - How you'd describe them?
# TASK1: explain why we should not create class instance withough parenthesis (and actually we can't)
# TASK2: create your own class with attributes, explain (imagine) what attributes can be useful when we're creating class instance


class WashingMachine:
    def __init__(self, serial_number, version):
        self.serial_number = serial_number
        self.version = version
    def wash(self):
        print("Doing the dishes")
    def clear_space(self):
        print("self-washing")

washing_machine1 = WashingMachine("RK141234", "2.22")
washing_machine1.wash()
washing_machine1.clear_space()

