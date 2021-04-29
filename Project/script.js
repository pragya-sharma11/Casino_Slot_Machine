let value1 = document.getElementsById('value1')
let value2 = document.getElementsById('value2')
let value3 = document.getElementsById('value3')

values = [
    String.fromCodePoint(128514),
    String.fromCodePoint(128516),
    String.fromCodePoint(128526),
    String.fromCodePoint(128534),
    String.fromCodePoint(128525),
    String.fromCodePoint(128520)
]

function getRadomValues(){
    return values[parseInt(Math.random()*7)]
}

setInterval(()=>{

}, 300)