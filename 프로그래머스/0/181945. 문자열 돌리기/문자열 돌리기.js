const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let str = "";
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let i in str){
        console.log(str[i]);
    }
});