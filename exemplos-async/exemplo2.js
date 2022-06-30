function func1(number){
    return new Promise(resolve =>{
        setTimeout(() => resolve(77 + number) , 1000)
    })
}

function func2(number){
    return new Promise(resolve =>{
        setTimeout(() => resolve(22 + number) , 1000)
    })
}

function func3(number){
    return new Promise(resolve =>{
        setTimeout(() => resolve(14 * number) , 1000)
    })
}

async function myAsyncFunction(){
    var number = await func1(4);

    console.log('Hello');
    number = await func2(number);

    console.log('World');
    var result = await func3(number);

    console.log(result);
}

myAsyncFunction()