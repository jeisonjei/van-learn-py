# ------------------------ #
# ######### DAY 6 ######## #
# ------------------------ #

# TOPIC: "if" "elif" "else" operators

# This is very simple, In fact I think you already know this topic
# Example:

salary = 290234.52
def my_future_work(salary):
    if salary < 50000:
        print("I should learn more and consider looking for a higher paying job.")
    elif salary >= 50000 and salary < 100000:
        print("I am doing well, but there is room for growth.")
    else:
        print("I am in a great position! Keep up the good work and enjoy your life.")

# TASK: execute this function
zarplatochka = my_future_work(salary)
# TASK: create your own method using "if elif else" operators which will
# print something depending on arguments. Hint: what is weather today and will I go somewhere
# depending on it OR you can create any method you want

def cucaracha_tarakans_count(tarakan_count):
  if tarakan_count < 4:
    print("WE NEED MORE CUCARACHA")
  elif tarakan_count >= 4 and tarakan_count < 8:
    print("Ur doin' good mate")
  elif tarakan_count >= 8 and tarakan_count <= 12:
    print("I AM THE UBERCUCARACHA")

tarakan_count = 12

a = cucaracha_tarakans_count(7)
print(a)

# Great! You successfully pass all tasks!