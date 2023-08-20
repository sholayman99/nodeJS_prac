/**
 * Author: Md Sholayman
 * Description: using file system method 
 * Date: 20 August,2023
 */

//importing http to create server
const http = require("http") ;

//importing fs
const fs = require('fs');


const server = http.createServer((req,res)=>{

    //read file data by fs in async way

      fs.readFile("Home.html",(err,data)=>{

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
      })
      

    });




server.listen(4000,()=>{
    console.log("Fs server is running...");
})