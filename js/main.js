document.addEventListener("DOMContentLoaded", function() {
  const images = [
    "img/cherries.png",
    "img/grapes.png",
    "img/orange.png",
    "img/seven.png",
    "img/watermelon.png"
  ];
  let credits = 1000;
  const minBetButton = document.querySelector('.slots-buttons input[value="MIN bet"]');
  const maxBetButton = document.querySelector('.slots-buttons input[value="MAX bet"]');
  updateCredits();

  minBetButton.addEventListener('click', () => {
    playSlot(5);
  });

  maxBetButton.addEventListener('click', () => {
    playSlot(50);
  });


  //////////////////////////////// FUNCTIONS

  function playSlot(bet) {
    if (credits < bet) {
      alert("Not enough credits to place this bet!");
      return;
    }

    // deduct bet from credits
    credits -= bet;

    // get rng images
    const slot1Index = Math.floor(Math.random() * images.length);
    const slot2Index = Math.floor(Math.random() * images.length);
    const slot3Index = Math.floor(Math.random() * images.length);

    // update displayed images
    updateSlotImage('.slot-single#slot1', images[slot1Index]);
    updateSlotImage('.slot-single#slot2', images[slot2Index]);
    updateSlotImage('.slot-single#slot3', images[slot3Index]);

    // check for game result
    if (slot1Index === slot2Index && slot2Index === slot3Index) {
      const winnings = bet * 20; // winning multipler MAYBE CHANGE
      credits += winnings;
      document.querySelector("#game-result").textContent = "Winner! You won " + winnings + " credits!";
    } else {
      document.querySelector("#game-result").textContent = "Loser! Try again.";
    }

    // update credits
    updateCredits();
  }

  ////////////////////////////////

  function updateSlotImage(slotSelector, imageSrc) {
    const slotSection = document.querySelector(slotSelector);
    const images = slotSection.querySelectorAll("img");

    // hide all images
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add("hidden");
    }

    // show the selected image
    for (let i = 0; i < images.length; i++) {
      if (images[i].src.includes(imageSrc)) {
        images[i].classList.remove("hidden");
        break;
      }
    }
  }

  ////////////////////////////////

  function updateCredits() {
    document.querySelector("#credit-count").textContent = credits;
  }
});
