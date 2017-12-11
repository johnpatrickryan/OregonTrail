var sample = new Audio('/music/introSong.mp3');

function checkSound(){
    
    var currentSound = sessionStorage.getItem('soundStatus');
    
    
    if (currentSound == "true"){
        sample.play();
        document.getElementById("soundButt").innerHTML = "OFF";
    }
 //   else {
  //      sample.pause();
 //       document.getElementById("soundButt").innerHTML = "ON";
  //  }

}

window.onload = checkSound();





    
