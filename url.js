/*
*Author : Md Sholayman
*Description : splitting the URL and getting host,path and search query.
*Date: 20 August,2023.
 */

//importing http module
const http = require('http');

//importing url

const URL = require("url") ;

//creating the server

const myServer=http.createServer((req,res)=>{
   
    //given url
    const myURL = "https://www.youtube.com/watch?v=PDYcUk11Po4";
   
    //splitting the url
    const urlObj = URL.parse(myURL,true)

    //hostName
    const host = urlObj.host ;
    //pathName
    const path = urlObj.pathname ;
    //search Query
    const searchQuery = urlObj.search ;
    
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(host) ;
    // res.write(path) ;
    // res.write(searchQuery) ;
    res.end();
 
}) ;

//listening to the server

myServer.listen(5050,()=>{
    console.log("URL Server is running....");
})



