# GitFetch-app
Practice with GitHub Rest Api's for fetch users data(login, repos, location, name, avatar - u can get all provided github api's doc)  using HTML, JavaScript and Materialize CSS. 

First of all you must to get an api github key such as client ID and client secret, cause github must know who's trying to acess the website's data. You can do that using that way https://github.com/settings/apps/new.

Also u must to point your localhost server's adress (such as http://127.0.0.1:8080) in from's field as Webhook URL, cause events from github api will post to this URL. 

I advice u to use command line in working directory with app (use SHIFT+righclick in working directory) and command '-npm install' for installing requiered modules, then use '-npm install live-server -g' (this is a little development server with live reload capability) and then use 'live-server' to run this local-server in browser and debugging all your's code changes (individually through a file index.html).
