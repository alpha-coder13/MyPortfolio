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

function parseJSONfromString(str) {
    // console.log(str);
    str = str.replace("\\\"", encodeURIComponent("\""));
    console.log(str);
    const braceStack = [];
    const stringStack = [];
    if (str[0] !== '{' && str[0] != '[') return str;
    braceStack.push(str[0]);
    let i = 1;
    let prev = "";
    while (braceStack.length !== 0 && i < str.length) {
        tempCopy = Array.from(braceStack);
        console.log(tempCopy.reverse());
        switch (str[i]) {
            // case '\'':
            case '"':
                 if(stringStack.length == 0){
                    if(prev.replaceAll(" ","").length > 0)braceStack.push(prev);
                    stringStack.push(str[i]);
                    prev = "";
                 }else{
                        
                        braceStack.push(prev);
                        prev = '';
                        stringStack.pop();
                    
                 }
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
                    if (braceStack[i_ - 1] == '[' || braceStack[i_ - 1] == '[') {console.log(braceStack);throw new Error("Not a valid JSON for this basic parser ... will improve");}
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
                while (braceStack[i_] != '[' && i_ >= 0) {
                    if (braceStack[i_ - 1] == '{' ) throw new Error("Not a valid JSON for this basic parser ... will improve");
                    newObj.push(braceStack[i_])
                    braceStack.pop();
                    i_ = braceStack.length - 1;
                }
                newObj.reverse();
                if (braceStack.length > 0) braceStack.pop();
                braceStack.push(newObj);
                break;
            }
            case '\t':
            case '\b':
                break;
            case ':':
            case ',':
                if(stringStack.length != 0){
                    prev += str[i];
                }
                break;
            default:
                prev += str[i];
                break;
        }
        i++;
    }
    return braceStack[0];

}


module.exports = {pathParser, parseJSONfromString};