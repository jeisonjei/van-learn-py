# -------------------------------- #
# ########### DAY 3 ############## #
# -------------------------------- #

# "for in" cycle:

# create list of any values and print every value using "for in" cycle

listA = ['I', 'love', 'python']
for myString in listA:
  print(myString)

  chillowechka_list = ["Really", 'chill', 'owechka', "(Made In Python)"] # Great!
  for chillowechka in chillowechka_list:
    print(chillowechka)

# Great!

# What mistakes you can find in your variables naming style?

# I didn't find mistakes, because : List name is "Chillowechka", and list contains "Really" "Chill" "Owechka", Bobr after "for" is disguise, because bobr-spy has alerdy breach our defenses

# Good try .... ha-ha-ha

# I'd name the following:
  # - list variable should point out that it is containing list. So maybe "ChillowechkaParts" or "ChillowechkaWords" would be better
  # - another issue is that in Python

  gd_lvl_list = ["Stereo Madness", "Back on Track", "Polargeist", "Dry Out", "Base After Base", "Fingerdash", "Dash", "Blast Processing", "Geometrical Dominator", "Deadlocked"]

  counter = 0
  for my_fav_lvl in gd_lvl_list:
    counter = counter + 1
    print(f'{counter}_{my_fav_lvl}')