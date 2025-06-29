const http =require('http');
const path = require('path');
// require('process').loadEnvFile(path.join(process.cwd(),'.env'));
require('dotenv').config({path:path.join(process.cwd(),'.env')});

const server = http.createServer();
// const server_messages = http.createServer();


const setCorsHeaders = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://alpha-coder13.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET','POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  }

// const setCorsHeaders_messages = (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://alpha-coder13.github.io');
//   res.setHeader('Access-Control-Allow-Methods', 'POST');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
// }

server.listen(process.env.PORT,()=>{
    console.log(process.env.PORT_GET);
});



server.on('request',(req,res)=>{
    setCorsHeaders(req,res);
    if(req.url.indexOf("sendMessage")==-1){
        require('./Router/server_assets/index').RequestHandler(req,res);
    }else{
        require('./Router/server_messages/index').RequestHandler(req,res);
    }
    return;
});

// server_messages.on('request',(req,res)=>{
//     setCorsHeaders_messages(req,res);
// })
