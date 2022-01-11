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
    }
}