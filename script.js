// Declare variables below to save the different divs of your story.
let image1Button = document.querySelector('.option-one');
let image2Button = document.querySelector('.option-two');
let image3Button = document.querySelector('.option-three');
let image4Button = document.querySelector('.option-four');
let image5Button = document.querySelector('.option-five');
let image6Button = document.querySelector('.option-six');
let image7Button = document.querySelector('.option-seven');
let image8Button = document.querySelector('.option-eight');
let image9Button = document.querySelector('.option-nine');
let screenOne = document.querySelector('.story-opening');
let screenTwo = document.querySelector('.option-one-screen');
let screenThree = document.querySelector('.option-two-screen');
let screenFour = document.querySelector('.option-three-screen');
let screenFive = document.querySelector('.option-four-screen');
let screenSix = document.querySelector('.option-five-end');
let screenSeven = document.querySelector('.option-six-screen');




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


image1Button.addEventListener('click', function(){
    image2Button.style.display = "block";
    image1Button.style.display = "none";
    screenTwo.style.display = "block";
    screenOne.style.display = "none";
    
});

image2Button.addEventListener('click', function(){
    image3Button.style.display = "block";
    image2Button.style.display = "none";
    screenThree.style.display = "block";
    screenTwo.style.display = "none";
});


image3Button.addEventListener('click', function(){
    image4Button.style.display = "block";
    image5Button.style.display = "block";
    image3Button.style.display = "none";
    screenFour.style.display = "block";
    screenThree.style.display = "none";
});

image4Button.addEventListener('click', function(){
    image4Button.style.display = "none";
    image5Button.style.display = "none";
    image6Button.style.display = "block";
    image7Button.style.display = "block";
    screenFive.style.display = "block";
    screenFour.style.display = "none";
});

image5Button.addEventListener('click', function(){
    image6Button.style.display = "none";
    image7Button.style.display = "none";
    image4Button.style.display = "none";
    image5Button.style.display = "none";
    screenSix.style.display = "block";
    screenFive.style.display = "none";
    screenFour.style.display = "none";
});

image6Button.addEventListener('click', function(){
    image9Button.style.display = "block";
    image8Button.style.display = "block"
    screenFive.style.display = "none";
    screenSeven.style.display = "block";
});