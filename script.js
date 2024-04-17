let money = 0;
let Booster = [];
let Card = [];

let CardInf = [];
IniCardInf();

console.log(CardInf)

Init()
function Init() {
    money = Get("money", 0);
    Booster = Get("booster", []);
    Card = Get("card", []);
}

reloadBooster();
reloadCard();





var myInterval = setInterval(function () {
    Init();

    // Mise a jour des element
    //Set("money", parseInt(Get("money", 0)) + 5)

    // Mise a jour du html
    document.getElementById("money").textContent = money;


    //document.getElementsByClassName("booster").style = "min-width: " + (100 / 5) + "%;";
}, 500);

function reloadBooster() {
    let htmlcode = "";
    for (let i = 0; i < Booster.length;i++) {
        htmlcode +=
            '<section class="booster" id="basic_' + i +'" onclick="OpenBooster()">' +
            '<img src="Assets/BrotherWar/BoosterBasic.png">' +
            '</section>';
    }
    document.getElementById("FlexBooster").innerHTML = htmlcode;
}

function reloadCard() {
    IniCardInf();
    let htmlcode = "";
    
    for (let i = 0; i < Card.length; i++) {
        if (parseInt(CardInf[Card[i]].nbr) === 0) {
            htmlcode +=
            '<section class="card" id="basic_' + i + '">' +
            '<img src="Assets/' + CardInf[Card[i]].src + '.jpg"><p id="nbr">x<var id="card_' + Card[i] + '">0</var></p>' +
            '<button onclick="Sell(' + Card[i]+')">Sell: ' + CardInf[Card[i]].sell +'$</button>' +
            '</img>' +
            '</section>';
        }
        CardInf[Card[i]].nbr += 1;
    }
    
    document.getElementById("FlexCard").innerHTML = htmlcode;
    
    let n = 0;
    for (let i = 0; i < CardInf.length; i++) {
        if (CardInf[i].nbr > 0) {
            n++;
            //console.log(i, document.getElementById("card_" + i).textContent)
            document.getElementById("card_" + i).textContent = "" + CardInf[i].nbr;
        }
    }
    
    document.getElementById("cardNbr").textContent = n + " on " + CardInf.length;

    Filter();
}

function Sell(id) {
    let give = false;
    Card = Array.from(Get("card", []));
    for (let i = 0; i < Card.length; i++) {
        if (Card[i] === parseInt(id)) {
            Card.splice(i, 1)
            give = true;
            i = 9999999999;
        }
    }

    if (give) {
        Set("money", parseInt(Get("money", 0)) + parseInt(CardInf[id].sell));
        Set("card", Card);
    }

    reloadCard();
}

function GetNbrCard() {
    let n = 0;
    for (let i = 0; i < CardInf.length; i++) {
        if (CardInf[i].nbr > 0) { n++; }
    }
    return n;
}

function IniCardInf(){
    CardInf = [
        { nbr: 0, src: "BrotherWar/c1", sell: 1 ,rarity: 10 },
        { nbr: 0, src: "BrotherWar/c2", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c3", sell: 1, rarity: 15 },
        { nbr: 0, src: "BrotherWar/c4", sell: 2, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c5", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c6", sell: 1, rarity: 7 },
        { nbr: 0, src: "BrotherWar/c7", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c8", sell: 3, rarity: 7 },
        { nbr: 0, src: "BrotherWar/c9", sell: 2, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c10", sell: 1, rarity: 15 },
        { nbr: 0, src: "BrotherWar/c11", sell: 1, rarity: 15 },
        { nbr: 0, src: "BrotherWar/c12", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c13", sell: 4, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c14", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c15", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c16", sell: 5, rarity: 3 },
        { nbr: 0, src: "BrotherWar/c17", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c18", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c19", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c20", sell: 2, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c21", sell: 3, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c22", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c23", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c24", sell: 2, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c25", sell: 7, rarity: 3 },
        { nbr: 0, src: "BrotherWar/c26", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c27", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c28", sell: 2, rarity: 8 },
        { nbr: 0, src: "BrotherWar/c29", sell: 2, rarity: 8 },
        { nbr: 0, src: "BrotherWar/c30", sell: 1, rarity: 15 },
        { nbr: 0, src: "BrotherWar/c31", sell: 3, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c32", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c33", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c34", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c35", sell: 6, rarity: 3 },
        { nbr: 0, src: "BrotherWar/c36", sell: 4, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c37", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c38", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c39", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c40", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c41", sell: 16, rarity: 1 },
        { nbr: 0, src: "BrotherWar/c42", sell: 2, rarity: 5 },
        { nbr: 0, src: "BrotherWar/c43", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c44", sell: 1, rarity: 10 },
        { nbr: 0, src: "BrotherWar/c45", sell: 6, rarity: 5 },
        { nbr: 0, src: "BrotherWar/c46", sell: 1, rarity: 50 },
        { nbr: 0, src: "BrotherWar/c47", sell: 1, rarity: 50 },
        { nbr: 0, src: "BrotherWar/c48", sell: 1, rarity: 50 },
        { nbr: 0, src: "BrotherWar/c49", sell: 1, rarity: 50 },
        { nbr: 0, src: "BrotherWar/c50", sell: 2, rarity: 50 }
    ]
}

function Filter() {
    let TempGrp = [];
    Card = Array.from(Get("card", []));

    for (let i = 0; i < CardInf.length; i++) {
        for (let a = 0; a < Card.length; a++){
            if (Card[a] === i) {
                TempGrp.push(parseInt(Card[a]));
            }
        }
    }

    Set("card", TempGrp);
    Card = Array.from(Get("card", []));
}

function Get(name,ini) {
    var maListeRécupéréeJSON = localStorage.getItem(name);

    if (maListeRécupéréeJSON !== null) {
        return JSON.parse(maListeRécupéréeJSON);
    } else {
        localStorage.setItem(name, JSON.stringify(ini));
        return JSON.parse(localStorage.getItem(name));
    }
}

function Set(name,value){
    localStorage.setItem(name, JSON.stringify(value));
    return JSON.parse(localStorage.getItem(name));
}


function ImRich() {
    Set("money", parseInt(Get("money", 0)) + 1)
}

function AddBooster() {
    if (parseInt(Get("money", 0)) >= 8) {
        Set("money", parseInt(Get("money", 0)) - 8)

        let b = Array.from(Get("booster", []));
        b.push(1)
        Set("booster", b);// Booster.push(1);
        Booster = Get("booster", []);

        reloadBooster();
    }
}

function AddCard() {
    let TotRarity = 0;
    CardInf.forEach(element => {
        TotRarity += element.rarity;
    });
    let scoreRarity = (Math.random() * (TotRarity*100))/100;

    let CardId = 0;
    for (let i = 0; i < CardInf.length; i++){
        if (CardInf[i].rarity > scoreRarity) {
            CardId = i;
            i = 9999999;
        } else {
            scoreRarity -= CardInf[i].rarity;
        }
    }


    let b = Array.from(Get("card", []));
    b.push(parseInt(CardId))
    Set("card", b);// Booster.push(1);
    Card = Get("card", []);
}


function OpenBooster() {    
    for (let i = 0; i < 15; i++) {
        AddCard();
    }
    Booster.pop();
    Set("booster", Booster);

    reloadBooster();
    reloadCard();
}