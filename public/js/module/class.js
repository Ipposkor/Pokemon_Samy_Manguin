// Table des types
export const tabTypes = ["acier","combat","dragon","eau","électrique","fée","feu","glace","insecte",
"normal","plante","poison","psy","roche","sol","spectre","ténèbres","vol"]

// Paramètres jauges de vie
export let pvadversaire = document.getElementsByTagName('div')[4]
export let pvpersonnage = document.getElementsByTagName('div')[8]

// Jauges PV
export let jaugeadv = document.getElementsByTagName('div')[4].innerHTML
export let jaugemain = document.getElementsByTagName('div')[8].innerHTML

// Création de la classe d'Attaque des Pokémons
export class Attaques {
    constructor(nom,puissance,precision,pp,type){
        this.nom = nom
        this.puissance = puissance
        this.precision = precision
        this.pp = pp
        this.type = type
    }
}

// Création des Techniques
export let vampipoing = new Attaques ("Vampi-Poing",8,100,10,"combat")
export let machpunch = new Attaques ("Mach Punch",4,100,30,"combat")
export let poingeclair = new Attaques ("Poing Eclair",8,100,15,"électrique")
export let tourrapide = new Attaques ("Tour Rapide",2,100,40,"normal")
export let piedvoltige = new Attaques ("Pied Voltige",13,90,10,"combat")
export let sabotage = new Attaques ("Sabotage",7,100,20,"ténèbres")
export let lamederoc = new Attaques ("Lame de Roc",10,80,5,"roche")
export let directtoxic = new Attaques ("Direct Toxik",8,100,20,"poison")

// Création de la classe Pokémon
export class Pokemon {
    constructor(nom,pv,attaque,defense,attaqueSp,defenseSp,vitesse,type,btn1,btn2,btn3,btn4){
        this.nom = nom
        this.pv = pv
        this.attaque = attaque
        this.defense = defense
        this.attaqueSp = attaqueSp
        this.defenseSp = defenseSp
        this.vitesse = vitesse
        this.type = type
        this.btn1 = btn1
        this.btn2 = btn2
        this.btn3 = btn3
        this.btn4 = btn4
    }
    attaque1(x){
        const viemax = 100
        console.log(viemax);
        x.pv -= this.btn1.puissance
        console.log(x.pv);
        let viereste = 100-Math.floor((x.pv/viemax)*100)
        console.log(viereste);
        pvadversaire.removeAttribute("style")
        pvadversaire.setAttribute("style",`width: ${100-viereste}%`)
    }
    attaque2(x){
        x.pv -= this.btn2.puissance
    }
    attaque3(x){
        x.pv -= this.btn3.puissance
    }
    attaque4(x){
        x.pv -= this.btn4.puissance
    }
}

// Création du Pokémon Tygnon
export let tygnon = new Pokemon("Tygnon",100,339,282,185,350,276,"combat",vampipoing,machpunch,poingeclair,tourrapide)

// Création du Pokémon Kicklee
export let kicklee = new Pokemon("Kicklee",100,372,225,185,350,300,"combat",piedvoltige,sabotage,lamederoc,directtoxic)

