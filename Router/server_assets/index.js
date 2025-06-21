const { pathParser } = require('../../utils');

function RequestHandler(req,res){
    const {readFile} = require('fs/promises');
    const {join} = require('path');

     const parsedPath = pathParser(req.url);
     const rootPath = process.cwd();

    switch(parsedPath.path){
        case '/':{
            const filePath =join(rootPath,'data','About.json');
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
            const filePath =join(rootPath,'data','Experience.json');
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
            const filePath =join(rootPath,'data','Project.json');
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


module.exports = {RequestHandler}