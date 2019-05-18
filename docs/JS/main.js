var currentCard = 0;
function closeIt (targ){
	document.getElementById(targ).style.display = "none";
	var outputSearchString = '';
	document.getElementById('cardsContainer').innerHTML='<div id="cardF" class="card singlecard" onclick="flipCard(\'cardF\')"></div>';
	if (history.pushState) {
		var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + outputSearchString;
		window.history.pushState({path:newurl},'',newurl);
	}
}

function remove(arr, index){
    arr.splice(index,1);
    return arr;
}
// URL string var getter
function getParameterByName(name, url) {
   if (!url) url = window.location.href;
   name = name.replace(/[\[\]]/g, "\\$&");
   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	   results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function draw3cards(targ){

	var ran1, ran2, ran3;
	var workingCardsArr = cardArr.slice(1,49);


	ran1 = Math.floor((Math.random() * workingCardsArr.length));

	document.getElementById('card1').style.backgroundImage="url(card-images/"+workingCardsArr[ran1].picF+")";
	var cardNum1 = workingCardsArr[ran1].number;

	workingCardsArr = remove(workingCardsArr, ran1);  

	ran2 = Math.floor((Math.random() * workingCardsArr.length));

	document.getElementById('card2').style.backgroundImage="url(card-images/"+workingCardsArr[ran2].picF+")";
	var cardNum2 = workingCardsArr[ran2].number;

	workingCardsArr = remove(workingCardsArr, ran2);    

	ran3 = Math.floor((Math.random() * workingCardsArr.length));

	document.getElementById('card3').style.backgroundImage="url(card-images/"+workingCardsArr[ran3].picF+")";
	var cardNum3 = workingCardsArr[ran3].number;

	workingCardsArr = remove(workingCardsArr, ran3);   

	document.getElementById(targ).style.display = "block";

	window.scrollTo(0, 0);

	var outputSearchString = '?showcards='+cardNum1+','+cardNum2+','+cardNum3;

	if (history.pushState) {
		var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + outputSearchString;
		window.history.pushState({path:newurl},'',newurl);
	}
}

function randomSuit(){
	var ran1s, ran2s, ran3s, ran4s;

	ran1s = Math.floor(Math.random()*(12-1+1)+1);
	ran2s = Math.floor(Math.random()*(24-13+1)+13);
	ran3s = Math.floor(Math.random()*(36-25+1)+25);
	ran4s = Math.floor(Math.random()*(48-37+1)+37);
	document.getElementById('suit1').style.backgroundImage="url(card-images/"+cardArr[ran1s].picF+")";
	document.getElementById('suit2').style.backgroundImage="url(card-images/"+cardArr[ran2s].picF+")";
	document.getElementById('suit3').style.backgroundImage="url(card-images/"+cardArr[ran3s].picF+")";
	document.getElementById('suit4').style.backgroundImage="url(card-images/"+cardArr[ran4s].picF+")";

	

	document.getElementById('suits').style.display = "block";
	window.scrollTo(0, 0);
	var outputSearchString = '?showcards='+ran1s+','+ran2s+','+ran3s+','+ran4s;
	if (history.pushState) {
		var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + outputSearchString;
		window.history.pushState({path:newurl},'',newurl);
	}

}

function drawthesecards(t, c1,c2,c3,c4){

	if(t=='A'){
		c1=parseInt(c1, 10);
		c2=parseInt(c2, 10);
		c3=parseInt(c3, 10);

		document.getElementById('card1').style.backgroundImage="url(card-images/"+cardArr[c1].picF+")";
		document.getElementById('card2').style.backgroundImage="url(card-images/"+cardArr[c2].picF+")";
		document.getElementById('card3').style.backgroundImage="url(card-images/"+cardArr[c3].picF+")";

		document.getElementById('cards').style.display = "block";
	} else if (t=='B'){
		c1=parseInt(c1, 10);
		currentCard=c1;
		document.getElementById('cardF').style.backgroundImage="url(card-images/"+cardArr[c1].picF+")";
		document.getElementById('singleNavButs').innerHTML='<button id="prevBut" onclick="changeCard(1)" >Previous</button><button id="allBut" onclick="showAll()" >All</button><button id="nextBut" onclick="changeCard(2)">Next</button><br>'

		document.getElementById('explore').style.display = "block";	
	

	} else if (t=='S'){
		c1=parseInt(c1, 10);
		c2=parseInt(c2, 10);
		c3=parseInt(c3, 10);
		c4=parseInt(c4, 10);

		document.getElementById('suit1').style.backgroundImage="url(card-images/"+cardArr[c1].picF+")";
		document.getElementById('suit2').style.backgroundImage="url(card-images/"+cardArr[c2].picF+")";
		document.getElementById('suit3').style.backgroundImage="url(card-images/"+cardArr[c3].picF+")";
		document.getElementById('suit4').style.backgroundImage="url(card-images/"+cardArr[c4].picF+")";
		window.scrollTo(0, 0);
		document.getElementById('suits').style.display = "block";
	}
}

function exploreCards(targ){

	document.getElementById('cardF').style.backgroundImage="url(card-images/"+cardArr[currentCard].picF+")";
	document.getElementById('singleNavButs').innerHTML='<button id="prevBut" onclick="changeCard(1)" >Previous</button><button id="allBut" onclick="showAll()" >All</button><button id="nextBut" onclick="changeCard(2)">Next</button><br>'

	document.getElementById(targ).style.display = "block";
	window.scrollTo(0, 0);	
	var outputSearchString = '?showcards='+currentCard;
	if (history.pushState) {
		var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + outputSearchString;
		window.history.pushState({path:newurl},'',newurl);
	}
}

function randomCard(){
	var workingCardsArr = cardArr.slice(1,49);
	ran0 = Math.floor((Math.random() * workingCardsArr.length));
	currentCard = ran0;
	document.getElementById('cardF').style.backgroundImage="url(card-images/"+cardArr[currentCard].picF+")";
	
	document.getElementById('singleNavButs').innerHTML='<button id="prevBut" onclick="randomCard()" >Show me another</button>'
	
	document.getElementById('explore').style.display = "block";	
	window.scrollTo(0, 0);
	var outputSearchString = '?showcards='+ran0;
	if (history.pushState) {
		var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + outputSearchString;
		window.history.pushState({path:newurl},'',newurl);
	}
}


function flipCard(targ){
	var curPic = document.getElementById(targ).style.backgroundImage;
	var targEnd= curPic.substr(curPic.length - 8);


	var targPic;
	if(targEnd.match(/01.jpg/g)){

		targPic = curPic.replace("01.jpg", "02.jpg");

		document.getElementById(targ).style.backgroundImage=targPic;
	} else {

		targPic = curPic.replace("02.jpg", "01.jpg");

		document.getElementById(targ).style.backgroundImage=targPic;
	}

}

function changeCard(d){

	if(d==1){
		currentCard = currentCard-1;
		if(currentCard<0){
			currentCard = 49;
		}

	} else {
		currentCard = currentCard+1;
		if(currentCard>49){
			currentCard = 0;
		}
	};
	document.getElementById('cardF').style.backgroundImage="url(card-images/"+cardArr[currentCard].picF+")";
	window.scrollTo(0, 0);
	var outputSearchString = '?showcards='+currentCard;
	if (history.pushState) {
		var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + outputSearchString;
		window.history.pushState({path:newurl},'',newurl);
	}
}
var showAlltog=0;
function showAll(){
	var cardsDiv = document.getElementById('cardsContainer');
	if(!showAlltog){
		var cardsInsert='';
		var cardID;
		cardArr.forEach(function(entry) {
    		console.log(entry);
    		cardsInsert += '<div id="allcards'+entry.number+'" class="card allcards" style="background-image:url(card-images/'+cardArr[entry.number].picF+');" onclick="flipCard('+'\'allcards'+entry.number+'\')"></div>';
		});



		cardsDiv.innerHTML=cardsInsert;
		document.getElementById('singleNavButs').innerHTML='<button id="allBut" onclick="showAll()" >One by One</button><br>'
		window.scrollTo(0, 0);
		showAlltog=1;
	} else {
		cardsDiv.innerHTML='<div id="cardF" class="card singlecard" style="background-image:url(card-images/'+cardArr[0].picF+');" onclick="flipCard(\'cardF\')"></div>';
		document.getElementById('singleNavButs').innerHTML='<button id="prevBut" onclick="changeCard(1)" >Previous</button><button id="allBut" onclick="showAll()" >All</button><button id="nextBut" onclick="changeCard(2)">Next</button><br>'
		window.scrollTo(0, 0);
		currentCard = 0;
		showAlltog=0;
	}

}

// check if targetting a shared view
// showcards array [numbers]

var targettedview = 0;
var showcardsArr;
var showcards = getParameterByName('showcards');

window.onload = function() {
	if(showcards){
		showcardsArr = showcards.split(',');
//		console.log(showcardsArr);
		if(showcardsArr.length==3){
			drawthesecards('A', showcardsArr[0],showcardsArr[1],showcardsArr[2])
		} else if(showcardsArr.length==4){
			drawthesecards('S', showcardsArr[0],showcardsArr[1],showcardsArr[2],showcardsArr[3])
		} else{
			drawthesecards('B', showcardsArr[0])
		}
	}
}
