// Table des types
export const tabTypes = ["acier", "combat", "dragon", "eau", "électrique", "fée", "feu", "glace", "insecte",
    "normal", "plante", "poison", "psy", "roche", "sol", "spectre", "ténèbres", "vol"
]

// Texte combat
let txtCombat = document.getElementById('textCombat')

// Paramètres jauges de vie
export let pvadversaire = document.getElementsByTagName('div')[4]
export let pvpersonnage = document.getElementsByTagName('div')[8]

// Création de la classe d'Attaque des Pokémons
export class Attaques {
    constructor(nom, puissance, precision, pp, type) {
        this.nom = nom
        this.puissance = puissance
        this.precision = precision
        this.pp = pp
        this.type = type
    }
}

// Création des Techniques
export let vampipoing = new Attaques("Vampi-Poing", 8, 100, 10, "combat")
export let machpunch = new Attaques("Mach Punch", 4, 100, 30, "combat")
export let poingeclair = new Attaques("Poing Eclair", 8, 100, 15, "électrique")
export let tourrapide = new Attaques("Tour Rapide", 2, 100, 40, "normal")
export let piedvoltige = new Attaques("Pied Voltige", 13, 90, 10, "combat")
export let sabotage = new Attaques("Sabotage", 7, 100, 20, "ténèbres")
export let lamederoc = new Attaques("Lame de Roc", 10, 80, 5, "roche")
export let directtoxic = new Attaques("Direct Toxik", 8, 100, 20, "poison")

// Création de la classe Pokémon
export class Pokemon {
    constructor(nom, pv, attaque, defense, attaqueSp, defenseSp, vitesse, type, btn1, btn2, btn3, btn4) {
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
    // Attaque 1 Main
    attaque1(x) {
        const viemax = 100
        x.pv -= this.btn1.puissance
        console.log(`${this.nom} utilise ${this.btn1.nom} !\nIl inflige ${this.btn1.puissance} points de dégats !`);
        txtCombat.innerHTML = `${this.nom} utilise ${this.btn1.nom} !\nIl inflige ${this.btn1.puissance} points de dégats et vol de la vie !`
        switch (this.pv) {
            case 97:
                this.pv += 3;
                break;
            case 98:
                this.pv += 2;
                break;
            case 99:
                this.pv += 1;
                break;
            case 100:
                this.pv += 0;
                break;
            default:
                this.pv += 4;
                break;
        }
        let viereste = 100 - Math.floor((x.pv / viemax) * 100)
        if (viereste > 51 && viereste < 81) {
            pvadversaire.className = "adversaire progress-bar bg-warning progress-bar-animated"
        }
        if (viereste >= 81) {
            pvadversaire.className = "adversaire progress-bar bg-danger progress-bar-animated"
        }
        pvadversaire.removeAttribute("style")
        pvadversaire.setAttribute("style", `width: ${100-viereste}%`)
        if (viereste >= 100) {
            pvadversaire.innerHTML = 0
            pvadversaire.className = "adversaire progress-bar bg-white text-black progress-bar-animated"
        } else {
            pvadversaire.innerHTML = viemax - viereste
        }
    }
    // Attaque 2 Main
    attaque2(x) {
        const viemax = 100
        x.pv -= this.btn2.puissance
        console.log(`${this.nom} utilise ${this.btn2.nom} !\nIl inflige ${this.btn2.puissance} points de dégats !`);
        txtCombat.innerHTML = `${this.nom} utilise ${this.btn2.nom} !\nIl inflige ${this.btn2.puissance} points de dégats !`
        let viereste = 100 - Math.floor((x.pv / viemax) * 100)
        if (viereste > 51 && viereste < 81) {
            pvadversaire.className = "adversaire progress-bar bg-warning progress-bar-animated"
        }
        if (viereste >= 81) {
            pvadversaire.className = "adversaire progress-bar bg-danger progress-bar-animated"
        }
        pvadversaire.removeAttribute("style")
        pvadversaire.setAttribute("style", `width: ${100-viereste}%`)
        if (viereste >= 100) {
            pvadversaire.innerHTML = 0
            pvadversaire.className = "adversaire progress-bar bg-white text-black progress-bar-animated"
        } else {
            pvadversaire.innerHTML = viemax - viereste
        }
    }
    // Attaque 3 Main
    attaque3(x) {
        const viemax = 100
        x.pv -= this.btn3.puissance
        console.log(`${this.nom} utilise ${this.btn3.nom} !\nIl inflige ${this.btn3.puissance} points de dégats !`);
        txtCombat.innerHTML = `${this.nom} utilise ${this.btn3.nom} !\nIl inflige ${this.btn3.puissance} points de dégats !`
        let viereste = 100 - Math.floor((x.pv / viemax) * 100)
        if (viereste > 51 && viereste < 81) {
            pvadversaire.className = "adversaire progress-bar bg-warning progress-bar-animated"
        }
        if (viereste >= 81) {
            pvadversaire.className = "adversaire progress-bar bg-danger progress-bar-animated"
        }
        pvadversaire.removeAttribute("style")
        pvadversaire.setAttribute("style", `width: ${100-viereste}%`)
        if (viereste >= 100) {
            pvadversaire.innerHTML = 0
            pvadversaire.className = "adversaire progress-bar bg-white text-black progress-bar-animated"
        } else {
            pvadversaire.innerHTML = viemax - viereste
        }
    }
    // Attaque 4 Main
    attaque4(x) {
        const viemax = 100
        x.pv -= this.btn4.puissance
        console.log(`${this.nom} utilise ${this.btn4.nom} !\nIl inflige ${this.btn4.puissance} points de dégats !`);
        txtCombat.innerHTML = `${this.nom} utilise ${this.btn4.nom} !\nIl inflige ${this.btn4.puissance} points de dégats !`
        let viereste = 100 - Math.floor((x.pv / viemax) * 100)
        if (viereste > 51 && viereste < 81) {
            pvadversaire.className = "adversaire progress-bar bg-warning progress-bar-animated"
        }
        if (viereste >= 81) {
            pvadversaire.className = "adversaire progress-bar bg-danger progress-bar-animated"
        }
        pvadversaire.removeAttribute("style")
        pvadversaire.setAttribute("style", `width: ${100-viereste}%`)
        if (viereste >= 100) {
            pvadversaire.innerHTML = 0
            pvadversaire.className = "adversaire progress-bar bg-white text-black progress-bar-animated"
        } else {
            pvadversaire.innerHTML = viemax - viereste
        }
    }
    // Attaque 1 Adversaire
    attaque1Adv(x) {
        const viemaxAdv = 100
        x.pv -= this.btn1.puissance
        console.log(`${this.nom} utilise ${this.btn1.nom} !\nIl inflige ${this.btn1.puissance} points de dégats !`);
        txtCombat.innerHTML = `${this.nom} utilise ${this.btn1.nom} !\nIl inflige ${this.btn1.puissance} points de dégats !`
        let vieresteAdv = 100 - Math.floor((x.pv / viemaxAdv) * 100)
        if (vieresteAdv > 51 && vieresteAdv < 81) {
            pvpersonnage.className = "personnage progress-bar bg-warning progress-bar-animated"
        }
        if (vieresteAdv >= 81) {
            pvpersonnage.className = "personnage progress-bar bg-danger progress-bar-animated"
        }
        pvpersonnage.removeAttribute("style")
        pvpersonnage.setAttribute("style", `width: ${100-vieresteAdv}%`)
        if (vieresteAdv >= 100) {
            pvpersonnage.innerHTML = 0
            pvpersonnage.className = "personnage progress-bar bg-white text-black progress-bar-animated"
        } else {
            pvpersonnage.innerHTML = viemaxAdv - vieresteAdv
        }
    }
    // Attaque 2 Adversaire
    attaque2Adv(x) {
        const viemaxAdv = 100
        x.pv -= this.btn2.puissance
        console.log(`${this.nom} utilise ${this.btn2.nom} !\nIl inflige ${this.btn2.puissance} points de dégats !`);
        txtCombat.innerHTML = `${this.nom} utilise ${this.btn2.nom} !\nIl inflige ${this.btn2.puissance} points de dégats !`
        let vieresteAdv = 100 - Math.floor((x.pv / viemaxAdv) * 100)
        if (vieresteAdv > 51 && vieresteAdv < 81) {
            pvpersonnage.className = "personnage progress-bar bg-warning progress-bar-animated"
        }
        if (vieresteAdv >= 81) {
            pvpersonnage.className = "personnage progress-bar bg-danger progress-bar-animated"
        }
        pvpersonnage.removeAttribute("style")
        pvpersonnage.setAttribute("style", `width: ${100-vieresteAdv}%`)
        if (vieresteAdv >= 100) {
            pvpersonnage.innerHTML = 0
            pvpersonnage.className = "personnage progress-bar bg-white text-black progress-bar-animated"
        } else {
            pvpersonnage.innerHTML = viemaxAdv - vieresteAdv
        }
    }
    // Attaque 3 Adversaire
    attaque3Adv(x) {
        const viemaxAdv = 100
        x.pv -= this.btn3.puissance
        console.log(`${this.nom} utilise ${this.btn3.nom} !\nIl inflige ${this.btn3.puissance} points de dégats !`);
        txtCombat.innerHTML = `${this.nom} utilise ${this.btn3.nom} !\nIl inflige ${this.btn3.puissance} points de dégats !`
        let vieresteAdv = 100 - Math.floor((x.pv / viemaxAdv) * 100)
        if (vieresteAdv > 51 && vieresteAdv < 81) {
            pvpersonnage.className = "personnage progress-bar bg-warning progress-bar-animated"
        }
        if (vieresteAdv >= 81) {
            pvpersonnage.className = "personnage progress-bar bg-danger progress-bar-animated"
        }
        pvpersonnage.removeAttribute("style")
        pvpersonnage.setAttribute("style", `width: ${100-vieresteAdv}%`)
        if (vieresteAdv >= 100) {
            pvpersonnage.innerHTML = 0
            pvpersonnage.className = "personnage progress-bar bg-white text-black progress-bar-animated"
        } else {
            pvpersonnage.innerHTML = viemaxAdv - vieresteAdv
        }
    }
    // Attaque 4 Adversaire
    attaque4Adv(x) {
        const viemaxAdv = 100
        x.pv -= this.btn4.puissance
        console.log(`${this.nom} utilise ${this.btn4.nom} !\nIl inflige ${this.btn4.puissance} points de dégats !`);
        txtCombat.innerHTML = `${this.nom} utilise ${this.btn4.nom} !\nIl inflige ${this.btn4.puissance} points de dégats !`
        let vieresteAdv = 100 - Math.floor((x.pv / viemaxAdv) * 100)
        if (vieresteAdv > 51 && vieresteAdv < 81) {
            pvpersonnage.className = "personnage progress-bar bg-warning progress-bar-animated"
        }
        if (vieresteAdv >= 81) {
            pvpersonnage.className = "personnage progress-bar bg-danger progress-bar-animated"
        }
        pvpersonnage.removeAttribute("style")
        pvpersonnage.setAttribute("style", `width: ${100-vieresteAdv}%`)
        if (vieresteAdv >= 100) {
            pvpersonnage.innerHTML = 0
            pvpersonnage.className = "personnage progress-bar bg-white text-black progress-bar-animated"
        } else {
            pvpersonnage.innerHTML = viemaxAdv - vieresteAdv
        }
    }
    // Attaque random de l'Adversaire
    attaqueAdv(x) {
        let random = Math.floor(Math.random() * 3)
        switch (random) {
            case 0:
                this.attaque1Adv(x);
                break;
            case 1:
                this.attaque2Adv(x);
                break;
            case 2:
                this.attaque3Adv(x);
                break;
            case 3:
                this.attaque4Adv(x);
                break;
        }
    }
}

// Création du Pokémon Tygnon
export let tygnon = new Pokemon("Tygnon", 100, 339, 282, 185, 350, 276, "combat", vampipoing, machpunch, poingeclair, tourrapide)

// Création du Pokémon Kicklee
export let kicklee = new Pokemon("Kicklee", 100, 372, 225, 185, 350, 300, "combat", piedvoltige, sabotage, lamederoc, directtoxic)