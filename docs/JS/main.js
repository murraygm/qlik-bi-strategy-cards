var currentCard = 0;
	function closeIt (targ){
		document.getElementById(targ).style.display = "none";
	}
	function draw3cards(targ){

		var ran1, ran2, ran3;
		var workingCardsArr = cardArr.slice(1,49);


		ran1 = Math.floor((Math.random() * workingCardsArr.length));

		document.getElementById('card1').style.backgroundImage="url(card-images/"+cardArr[ran1].picF+")";

		workingCardsArr.splice(ran1, 1);  

		ran2 = Math.floor((Math.random() * workingCardsArr.length));

		document.getElementById('card2').style.backgroundImage="url(card-images/"+cardArr[ran2].picF+")";

		workingCardsArr.splice(ran2, 1);  

		ran3 = Math.floor((Math.random() * workingCardsArr.length));



		document.getElementById('card3').style.backgroundImage="url(card-images/"+cardArr[ran3].picF+")";
		workingCardsArr.splice(ran3, 1);  

		document.getElementById(targ).style.display = "block";
	}
	function exploreCards(targ){

		document.getElementById('cardF').style.backgroundImage="url(card-images/"+cardArr[currentCard].picF+")";
		
		document.getElementById(targ).style.display = "block";	
	}

	function flipCard(targ){
		var curPic = document.getElementById(targ).style.backgroundImage;
		var targEnd= curPic.substr(curPic.length - 8);

		console.log(curPic);
		console.log(targEnd);
		var targPic;
		if(targEnd.match(/01.jpg/g)){

			targPic = curPic.replace("01.jpg", "02.jpg");
			console.log("matched 01 - "+ targPic);
			document.getElementById(targ).style.backgroundImage=targPic;
		} else {

			targPic = curPic.replace("02.jpg", "01.jpg");
			console.log("matched else- "+ targPic);
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

	}