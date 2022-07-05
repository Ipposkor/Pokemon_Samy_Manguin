import { tabTypes,Pokemon,tygnon,kicklee,Attaques,vampipoing,machpunch,poingeclair,tourrapide,piedvoltige,sabotage,lamederoc,directtoxic,pvadversaire,pvpersonnage,jaugeadv,jaugemain } from "./module/class.js";

// selection des slots d'attaque
let atk1 = document.querySelectorAll('button')[0]
let atk2 = document.querySelectorAll('button')[1]
let atk3 = document.querySelectorAll('button')[2]
let atk4 = document.querySelectorAll('button')[3]

// Attribution des noms des attaques
atk1.innerHTML = tygnon.btn1.nom
atk2.innerHTML = tygnon.btn2.nom
atk3.innerHTML = tygnon.btn3.nom
atk4.innerHTML = tygnon.btn4.nom

atk1.addEventListener('click',function(){
    if (kicklee.pv >0){
    tygnon.attaque1(kicklee)
    } else {
        kicklee.pv = 0
        console.log(`${kicklee.nom} est mort,\nVous ne pouvez plus attaquer`);
    }
    setTimeout(() => {
        if (tygnon.pv >0){
            kicklee.attaqueAdv(tygnon)
            } else {
                tygnon.pv = 0
                console.log(`${tygnon.nom} est mort,\nVous ne pouvez plus attaquer`);
            }
    }, 1500);
})
atk2.addEventListener('click',function(){
    if (kicklee.pv >0){
    tygnon.attaque2(kicklee)
    } else {
        kicklee.pv = 0
        console.log(`${kicklee.nom} est mort,\nVous ne pouvez plus attaquer`);
    }
    setTimeout(() => {
        if (tygnon.pv >0){
            kicklee.attaqueAdv(tygnon)
            } else {
                tygnon.pv = 0
                console.log(`${tygnon.nom} est mort,\nVous ne pouvez plus attaquer`);
            }
    }, 1500);
})
atk3.addEventListener('click',function(){
    if (kicklee.pv >0){
    tygnon.attaque3(kicklee)
    } else {
        kicklee.pv = 0
        console.log(`${kicklee.nom} est mort,\nVous ne pouvez plus attaquer`);
    }
    setTimeout(() => {
        if (tygnon.pv >0){
            kicklee.attaqueAdv(tygnon)
            } else {
                tygnon.pv = 0
                console.log(`${tygnon.nom} est mort,\nVous ne pouvez plus attaquer`);
            }
    }, 1500);
})
atk4.addEventListener('click',function(){
    if (kicklee.pv >0){
    tygnon.attaque4(kicklee)
    } else {
        kicklee.pv = 0
        console.log(`${kicklee.nom} est mort,\nVous ne pouvez plus attaquer`);
    }
    setTimeout(() => {
        if (tygnon.pv >0){
            kicklee.attaqueAdv(tygnon)
            } else {
                tygnon.pv = 0
                console.log(`${tygnon.nom} est mort,\nVous ne pouvez plus attaquer`);
            }
    }, 1500);
})
