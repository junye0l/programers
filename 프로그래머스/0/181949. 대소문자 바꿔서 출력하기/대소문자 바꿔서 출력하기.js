const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let arr = '';
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            arr += str[i].toLowerCase();
        }else {
            arr += str[i].toUpperCase();
        }
    }
    console.log(arr);
});