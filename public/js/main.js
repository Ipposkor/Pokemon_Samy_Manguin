import {
    tabTypes,
    Pokemon,
    tygnon,
    kicklee,
    Attaques,
    vampipoing,
    machpunch,
    poingeclair,
    tourrapide,
    piedvoltige,
    sabotage,
    lamederoc,
    directtoxic,
    pvadversaire,
    pvpersonnage,
    jaugeadv,
    jaugemain
} from "./module/class.js";

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

// Texte combat
let txtCombat = document.getElementById('textCombat')

// Fonctions des boutons d'attaque
atk1.addEventListener('click', function () {
    tygnon.attaque1(kicklee)
    setTimeout(() => {
        kicklee.attaqueAdv(tygnon)
    }, 1500);
    setTimeout(() => {
        txtCombat.innerHTML = "Choisissez une Action !"
    }, 4000);
})
atk2.addEventListener('click', function () {
    tygnon.attaque2(kicklee)
    setTimeout(() => {
        kicklee.attaqueAdv(tygnon)
    }, 1500);
    setTimeout(() => {
        txtCombat.innerHTML = "Choisissez une Action !"
    }, 4000);
})
atk3.addEventListener('click', function () {
    tygnon.attaque3(kicklee)
    setTimeout(() => {
        kicklee.attaqueAdv(tygnon)
    }, 1500);
    setTimeout(() => {
        txtCombat.innerHTML = "Choisissez une Action !"
    }, 4000);
})
atk4.addEventListener('click', function () {
    tygnon.attaque4(kicklee)
    setTimeout(() => {
        kicklee.attaqueAdv(tygnon)
    }, 1500);
    setTimeout(() => {
        txtCombat.innerHTML = "Choisissez une Action !"
    }, 4000);
})

// Boutons de langue
let fr = document.getElementById('fr')
let eng = document.getElementById('eng')
let jp = document.getElementById('jp')

// Changements des InnerHTML par langue sélectionnée

// Français
fr.addEventListener('click', function () {
    let poke1 = document.getElementById('kicklee')
    poke1.innerHTML = "Kicklee"
    let poke2 = document.getElementById('tygnon')
    poke2.innerHTML = "Tygnon"
    let atk1txt = document.getElementById('atk1')
    atk1txt.innerHTML = "Vampi-Poing"
    let atk2txt = document.getElementById('atk2')
    atk2txt.innerHTML = "Mach Punch"
    let atk3txt = document.getElementById('atk3')
    atk3txt.innerHTML = "Poing Eclair"
    let atk4txt = document.getElementById('atk4')
    atk4txt.innerHTML = "Tour Rapide"
    let btnlangue = document.getElementById('btnlangue')
    btnlangue.innerHTML = "Langue"
    let btnstyle = document.getElementById('btnstyle')
    btnstyle.innerHTML = "Style"
    let gen1 = document.getElementById('gen1')
    gen1.innerHTML = "Gen I"
    let gen2 = document.getElementById('gen2')
    gen2.innerHTML = "Gen II"
    let gen3 = document.getElementById('gen3')
    gen3.innerHTML = "Gen III"
    let gen4 = document.getElementById('gen4')
    gen4.innerHTML = "Gen IV"
    let gen5 = document.getElementById('gen5')
    gen5.innerHTML = "Gen V"
})

// Anglais
eng.addEventListener('click', function () {
    let poke1 = document.getElementById('kicklee')
    poke1.innerHTML = "Hitmonlee"
    let poke2 = document.getElementById('tygnon')
    poke2.innerHTML = "Hitmonchan"
    let atk1txt = document.getElementById('atk1')
    atk1txt.innerHTML = "Drain Punch"
    let atk2txt = document.getElementById('atk2')
    atk2txt.innerHTML = "Mach Punch"
    let atk3txt = document.getElementById('atk3')
    atk3txt.innerHTML = "Thunder Punch"
    let atk4txt = document.getElementById('atk4')
    atk4txt.innerHTML = "Rapid Spin"
    let btnlangue = document.getElementById('btnlangue')
    btnlangue.innerHTML = "Language"
    let btnstyle = document.getElementById('btnstyle')
    btnstyle.innerHTML = "Style"
    let gen1 = document.getElementById('gen1')
    gen1.innerHTML = "Gen I"
    let gen2 = document.getElementById('gen2')
    gen2.innerHTML = "Gen II"
    let gen3 = document.getElementById('gen3')
    gen3.innerHTML = "Gen III"
    let gen4 = document.getElementById('gen4')
    gen4.innerHTML = "Gen IV"
    let gen5 = document.getElementById('gen5')
    gen5.innerHTML = "Gen V"
})

//Japonais
jp.addEventListener('click', function () {
    let poke1 = document.getElementById('kicklee')
    poke1.innerHTML = "サワムラー"
    let poke2 = document.getElementById('tygnon')
    poke2.innerHTML = "エビワラー"
    let atk1txt = document.getElementById('atk1')
    atk1txt.innerHTML = "ドレインパンチ"
    let atk2txt = document.getElementById('atk2')
    atk2txt.innerHTML = "マッハパンチ"
    let atk3txt = document.getElementById('atk3')
    atk3txt.innerHTML = "かみなりパンチ"
    let atk4txt = document.getElementById('atk4')
    atk4txt.innerHTML = "こうそくスピン"
    let btnlangue = document.getElementById('btnlangue')
    btnlangue.innerHTML = "言語"
    let btnstyle = document.getElementById('btnstyle')
    btnstyle.innerHTML = "スタイル"
    let gen1 = document.getElementById('gen1')
    gen1.innerHTML = "世代 一"
    let gen2 = document.getElementById('gen2')
    gen2.innerHTML = "世代 二"
    let gen3 = document.getElementById('gen3')
    gen3.innerHTML = "世代 三"
    let gen4 = document.getElementById('gen4')
    gen4.innerHTML = "世代 四"
    let gen5 = document.getElementById('gen5')
    gen5.innerHTML = "世代 五"
})

// Sélection des Sprites
let spriteKicklee = document.getElementById('imgKicklee')
let spriteTygnon = document.getElementById('imgTygnon')

// Bouton pour les Générations
gen5.addEventListener('click', function () {
    spriteKicklee.setAttribute("src", "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_106.gif")
    spriteTygnon.setAttribute("src", "https://www.pokencyclopedia.info/sprites/gen5/ani-b_black-white/a-b_bw_107.gif")
})
gen1.addEventListener('click', function () {
    spriteKicklee.setAttribute("src", "https://www.pokepedia.fr/images/9/98/Sprite_106_J.png")
    spriteTygnon.setAttribute("src", "../public/images/107_gen1-removebg.png")
})
gen2.addEventListener('click', function () {
    spriteKicklee.setAttribute("src", "https://www.pokepedia.fr/images/f/fa/Sprite_106_A.png")
    spriteTygnon.setAttribute("src", "../public/images/107_gen2-removebg.png")
})
gen3.addEventListener('click', function () {
    spriteKicklee.setAttribute("src", "https://www.pokencyclopedia.info/sprites/gen3/ani_emerald/ani_e_106.gif")
    spriteTygnon.setAttribute("src", "https://www.pokencyclopedia.info/sprites/gen3/spr-b_firered-leafgreen/b_frlg_107.png")
})
gen4.addEventListener('click', function () {
    spriteKicklee.setAttribute("src", "https://www.pokencyclopedia.info/sprites/gen4/spr_hgss/spr_hs_106_1.png")
    spriteTygnon.setAttribute("src", "https://www.pokencyclopedia.info/sprites/gen4/spr-b_hgss/b_hs_107_1.png")
})

