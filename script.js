// Declare variables below to save the different divs of your story.
let image1Button = document.querySelector('.option-one');
let image2Button = document.querySelector('.option-one-b');
let image3Button = document.querySelector('.option-two-a');
let image4Button = document.querySelector('.option-three-a');
let image5Button = document.querySelector('.option-three-b');
let image6Button = document.querySelector('.option-four-a');
let image7Button = document.querySelector('.option-four-b');
let image8Button = document.querySelector('.option-six-a');
let image9Button = document.querySelector('.option-six-b');
let image10Button = document.querySelector('.option-seven-a');
let image11Button = document.querySelector('.option-seven-b');
let image12Button = document.querySelector('.option-eight-a');
let image13Button = document.querySelector('.option-eight-b');
let image14Button = document.querySelector('.option-nine-a');
let image15Button = document.querySelector('.option-nine-b');
let image16Button = document.querySelector('.option-nine-c');
let screenOne = document.querySelector('.story-opening');
let screenTwo = document.querySelector('.option-one-screen');
let screenThree = document.querySelector('.option-two-screen');
let screenFour = document.querySelector('.option-three-screen');
let screenFive = document.querySelector('.option-four-screen');
let screenSix = document.querySelector('.option-five-end');
let screenSeven = document.querySelector('.option-six-screen');
let screenEight = document.querySelector('.option-seven-screen');
let screenNine = document.querySelector('.option-eight-screen');
let screenTen = document.querySelector('.option-nine-screen');




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


image1Button.addEventListener('click', function(){ //Second page
    image2Button.style.display = "block";
    image1Button.style.display = "none";
    screenTwo.style.display = "block";
    screenOne.style.display = "none";
    
});

image2Button.addEventListener('click', function(){ //Third page
    image3Button.style.display = "block";
    image2Button.style.display = "none";
    screenThree.style.display = "block";
    screenTwo.style.display = "none";
});


image3Button.addEventListener('click', function(){ //Fourth page
    image4Button.style.display = "block";
    image5Button.style.display = "block";
    image3Button.style.display = "none";
    screenFour.style.display = "block";
    screenThree.style.display = "none";
});

image4Button.addEventListener('click', function(){ //Fifth page
    image4Button.style.display = "none";
    image5Button.style.display = "none";
    image6Button.style.display = "block";
    image7Button.style.display = "block";
    screenFive.style.display = "block";
    screenFour.style.display = "none";
});

image5Button.addEventListener('click', function(){ //Fifth page-- End
    image6Button.style.display = "none";
    image7Button.style.display = "none";
    image4Button.style.display = "none";
    image5Button.style.display = "none";
    screenSix.style.display = "block";
    screenFive.style.display = "none";
    screenFour.style.display = "none";
});

image6Button.addEventListener('click', function(){ //Sixth page
    image9Button.style.display = "block";
    image8Button.style.display = "block";
    screenFive.style.display = "none";
    screenSeven.style.display = "block";
});

image8Button.addEventListener('click', function(){ //Seventh page
    image11Button.style.display = "block";
    image10Button.style.display = "block";
    image9Button.style.display = "none";
    image8Button.style.display = "none";
    screenSeven.style.display = "none";
    screenEight.style.display = "block";
});

image10Button.addEventListener('click', function(){ //Eightth page
    image13Button.style.display = "block";
    image12Button.style.display = "block";
    image11Button.style.display = "none";
    image10Button.style.display = "none";
    screenEight.style.display = "none";
    screenNine.style.display = "block";
});

image11Button.addEventListener('click', function(){ //Nineth page-- Goes back to page six
    image9Button.style.display = "block";
    image8Button.style.display = "block";
    screenEight.style.display = "none";
    screenSeven.style.display = "block";
});
image12Button.addEventListener('click', function(){ //Tenth page
    image16Button.style.display = "block";
    image15Button.style.display = "block";
    image14Button.style.display = "block";
    image11Button.style.display = "none";
    image10Button.style.display = "none";
    screenNine.style.display = "none";
    screenTen.style.display = "block";
});

