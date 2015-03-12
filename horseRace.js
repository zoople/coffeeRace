var numHorses = 1
var raceThread

function moveRight(){
	
	var randNumMin = 1;
	var randNumMax = numHorses;
	
	//Pick the horse
	var randInt = (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) + randNumMin);
	
	//Build the horses name
	var horseBoost = 'racer'+randInt;
	
	//Get the horse <image> object
   imgObj = document.getElementById(horseBoost);
   
   //Move the horse
   imgObj.style.position= 'relative'; 
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
   
   //Detect end
    curPos = parseInt(imgObj.style.left);
	if ( curPos >= window.outerWidth - 170)
	{
		clearInterval(raceThread);
		//TODO - Win Celebrations
		//TODO - New Game
	}
	 
	
}


function newHorse(){

	numHorses = numHorses + 1;

	var racers = document.getElementById('racers');

	//Create the horse image and add it
	var img = document.createElement('img');
	img.src = 'horse.png';
	img.width=150;
	img.id ="racer"+numHorses;
	img.style.left="0px";
	racers.appendChild(img);

	//Add the "lane markers"
	var breaker = document.createElement('table');
	var row = breaker.insertRow(0);
	var cell1 = row.insertCell(0);
	breaker.width='100%';
	racers.appendChild(breaker);

	//Activate the "-" button to remove
	removeButton = document.getElementById('removehorse');
	removeButton.style.visibility="visible";

}


function removeHorse(){
	
	
	//Remove the horse image
	horse = document.getElementById('racer'+numHorses);
	horse.parentNode.removeChild(horse);

	// TODO Remove TABLE

	//Take away the count
	numHorses = numHorses - 1;	

	

	//Deactivate the "-" button if there is only 1 horse
	if (numHorses==1)
	{
		removeButton = document.getElementById('removehorse');
		removeButton.style.visibility="hidden";
	}
	
}

function doRace(){
	
	//Disable + and - buttons
		removeButton = document.getElementById('removehorse');
		removeButton.style.visibility="hidden";
		addButton = document.getElementById('newhorse');
		addButton.style.visibility="hidden";

	raceThread = setInterval(function(){
		moveRight();
	}, 80/(numHorses/2));
	
}