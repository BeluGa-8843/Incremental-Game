const Reset = document.getElementById('Reset')

const MoneyDipslay = document.getElementById('MoneyDisplay')
const MoneySecDisplay = document.getElementById('MoneySecDisplay')

const WorkerDisplay = document.getElementById('WorkerDisplay')  

const HomeRedirect = document.getElementById('HomeRedirect')
const ResearchRedirect = document.getElementById('ResearchRedirect')
const WorkerRedirect = document.getElementById('WorkerRedirect')

const Home = document.getElementById('Home')
const Research = document.getElementById('Research')
const Work = document.getElementById('Worker')

const OneWorkerMultiplierDisplay = document.getElementById('OneWorkerMultiplier')
const TwoWorkerMultiplierDisplay = document.getElementById('TwoWorkerMultiplier')
const ThreeWorkerMultiplierDisplay = document.getElementById('ThreeWorkerMultiplier')
const FourWorkerMultiplierDisplay = document.getElementById('FourWorkerMultiplier')
const FiveWorkerMultiplierDisplay = document.getElementById('FiveWorkerMultiplier')
const SixWorkerMultiplierDisplay = document.getElementById('SixWorkerMultiplier')

const OneWorkerNumberDisplay = document.getElementById('OneWorkerNumber')
const TwoWorkerNumberDisplay = document.getElementById('TwoWorkerNumber')
const ThreeWorkerNumberDisplay = document.getElementById('ThreeWorkerNumber')
const FourWorkerNumberDisplay = document.getElementById('FourWorkerNumber')
const FiveWorkerNumberDisplay = document.getElementById('FiveWorkerNumber')
const SixWorkerNumberDisplay = document.getElementById('SixWorkerNumber')

const OneWorkerUpgradeOne = document.getElementById('OneWorkerUpgradeOne')
const OneWorkerUpgradeTwo = document.getElementById('OneWorkerUpgradeTwo')
const OneWorkerUpgradeThree = document.getElementById('OneWorkerUpgradeThree')
const OneWorkerUpgradeFour = document.getElementById('OneWorkerUpgradeFour')
const OneWorkerUpgradeFive = document.getElementById('OneWorkerUpgradeFive')
const OneWorkerUpgradeSix = document.getElementById('OneWorkerUpgradeSix')

const TwoWorkerUpgradeOne = document.getElementById('TwoWorkerUpgradeOne')
const TwoWorkerUpgradeTwo = document.getElementById('TwoWorkerUpgradeTwo')
const TwoWorkerUpgradeThree = document.getElementById('TwoWorkerUpgradeThree')
const TwoWorkerUpgradeFour = document.getElementById('TwoWorkerUpgradeFour')
const TwoWorkerUpgradeFive = document.getElementById('TwoWorkerUpgradeFive')
const TwoWorkerUpgradeSix = document.getElementById('TwoWorkerUpgradeSix')

const ThreeWorkerUpgradeOne = document.getElementById('ThreeWorkerUpgradeOne')
const ThreeWorkerUpgradeTwo = document.getElementById('ThreeWorkerUpgradeTwo')
const ThreeWorkerUpgradeThree = document.getElementById('ThreeWorkerUpgradeThree')
const ThreeWorkerUpgradeFour = document.getElementById('ThreeWorkerUpgradeFour')
const ThreeWorkerUpgradeFive = document.getElementById('ThreeWorkerUpgradeFive')
const ThreeWorkerUpgradeSix = document.getElementById('ThreeWorkerUpgradeSix')

const FourWorkerUpgradeOne = document.getElementById('FourWorkerUpgradeOne')
const FourWorkerUpgradeTwo = document.getElementById('FourWorkerUpgradeTwo')
const FourWorkerUpgradeThree = document.getElementById('FourWorkerUpgradeThree')
const FourWorkerUpgradeFour = document.getElementById('FourWorkerUpgradeFour')
const FourWorkerUpgradeFive = document.getElementById('FourWorkerUpgradeFive')
const FourWorkerUpgradeSix = document.getElementById('FourWorkerUpgradeSix')

const FiveWorkerUpgradeOne = document.getElementById('FiveWorkerUpgradeOne')
const FiveWorkerUpgradeTwo = document.getElementById('FiveWorkerUpgradeTwo')
const FiveWorkerUpgradeThree = document.getElementById('FiveWorkerUpgradeThree')
const FiveWorkerUpgradeFour = document.getElementById('FiveWorkerUpgradeFour')
const FiveWorkerUpgradeFive = document.getElementById('FiveWorkerUpgradeFive')
const FiveWorkerUpgradeSix = document.getElementById('FiveWorkerUpgradeSix')

const SixWorkerUpgradeOne = document.getElementById('SixWorkerUpgradeOne')
const SixWorkerUpgradeTwo = document.getElementById('SixWorkerUpgradeTwo')
const SixWorkerUpgradeThree = document.getElementById('SixWorkerUpgradeThree')
const SixWorkerUpgradeFour = document.getElementById('SixWorkerUpgradeFour')
const SixWorkerUpgradeFive = document.getElementById('SixWorkerUpgradeFive')
const SixWorkerUpgradeSix = document.getElementById('SixWorkerUpgradeSix')

const OneUpgradeBtn = document.getElementById('OneUpgrade-Btn')
const OneUpgradeNumberDisplay = document.getElementById('OneUpgrade-Number')

const TwoUpgradeBtn = document.getElementById('TwoUpgrade-Btn')
const TwoUpgradeNumberDisplay = document.getElementById('TwoUpgrade-Number')

const ThreeUpgradeBtn = document.getElementById('ThreeUpgrade-Btn')
const ThreeUpgradeNumberDisplay = document.getElementById('ThreeUpgrade-Number')

const FourUpgradeBtn = document.getElementById('FourUpgrade-Btn')
const FourUpgradeNumberDisplay = document.getElementById('FourUpgrade-Number')

const FiveUpgradeBtn = document.getElementById('FiveUpgrade-Btn')
const FiveUpgradeNumberDisplay = document.getElementById('FiveUpgrade-Number')

const SixUpgradeBtn = document.getElementById('SixUpgrade-Btn')
const SixUpgradeNumberDisplay = document.getElementById('SixUpgrade-Number')

let money = 1e6

const upgrades = {
    one: { price: 1, number: 0, btn: OneUpgradeBtn, WorkerPrice: 1e2, WorkerNumber:1, WorkerMultiplier:1 },
    two: { price: 10, number: 0, btn: TwoUpgradeBtn, WorkerPrice: 1e3, WorkerNumber:1, WorkerMultiplier:1 },
    three: { price: 1000, number: 0, btn: ThreeUpgradeBtn, WorkerPrice: 1e4, WorkerNumber:1, WorkerMultiplier:1 },
    four: { price: 100000, number: 0, btn: FourUpgradeBtn, WorkerPrice: 1e6, WorkerNumber:1, WorkerMultiplier:1 },
    five: { price: 1e7, number: 0, btn: FiveUpgradeBtn, WorkerPrice: 1e7, WorkerNumber:1, WorkerMultiplier:1 },
    six: { price: 1e9, number: 0, btn: SixUpgradeBtn, WorkerPrice: 1e10, WorkerNumber:1, WorkerMultiplier:1 },
};

function formatNombre(n) {
    if (n >= 1_000_000_000_000_000) {
        return (n / 1_000_000_000_000_000).toFixed(2) + "Q";
    }
    else if (n >= 1_000_000_000_000) {
      return (n / 1_000_000_000_000).toFixed(2) + "T";
    }
    else if (n >= 1_000_000_000) {
      return (n / 1_000_000_000).toFixed(2) + "B";
    } else if (n >= 1_000_000) {
      return (n / 1_000_000).toFixed(2) + "M";
    } else if (n >= 1_000) {
      return (n / 1_000).toFixed(1) + "K";
    } else {
      return n.toString();
    }
}

Reset.addEventListener('click', () => {
    localStorage.removeItem('myGameSave')
    location.reload() // Recharge la page pour réinitialiser l'état
})

MoneyIncreaser = setInterval(() => {
    upgrades.five.number += upgrades.six.number * upgrades.six.WorkerNumber;
    upgrades.four.number += upgrades.five.number * upgrades.five.WorkerNumber;
    upgrades.three.number += upgrades.four.number * upgrades.four.WorkerNumber;
    upgrades.two.number += upgrades.three.number * upgrades.three.WorkerNumber;
    upgrades.one.number += upgrades.two.number * upgrades.two.WorkerNumber;
    money += 1 * upgrades.one.number * upgrades.one.WorkerNumber;
    updateUI();
    saveGame();
}, 1000);


function updateUI() {
    OneUpgradeNumberDisplay.textContent = upgrades.one.number + ":"
    TwoUpgradeNumberDisplay.textContent = upgrades.two.number + ":"
    ThreeUpgradeNumberDisplay.textContent = upgrades.three.number + ":"
    FourUpgradeNumberDisplay.textContent = upgrades.four.number + ":"
    FiveUpgradeNumberDisplay.textContent = upgrades.five.number + ":"
    SixUpgradeNumberDisplay.textContent = upgrades.six.number + ":"

    OneWorkerNumberDisplay.textContent ="worker: " + upgrades.one.WorkerNumber
    TwoWorkerNumberDisplay.textContent = "worker: " + upgrades.two.WorkerNumber
    ThreeWorkerNumberDisplay.textContent = "worker: " + upgrades.three.WorkerNumber
    FourWorkerNumberDisplay.textContent = "worker: " + upgrades.four.WorkerNumber
    FiveWorkerNumberDisplay.textContent = "worker: " + upgrades.five.WorkerNumber
    SixWorkerNumberDisplay.textContent ="worker: " + upgrades.six.WorkerNumber

    MoneyDipslay.textContent = "Money: " + formatNombre(money) + " $"
    MoneySecDisplay.textContent = "Money/sec: " + formatNombre(upgrades.one.number*upgrades.one.WorkerNumber)

    OneUpgradeBtn.textContent = formatNombre(upgrades.one.price) + " $"
    TwoUpgradeBtn.textContent = formatNombre(upgrades.two.price) + " $"
    ThreeUpgradeBtn.textContent = formatNombre(upgrades.three.price) + " $"
    FourUpgradeBtn.textContent = formatNombre(upgrades.four.price) + " $"
    FiveUpgradeBtn.textContent = formatNombre(upgrades.five.price) + " $"
    SixUpgradeBtn.textContent = formatNombre(upgrades.six.price) + " $"

    OneWorkerUpgradeOne.textContent = "+1 worker : " + formatNombre((upgrades.one.WorkerPrice).toFixed(0))
    TwoWorkerUpgradeOne.textContent = "+1 worker : " + formatNombre((upgrades.two.WorkerPrice).toFixed(0))
    ThreeWorkerUpgradeOne.textContent = "+1 worker : " + formatNombre((upgrades.three.WorkerPrice).toFixed(0))
    FourWorkerUpgradeOne.textContent = "+1 worker : " + formatNombre((upgrades.four.WorkerPrice).toFixed(0))
    FiveWorkerUpgradeOne.textContent = "+1 worker : " + formatNombre((upgrades.five.WorkerPrice).toFixed(0))
    SixWorkerUpgradeOne.textContent = "+1 worker : " + formatNombre((upgrades.six.WorkerPrice).toFixed(0))

    OneWorkerMultiplierDisplay.textContent = "x"+ upgrades.one.WorkerNumber
    TwoWorkerMultiplierDisplay.textContent = "x"+ upgrades.two.WorkerNumber
    ThreeWorkerMultiplierDisplay.textContent = "x"+ upgrades.three.WorkerNumber
    FourWorkerMultiplierDisplay.textContent = "x"+upgrades.four.WorkerNumber
    FiveWorkerMultiplierDisplay.textContent = "x"+upgrades.five.WorkerNumber
    SixWorkerMultiplierDisplay.textContent = "x"+upgrades.six.WorkerNumber

    WorkerDisplay.textContent = "worker: " + formatNombre(-6+(upgrades.one.WorkerNumber + upgrades.two.WorkerNumber + upgrades.three.WorkerNumber + upgrades.four.WorkerNumber + upgrades.five.WorkerNumber + upgrades.six.WorkerNumber))
}

function saveGame() {
    const saveData = {
        money,
        onePrice: upgrades.one.price,
        twoPrice: upgrades.two.price,
        threePrice: upgrades.three.price,
        fourPrice: upgrades.four.price,
        fivePrice: upgrades.five.price,
        sixPrice: upgrades.six.price,
        oneNumber: upgrades.one.number,
        twoNumber: upgrades.two.number,
        threeNumber: upgrades.three.number,
        fourNumber: upgrades.four.number,
        fiveNumber: upgrades.five.number,
        sixNumber: upgrades.six.number,
        oneWorkerPrice: upgrades.one.WorkerPrice,
        twoWorkerPrice: upgrades.two.WorkerPrice,
        threeWorkerPrice: upgrades.three.WorkerPrice,
        fourWorkerPrice: upgrades.four.WorkerPrice,
        fiveWorkerPrice: upgrades.five.WorkerPrice,
        sixWorkerPrice: upgrades.six.WorkerPrice,
        oneWorkerNumber: upgrades.one.WorkerNumber,
        twoWorkerNumber: upgrades.two.WorkerNumber,
        threeWorkerNumber: upgrades.three.WorkerNumber,
        fourWorkerNumber: upgrades.four.WorkerNumber,
        fiveWorkerNumber: upgrades.five.WorkerNumber,
        sixWorkerNumber: upgrades.six.WorkerNumber,
    }
    localStorage.setItem("myGameSave", JSON.stringify(saveData))
}


function loadGame() {
    const save = localStorage.getItem("myGameSave")
    if (save) {
        const data = JSON.parse(save)
        money = data.money ?? 1
        
        upgrades.one.price = data.onePrice ?? upgrades.one.price
        upgrades.two.price = data.twoPrice ?? upgrades.two.price
        upgrades.three.price = data.threePrice ?? upgrades.three.price
        upgrades.four.price = data.fourPrice ?? upgrades.four.price
        upgrades.five.price = data.fivePrice ?? upgrades.five.price
        upgrades.six.price = data.sixPrice ?? upgrades.six.price
        
        upgrades.one.number = data.oneNumber ?? upgrades.one.number
        upgrades.two.number = data.twoNumber ?? upgrades.two.number
        upgrades.three.number = data.threeNumber ?? upgrades.three.number
        upgrades.four.number = data.fourNumber ?? upgrades.four.number
        upgrades.five.number = data.fiveNumber ?? upgrades.five.number
        upgrades.six.number = data.sixNumber ?? upgrades.six.number

        upgrades.one.WorkerPrice = data.oneWorkerPrice ?? upgrades.one.WorkerPrice
        upgrades.two.WorkerPrice = data.twoWorkerPrice ?? upgrades.two.WorkerPrice
        upgrades.three.WorkerPrice = data.threeWorkerPrice ?? upgrades.three.WorkerPrice
        upgrades.four.WorkerPrice = data.fourWorkerPrice ?? upgrades.four.WorkerPrice
        upgrades.five.WorkerPrice = data.fiveWorkerPrice ?? upgrades.five.WorkerPrice
        upgrades.six.WorkerPrice = data.sixWorkerPrice ?? upgrades.six.WorkerPrice

        upgrades.one.WorkerNumber = data.oneWorkerNumber ?? upgrades.one.WorkerNumber
        upgrades.two.WorkerNumber = data.twoWorkerNumber ?? upgrades.two.WorkerNumber
        upgrades.three.WorkerNumber = data.threeWorkerNumber ?? upgrades.three.WorkerNumber
        upgrades.four.WorkerNumber = data.fourWorkerNumber ?? upgrades.four.WorkerNumber
        upgrades.five.WorkerNumber = data.fiveWorkerNumber ?? upgrades.five.WorkerNumber
        upgrades.six.WorkerNumber = data.sixWorkerNumber ?? upgrades.six.WorkerNumber
    }
    updateUI()
}


function handleGenericUpgrade(upgradeKey, btnVar) {
    btnVar.addEventListener('click', () => {
        const upgrade = upgrades[upgradeKey];
        if (upgrade.price <= money) {
            if (upgrade.price >= 10000) {
                upgrade.number *= 2;
            } else {
                upgrade.number += 1;
            }
            money -= upgrade.price;
            upgrade.price *= 10;
            updateUI();
        } else {
            alert("You don't have enough money : " + money + " Price: " + upgrade.price);
        }
    });
}

// Application à tous les upgrades
handleGenericUpgrade('one', OneUpgradeBtn);
handleGenericUpgrade('two', TwoUpgradeBtn);
handleGenericUpgrade('three', ThreeUpgradeBtn);
handleGenericUpgrade('four', FourUpgradeBtn);
handleGenericUpgrade('five', FiveUpgradeBtn);
handleGenericUpgrade('six', SixUpgradeBtn);

HomeRedirect.addEventListener('click',()=>{
    Research.style.display = "none"
    Work.style.display = "none"
    Home.style.display = "flex"
  })
ResearchRedirect.addEventListener('click',()=>{
    Research.style.display = "flex"
    Work.style.display = "none"
    Home.style.display = "none"
  })  
WorkerRedirect.addEventListener('click',()=>{
    Research.style.display = "none"
    Work.style.display = "flex"
    Home.style.display = "none"
  })

// Worker ///////////////////////////////////////////////////////////////

// Flags globaux pour les multiplicateurs achetés
let OneWorkerMultiplierBought = false;
let TwoWorkerMultiplierBought = false;
let ThreeWorkerMultiplierBought = false;
let FourWorkerMultiplierBought = false;
let FiveWorkerMultiplierBought = false;
let SixWorkerMultiplierBought = false;

// Fonction générique pour acheter des workers
function handleWorkerUpgrade(upgradeKey) {
    return () => {
        const upgrade = upgrades[upgradeKey];
        if (upgrade.WorkerPrice <= money) {
            money -= upgrade.WorkerPrice;
            upgrade.WorkerPrice *= 2;
            upgrade.WorkerNumber += 1 * upgrade.WorkerMultiplier;
            updateUI();
        }
    };
}

// Fonction générique pour acheter un multiplicateur une seule fois
function handleMultiplierUpgrade(cost, upgradeKey, boughtFlagVarName) {
    return () => {
        if (money >= cost && !window[boughtFlagVarName]) {
            money -= cost;
            upgrades[upgradeKey].WorkerMultiplier += 1;
            window[boughtFlagVarName] = true;
            updateUI();
        }
    };
}

// Assignation des écouteurs d'événements
OneWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('one'));
OneWorkerUpgradeTwo.addEventListener('click', handleMultiplierUpgrade(500, 'one', 'OneWorkerMultiplierBought'));

TwoWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('two'));
TwoWorkerUpgradeTwo.addEventListener('click', handleMultiplierUpgrade(5000, 'two', 'TwoWorkerMultiplierBought'));

ThreeWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('three'));
ThreeWorkerUpgradeTwo.addEventListener('click', handleMultiplierUpgrade(50000, 'three', 'ThreeWorkerMultiplierBought'));

FourWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('four'));
FourWorkerUpgradeTwo.addEventListener('click', handleMultiplierUpgrade(5e6, 'four', 'FourWorkerMultiplierBought'));

FiveWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('five'));
FiveWorkerUpgradeTwo.addEventListener('click', handleMultiplierUpgrade(5e7, 'five', 'FiveWorkerMultiplierBought'));

SixWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('six'));
SixWorkerUpgradeTwo.addEventListener('click', handleMultiplierUpgrade(5e10, 'six', 'SixWorkerMultiplierBought'));

loadGame();
