# Csound p5.js Example - Glowing Orbs

Author: Steven Yi\<stevenyi@gmail.com\>

## Description

Program demonstrates using p5.js and Csound together to
create a web project. Project has:

* Preloading
* Animation with p5.js
* Generative audio using Csound and livecode.orc (from 
  [csound-live-code](https://github.com/kunstmusik/csound-live-code))

User may click the page to go fullscreen. 

Please feel free to take code and use as template for your own projects. 


## Local Testing

Testing locally will require running a web server. There are two simple(-ish) ways to do this:

1. If you have node.js and npm installed, install and use http-server. A useful article on setting up http-server is found [here](http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server). You can install http-server with npm by running `npm install -g http-server`. Afterwards, go to the folder where this project is checked out and run `http-server`. This will start the server using the default port of 8080.  Finally, go to your browser and enter the URL http://localhost:8080 and you should see this project loaded in your browser.

2. If you have python installed, used its builtin SimpleHTTPServer by opening a terminal, going to the folder where this project is checked out and run `python -m SimpleHTTPServer 3000`. Then, go to your browser and use http://localhost:3000 as the URL to view this project.  
