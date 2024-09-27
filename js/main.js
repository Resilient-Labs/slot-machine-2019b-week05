
//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
// SLOT MACHINE
// multiple rows randomized result (numbers)
// pictures (optional)
// min bet && max bet
    // min - 5 && max - 50
// so there's point where the game
    // when your ass is broke
// your still got money the game keeps going

// What happens when you win?
    // 10 * 5 = 50
    // 10 * 50 = 500

    // event listener on 5 button
    // event listener on 50 button
    let total = 1000
    

    // document.querySelector('#min').addEventListener('click', spin(5))
    // document.querySelector('#max').addEventListener('click', spin(50))

    // let bell = 0
    // let grape = 1
    // let lucky = 2
    // let bar = 3
    // let cherry = 4


    // function spin5(){
    //   let r = Math.floor(Math.random() * 5) ;
    //   if( r == 0 ){
    //     console.log('bell')
    //   }
    //   else if( r == 1 ){
    //     console.log('grape')
    //   }
    //   else if( r == 2 ){
    //     console.log('lucky')
    //   }
    //   else if( r == 3 ){
    //     console.log('bar')
    //   }
    //   else{
    //     console.log('cherry')
    //   }
    // }
    
    let cash = 1000
  

    function multiplyBy10(wager){
      return wager * 10
    }

    function cashMinusWager(wager){
      return cash - wager
    }

    function balance(wager){
      const remainder = checkForWin()
      if( remainder === "loss"){
        cash = cashMinusWager(wager)
      }
      else if (remainder === 'win'){
        cash = cashMinusWager(wager) + multiplyBy10(wager)
      }
      document.getElementById('Cash').innerHTML = `${remainder} $${cash}`
    }

    function spin(){
      let r = Math.floor(Math.random() * 5)

      if(r === 0){
        return "Bell"
      }
      else if(r === 1){
      return "Grape"
      }
      else if( r === 2){
        return "777"
      }
      else if(r === 3){
        return "Bar"
      }
      else if(r === 4){
        return "Cherry"
      }
    }
    

    function checkForWin(){
      const reelOne = spin()
      document.getElementById('reelOne').innerHTML = reelOne;
      const reelTwo = spin()
      document.getElementById('reelTwo').innerHTML = reelTwo;
      const reelThree = spin()
      document.getElementById('reelThree').innerHTML = reelThree
      if(reelOne === reelTwo && reelTwo=== reelThree){
      alert('YOU WIN!');
      return "win"
    }
    else{
      return "loss" 
    }
  }
    

