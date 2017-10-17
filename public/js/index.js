document.onkeypress = function(e) {
    if(e.keyCode == 32){
        window.location.href = "http://148.100.5.112:1337/mainmenu"
    }
} 

document.getElementById("spacebarText").onclick = function() {
    window.location.href = "http://148.100.5.112:1337/mainmenu";
}