
let values=[ String.fromCodePoint(0x1F60E), String.fromCodePoint(0x1F60B), String.fromCodePoint(0x1F60D), String.fromCodePoint(0x1F608), String.fromCodePoint(0x1F602), String.fromCodePoint(0x1F604)];

function getRadomValues(){
    return values[Math.floor(Math.random()*6)];
}

setInterval(()=>{
    document.getElementById( 'value1' ).innerHTML=getRadomValues();
    document.getElementById( 'value2' ).innerHTML=getRadomValues();
    document.getElementById( 'value3' ).innerHTML=getRadomValues();
}, 300)