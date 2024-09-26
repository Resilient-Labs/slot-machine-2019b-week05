//Goal: Make a simple casino application
//Theme: Sneakerhead Casino
//music.....because I'm extra XD



var total = 1000;
document.querySelector('.actualNumber').innerHTML =  "$"+ total
document.querySelector('.betAmount').addEventListener("click", getBetMin)
document.querySelector('.betAmountTwo').addEventListener("click", getBetMax)
document.querySelector('body').addEventListener("click", getMusic)
//Function to randomize photos 
//What photos you ask? | Jordans | Black Air Forces | Bobos 
//Determine what they bet 


https://stackoverflow.com/questions/65829041/play-the-music-automatically-on-page-load-in-the-background-in-javascript-or-jqu
function getMusic() {
    document.querySelector("audio").play()
}



function getBetMin(event) {
    event.preventDefault();
    betAmount = 25 
    total = total - betAmount 
    console.log(betAmount)


    shoes = ['img/jordans.webp', 'img/blackAirForces.webp', 'img/bobos2.0.webp', 'img/zoomers.webp', 'img/kyries.webp']
    let firstShoe = Math.floor(Math.random() * shoes.length)
    console.log(firstShoe)
    console.log(shoes[firstShoe])
    let secondShoe = Math.floor(Math.random() * shoes.length)
    console.log(secondShoe)
    let thirdShoe = Math.floor(Math.random() * shoes.length)
    console.log(thirdShoe)
    document.querySelector('.boxOne').style.backgroundImage = "url(" + `${shoes[firstShoe]}`+ ")"
    document.querySelector('.boxTwo').style.backgroundImage = "url(" + `${shoes[secondShoe]}`+ ")"
    document.querySelector('.boxThree').style.backgroundImage = "url(" + `${shoes[thirdShoe]}`+ ")"
    document.querySelector('.boxOne').style.filter = "grayscale(0)"
    document.querySelector('.boxTwo').style.filter = "grayscale(0)"
    document.querySelector('.boxThree').style.filter = "grayscale(0)"


    if (total > 0) {
        
        if (firstShoe === 0  && secondShoe === 0 && thirdShoe === 0) {
            total = total + 50
            console.log(total)
            document.querySelector('.actualNumber').innerHTML = "$"+ total
        }
        else if (firstShoe === 1  && secondShoe === 1 && thirdShoe === 1) {
            total = total - total
            console.log("else")
            console.log(total)
            document.querySelector('.actualNumber').innerHTML = "$"+ total
            document.querySelector('body').style.filter = "grayscale()"
             //https://www.codexworld.com/how-to/reload-page-after-specific-time-5-seconds-in-javascript/#:~:text=Use%20location.,must%20be%20specified%20in%20milliseconds.
            setTimeout(function(){
                window.location.reload();
             }, 2500);
            alert("You got robbed")
           
           
    
        }
        else {
            total = total 
            console.log("else")
            console.log(total)
            document.querySelector('.actualNumber').innerHTML = "$" + total
    
          
        }   
    }
    else if (total <= 0) {
        document.querySelector('.actualNumber').innerHTML = "$" + 0
        document.querySelector('button').disabled = true;
        document.querySelector('body').style.filter = "grayscale()"
        setTimeout(function(){
            window.location.reload();
         }, 2500);
        alert("Broke Alert! You Lose")
   
    }
}

function getBetMax(event) {
    event.preventDefault();
    betAmount = 50 
    total = total - betAmount 
    console.log(betAmount)


    shoes = ['jordans.webp', 'blackAirForces.webp', 'bobos2.0.webp', 'zoomers.webp', 'kyries.webp']
    let firstShoe = Math.floor(Math.random() * shoes.length)
    console.log(firstShoe)
    console.log(shoes[firstShoe])
    let secondShoe = Math.floor(Math.random() * shoes.length)
    console.log(secondShoe)
    let thirdShoe = Math.floor(Math.random() * shoes.length)
    console.log(thirdShoe)
    document.querySelector('.boxOne').style.backgroundImage = "url(" + `${shoes[firstShoe]}`+ ")"
    document.querySelector('.boxOne').style.filter = "grayscale()"
    document.querySelector('.boxTwo').style.backgroundImage = "url(" + `${shoes[secondShoe]}`+ ")"
    document.querySelector('.boxThree').style.backgroundImage = "url(" + `${shoes[thirdShoe]}`+ ")"
    document.querySelector('.boxOne').style.filter = "grayscale(0)"
    document.querySelector('.boxTwo').style.filter = "grayscale(0)"
    document.querySelector('.boxThree').style.filter = "grayscale(0)"

    if (total > 0) {
        
        if (firstShoe === 0  && secondShoe === 0 && thirdShoe === 0) {
            total = total + 100
            console.log(total)
            document.querySelector('.actualNumber').innerHTML = "$"+ total
      
          
        }
        else if (firstShoe === 1  && secondShoe === 1 && thirdShoe === 1) {
            total = total - total

            console.log(total)
            document.querySelector('.actualNumber').innerHTML = "$" + total
            document.querySelector('body').style.filter = "grayscale()"
            setTimeout(function(){
                window.location.reload();
             }, 2500);
            alert("You got robbed")
            //https://www.codexworld.com/how-to/reload-page-after-specific-time-5-seconds-in-javascript/#:~:text=Use%20location.,must%20be%20specified%20in%20milliseconds.
           
        }
        else {
            total = total 
            console.log("else")
            console.log(total)
            document.querySelector('.actualNumber').innerHTML = "$" + total
    
          
        }   
    }
    else if (total <= 0) {
        document.querySelector('.actualNumber').innerHTML = "$" + 0
        document.querySelector('button').disabled = true;
        document.querySelector('body').style.filter = "grayscale()"
        setTimeout(function(){
            window.location.reload();
         }, 2500);
        alert("Broke Alert! You Lose")
  

    }
}







//Function to add to score / get two jordans
//Function to subtract from score if you get a single black air force

//Function that determines if you win or lose 