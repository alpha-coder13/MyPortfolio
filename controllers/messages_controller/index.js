function DB_WRITE_MESSAGE(data){
    // DB obbject
    // connection Object
    // call write on the conenction object/
    
    const {messagesPool,writeValues} = require('../../models/messages');
    const query = writeValues(...Object.values(data));

    return new Promise(async(resolve, reject) => {
        try{
        const client =  await messagesPool.connect();
        client.query(query).then((response)=>{
            if(response.command == "INSERT"){
                resolve("INSERT SUCCESS");
            }else{
                reject("INSERT ERROR");
            }
        }).catch((error)=>{
                reject("QUERY ERROR" , error.message);
        })
        client.release();
        }catch(e){
                reject("CONNECTION ERROR");
        }
    })
}


module.exports = {DB_WRITE_MESSAGE}