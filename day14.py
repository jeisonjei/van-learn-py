# ------------------------ #
# ######### DAY 14 ######## #
# ------------------------ #

# TOPIC: lists and their methods
# Lists in Python are actually classes and they have their own methods. Today we'll learn 5 of them, let's show them

initial_list = [1,2,3,4,5]
# remove specific element: `remove`
initial_list.remove(1) 
print(f'list_after_removing: {initial_list}')
# append element to the end of the list: `append`
initial_list.append(6)
print(f'list_after_append: {initial_list}')
# reverse list elements: `reverse`
initial_list.reverse()
print(f'list_after_reverse: {initial_list}')
# get to know index of specific list element: `index`
list_index = initial_list.index(2)
print(f'list_index: {list_index}')
# clear list: `clear`
initial_list.clear()
print(f'list_after_clear: {initial_list}')

# TASK0: list at least 3 lists (arrays) methods
# TASK1: create simple function to multiply each given list number by 2. Hint: you'll need to use "for in" cycle and "append" list method