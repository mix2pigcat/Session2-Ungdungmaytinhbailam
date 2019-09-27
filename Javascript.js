function add() {
    let a,b,result ;
    a=parseInt(document.getElementById('a').value);
    b=parseInt(document.getElementById('b').value);
    result = a + b;
document.getElementById('output').innerHTML =("ket qua la: "+result) ;
}
function sub() {
    let a,b,result ;
    a=parseInt(document.getElementById('a').value);
    b=parseInt(document.getElementById('b').value);
    result = a - b;
    document.getElementById('output').innerHTML =("ket qua la: "+result) ;
}
function multi() {
    let a,b,result;
    a=parseInt(document.getElementById('a').value);
    b=parseInt(document.getElementById('b').value);
    result = a * b;
    document.getElementById('output').innerHTML =("ket qua la: "+result) ;
}
function divi() {
    let a,b,result;
    a=parseInt(document.getElementById('a').value);
    b=parseInt(document.getElementById('b').value);
    result = a / b;
    document.getElementById('output').innerHTML =("ket qua la: "+result) ;
}