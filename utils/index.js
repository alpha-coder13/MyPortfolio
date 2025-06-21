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

module.exports = {pathParser};