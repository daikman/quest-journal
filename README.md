# Quest Journal
A video game quest/mission menu for managing tasks. Use it [here](https://daikman.github.io/quest-journal/)!

It uses a REST API I wrote with Node.js, that is hosted [here](https://glitch.com/edit/#!/quest-journal-api), on [gltich](https://glitch.com/)

# Development approach
When I started this project, I had no experience using web-dev frameworks. I only knew how to write plain HTML, CSS and JavaScript. This is still reflected in the code! But I have refectored it a few times to make it easier to work with.

I ended up using [Handlebars](https://handlebarsjs.com/) for programmatic HTML, and I wrote a shell script to 'bundle' all the js scripts together.

So if you ever want to fork this project, and make changes, you should run 'compile.sh' when you make changes to anything in the '/js' folder.
