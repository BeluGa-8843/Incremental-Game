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

const OneUpgrade = document.getElementById('OneUpgrade')
const TwoUpgrade = document.getElementById('TwoUpgrade')
const ThreeUpgrade = document.getElementById('ThreeUpgrade')
const FourUpgrade = document.getElementById('FourUpgrade')
const FiveUpgrade = document.getElementById('FiveUpgrade')
const SixUpgrade = document.getElementById('SixUpgrade')

const ResearchPointDisplay = document.getElementById('ResearchDisplay')
const ResearchSecDisplay = document.getElementById('ResearchSecDisplay')
let money = 1
let RS = 0
let refreshSpeed = 1000
const upgrades = {
    one: { price: 1, number: 0, btn: OneUpgradeBtn, WorkerPrice: 1e2, WorkerNumber: 1, WorkerMultiplier: 1, workerEfficiency: 1 },
    two: { price: 10, number: 0, btn: TwoUpgradeBtn, WorkerPrice: 1e3, WorkerNumber: 1, WorkerMultiplier: 1, workerEfficiency: 1 },
    three: { price: 1000, number: 0, btn: ThreeUpgradeBtn, WorkerPrice: 1e4, WorkerNumber: 1, WorkerMultiplier: 1, workerEfficiency: 1 },
    four: { price: 100000, number: 0, btn: FourUpgradeBtn, WorkerPrice: 1e6, WorkerNumber: 1, WorkerMultiplier: 1, workerEfficiency: 1 },
    five: { price: 1e7, number: 0, btn: FiveUpgradeBtn, WorkerPrice: 1e7, WorkerNumber: 1, WorkerMultiplier: 1, workerEfficiency: 1 },
    six: { price: 1e9, number: 0, btn: SixUpgradeBtn, WorkerPrice: 1e10, WorkerNumber: 1, WorkerMultiplier: 1, workerEfficiency: 1 },
};

function formatNombre(n) {
    if (n >= 1e63) {
        return (n / 1e63).toFixed(2) + "Vg";
    } else if (n >= 1e60) {
        return (n / 1e60).toFixed(2) + "Nvd";
    } else if (n >= 1e57) {
        return (n / 1e57).toFixed(2) + "Ocd";
    } else if (n >= 1e54) {
        return (n / 1e54).toFixed(2) + "Spd";
    } else if (n >= 1e51) {
        return (n / 1e51).toFixed(2) + "Sxd";
    } else if (n >= 1e48) {
        return (n / 1e48).toFixed(2) + "Qid";
    } else if (n >= 1e45) {
        return (n / 1e45).toFixed(2) + "Qad";
    } else if (n >= 1e42) {
        return (n / 1e42).toFixed(2) + "Td";
    } else if (n >= 1e39) {
        return (n / 1e39).toFixed(2) + "Dd";
    } else if (n >= 1e36) {
        return (n / 1e36).toFixed(2) + "Ud";
    } else if (n >= 1e33) {
        return (n / 1e33).toFixed(2) + "Dc";
    } else if (n >= 1e30) {
        return (n / 1e30).toFixed(2) + "No";
    } else if (n >= 1e27) {
        return (n / 1e27).toFixed(2) + "Oc";
    } else if (n >= 1e24) {
        return (n / 1e24).toFixed(2) + "Sp";
    } else if (n >= 1e21) {
        return (n / 1e21).toFixed(2) + "Sx";
    } else if (n >= 1e18) {
        return (n / 1e18).toFixed(2) + "Qi";
    } else if (n >= 1e15) {
        return (n / 1e15).toFixed(2) + "Qa";
    } else if (n >= 1e12) {
        return (n / 1e12).toFixed(2) + "T";
    } else if (n >= 1e9) {
        return (n / 1e9).toFixed(2) + "B";
    } else if (n >= 1e6) {
        return (n / 1e6).toFixed(2) + "M";
    } else if (n >= 1e3) {
        return (n / 1e3).toFixed(2) + "K";
    } else {
        return n.toString();
    }
}

Reset.addEventListener('click', () => {
    localStorage.removeItem('myGameSave')
    location.reload() // Recharge la page pour réinitialiser l'état
})

MoneyIncreaser = setInterval(() => {
    upgrades.five.number += upgrades.six.number * upgrades.six.WorkerNumber * upgrades.six.workerEfficiency;
    upgrades.four.number += upgrades.five.number * upgrades.five.WorkerNumber * upgrades.five.workerEfficiency;
    upgrades.three.number += upgrades.four.number * upgrades.four.WorkerNumber * upgrades.four.workerEfficiency;
    upgrades.two.number += upgrades.three.number * upgrades.three.WorkerNumber * upgrades.three.workerEfficiency;
    upgrades.one.number += upgrades.two.number * upgrades.two.WorkerNumber * upgrades.two.workerEfficiency;
    money += 1 * upgrades.one.number * upgrades.one.WorkerNumber * upgrades.one.workerEfficiency;
    updateUI();
    saveGame();
}, refreshSpeed);

function restartMoneyIncreaser() {
    clearInterval(MoneyIncreaser); // Stop l'ancien interval
    MoneyIncreaser = setInterval(() => {
        upgrades.five.number += upgrades.six.number * upgrades.six.WorkerNumber * upgrades.six.workerEfficiency;
        upgrades.four.number += upgrades.five.number * upgrades.five.WorkerNumber * upgrades.five.workerEfficiency;
        upgrades.three.number += upgrades.four.number * upgrades.four.WorkerNumber * upgrades.four.workerEfficiency;
        upgrades.two.number += upgrades.three.number * upgrades.three.WorkerNumber * upgrades.three.workerEfficiency;
        upgrades.one.number += upgrades.two.number * upgrades.two.WorkerNumber * upgrades.two.workerEfficiency;
        money += 1 * upgrades.one.number * upgrades.one.WorkerNumber * upgrades.one.workerEfficiency;
        updateUI();
        saveGame();
    }, refreshSpeed);
}


RsIncreaser = setInterval(() => {
    RS += RSAssigned * RSMultiplier
    ResearchPointDisplay.textContent = formatNombre(RS)
    updateUI();
}, 1000);

function updateUI() {
    OneUpgradeNumberDisplay.textContent = formatNombre(upgrades.one.number) + ":"
    TwoUpgradeNumberDisplay.textContent = formatNombre(upgrades.two.number) + ":"
    ThreeUpgradeNumberDisplay.textContent = formatNombre(upgrades.three.number) + ":"
    FourUpgradeNumberDisplay.textContent = formatNombre(upgrades.four.number) + ":"
    FiveUpgradeNumberDisplay.textContent = formatNombre(upgrades.five.number) + ":"
    SixUpgradeNumberDisplay.textContent = formatNombre(upgrades.six.number) + ":"

    OneWorkerNumberDisplay.textContent = "worker: " + upgrades.one.WorkerNumber
    TwoWorkerNumberDisplay.textContent = "worker: " + upgrades.two.WorkerNumber
    ThreeWorkerNumberDisplay.textContent = "worker: " + upgrades.three.WorkerNumber
    FourWorkerNumberDisplay.textContent = "worker: " + upgrades.four.WorkerNumber
    FiveWorkerNumberDisplay.textContent = "worker: " + upgrades.five.WorkerNumber
    SixWorkerNumberDisplay.textContent = "worker: " + upgrades.six.WorkerNumber

    MoneyDipslay.textContent = "Money: " + formatNombre(money) + " $"
    MoneySecDisplay.textContent = "Money/sec: " + formatNombre(upgrades.one.number * upgrades.one.WorkerNumber * upgrades.one.workerEfficiency)

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

    OneWorkerMultiplierDisplay.textContent = "x" + upgrades.one.WorkerNumber * upgrades.one.workerEfficiency
    TwoWorkerMultiplierDisplay.textContent = "x" + upgrades.two.WorkerNumber * upgrades.two.workerEfficiency
    ThreeWorkerMultiplierDisplay.textContent = "x" + upgrades.three.WorkerNumber * upgrades.three.workerEfficiency
    FourWorkerMultiplierDisplay.textContent = "x" + upgrades.four.WorkerNumber * upgrades.four.workerEfficiency
    FiveWorkerMultiplierDisplay.textContent = "x" + upgrades.five.WorkerNumber * upgrades.five.workerEfficiency
    SixWorkerMultiplierDisplay.textContent = "x" + upgrades.six.WorkerNumber * upgrades.six.workerEfficiency

    WorkerDisplay.textContent = "worker: " + formatNombre(-6 + (upgrades.one.WorkerNumber + upgrades.two.WorkerNumber + upgrades.three.WorkerNumber + upgrades.four.WorkerNumber + upgrades.five.WorkerNumber + upgrades.six.WorkerNumber))
    ResearcherNmbr.textContent = "researcher: " + formatNombre(availableResearcher)
    ResearcherPrice.textContent = formatNombre((research.Researcher.price).toFixed(2)) + " $"
    ResearcherAssignedDisplay.textContent = ResearcherAssigned + ": researcher assigned"
    researcherAssignedForP.textContent = RSAssigned + ": researcher assigned"
    ResearchPointDisplay.textContent = "Research: " + formatNombre(RS)
    ResearchSecDisplay.textContent = "Research/sec: " + formatNombre(RSAssigned * RSMultiplier)
}

function saveGame() {
    const saveData = {
        money,
        RS,
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
        oneWorkerMultiplier: upgrades.one.WorkerMultiplier,
        twoWorkerMultiplier: upgrades.two.WorkerMultiplier,
        threeWorkerMultiplier: upgrades.three.WorkerMultiplier,
        fourWorkerMultiplier: upgrades.four.WorkerMultiplier,
        fiveWorkerMultiplier: upgrades.five.WorkerMultiplier,
        sixWorkerMultiplier: upgrades.six.WorkerMultiplier,
        OneWorkerEfficiency: upgrades.one.workerEfficiency,
        TwoWorkerEfficiency: upgrades.two.workerEfficiency,
        ThreeWorkerEfficiency: upgrades.three.workerEfficiency,
        FourWorkerEfficiency: upgrades.four.workerEfficiency,
        FiveWorkerEfficiency: upgrades.five.workerEfficiency,
        SixWorkerEfficiency: upgrades.six.workerEfficiency,
        ResearcherNmbr: research.Researcher.number,
        ResearcherPrice: research.Researcher.price,
        availableResearcher,
        ResearcherAssigned,
        RSAssigned
    }
    localStorage.setItem("myGameSave", JSON.stringify(saveData))
}


function loadGame() {
    const save = localStorage.getItem("myGameSave")
    if (save) {
        const data = JSON.parse(save)
        money = data.money ?? 1
        RS = data.RS ?? 0
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


        upgrades.one.WorkerMultiplier = data.oneWorkerMultiplier ?? upgrades.one.WorkerMultiplier
        upgrades.two.WorkerMultiplier = data.twoWorkerMultiplier ?? upgrades.two.WorkerMultiplier
        upgrades.three.WorkerMultiplier = data.threeWorkerMultiplier ?? upgrades.three.WorkerMultiplier
        upgrades.four.WorkerMultiplier = data.fourWorkerMultiplier ?? upgrades.four.WorkerMultiplier
        upgrades.five.WorkerMultiplier = data.fiveWorkerMultiplier ?? upgrades.five.WorkerMultiplier
        upgrades.six.WorkerMultiplier = data.sixWorkerMultiplier ?? upgrades.six.WorkerMultiplier

        upgrades.one.workerEfficiency = data.OneWorkerEfficiency ?? upgrades.one.workerEfficiency
        upgrades.two.workerEfficiency = data.TwoWorkerEfficiency ?? upgrades.two.workerEfficiency
        upgrades.three.workerEfficiency = data.ThreeWorkerEfficiency ?? upgrades.three.workerEfficiency
        upgrades.four.workerEfficiency = data.FourWorkerEfficiency ?? upgrades.four.workerEfficiency
        upgrades.five.workerEfficiency = data.FiveWorkerEfficiency ?? upgrades.five.workerEfficiency
        upgrades.six.workerEfficiency = data.SixWorkerEfficiency ?? upgrades.six.workerEfficiency

        research.Researcher.number = data.ResearcherNmbr ?? research.Researcher.number
        research.Researcher.price = data.ResearcherPrice ?? research.Researcher.price

        availableResearcher = data.availableResearcher ?? 0
        ResearcherAssigned = data.ResearcherAssigned ?? 0
        RSAssigned = data.RSAssigned ?? 0
    }
    updateUI()
}

function handleGenericUpgrade(upgradeKey, btnVar) {
    btnVar.addEventListener('click', () => {
        const upgrade = upgrades[upgradeKey];
        if (upgrade.price <= money) {
            if (upgrade.number <= 20) {
                upgrade.number += 1;
            } else if (upgrade.number >= 1e18) {
                upgrade.number *= 1.25;
            } else if (upgrade.number >= 1e9) {
                upgrade.number *= 1.5;
            } else {
                upgrade.number *= 2;
            }
            money -= upgrade.price;
            upgrade.price *= 10;
            updateUI();
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

HomeRedirect.addEventListener('click', () => {
    Research.style.display = "none"
    Work.style.display = "none"
    Home.style.display = "flex"
})
ResearchRedirect.addEventListener('click', () => {
    Research.style.display = "flex"
    Work.style.display = "none"
    Home.style.display = "none"
})
WorkerRedirect.addEventListener('click', () => {
    Research.style.display = "none"
    Work.style.display = "flex"
    Home.style.display = "none"
})

// Worker ///////////////////////////////////////////////////////////////
let OneWorkerMultiplierBought = 0;
let TwoWorkerMultiplierBought = 0;
let ThreeWorkerMultiplierBought = 0;
let FourWorkerMultiplierBought = 0;
let FiveWorkerMultiplierBought = 0;
let SixWorkerMultiplierBought = 0;

function handleWorkerUpgrade(upgradeKey) {
    return () => {
        const upgrade = upgrades[upgradeKey];
        if (upgrade.WorkerPrice <= money) {
            money -= upgrade.WorkerPrice;
            upgrade.WorkerPrice *= 2;
            upgrade.WorkerNumber += 1 * Number(upgrade.WorkerMultiplier);
            updateUI();
        }
    };
}

function FirstOneTimeUpgrade(cost, upgradeKey) {
    return () => {
        if (money >= cost && upgrades[upgradeKey].WorkerMultiplier < 2) {
            money -= cost;
            upgrades[upgradeKey].WorkerMultiplier *= 2;
            updateUI();
        } else if (upgrades[upgradeKey].WorkerMultiplier >= 2) {
            alert("You've already bought this upgrade")
        }
    };
}
function SecondOneTimeUpgrade(cost, upgradeKey) {
    return () => {
        if (money >= cost && upgrades[upgradeKey].workerEfficiency < 1.5) {
            money -= cost
            upgrades[upgradeKey].workerEfficiency = 1.5;
            updateUI()
        } else if (upgrades[upgradeKey].workerEfficiency >= 1.5) {
            alert("You've already bought this upgrade")
        }
    }
}
function SixthOneTimeUpgrade(cost, upgradeKey) {
    return () => {
        if (money >= cost && upgrades[upgradeKey].WorkerMultiplier < 4) {
            money -= cost;
            upgrades[upgradeKey].WorkerMultiplier *= 2;
            updateUI();
        } else if (upgrades[upgradeKey].WorkerMultiplier >= 2) {
            alert("You've already bought this upgrade")
        }
    };
}

OneWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('one'));
OneWorkerUpgradeTwo.addEventListener('click', FirstOneTimeUpgrade(500, 'one'));
OneWorkerUpgradeThree.addEventListener('click', SecondOneTimeUpgrade(2000, 'one'));
OneWorkerUpgradeSix.addEventListener('click', SixthOneTimeUpgrade(5e5, 'one'));
TwoWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('two'));
TwoWorkerUpgradeTwo.addEventListener('click', FirstOneTimeUpgrade(5000, 'two'));
TwoWorkerUpgradeThree.addEventListener('click', SecondOneTimeUpgrade(2e4, 'two'));
TwoWorkerUpgradeSix.addEventListener('click', SixthOneTimeUpgrade(5e6, 'two'));
ThreeWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('three'));
ThreeWorkerUpgradeTwo.addEventListener('click', FirstOneTimeUpgrade(50000, 'three'));
ThreeWorkerUpgradeThree.addEventListener('click', SecondOneTimeUpgrade(2e5, 'three'));
ThreeWorkerUpgradeSix.addEventListener('click', SixthOneTimeUpgrade(5e7, 'three'));
FourWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('four'));
FourWorkerUpgradeTwo.addEventListener('click', FirstOneTimeUpgrade(5e6, 'four'));
FourWorkerUpgradeThree.addEventListener('click', SecondOneTimeUpgrade(2e7, 'four'));
FourWorkerUpgradeSix.addEventListener('click', SixthOneTimeUpgrade(5e9, 'four'));
FiveWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('five'));
FiveWorkerUpgradeTwo.addEventListener('click', FirstOneTimeUpgrade(5e7, 'five'));
FiveWorkerUpgradeThree.addEventListener('click', SecondOneTimeUpgrade(2e8, 'five'));
FiveWorkerUpgradeSix.addEventListener('click', SixthOneTimeUpgrade(5e10, 'five'));
SixWorkerUpgradeOne.addEventListener('click', handleWorkerUpgrade('six'));
SixWorkerUpgradeTwo.addEventListener('click', FirstOneTimeUpgrade(5e10, 'six'));
SixWorkerUpgradeThree.addEventListener('click', SecondOneTimeUpgrade(2e11, 'six'));
SixWorkerUpgradeSix.addEventListener('click', SixthOneTimeUpgrade(5e13, 'six'));

const ResearcherNmbrDisplay = document.getElementById('ResearcherNmbr')
const ResearcherPriceDisplay = document.getElementById('ResearcherPrice')
const AdvancedResearcherNmbrDisplay = document.getElementById('AdvancedResearcherNmbr')
const AdvancedResearcherPriceDisplay = document.getElementById('AdvancedResearcherPrice')
const PlusResearcherForResearch = document.getElementById('PlusResearcherForResearch')
const MinusResearcherForResearch = document.getElementById('MinusResearcherForResearch')
const PlusResearcherForPoint = document.getElementById('PlusResearcherForPoint')
const MinusResearcherForPoint = document.getElementById('MinusResearcherForPoint')
const ResearcherAssignedDisplay = document.getElementById('ResearcherAssigned')
const AdvancedResearcherDisplay = document.getElementById('AdvancedResearcher')
const researcherAssignedForP = document.getElementById('researcherAssignedForP')
const InProgressList = document.getElementById('InProgressList')

const OneRs = document.getElementById("OneRs");
const TwoRs = document.getElementById("TwoRs");
const ThreeRs = document.getElementById("ThreeRs");
const FourRs = document.getElementById("FourRs");
const FiveRs = document.getElementById("FiveRs");
const SixRs = document.getElementById("SixRs");
const SevenRs = document.getElementById("SevenRs");
const EightRs = document.getElementById("EightRs");
const NineRs = document.getElementById("NineRs");
const TenRs = document.getElementById("TenRs");
const ElevenRs = document.getElementById("ElevenRs");
const TwelveRs = document.getElementById("TwelveRs");
const ThirteenRs = document.getElementById("ThirteenRs");
const FourteenRs = document.getElementById("FourteenRs");
const FifteenRs = document.getElementById("FifteenRs");
const SixteenRs = document.getElementById("SixteenRs");

const OneUpgradePrice = document.getElementById('OneUpgradePrice')
const TwoUpgradePrice = document.getElementById('TwoUpgradePrice')
const ThreeUpgradePrice = document.getElementById('ThreeUpgradePrice')
const FourUpgradePrice = document.getElementById('FourUpgradePrice')
const FiveUpgradePrice = document.getElementById('FiveUpgradePrice')
const SixUpgradePrice = document.getElementById('SixUpgradePrice')

const OneWorkerContainer = document.getElementById('OneWorkerContainer')
const TwoWorkerContainer = document.getElementById('TwoWorkerContainer')
const ThreeWorkerContainer = document.getElementById('ThreeWorkerContainer')
const FourWorkerContainer = document.getElementById('FourWorkerContainer')
const FiveWorkerContainer = document.getElementById('FiveWorkerContainer')
const SixWorkerContainer = document.getElementById('SixWorkerContainer')

const Server = document.getElementById('Server')

const research = {
    Researcher: { price: 100, number: 0 },
    AdvancedResearcher: { price: 1e5, number: 0 }
}

let availableResearcher = 0
let ResearcherAssigned = 0
let RSAssigned = 0
let RSMultiplier = 1

let InDelay = 0

const UpResearch = {
    one: { RsPrice: 100, time: 5, isAlreadyBought: 0 },
    two: { RsPrice: 100, time: 0, isAlreadyBought: 0 },
    three: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    four: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    five: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    six: { RsPrice: 100, time: 2, isAlreadyBought: 0 },
    seven: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    eight: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    nine: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    ten: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    eleven: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    twelve: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    thirteen: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    fourteen: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    fifteen: { RsPrice: 100, time: 1, isAlreadyBought: 0 },
    sixteen: { RsPrice: 100, time: 1, isAlreadyBought: 0 }
}

function minuteur(duree, upgrade) {
    let tempsRestant = duree;
    alert('bien dans la fonction')
    InDelay = 1
    const intervalId = setInterval(() => {
        console.log(`⏳ Temps restant : ${tempsRestant}s`);
        tempsRestant--;
        if (tempsRestant < 0) {
            clearInterval(intervalId);
            InDelay = 0
            switch (upgrade) {
                case "one":
                    RSMultiplier *= 2;

                    break;
                case "two":
                    TwoUpgradePrice.style.display = "flex"
                    TwoUpgrade.style.display = "flex"
                    alert("2nd Upgrade débloqué !");
                    break;
                case "three":
                    alert("3e Upgrade débloqué !");
                    WorkerRedirect.style.display = "block"
                    break;
                case "four":
                    alert("4e Upgrade débloqué !");
                    ThreeUpgradePrice.style.display = "flex"
                    ThreeUpgrade.style.display = "flex"
                    break;
                case "five":
                    alert("5e Upgrade débloqué !");
                    TwoWorkerContainer.style.display = "block"
                    break;
                case "six":
                    refreshSpeed /= 2;
                    alert("Vitesse x2 !");
                    restartMoneyIncreaser()
                    break;
                case "seven":
                    alert("7e Upgrade débloqué !");
                    FourUpgradePrice.style.display = "flex"
                    FourUpgrade.style.display = "flex"
                    break;
                case "eight":
                    alert("8e Upgrade débloqué !");
                    FourWorkerContainer.style.display = "block"
                    break;
                case "nine":
                    alert("9e Upgrade débloqué !");
                    AdvancedResearcherDisplay.style.display = "flex"
                    break;
                case "ten":
                    alert("10e Upgrade débloqué !");
                    refreshSpeed /= 2;
                    alert("Vitesse x4 !");
                    restartMoneyIncreaser()
                    break;
                case "eleven":
                    alert("11e Upgrade débloqué !");
                    FiveUpgradePrice.style.display = "flex"
                    FiveUpgrade.style.display = "flex"
                    break;
                case "twelve":
                    alert("12e Upgrade débloqué !");
                    FiveWorkerContainer.style.display = "block"
                    break;
                case "thirteen":
                    alert("13e Upgrade débloqué !");
                    Server.style.display = "block"
                    break;
                case "fourteen":
                    alert("14e Upgrade débloqué !");
                    SixUpgradePrice.style.display = "flex"
                    SixUpgrade.style.display = "flex"
                    break;
                case "fifteen":
                    alert("15e Upgrade débloqué !");
                    SixWorkerContainer.style.display = "block"
                    break;
                case "sixteen":
                    refreshSpeed /= 2;
                    alert("Vitesse x4 !");
                    restartMoneyIncreaser()
                    break;
            }
        }
    }, 1000);
    updateUI()
}

function ResearchBtns(RsCost, TimeCost, li, up) {
    if (RsCost <= RS && UpResearch[up].isAlreadyBought == 0 && InDelay == 0) {
        RS -= RsCost
        InProgressList.appendChild(li)
        UpResearch[up].isAlreadyBought += 1
        updateUI()
        if (Object.keys(UpResearch).includes(up)) {
            minuteur(TimeCost, up);
        }
    } else if (RsCost >= RS && UpResearch[up].isAlreadyBought == 0 && InDelay == 0) {
        alert("You don't have enough RS")
    } else if (RsCost <= RS && UpResearch[up].isAlreadyBought == 0 && InDelay == 1) {
        alert("You're already doing a research")
    } else {
        alert('already bought')
    }
}

for (let key in UpResearch) {
    const btnId = key.charAt(0).toUpperCase() + key.slice(1) + "Rs"; // génère OneRs, TwoRs, etc.
    const button = document.getElementById(btnId);
    if (button) {
        const upgrade = UpResearch[key];
        button.addEventListener('click', () => {
            ResearchBtns(upgrade.RsPrice, upgrade.time, button, key);
        });
    }
}


ResearcherPriceDisplay.addEventListener('click', () => {
    let r = research.Researcher
    if (r.price <= money) {
        money -= r.price
        r.number += 1
        r.price *= r.number * 1.15
        availableResearcher += 1
        updateUI()
    }
})

PlusResearcherForPoint.addEventListener('click', () => {
    if (availableResearcher > 0) {
        availableResearcher -= 1
        RSAssigned += 1
        updateUI()
    }
})
MinusResearcherForPoint.addEventListener('click', () => {
    if (RSAssigned > 0) {
        availableResearcher += 1
        RSAssigned -= 1
        updateUI()
    }
})
PlusResearcherForResearch.addEventListener('click', () => {
    if (availableResearcher > 0) {
        availableResearcher -= 1
        ResearcherAssigned += 1
        updateUI()
    }
})
MinusResearcherForResearch.addEventListener('click', () => {
    if (ResearcherAssigned > 0) {
        availableResearcher += 1
        ResearcherAssigned -= 1
        updateUI()
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == "p") {
        money += 1e6
        RS += 1e6
        updateUI()
    }
})

loadGame();

