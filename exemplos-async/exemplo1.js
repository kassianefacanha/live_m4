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

func1(4)
   .then(number => {
        console.log('Hello');
        return func2(number);
   })
   .then(number => {
        console.log('World');
        return func3(number);
   })
   .then(result => console.log(result))