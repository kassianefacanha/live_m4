// setTimeout(()=>{console.log("aqui vai aparecer")},5000);

function executaDelay(str, callback) {
    setTimeout(()=>{callback(str)}, 5000);
}

executaDelay('Olá com delay de 5 seg', (str)=>{ console.log(str);});