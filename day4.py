# ------------------------ #
# ######### DAY 4 ######## #
# ------------------------ #

# LIST ITEMS ACCESS

print("                                   ")
print("******** LIST ITEMS ACCESS ********")

# Example

# Let's say we have list of numbers
myStrings = [12,13,14,15,16]

# To access "14" from this list we should do the following
a_day_4 = myStrings[2] # But why index is 2 not 3 ?

# This is because all lists' indexes start from 0 not from 1

# TASK 1 - Create arbitrary list and print a single element you want. Don't
# forget snake_case naming style when naming variables

my_fav_numbers = [13, 16, 32, 64, 1048, 8]
the_best_num = my_fav_numbers[0]
print(the_best_num)

print("                                   ")
print("******** DICTIONARIES *************")

# TASK 2 - Create simple dictionary

squirrel_dictionary = {"a":13, "b":16, "c":14}
ultrasquirrel = squirrel_dictionary["a"]
print(ultrasquirrel)

# Congratulations! You successfully pass DAY 4 !