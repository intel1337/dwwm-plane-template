const serverPort = 8080;
const serverIP = 'localhost';

var http = require('http'),
fs = require('fs');
fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    } 
    http.createServer(function(req, res) {  
        if(req.url == './public/img/linus.png' ){
            res.contentType("image/png");
            res.write(fs.readFileSync('linus.png'));
            res.end();
        }
        if (req.url == '/style.css') {
            res.setHeader('Content-type', 'text/css');
            res.write(fs.readFileSync('style.css'));
            res.end();
         }
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
     
    }).listen(serverPort, serverIP);
});
