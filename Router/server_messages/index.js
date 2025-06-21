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
                body = body.replaceAll('\n', '');
                body = body.replaceAll('\t', '');
                body = body.replaceAll('\s', '');
                body = body.replaceAll(' ', '');
                try {
                    body = parseJSONfromString(body);
                    // console.log(body)
                } catch (error) {
                    console.log(error);
                }
            } else if (contentType.includes('plain')) {
                bod
            }


        })
    }
    res.writeHead('200', { 'Content-Type': 'application/json' });
    res.end()
}


function getContentType(req) {
    const idx = req.rawHeaders.indexOf('Content-Type');
    return idx != -1 ? req.rawHeaders[idx + 1 % req.rawHeaders.length] : "";
}



function parseJSONfromString(str) {

    const braceStack = [];
    if (str[0] !== '{' || str[0] != '[') return str;
    braceStack.push(str[0]);
    let i = 1;
    let prev = "";
    while (braceStack.length !== 0 && i < str.length) {
                console.log(braceStack);

        switch (str[i]) {
            case ':':
            case ',':
                braceStack.push(prev);
                prev = "";
                break;

            case '{':
            case '[':
                braceStack.push(str[i]);
                break;
            case '}': {
                if (prev.length > 0) {
                    braceStack.push(prev);
                    prev = "";
                }
                let i_ = braceStack.length - 1;
                const newObj = {};
                while (braceStack[i_] != '{' && i_ >= 0) {
                    if (braceStack[i_ - 1] == '[' || braceStack[i_ - 1] == '[') throw new Error("Not a valid JSON");
                    newObj[braceStack[i_ - 1]] = braceStack[i_];
                    braceStack.pop();
                    braceStack.pop();
                    i_ = braceStack.length - 1;
                }
                if (braceStack.length > 0) braceStack.pop();
                braceStack.push(newObj);
                break;
            }
            case ']': {
                if (prev.length > 0) {
                    braceStack.push(prev);
                    prev = "";
                }
                let i_ = braceStack.length - 1;
                const newObj = [];
                while (braceStack[i_] != '{' && i_ >= 0) {
                    if (braceStack[i_ - 1] == '{' ) throw new Error("Not a valid JSON");
                    newObj.push(braceStack[i_])
                    braceStack.pop();
                    i_ = braceStack.length - 1;
                }
                if (braceStack.length > 0) braceStack.pop();
                braceStack.push(newObj);
                break;
            }
            case '\t':
            case '\b':
            case '\s':
            case ' ':
            case '\'':
            case '\"':
                break;
            default:
                prev += str[i];
                break;
        }
        i++;
    }
    return braceStack[0];

}


module.exports = { RequestHandler }