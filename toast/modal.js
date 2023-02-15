function myFunction() {
    var x =document.getElementById("toast");
    x.className="show";
  } 
  window.onload = function(){
    document.getElementById('close_fn').onclick = function(){
      let node = document.getElementById("toast");
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    };
};