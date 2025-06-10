const http =require('http');

const server = http.createServer();

const setCorsHeaders = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://alpha-coder13.github.io/MyPortfolio/');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

server.listen(3000);

server.on('request',(req,res)=>{
    setCorsHeaders(req,res);
    RequestHandler(req,res);
    return;
});


function RequestHandler(req,res){
    const {readFile} = require('fs/promises');
    const {join} = require('path');
    console.log(req.url);
    switch(req.url){
        case '/':{
            const filePath =join(__dirname,'data','About.json');
            const data = readFile(filePath,'utf-8');
            data.then(data => {
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    data : data,
                    error : null,
                    paths : {
                        '/':"about me",
                        '/experience':"my experience",
                        '/projects':"my projects"
                    }
                }));
                return;
            }).catch(err => {
                res.writeHead(404,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    data : "Not Found",
                    error : "file not found",
                    paths : {
                        '/':"about me",
                        '/experience':"my experience",
                        '/projects':"myprojects"
                    }
                }));
                return;
            })
            return ;
        }
        case '/experience':{
            const filePath =join(__dirname,'data','Experience.json');
            const data = readFile(filePath,'utf-8');
            data.then(data => {
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    data : JSON.parse(data),
                    error : null,
                    paths : {
                        '/':"about me",
                        '/experience':"my experience",
                        '/projects':"my projects"
                    }
                }));
                return;
            }).catch(err => {
                res.writeHead(404,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    data : "Not Found",
                    error : "file not found",
                    paths : {
                        '/':"about me",
                        '/experience':"my experience",
                        '/projects':"myprojects"
                    }
                }));
                return;
            })
            return ;
        }
        case '/projects':{
            const filePath =join(__dirname,'data','Project.json');
            const data = readFile(filePath,'utf-8');
            data.then(data => {
                console.log(data);
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    data : JSON.parse(data),
                    error : null,
                    paths : {
                        '/':"about me",
                        '/experience':"my experience",
                        '/projects':"my projects"
                    }
                }));
                return;
            }).catch(err => {
                res.writeHead(404,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    data : "Not Found",
                    error : "file not found",
                    paths : {
                        '/':"about me",
                        '/experience':"my experience",
                        '/projects':"myprojects"
                    }
                }));
                return;
            })
            return ;
        }
        default : {
                res.writeHead(412,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                data : "Not Found",
                error : "invalid request",
                paths : {
                    '/':"about me",
                    '/experience':"my experience",
                    '/projects':"my projects"
                }
            }));
            return;
        }
    }
}