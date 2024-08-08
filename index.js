const prompt = require('prompt-sync')()

//Arrays of the places and what happens in the places
let places = ["restaurant", "church", "hospital"]

PLACE_ITEMS = {"restaurant": ["chef","cake"],
        "church": ["rope", "alter"],
        "hospital": ["map","stretcher","patient" ]}

ITEM_REACT = { "cake": "you go towards the cake and try to take a slice, as you look try to touch it the chef throws a knife at your head. you dodge it in the nick of time but chefs from the back room surround with knives",
              
  "chef": "hey! nice he pointed you towards a 'cake'",
              
  "rope": "you go towards the rope and pull on it, you then hear a bell sound as it crashes on to you",
              
  "alter": "you head to the alter as a reverend comes over, with a smile on his face. he knocks over the candle and grabs a hold on you as the churches burn with nohing of the sound of the laugh of the reverend",
              
  "map": "you run in the hospital to find a map, you can go 'left' or 'right'",
              
  "patient": "you turn right and meet a patient. as you try to speak he points you towards the 'left' of the hall.",
              
  "stretcher": "you go down the left hall, after a minute of walking you find a stretcher. you go up to it, suddenly a doctor grabs you and sticks a syringe in your neck. as you lose consciousness, you see a patient crawl your way as hear the sound of you being strapped."
}

//Instructions
let _instructions = `In this game you will go through scary scenarios by yourself, where in the normal world, everything is an abnormality.'
'You will get 3 options to pick scenario to be in and you will get to pick one by typing either of the 3'
'In certain scenarios, you will be able to move by typing in 'left' or 'right'
'If you ever get too disturbed you can type in 'exit' to exit the game`
 
startGame = prompt("Are you ready to play or too scared to play?");

startGame = startGame.toLowerCase()

//The function that happens after the instructions
function play_game() {
console.log("Welcome to the my SUPERB scary game")

if (startGame == "y" ||
    startGame == "yes") {
  console.log("Feeling brave? If you say so");
}else{
  console.log("Aww shucks, well okay, have a great day anyways.");
}
 console.log(_instructions);
   console.log("Okay the places you can go are ", places )
     let plac = prompt("Where would you like to go?") 
  console.log(PLACE_ITEMS[plac])
let it = prompt("pick which ever you want")
   console.log(ITEM_REACT[it])
}
play_game(); // Calls the function
