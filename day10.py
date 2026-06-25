# ------------------------ #
# ######### DAY 10 ######## #
# ------------------------ #

# TOPIC: short introdution to HTTP

# Python can do a looooooooooooooot of interesting and useful things. Today we will learn basics of HTTP protocol and
# how to use python to send web requests

# Let's try simpliest thing: we'll import "requests" library and will use it for sending web requests

from PIL import Image 
from io import BytesIO 
import requests

status = 500 # Try to change this

response = requests.get(f"https://http.cat/{status}") # For now you'll learn simpliest "get" method. Other HTTP methods are: POST, PUT, DELETE - we'll learn them later

content = response.content
url = response.url
print(f'{url}')

img = Image.open(BytesIO(content))
img.show()

# Main thing you shold learn from this is HTTP status codes. Main of them are:
# 200 - SUCCESS
# 404 - NOT FOUND
# 403 - FORBIDDEN
# 400 - BAD REQUEST (Usually appears with POST requests)
# 500 - SERVER ERROR

# TASK0: run this code changing "status" variable
# TASK1: try to print "response.status_code" and you'll see exactly your "status" code
# TASK2: create class definition with some http request functionality then run some method using creating class instance first.
# In your class just send web request and try to print - no need to show images