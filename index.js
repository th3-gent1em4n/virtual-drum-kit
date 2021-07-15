const numberOfDrumButtons = document.querySelectorAll(".drum").length;
document.querySelector(".random-beat").addEventListener("click", function () {
  this.classList.add("pressed-beat-generator");
  let numberOfRandomBeat = 30;
  let randomPlayer = setInterval(() => {
    const randomNoteArrayIndex = Math.floor(
      Math.random() * (numberOfDrumButtons + 1)
    );
    const selectedNote = document.querySelectorAll("button")[
      randomNoteArrayIndex
    ];

    makeSound(selectedNote.innerHTML);
    makeAnimation(selectedNote.innerHTML);

    numberOfRandomBeat--;

    if (numberOfRandomBeat === 0) {
      clearInterval(randomPlayer);
      this.classList.remove("pressed-beat-generator");
    }
  }, 120);
});




// -------------- Detecting Button Press --------------
var buttonArray = document.querySelectorAll(".drum");

for(var i=0;i<buttonArray.length;i++)
{
    buttonArray[i].addEventListener("click", handleClick);
}

function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
}

// --------------- Detecting Key Press ----------------
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case 'w' :
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case 'a' :
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case 's' :
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case 'd' :
            var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case 'j' :
            var audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        case 'k' :
            var audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        case 'l' :
            var audio7 = new Audio("sounds/kick-bass.mp3");
            audio7.play();
            break;

        default : console.log(key);
    }
}

function makeAnimation(key)
{
    var activeButton =  document.querySelector("." + key);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}
