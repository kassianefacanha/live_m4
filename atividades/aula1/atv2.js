function executaDelay5 (str, callBack) {

    //wrapping sendo realizado e conceito de closure sendo explorado!
    setTimeout( () => {callBack(str)}, 5000);
}

executaDelay5( "Olá com delay de 5 segundos", (str) => {console.log(str); return 3;}); 