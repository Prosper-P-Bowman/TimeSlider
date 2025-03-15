
document.addEventListener("DOMContentLoaded", function() {
  
    let slider = document.getElementById("slider");
    let myRange = document.getElementById("time");

    myRange.innerHTML = slider.value;

    slider.addEventListener("input", function() {
      myRange.innerHTML = slider.value;

      if(myRange.innerHTML == "100"){
        document.getElementById("image").style.backgroundImage = "url('./pic/love2.jpg')";
        document.getElementById("image").style.backgroundSize = "contain";
        document.getElementById("image").style.backgroundPosition = "center";
        document.getElementById("image").style.backgroundRepeat = "no-repeat";  
      } else if(myRange.innerHTML == "75"){
        document.getElementById("image").style.backgroundImage = "url('./pic/love3.jpg')";
        document.getElementById("image").style.backgroundSize = "contain";
        document.getElementById("image").style.backgroundPosition = "center";
        document.getElementById("image").style.backgroundRepeat = "no-repeat";  
      } else if(myRange.innerHTML == "50"){
        document.getElementById("image").style.backgroundImage = "url('./pic/love4.jpg')";
        document.getElementById("image").style.backgroundSize = "contain";
        document.getElementById("image").style.backgroundPosition = "center";
        document.getElementById("image").style.backgroundRepeat = "no-repeat";  
      } else if(myRange.innerHTML == "25"){
        document.getElementById("image").style.backgroundImage = "url('./pic/love5.jpg')";
        document.getElementById("image").style.backgroundSize = "contain";
        document.getElementById("image").style.backgroundPosition = "center";
        document.getElementById("image").style.backgroundRepeat = "no-repeat";  
      }  else {
        document.getElementById("image").style.backgroundColor = "rgb(255, 255, 255)"; 
      }
    });
});
