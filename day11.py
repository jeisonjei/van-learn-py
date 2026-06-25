# ------------------------ #
# ######### DAY 11 ######## #
# ------------------------ #

# Well, you're seriously learn Python 10 days uninterruptebly. Good for you!

# Today we'll continue to learn what python can do about http requests

# Let's create simple Python web server

from http.server import HTTPServer, SimpleHTTPRequestHandler

LOCAL_HOST = "localhost"
LOCAL_PORT = 8000

my_server = HTTPServer((LOCAL_HOST, LOCAL_PORT), SimpleHTTPRequestHandler)

print(f"Server started at {LOCAL_HOST}:{LOCAL_PORT}")
my_server.serve_forever()

# Now run this program, go to the browser and type url this server serve (Here I hope you'll guess what this url is ^_^)
# Then look at the terminal - you should see your server responses

# TASK0: Look at this code - tell me what HTTPServer is (You can mouseover it and see the hint)
# TASK1: What "serve_forever" is?
# TASK2: Create simple html page (look at day11.html for example), then type in the browser "localhost:8000/{your_file_full_name}", then look at the terminal for server response
# TASK3: Type unexisted filename - what response code do you see in the terminal?

