function myfun(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    document.getElementById("b1").value;
    document.getElementById("b2").value;
    document.getElementById("b3").value;
    document.getElementById("b4").value;
    document.getElementById("b5").value;
    document.getElementById("b6").value;
    document.getElementById("b7").value;
    document.getElementById("b8").value;
    document.getElementById("b9").value;
 
     if(flag==1){
         document.getElementById('print').innerHTML="X turn";
     }
     else{
         document.getElementById('print').innerHTML="O turn";
     }
 }
 flag=1;
    function myfun_1(){
        if(flag==1){
            document.getElementById('b1').value='X';
            document.getElementById('b1').disabled=true;
            flag=0;
        }
        else{
            document.getElementById('b1').value='O';
            document.getElementById('b1').disabled=true;
            flag=1; 
        }
    }
    function myfun_2(){
        if(flag==1){
            document.getElementById('b2').value='X';
            document.getElementById('b2').disabled=true;
            flag=0;
        }
        else{
            document.getElementById('b2').value='O';
            document.getElementById('b2').disabled=true;
            flag=1; 
        }
    }
    function myfun_3(){
        if(flag==1){
            document.getElementById('b3').value='X';
            document.getElementById('b3').disabled=true;
            flag=0;
        }
        else{
            document.getElementById('b3').value='O';
            document.getElementById('b3').disabled=true;
            flag=1; 
        }
    }
    function myfun_4(){
        if(flag==1){
            document.getElementById('b4').value='X';
            document.getElementById('b4').disabled=true;
            flag=0;
        }
        else{
            document.getElementById('b4').value='O';
            document.getElementById('b4').disabled=true;
            flag=1; 
        }
    }
    function myfun_5(){
        if(flag==1){
            document.getElementById('b5').value='X';
            document.getElementById('b5').disabled=true;
            flag=0;
        }
        else{
            document.getElementById('b5').value='O';
            document.getElementById('b5').disabled=true;
            flag=1; 
        }
    }
    function myfun_6(){
        if(flag==1){
            document.getElementById('b6').value='X';
            document.getElementById('b6').disabled=true;
            flag=0;
        }
        else{
            document.getElementById('b6').value='O';
            document.getElementById('b6').disabled=true;
            flag=1; 
        }
    }
    function myfun_7(){
        if(flag==1){
            document.getElementById('b7').value='X';
            document.getElementById('b7').disabled=true;
            flag=0;
        }
        else{
            document.getElementById('b7').value='O';
            document.getElementById('b7').disabled=true;
            flag=1; 
        }
    }
    function myfun_8(){
        if(flag==1){
            document.getElementById('b8').value='X';
            document.getElementById('b8').disabled=true;
            flag=0;
        }
        else{
            document.getElementById('b8').value='O';
            document.getElementById('b8').disabled=true;
            flag=1; 
        }
    }
    function myfun_9(){
        if(flag==1){
            document.getElementById('b9').value='X';
            document.getElementById('b9').disabled=true;
            flag=0;
        }
        else{
            document.getElementById('b9').value='O';
            document.getElementById('b9').disabled=true;
            flag=1; 
        }
    }

function fun_reset(){
    location.reload()
    document.getElementById('b1').value='';
    document.getElementById('b2').value='';
    document.getElementById('b3').value='';
    document.getElementById('b4').value='';
    document.getElementById('b5').value='';
    document.getElementById('b6').value='';
    document.getElementById('b7').value='';
    document.getElementById('b8').value='';
    document.getElementById('b9').value='';
}
