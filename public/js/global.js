var sample = new Audio('/music/introSong.mp3');

function checkSound(){
    
    var currentSound = sessionStorage.getItem('soundStatus');
    
    console.log(currentSound);
    if (currentSound == "true"){
        sample.play();
    }
    else {
        sample.pause();
    }

}

window.onload = checkSound();



    
