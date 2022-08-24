# Quest Journal
A video game quest/mission menu for managing tasks. Use it [here](https://daikman.github.io/quest-journal/)!

It uses a REST API I wrote with Node.js, that is hosted on [glitch](https://quest-journal-api.glitch.me/).

# Development approach
When I started this project, I had no experience using web-dev frameworks. I only knew how to write raw HTML, CSS and JavaScript. This is still reflected in the code! But I have refectored it a few times to make it easier to work with.

I ended up using [Handlebars](https://handlebarsjs.com/) for programmatic HTML, and I wrote some shell scripts to 'compile' all the js scripts into bundles.

So if you ever want to clone this project, and make changes, you should run 'compile.sh ' when you make changes to anything in the '/hb-templates' or '/js' folders.
