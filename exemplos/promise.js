const kassiane = false;

const kassi = new Promise((resolve, reject) => {
    if(kassiane == true){
        resolve("CUMPRIU A PROMESSA")
    }else{
        reject("DESCUMPRIU A PROMESSA")
    }
}).then((MsgCumpriu) => {
    console.log(MsgCumpriu)

}).catch((MsgFalha)=>{
    console.log(MsgFalha)
})