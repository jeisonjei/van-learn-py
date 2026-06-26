# ------------------------ #
# ######### DAY 12 ######## #
# ------------------------ #

# So, you already know that python can do a lot of useful things. But if you know only programming - you'll barely create 
# anything that can help ordinary people in their every day life
# Today we'll create something that people (or you) can really use

# TOPIC: Static methods and engineering calculations

# Let's create class to convert Fahrenheit temperature USA people use to Celsius we use in Russia
# Pay attention that here we use methods with no "self" parameter and new thing "@staticmethod" named "decorator"
# If class method has no "self" argument we can execute it from class itself, not from class instance. Such methods named "static"
# because they don't need class instance creation to be executed
# "@staticmethod" decorator tells python your intention to execute methods right from the class, not from class instance.
# This static methods technique is useful when you need to collect different helping methods and execute them with no unnecessary complexity with class instances creation

class TemperatureUnitsConverter:
    @staticmethod
    def fahrenheit_to_celsius(degrees_in_fahrenheit): # No "self"? Why?
        result = (degrees_in_fahrenheit - 32)*(5/9)
        return result
    @staticmethod
    def celsius_to_fahrenheit(degrees_in_celsius): # No "self" again? Why?!
        result = degrees_in_celsius * 9/5 + 32
        return result

result = TemperatureUnitsConverter.fahrenheit_to_celsius(100) # See? We didn't create class instance here
print(result)
    
# TASK0: Run this function to convert temperatures
# TASK1: List order of operators execution in both methods. "Operators" here means "-, +, *, /". Remember that "*, /" operators have higher priority.
# TASK2: Create class to calculate rectangle area and circle area - for circle area formula search Wikipedia
# TASK2 HINT:

import math
PI = math.pi