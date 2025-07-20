// // const nodeRTC = require('node-webrtc');
// const {Hmac, createHmac} = require('crypto');

// function getICEservers(username_input){
//     const username = (Date.now() + (60*60*1000) ) + ':'+username_input;
//     const password = createHmac('sha1',process.env.TURN_STATIC_AUTH_KEY).update(username).digest('base64');

//     const iceServer = {
//         username:username,
//         credential:password,
//         urls:[
//             'turn:'+process.env.TURN_IP+':10000?transport=tcp',
//             'turn:'+process.env.TURN_IP+':11000?transport=udp',
//         ]
//     }

//     return {"iceServers": [iceServer]}
// }
// function socketRequestHandler(socket){
//         socket.on('message console.log',console.log);
//         socket.on('getServer',(data)=>{
//             let username = data;
//             let iceServers = getICEservers(username); 
//             socket.emit('detail',JSON.stringify(iceServers));
//         })
// }


// module.exports = {socketRequestHandler};