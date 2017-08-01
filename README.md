## Background & Objectives

In this challenge, you will play with an API we provide: the **wagon-chat** API.
This API will allow you to chat and post some gossips on your wagon-mates 😉

Throughout this exercise, you'll have to make `GET` and `POST` requests to an API coded by Le Wagon teachers.

You'll use AJAX calls and implement a dynamic chat-room where you view the latest messages and you can post a new one.

## Specs

### View logic

In the `src/App.js` file of the challenge, you'll find an HTML form `#comment-form` with two inputs (`#your-message` and `#your-name`), and a list of messages. Where are the "sample message from John" messages coming from in the code? <!--Start by coding a simple jQuery script to dynamically insert a new comment submitted with the form on the top of the comments' list, without reloading all the page.-->

<!--This is a basic jQuery exercise, no AJAX involved yet! **Hint**: You'll have to prevent the default behavior of the form submission in jQuery (using the `preventDefault()` method).-->

Start by following the flow of the messages, from index.js to src/App.js in the App component, through the Messages component, into the Message component.

Quiz: why are there two sample messages shown in the list rather than one or none?

In index.js you'll find there is an object with two empty dummy messages.

### Update the JSX to render the real messages

Your first task is to replace the dummy messages with sample messages from [the API](https://github.com/lewagon/wagon-chat-api/blob/master/README.md). You can get a real message from the real API or if none of your classmates have posted any comments yet, there is a JSON object on the API documentation page which you can simply copy and paste into your index.js to use as an example while you create your React code to render it.

In the Message component, there is dummy markup returned, with the same sample message returned every time.

Replace this with the actual JSX necessary to display the actual content of the message, the user name, and (optionally) the created time.

Remember the [JSX syntax](https://facebook.github.io/react/docs/introducing-jsx.html) and review the Facebook documentation as needed.

### Fetch recent messages

In the markup, you'll find a `#refresh` button that should reload all the comments for your promotion and make you discover what your mates have posted on the wall!

Find the get_messages() function inside src/index.js.
The button is already wired up to this function for you.
You will need to use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to do the GET request to the API.
Again, you have to read the [the documentation of the API](https://github.com/lewagon/wagon-chat-api/blob/master/README.md) to see how this request is structured and what the API will return.

Before you touch your code, use [curl](https://en.wikipedia.org/wiki/CURL) to test your GET request.
Then write your fetch code once you have the request working with curl.

If you don't remember how to use curl, use `man curl` to read the helpful man page.
Curl has a lot of options.
If you work with HTTP and REST APIs, `curl` is going to become your best friend.

When you write your code using fetch(), first, just make sure you are getting the messages and `console.log()` them once you get the response.

Secondly, use these to replace the messages variable inside of index.js, and then call the render() function again to re-render the entire App.

### Push your messages

That's great to see what your classmates are posting, but how about posting your own messages?

For that, you have send the correct `POST` request and send data to be stored on the API's database. Read [the documentation](https://github.com/lewagon/wagon-chat-api/blob/master/README.md) to figure out how to build your request, and use fetch() again to do the POST.

Find the `Send` button inside the CommentForm component.

Look at how the `Refresh Chat` button was wired to the get_messages function, and do the same for the send_message function on the `Send` button.

Then switch over to index.js and implement the sending, according to the API documentation. Now you're talking!

Be sure to use console.log() liberally in your fetch code so you don't get stuck!

### Auto-refresh

Can't you make your app automatically refresh, and get rid of the "Refresh Chat" button?

Happy chatting!
