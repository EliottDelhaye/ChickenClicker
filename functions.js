/*    _____   _   _   _   _____   _   _    _____   __   _        _____   _       _   _____   _   _    _____   _____    */ /*   _____   _____   */
/*   /  ___| | | | | | | /  ___| | | / /  | ____| |  \ | |      /  ___| | |     | | /  ___| | | / /  | ____| |  _  \   */ /*  |  ___| |___  |  */
/*   | |     | |_| | | | | |     | |/ /   | |__   |   \| |      | |     | |     | | | |     | |/ /   | |__   | |_| |   */ /*  | |__     __| |  */
/*   | |     |  _  | | | | |     | |\ \   |  __|  | |\   |      | |     | |     | | | |     | |\ \   |  __|  |  _  /   */ /*  |  __|   |__  |  */ 
/*   | |___  | | | | | | | |___  | | \ \  | |___  | | \  |      | |___  | |___  | | | |___  | | \ \  | |___  | | \ \   */ /*  | |___   ___| |  */
/*   \_____| |_| |_| |_| \_____| |_|  \_\ |_____| |_|  \_|      \_____| |_____| |_| \_____| |_|  \_\ |_____| |_|  \_\  */ /*  |_____| |_____|  */


let click = 0;

function Click(){
   click++;
   document.getElementById("click").innerHTML = click;
}

let nugget = 0;

function ClickNugget(){
   nugget++;
   document.getElementById("nugget").innerHTML = nugget;
   if (nugget  === 30){
    var confirmation = confirm("Félicitation !!! Vous avez débloqué le mode seau Nugget. Voulez vous l'activer ? ");
    if (confirmation){
    //action à faire pour la valeur true
        var scoreTriple ="Mode seau Nugget activé avec succès. Votre score sera triplé par click";
    alert(scoreTriple);
        poulet = 0;
        nugget +=3;
    }else{
    //action à faire pour la valeur false
    poulet = poulet;
    }
}
}

let poulet = 0
function NoClickPoulet(){
    poulet++;
    document.getElementById("poulet").innerHTML = poulet;
 }
 
let targetImage = "poulet";

function changeImage(){
    let image = document.getElementById("poulet");
    if(targetImage=="poulet"){
        image.src = "Photos/Bucket.png";
        targetImage = "bucket";
        
        
    }
    else{
        image.src = "Photos/Poulet.png";
        targetImage = "poulet";
        noPressEnter(document.body);
    }
}

function bruit(){
    var bruit = new Audio();
    bruit.src = "Photos/PouletSFX.mp3";
    bruit.play();
}

/*
function plumes(){
    var plumes = document.getElementById("plumes");
    if(targetImage =="poulet"){
        image.src = "Photos/plumes.png";
        targetImage = "plumes";
    }
}

function popupBasique(page) {
    window.open(page);
  }
*/