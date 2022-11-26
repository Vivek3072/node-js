const colors=require('colors')
const data=require('./data')

const http = require('http');

http.createServer((_req,resp) =>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);

console.log("Hello".red + " Vivek Srivastava".green) 