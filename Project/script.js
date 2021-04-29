let value1 = document.getElementsById('value1');
let value2 = document.getElementsById('value2');
let value3 = document.getElementsById('value3');

let values = [ String.fromCodePoint(0x1F60E),String.fromCodePoint(0x1F60B),String.fromCodePoint(0x1F60D),String.fromCodePoint(0x1F608),String.fromCodePoint(0x1F602),String.fromCodePoint(0x1F604)];

function getRadomValues(){
    return values[Math.floor(Math.random()*6)];
}

setInterval(()=>{
    value1.innerHTML="1";
    value2.innerHTML=getRadomValues();
    value3.innerHTML=getRadomValues();
}, 2000)