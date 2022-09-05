# Quest Journal
A video game quest/mission menu for managing tasks. Use it [here](https://daikman.github.io/quest-journal/)!

It uses a REST API I wrote with Node.js [here](https://github.com/daikman/quest-api), which is hosted on [gltich](https://glitch.com/). The API uses password hashing and stores user data in flat (hidden) JSON files.

**Please do not use this app for anything serious or sensitive**. It has no way to recover your account, for example, if you forget your password. I also cannot vouch for the safety of any information you enter into the server.

# Development approach
When I started this project, I had no experience using web-dev frameworks. I only knew how to write plain HTML, CSS and JavaScript. This is still reflected in the code! But I have refectored it a few times to make it easier to work with.

I ended up using [Handlebars](https://handlebarsjs.com/) for programmatic HTML, and I wrote a node script to 'bundle' all the js scripts together. So if you ever want to contribute to this project, you should run `npm run build` when you make changes to anything in the '/js' folder.
