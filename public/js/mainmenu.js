document.onkeypress = function(e) {
    if(e.keyCode == 49){
        window.location.href = "/game"
    }
    else if(e.keyCode == 51){
        window.location.href = "/topten"
    }
    else if(e.keyCode == 52){
            var currentSound = sessionStorage.getItem('soundStatus');
            if (currentSound == "true"){
                currentSound = "false";
                document.getElementById("soundButt").innerHTML = "ON";
            }
            else{
                currentSound = "true";
                document.getElementById("soundButt").innerHTML = "OFF";
            }
            
            sessionStorage.setItem('soundStatus', currentSound);
            
            checkSound();
        }
} 