document.onkeypress = function(e) {
    if(e.keyCode == 32){
        window.location.href = "http://localhost:1337/mainmenu"
    }
} 

document.getElementById("blinkText").onclick = function() {
    window.location.href = "http://localhost:1337/mainmenu";
}