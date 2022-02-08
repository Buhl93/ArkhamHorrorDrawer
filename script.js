// Selectors
var resultStandard = document.querySelector(".results__standard");
var resultMcOlive = document.querySelector(".results__mcOlive");
var hauntedGroundDisplay = document.querySelector(
  ".settings__hauntedGround__display"
);
var candlelightDisplay = document.querySelector(
  ".settings__candlelight__display"
);
var testDifficultyDisplay = document.querySelector(
  ".settings__testDifficulty__display"
);
var statLineDisplay = document.querySelector(".settings__statLine__display");
// tokens amount display selectors
let plusOneTokenDisplay = document.querySelector(".tokens__plusOneToken");
let zeroTokenDisplay = document.querySelector(".tokens__zeroToken");
let minusOneTokenDisplay = document.querySelector(".tokens__minusOneToken");
let minusTwoTokenDisplay = document.querySelector(".tokens__minusTwoToken");
let minusThreeTokenDisplay = document.querySelector(".tokens__minusThreeToken");
let minusFourTokenDisplay = document.querySelector(".tokens__minusFourToken");
let minusFiveTokenDisplay = document.querySelector(".tokens__minusFiveToken");
let minusSixTokenDisplay = document.querySelector(".tokens__minusSixToken");
let skullTokenDisplay = document.querySelector(".tokens__skullToken");
let cultistTokenDisplay = document.querySelector(".tokens__cultistToken");
let tombstoneTokenDisplay = document.querySelector(".tokens__tombstoneToken");
let squidTokenDisplay = document.querySelector(".tokens__squidToken");
let starTokenDisplay = document.querySelector(".tokens__starToken");
let autoFailTokenDisplay = document.querySelector(".tokens__autoFailToken");

// token value display selectors
let skullTokenValueDisplay = document.querySelector(".tokens__skullTokenValue");
let cultistTokenValueDisplay = document.querySelector(
  ".tokens__cultistTokenValue"
);
let tombstoneTokenValueDisplay = document.querySelector(
  ".tokens__tombstoneTokenValue"
);
let squidTokenValueDisplay = document.querySelector(".tokens__squidTokenValue");
let starTokenValueDisplay = document.querySelector(".tokens__starTokenValue");

//Base test
let testDifficulty = 0;
let statLine = 0;

// Modifiers
let hauntedGround = false;
let candlelight = 0;

// Token bag
var tokenBag = [];

// Tokens value
let plusOneToken = 1;
let zeroToken = 0;
let minusOneToken = -1;
let minusTwoToken = -2;
let minusThreeToken = -3;
let minusFourToken = -4;
let minusFiveToken = -5;
let minusSixToken = -6;
let skullToken = -2;
let cultistToken = -2;
let tombstoneToken = -3;
let squidToken = 0;
let starToken = 2;
let autoFailToken = -1000;

// Token amount
let plusOneTokenAmount = 0;
let zeroTokenAmount = 2;
let minusOneTokenAmount = 2;
let minusTwoTokenAmount = 2;
let minusThreeTokenAmount = 1;
let minusFourTokenAmount = 1;
let minusFiveTokenAmount = 1;
let minusSixTokenAmount = 0;
let skullTokenAmount = 2;
let cultistTokenAmount = 1;
let tombstoneTokenAmount = 2;
let squidTokenAmount = 0;
let starTokenAmount = 1;
let autoFailTokenAmount = 1;

// Handle token amounts

function handlePlusOneTokenIncrement() {
  plusOneTokenAmount++;
  plusOneTokenDisplay.innerHTML = plusOneTokenAmount;
  compareDraw()
}

function handlePlusOneTokenDecrement() {
  if (plusOneTokenAmount != 0) {
    plusOneTokenAmount--;
  }
  plusOneTokenDisplay.innerHTML = plusOneTokenAmount;
  compareDraw()
}

function handleZeroTokenIncrement() {
  zeroTokenAmount++;
  zeroTokenDisplay.innerHTML = zeroTokenAmount;
  compareDraw()
}

function handleZeroTokenDecrement() {
  if (zeroTokenAmount != 0) {
    zeroTokenAmount--;
  }

  zeroTokenDisplay.innerHTML = zeroTokenAmount;
  compareDraw()
}

function handleMinusOneTokenIncrement() {
  minusOneTokenAmount++;
  minusOneTokenDisplay.innerHTML = minusOneTokenAmount;
  compareDraw()
}

function handleMinusOneTokenDecrement() {
  if (minusOneTokenAmount != 0) {
    minusOneTokenAmount--;
  }
  minusOneTokenDisplay.innerHTML = minusOneTokenAmount;
  compareDraw()
}

function handleMinusTwoTokenIncrement() {
  minusTwoTokenAmount++;
  minusTwoTokenDisplay.innerHTML = minusTwoTokenAmount;
  compareDraw()
}

function handleMinusTwoTokenDecrement() {
  if (minusTwoTokenAmount != 0) {
    minusTwoTokenAmount--;
  }
  minusTwoTokenDisplay.innerHTML = minusTwoTokenAmount;
  compareDraw()
}

function handleMinusThreeTokenIncrement() {
  minusThreeTokenAmount++;
  minusThreeTokenDisplay.innerHTML = minusThreeTokenAmount;
  compareDraw()
}

function handleMinusThreeTokenDecrement() {
  if (minusThreeTokenAmount != 0) {
    minusThreeTokenAmount--;
  }
  minusThreeTokenDisplay.innerHTML = minusThreeTokenAmount;
  compareDraw()
}

function handleMinusFourTokenIncrement() {
  minusFourTokenAmount++;
  minusFourTokenDisplay.innerHTML = minusFourTokenAmount;
  compareDraw()
}

function handleMinusFourTokenDecrement() {
  if (minusFourTokenAmount != 0) {
    minusFourTokenAmount--;
  }
  minusFourTokenDisplay.innerHTML = minusFourTokenAmount;
  compareDraw()
}

function handleMinusFiveTokenIncrement() {
  minusFiveTokenAmount++;
  minusFiveTokenDisplay.innerHTML = minusFiveTokenAmount;
  compareDraw()
}

function handleMinusFiveTokenDecrement() {
  if (minusFiveTokenAmount != 0) {
    minusFiveTokenAmount--;
  }
  minusFiveTokenDisplay.innerHTML = minusFiveTokenAmount;
  compareDraw()
}

function handleMinusSixTokenIncrement() {
  minusSixTokenAmount++;
  minusSixTokenDisplay.innerHTML = minusSixTokenAmount;
  compareDraw()
}

function handleMinusSixTokenDecrement() {
  if (minusSixTokenAmount != 0) {
    minusSixTokenAmount--;
  }
  minusSixTokenDisplay.innerHTML = minusSixTokenAmount;
  compareDraw()
}

function handleSkullTokenIncrement() {
  skullTokenAmount++;
  skullTokenDisplay.innerHTML = skullTokenAmount;
  compareDraw()
}

function handleSkullTokenDecrement() {
  if (skullTokenAmount != 0) {
    skullTokenAmount--;
  }
  skullTokenDisplay.innerHTML = skullTokenAmount;
  compareDraw()
}

function handleCultistTokenIncrement() {
  cultistTokenAmount++;
  cultistTokenDisplay.innerHTML = cultistTokenAmount;
  compareDraw()
}

function handleCultistTokenDecrement() {
  if (cultistTokenAmount != 0) {
    cultistTokenAmount--;
  }
  cultistTokenDisplay.innerHTML = cultistTokenAmount;
  compareDraw()
}

function handleTombstoneTokenIncrement() {
  tombstoneTokenAmount++;
  tombstoneTokenDisplay.innerHTML = tombstoneTokenAmount;
  compareDraw()
}

function handleTombstoneTokenDecrement() {
  if (tombstoneTokenAmount != 0) {
    tombstoneTokenAmount--;
  }
  tombstoneTokenDisplay.innerHTML = tombstoneTokenAmount;
  compareDraw()
}

function handleSquidTokenIncrement() {
  squidTokenAmount++;
  squidTokenDisplay.innerHTML = squidTokenAmount;
  compareDraw()
}

function handleSquidTokenDecrement() {
  if (squidTokenAmount != 0) {
    squidTokenAmount--;
  }
  squidTokenDisplay.innerHTML = squidTokenAmount;
  compareDraw()
}

function handleStarTokenIncrement() {
  starTokenAmount++;
  starTokenDisplay.innerHTML = starTokenAmount;
  compareDraw()
}

function handleStarTokenDecrement() {
  if (starTokenAmount != 0) {
    starTokenAmount--;
  }
  starTokenDisplay.innerHTML = starTokenAmount;
  compareDraw()
}

function handleAutoFailTokenIncrement() {
  autoFailTokenAmount++;
  autoFailTokenDisplay.innerHTML = autoFailTokenAmount;
  compareDraw()
}

function handleAutoFailTokenDecrement() {
  if (autoFailTokenAmount != 0) {
    autoFailTokenAmount--;
  }
  autoFailTokenDisplay.innerHTML = autoFailTokenAmount;
  compareDraw()
}

// Handle token value

function handleSkullTokenValueDecrement() {
  skullToken--;
  skullTokenValueDisplay.innerHTML = skullToken;
  compareDraw()
}

function handleSkullTokenValueIncrement() {
  skullToken++;
  skullTokenValueDisplay.innerHTML = skullToken;
  compareDraw()
}

function handleCultistTokenValueDecrement() {
  cultistToken--;
  cultistTokenValueDisplay.innerHTML = cultistToken;
  compareDraw()
}

function handleCultistTokenValueIncrement() {
  cultistToken++;
  cultistTokenValueDisplay.innerHTML = cultistToken;
  compareDraw()
}

function handleTombstoneTokenValueDecrement() {
  tombstoneToken--;
  tombstoneTokenValueDisplay.innerHTML = tombstoneToken;
  compareDraw()
}

function handleTombstoneTokenValueIncrement() {
  tombstoneToken++;
  tombstoneTokenValueDisplay.innerHTML = tombstoneToken;
  compareDraw()
}

function handleSquidTokenValueDecrement() {
  squidToken--;
  squidTokenValueDisplay.innerHTML = squidToken;
  compareDraw()
}

function handleSquidTokenValueIncrement() {
  squidToken++;
  squidTokenValueDisplay.innerHTML = squidToken;
  compareDraw()
}

function handleStarTokenValueDecrement() {
starToken--;
starTokenValueDisplay.innerHTML =starToken;
compareDraw()
  }
  
  function handleStarTokenValueIncrement() {
starToken++;
starTokenValueDisplay.innerHTML = starToken;
compareDraw()
  }

// Fill token bag
function fillTokenBag() {
  //Empty bag
  tokenBag = [];

  // Modified tokens
  let modifiedSkullToken = skullToken;
  let modifiedCultistToken = cultistToken;
  let modifiedTombstoneToken = tombstoneToken;
  let modifiedSquidToken = squidToken;

  //Haunted ground
  if (hauntedGround) {
    modifiedCultistToken = modifiedCultistToken - 2;
  }

  // candlelight
  if (candlelight) {
    modifiedSkullToken = modifiedSkullToken + candlelight;
    modifiedCultistToken = modifiedCultistToken + candlelight;
    modifiedTombstoneToken = modifiedTombstoneToken + candlelight;
    modifiedSquidToken = modifiedSquidToken + candlelight;
  }

  //Put each token in bag

  for (let i = 0; i < plusOneTokenAmount; i++) {
    tokenBag.push(plusOneToken);
  }
  for (let i = 0; i < zeroTokenAmount; i++) {
    tokenBag.push(zeroToken);
  }
  for (let i = 0; i < minusOneTokenAmount; i++) {
    tokenBag.push(minusOneToken);
  }
  for (let i = 0; i < minusTwoTokenAmount; i++) {
    tokenBag.push(minusTwoToken);
  }
  for (let i = 0; i < minusThreeTokenAmount; i++) {
    tokenBag.push(minusThreeToken);
  }
  for (let i = 0; i < minusFourTokenAmount; i++) {
    tokenBag.push(minusFourToken);
  }
  for (let i = 0; i < minusFiveTokenAmount; i++) {
    tokenBag.push(minusFiveToken);
  }
  for (let i = 0; i < minusSixTokenAmount; i++) {
    tokenBag.push(minusSixToken);
  }
  for (let i = 0; i < skullTokenAmount; i++) {
    tokenBag.push(modifiedSkullToken);
  }
  for (let i = 0; i < cultistTokenAmount; i++) {
    tokenBag.push(modifiedCultistToken);
  }
  for (let i = 0; i < tombstoneTokenAmount; i++) {
    tokenBag.push(modifiedTombstoneToken);
  }
  for (let i = 0; i < squidTokenAmount; i++) {
    tokenBag.push(modifiedSquidToken);
  }
  for (let i = 0; i < starTokenAmount; i++) {
    tokenBag.push(starToken);
  }
  for (let i = 0; i < autoFailTokenAmount; i++) {
    tokenBag.push(autoFailToken);
  }

  console.log(tokenBag);
}

//Draw functions

function normalDraw(statDifference, tokenBag) {
  let losingCount = 0;
  let losingProb = 0;
  let winningProb = 0;

  tokenBag.map((token) => {
    if (statDifference + token < 0) {
      losingCount++;
    }
  });

  losingProb = (losingCount / tokenBag.length) * 100;
  winningProb = 100 - losingProb;

  resultStandard.innerHTML = winningProb.toFixed(1) + " %";
}

function mcOliveDraw(statDifference, tokenBag) {
  let losingCount = 0;
  let losingProb = 0;
  let winningProb = 0;
  let counter = 0;

  for (var i = 0; i < tokenBag.length; i++) {
    for (var j = 0; j < tokenBag.length; j++) {
      if (j == i) {
        j++;
      }
      if (j == 16) {
        break;
      }
      for (var k = 0; k < tokenBag.length; k++) {
        if (k != i && k != j) {
          var tokenSum = 0;
          if (tokenBag[i] < tokenBag[j]) {
            tokenSum = tokenSum + tokenBag[j];
            if (tokenBag[i] < tokenBag[k]) {
              tokenSum = tokenSum + tokenBag[k];
            } else {
              tokenSum = tokenSum + tokenBag[i];
            }
          } else {
            tokenSum = tokenSum + tokenBag[i];
            if (tokenBag[j] < tokenBag[k]) {
              tokenSum = tokenSum + tokenBag[k];
            } else {
              tokenSum = tokenSum + tokenBag[j];
            }
          }
          if (statDifference + tokenSum < 0) {
            losingCount++;
          } else {
            //console.log("win");
          }
          // console.log(i, j, k);
          //console.log("tokens: ", tokenBag[i], tokenBag[j], tokenBag[k]);
          //console.log("tokensum: ", tokenSum);

          counter++;
        }
      }
    }
  }

  losingProb = (losingCount / counter) * 100;
  winningProb = 100 - losingProb;

  /*console.log("Antal muligheder: ", counter);
  console.log("Antal tabte: ", losingCount);
  console.log("Sandsynlighed for at tabe: ", losingProb);*/
  //console.log("Sandsynlighed for at vinde (mcOlive): ", winningProb.toFixed(1));

  resultMcOlive.innerHTML = winningProb.toFixed(1) + " %";
}

function compareDraw() {
  fillTokenBag();
  const statDifference = statLine - testDifficulty;

  //console.log(tokenBag);
  normalDraw(statDifference, tokenBag);
  mcOliveDraw(statDifference, tokenBag);
}

// Handle settings
// HAunted ground
function handleHauntedGroundToggle() {
  hauntedGround == true ? (hauntedGround = false) : (hauntedGround = true);
  hauntedGroundDisplay.innerHTML = hauntedGround;
  compareDraw();
}

// Candlelight
function handleCandlelightDecrement() {
  if (candlelight != 0) {
    candlelight--;
  } else {
    candlelight = 2;
  }
  candlelightDisplay.innerHTML = candlelight;
  compareDraw();
}

function handleCandlelightIncrement() {
  if (candlelight != 2) {
    candlelight++;
  } else {
    candlelight = 0;
  }
  candlelightDisplay.innerHTML = candlelight;
  compareDraw();
}

// Test Difficulty
function handleTestDifficultyDecrement() {
  if (testDifficulty != 0) {
    testDifficulty--;
  }
  testDifficultyDisplay.innerHTML = testDifficulty;
  compareDraw();
}

function handleTestDifficultyIncrement() {
  testDifficulty++;
  testDifficultyDisplay.innerHTML = testDifficulty;
  compareDraw();
}

// Stat line
function handleStatLineDecrement() {
  if (statLine != 0) {
    statLine--;
  }
  statLineDisplay.innerHTML = statLine;
  compareDraw();
}

function handleStatLineIncrement() {
  statLine++;
  statLineDisplay.innerHTML = statLine;
  compareDraw();
}
