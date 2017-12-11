document.onkeypress = function(e) {
    if(e.keyCode == 32){
        window.location.href = "/mainmenu"
    }
} 

document.getElementById("spacebarText").onclick = function() {
    window.location.href = "/mainmenu";
}
