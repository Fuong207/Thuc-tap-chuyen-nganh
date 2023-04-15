
function myfuntion(){
    var socu=document.getElementById("socu").value;
var somoi=document.getElementById("somoi").value;
var giadien=document.getElementById("giadien").value;
var tiendien=document.getElementById("tiendien").value;
var diendungcho=document.getElementById("diendungcho").value;
var tiendien=(socu+somoi)*giadien;
    var tinh;   
    document.getElementById("tiendien").innerHTML = tiendien;
    if(tiendien>1000){
        tinh="Kinh Doanh";
    }
    else{
        tinh="Gia Dinh";
    }
    document.getElementById("tiendien".innerHTML)=tiendien;
    document.getElementById("demo").innerHTML = tinh;
    
}
