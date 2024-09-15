# 🎰 Slot Machine!

https://slot-machine-fjh.netlify.app/

### What I did to build this app:

I used HTML, CSS, and JavaScript to code this project.

For my slot machine I wanted to focus hiding already present images in my HTML file and then present them as the 3-columned result of a slot machine without a spinnin animation. I focused first on writing one function for both my minimum bet and maximum bet buttons but this proved to be complicated considering that the amounts to deduct and add based on the results would call everytime either button was clicked. I fixed this by writing two different functions for each button and it proved to be easier to organize mentally and in my code editor. I then set 3 variables to a randomnumber variable to generate a random integer between 0 through 4 which would represent each of my five slot machine icons in each column and sort through them as arrays. I then implemented a for loop to essentially only show my code run once when clicked and revert to its previous state immediately after. In other words, it stopped result rows from generating again and again each time I clicked either one of my buttons. Finally, I set a function for each button that would subtract its bet if a losing status presented itself and added the winnings if three of the same image showed up in the result.

### Lessons Learned :

- I had some trouble trying to write one general function for all of my code. I found that writing separate functions helped organize my code and my own mental processing of my code.
- I had the general idea of hiding images that were already present in my HTML code but I found, later with a different project, that creating elements in javascript might have been a more concise and efficient solution.
-This project really helped me visualize and absorb the concept of variable scope within JS and JS functions. It also helped me grasp the power of for loops and their versitility within JS.

![image](https://github.com/fjh321/slot-machine-2019-week05/assets/64885403/52719245-751c-437e-9a76-542a6c13b271)
