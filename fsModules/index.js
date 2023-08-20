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

      //writing a file by fs in async way

      if(req.url == "/"){

       fs.writeFile("demo.txt","Hello World!!!!!!",(err)=>{
        if(err){
            res.writeHead(400,{"Content-Type":"text/html"});
            res.write("Failed to write")
            res.end();

        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("Successfully written");
            res.end();
        }
       });

         //rename a file in async way

        /* fs.rename("demo.txt","demoNew.txt",(err)=>{
            if(err){
                res.writeHead(400,{"Content-Type":"text/html"});
                res.write("Failed to rename")
                res.end();
    
            }else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("Successfully rename");
                res.end();
            }
         })*/


         //delete a file in async way

         fs.unlink("demo.txt",(err)=>{
            if(err){
                res.writeHead(400,{"Content-Type":"text/html"});
                res.write("Failed to delete")
                res.end();
    
            }else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("Successfully deleted");
                res.end();
            }
         })

      }


    


        //read file data by fs in sync way

       /* const myData = fs.readFileSync("Home.html" )

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(myData);
        res.end();*/
      

    });

  
    
      

   




server.listen(4000,()=>{
    console.log("Fs server is running...");
})