const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "blue",
  //  "orange",
  //  "purple",
  //  "red",
  //  "blue",
  //  "green",
  //  "orange",
  "purple"
];

function shuffle(array) 
{
  let counter = array.length;

  while (counter > 0) 
  {
    let index = Math.floor(Math.random() * counter);
    counter--;

    // swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) 
{
  for (let color of colorArray) 
  {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function removeColor(element) {
	element.style.backgroundColor = "";
}

function reset(element1, element2) {
	removeColor(element1);
  removeColor(element2);
  numClicks = 0;
}

function addColor(element, color) {
	element.style.backgroundColor = color;
}

///

let numClicks = 0;
let choice1;
let choice2;

function handleCardClick(event) 
{
	 if(event.target.className !== "matched") 
 	 {
  	   if (numClicks === 0) 
       {
  	 		 addColor(event.target, event.target.className);
    		 choice1 = event.target;
  			 numClicks++;
 			 }
  
	 		 else if (numClicks === 1) 
   		 {
 				 	addColor(event.target, event.target.className);
          choice2 = event.target;
    
  			  if (choice1.className !== choice2.className) 
     			{
   						setTimeout(reset, 1000, choice1, choice2);
   				}
          
          else 
          {
          		choice1.classList.add("matched");
              choice2.classList.add("matched");
          }
		   }
   }
   
   else 
   {
  		console.log("That one was already paired!! Choose again")
   }
}

// when the DOM loads
createDivsForColors(shuffledColors);
