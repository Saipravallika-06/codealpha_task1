const dis=document.getElementById('inputbox');
function ToDisplay(input){
   dis.value=dis.value+input;
}
function Toclear(){
    dis.value= "" ;
}
function calculate(){
    dis.value=eval(dis.value);
}