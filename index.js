const http =require('http');
const path = require('path');

// require('process').loadEnvFile(path.join(process.cwd(),'.env'));
require('dotenv').config({path:path.join(process.cwd(),'.env')});

const server = http.createServer();
// const server_messages = http.createServer();

const setCorsHeaders = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', `https://localhost:${process.env.PORT_GET}`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  }

// const setCorsHeaders_messages = (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://alpha-coder13.github.io');
//   res.setHeader('Access-Control-Allow-Methods', 'POST');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
// }


server.on('request',(req,res)=>{
    setCorsHeaders(req,res);
    if(req.method == 'OPTIONS'){
        res.writeHead(200);
        res.end()
        return;
    }
    if(req.url.indexOf("sendMessage")==-1){
        require('./Router/server_assets/index').RequestHandler(req,res);
        return;
    }
    else{
        require('./Router/server_messages/index').RequestHandler(req,res);
        return;
    }
});


server.listen(process.env.PORT_GET,()=>{
    console.log(process.env.PORT_GET);
});
// server_messages.on('request',(req,res)=>{
//     setCorsHeaders_messages(req,res);
// })
