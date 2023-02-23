function start(){
counts=setInterval(updated,200);
var  upto=0;
    function updated(){
        var count=document.getElementById("counter");
        count.innerHTML=++upto;   
    }  
}

function stop(){
    clearInterval(counts);
}

function Restart(){
    location.reload();
    document.getElementById("counter").value='';
}

