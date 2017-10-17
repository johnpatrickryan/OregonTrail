document.onkeypress = function(e) {
    if(e.keyCode == 32){
        window.location.href = "/mainmenu"
    }
} 

document.getElementById("blinkText").onclick = function() {
    window.location.href = "/mainmenu";
}