var express = require('express') 
var app = express()

// probably should have used a logging framework
var INFO = (function(){
    var timestamp = function(){};
    timestamp.toString = function(){
        return "" + (new Date).toLocaleTimeString() + " [Server Activity]";    
    };

    return {
        log: console.log.bind(console, '%s', timestamp)
    }
})();


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {INFO.log("Page has been requested"); res.send('hello world')
})
// list to a particular port
app.listen(3000 , () => INFO.log("Web server started"))