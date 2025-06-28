const http =require('http');
const path = require('path');
// require('process').loadEnvFile(path.join(process.cwd(),'.env'));
require('dotenv').config({path:path.join(process.cwd(),'.env')});

const server_assets = http.createServer();
const server_messages = http.createServer();


const setCorsHeaders_assets = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://alpha-coder13.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  }

const setCorsHeaders_messages = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://alpha-coder13.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
}

server_assets.listen(process.env.PORT_GET,()=>{
    console.log(process.env.PORT_GET);
});

server_messages.listen(process.env.PORT_POST,()=>{
    console.log(process.env.PORT_POST);
});

server_assets.on('request',(req,res)=>{
    setCorsHeaders_assets(req,res);
    require('./Router/server_assets/index').RequestHandler(req,res);
    return;
});


server_messages.on('request',(req,res)=>{
    setCorsHeaders_messages(req,res);
    require('./Router/server_messages/index').RequestHandler(req,res);
})
