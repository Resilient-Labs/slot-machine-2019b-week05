
let balance = 1000
let bet = 5

function slotMachine (){
    const pic1=document.querySelector("#pic1")
    pic1.src ="dk1.png"
    
    const pic2=document.querySelector("#pic2")
    pic2.src ="dk2.png"
    
    const pic3=document.querySelector("#pic3")
    pic3.src ="dk3.png"
    
    // var randomNumber=Math.random();
    let r1 =Math.random()*5
    let r2 =Math.floor(r1)+1
    console.log (r2)
    let randomimage="dk"+ r2 + ".png"
    console.log (randomimage)
    pic1.src ="dk"
    pic1.src = randomimage
    r1 =Math.random()*5
    r2 =Math.floor(r1)+1
     randomimage="dk"+ r2 + ".png"
    pic2.src = randomimage
    r1 =Math.random()*5
    r2 =Math.floor(r1)+1
     randomimage="dk"+ r2 + ".png"
    pic3.src = randomimage 

    if (pic1.src ===pic2.src && pic1.src===pic3.src){
    
        balance+= bet*10
    }
    else{
        balance -=  bet

    }
    document.querySelector("#balance").innerText = balance
    console.log("pull")
}
 function bet5 (){
     bet = 5
 }
 function bet50 (){
    bet = 50
 }



const pullButton =document.getElementById("pull")
pullButton.addEventListener("click", slotMachine)

console.log(pullButton)

document.getElementById("pull")

document.querySelector("#five").addEventListener("click", bet5)
document.querySelector("#fifty").addEventListener("click", bet50)