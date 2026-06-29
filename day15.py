# ------------------------ #
# ######### DAY 15 ######## #
# ------------------------ #

# Day 15! Wah! You're made great success already!

# Today's TOPIC is strings and operations with them

# For the beginning - you already know lists, and here is what you can do:

# To split text with any character and get list of splitted words, use: `split`
a = "my_useful_text"
b = a.split("_")
print(b) # ['my', 'useful', 'text']

# See? You can use `split` method of string class (yes, strings are classes too in Python) to split string by any symbol - here we split them by `_`

# If you want to replace something in your piece of text, use: `replace`
c = a.replace('my', 'your')
print(c) # 'your_useful_text'

# So, now you know 2 useful strings methods: `split` and `replace`

# Let's know what length is our string `a`

# If you want to know what text length is, use built-in python method: `len`
d = len(a)
print('string length:', d) # 14

# Next - let's check if string has a specific character

# Check if text starts with specific word or characted with: `startswith`
e = a.startswith('my')
print(e) # True

# Find index of specific word or characted with: `find`. If nothing is found method returns `-1`
f = a.find('u')
print(f) # 3

# And finally - if you need to know if text contains specific word or character, you should use: `in` keyword used in such manner
g = 'use' in a
print('g',g)

# TASK0: list 3 useful strings methods
# TASK1: create text, replace some substring in it and print result to the console
# TASK2: create function taking given list of strings and replacing word 'dog' to 'cat' in these strings if word 'dog' is found.
# List example: ['my_dog', 'dog_likes_to_bark', 'dog_need_walk', 'I_m_junior_programmer']
# Hints: use "for in" cycle, use "append list method", use "if" condition, and use some new strings method you're already know (I hope you'll guess with one)

y = "Today_is_Monday"
p = y.replace("Monday", "Sunday")
print(p)

def dog_replacer(list1):
    f = []
    for s in list1:
        if "dog" in s:
            y = s.replace("dog", "cat")
            f.append(y)
        else:
            f.append(s)
    return f

initial_data = ['my_dog', 'dog_likes_to_bark', 'dog_need_walk', 'I_m_junior_programmer']
l = dog_replacer(initial_data)
print(l)

