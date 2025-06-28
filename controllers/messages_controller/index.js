function DB_WRITE_MESSAGE(data){
    // DB obbject
    // connection Object
    // call write on the conenction object/

    return new Promise((resolve, reject) => {
              setTimeout(()=>resolve("write successfull"), 3000);
    })
}


module.exports = {DB_WRITE_MESSAGE}