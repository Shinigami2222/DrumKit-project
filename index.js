var numDrums = document.getElementsByClassName("drum").length;

for (var i = 0; i < numDrums; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", boom);
}

function createSound(char) {
  switch (char) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:

  }
}
document.addEventListener("keydown", function(event) {
  // console.log(event.key);
  var whichButton = event.key;
  createSound(whichButton);
  buttonAnimation(whichButton);
});

function boom() {
  var whichButton = this.innerHTML;
  createSound(whichButton);
  buttonAnimation(whichButton);
}

function buttonAnimation(buttonPressed) {
  document.getElementsByClassName(buttonPressed)[0].classList.add("pressed");
  var delayInMilliseconds = 100;

  setTimeout(function() {
    document.getElementsByClassName(buttonPressed)[0].classList.remove("pressed");
  }, delayInMilliseconds);
}
