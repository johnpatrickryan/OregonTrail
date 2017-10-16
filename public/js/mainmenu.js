var sample = document.getElementById("themeMusic");

sample.play();



document.onkeypress = function(e) {
    if(e.keyCode == 49){
        window.location.href = "http://localhost:1337/game"
    }
    else if(e.keyCode == 51){
        window.location.href = "http://localhost:1337/topten"
    }
    else if(e.keyCode == 52){
        
        
        if(!sample.paused){
            sample.pause();
            document.getElementById("soundButt").innerHTML = "ON";
            
        }
        else{
            sample.play();
            document.getElementById("soundButt").innerHTML = "OFF"
        }
    }
} 

