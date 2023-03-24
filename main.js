var sum,num1,num2;
var ipElement=document.querySelectorAll('input[type="text"]')
ipElement[0].onchange=function(e){
    num1=e.target.value;
    console.log(num1);
}
ipElement[1].onchange=function(e){
    num2=e.target.value;
    console.log(num2);
}
var btnCong=document.getElementById('cong');
btnCong.onclick=function(){
    sum=parseInt(num1)+ parseInt(num2) ;
    console.log(sum);
    document.querySelector('.result').innerHTML=sum;
}
var btnCong=document.getElementById('tru');
btnCong.onclick=function(){
    sum=parseInt(num1)- parseInt(num2) ;
    console.log(sum);
    document.querySelector('.result').innerHTML=sum;
}
var btnCong=document.getElementById('nhan');
btnCong.onclick=function(){
    sum=parseInt(num1)* parseInt(num2) ;
    console.log(sum);
    document.querySelector('.result').innerHTML=sum;
}
var btnCong=document.getElementById('chia');
btnCong.onclick=function(){
    sum=parseInt(num1)/ parseInt(num2) ;
    console.log(sum);
    document.querySelector('.result').innerHTML=sum;
}

