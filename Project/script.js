window.onload = function (){
values=[ String.fromCodePoint(0x1F60E), String.fromCodePoint(0x1F60B), String.fromCodePoint(0x1F60D), String.fromCodePoint(0x1F608), String.fromCodePoint(0x1F602), String.fromCodePoint(0x1F604)];
let value1 = document.getElementById( 'value1' );
let value2 =document.getElementById( 'value2' );
let value3 =document.getElementById( 'value3' );
let start = document.getElementById('start')
let stop = document.getElementById('stop')
function getRadomValues(){
    return values[Math.floor(Math.random()*6)];
}
start.onclick=function (){
let animationId;
function updateAnimation(newSpeed){
    if(animationId){
        clearInterval(animationId);
    }
    animationId=setInterval(()=>{
        value1.innerHTML=getRadomValues();
        value2.innerHTML=getRadomValues();
        value3.innerHTML=getRadomValues();
    },1000/newSpeed)
    
}


document.getElementById('inpSpeed').onclick=function (event) {
     console.log("value change " , event.target.value)

     //document.documentElement : this is the :root of css
     document.documentElement.style.setProperty('--speed', event.target.value)

     updateAnimation(event.target.value)
}
}
}