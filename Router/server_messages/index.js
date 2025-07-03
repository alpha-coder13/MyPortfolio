const { DB_WRITE_MESSAGE } = require("../../controllers/messages_controller");
const { parseJSONfromString } = require("../../utils");

async function RequestHandler(req, res) {
    const contentType = getContentType(req);
    // console.log(contentType)
    if (req.method === 'POST') {
        let body = "";
        req.on('data', (data) => {
            body += data;
        })
        req.on('end', () => {
            if (contentType.includes('json')) {
                body = body.replaceAll(' ', '')
                body = body.replaceAll('\r\n', '');
                try {
                    body = JSON.parse(body); // in futuore will use parseJSONfromString function , once I perfect it
                    // console.log( body,typeof body)
                    const {name , email , message} = body;
                    DB_WRITE_MESSAGE({name, email, message}).then((data)=>{
                        res.writeHead('200', { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({
                            data:"Message Sent Successfully",
                            status : "success",
                            message : data.toPascalCase(),
                        }))
                    }).catch(error => {
                        console.log("DBerror:------->",error);
                        res.writeHead('204', { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({
                            data:"Message Not Sent",
                            status : "failure",
                            message : "Insert failure",
                        }))
                    })
                } catch (error) {
                    res.writeHead('204', { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                            data:"Request Error",
                            status : "failure",
                            message : "Parsing failure",
                        }))
                }
            } else {
                    res.writeHead('205', { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                            data:"Request Error",
                            status : "failure",
                            message : "Invalid Content-Type",
                        }))
            }


        })
    }else{
         res.writeHead('404', { 'Content-Type': 'application/json' });
         res.end(JSON.stringify({
                data:"Request Error",
                status : "failure",
                message : "Unsupported method",
            }))
    }
}


function getContentType(req) {
    const idx = req.rawHeaders.indexOf('Content-Type');
    return idx != -1 ? req.rawHeaders[idx + 1 % req.rawHeaders.length] : "";
}





module.exports = { RequestHandler }