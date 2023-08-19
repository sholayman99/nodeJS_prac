/*
*Author : Md Sholayman
*Description : Creating a server by node http method.
*Date: 20 August,2023.
 */

//importing http module

const http = require('http');

//creating the server

const myServer=http.createServer((req,res)=>{
   
    //creating get request and sending response

    if(req.url == "/"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write("<h2>This is Home page</h2>");
        res.end();
    }
    else if(req.url == "/about"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h2>This is About page</h2>');
        res.end();
    }
    else if(req.url == "/contact"){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write("<h2>This is Contact page</h2>");
        res.end();
    }

})

//here we have use two parameter request="req" and response="res" inside of a anonymous.
//Because node works in request and response method.

//listening to the server

myServer.listen(5050,()=>{
    console.log("Server is running....");
})



