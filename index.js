const http =require('http');

const server = http.createServer();

const setCorsHeaders = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://alpha-coder13.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  }

server.listen(3000);

server.on('request',(req,res)=>{
    setCorsHeaders(req,res);
    RequestHandler(req,res);
    return;
});

const pathParser = function (url){
    const splitQuery = url.split("?");
    const returnObj = {
        path : "",
        queries : {
            _len : 0,
        }
    }

    returnObj.path = splitQuery[0];

    const queries = {};
    splitQuery[1]?.split("&")?.forEach((value, idx) => {if(!value)return ;
        let subVal = value.split('=');
        queries[subVal[0]] = subVal[1];
    } );
    returnObj.queries = {...JSON.parse(JSON.stringify(queries)), _len: Object.keys(queries).length};

    return returnObj;
}
function RequestHandler(req,res){
    const {readFile} = require('fs/promises');
    const {join} = require('path');

     const parsedPath = pathParser(req.url);

    switch(parsedPath.path){
        case '/':{
            const filePath =join(__dirname,'data','About.json');
            const data = readFile(filePath,'utf-8');
            data.then(data => {
                data = JSON.parse(data);
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
                    error : err.message,
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
                data = JSON.parse(data);
                res.writeHead(200,{'Content-Type':'application/json'});
                if(parsedPath.queries._len>0){
                    if(parseInt(parsedPath.queries.id)){
                        data = data[parseInt(parsedPath.queries.id)-1] || {};
                        data = [data];
                    }
                }
                res.end(JSON.stringify({
                    data : data,
                    error : null,
                    paths : {
                        '/':"about me",
                        '/experience':"my experience",
                        '/experience?id' : "experienceDetails",
                        '/projects':"my projects",
                    }
                }));
                return;
            }).catch(err => {
                res.writeHead(404,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    data : "Not Found",
                    error : err.message,
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
                data = JSON.parse(data);
                if(parsedPath.queries._len>0){
                    if(parseInt(parsedPath.queries.id)){
                        data = data[parseInt(parsedPath.queries.id)-1] || {};
                        data = [data];
                    }
                }
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    data : data,
                    error : null,
                    paths : {
                        '/':"about me",
                        '/experience':"my experience",
                        '/projects':"my projects",
                        '/project?id' : "projectDetails",
                    }
                }));
                return;
            }).catch(err => {
                res.writeHead(404,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    data : "Not Found",
                    error : err.message,
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