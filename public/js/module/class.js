// Table des types
const tabTypes = ["acier","combat","dragon","eau","électrique","fée","feu","glace","insecte",
"normal","plante","poison","psy","roche","sol","spectre","ténèbres","vol"]

// Création de la classe Pokémon
class Pokemon {
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
}

// Création de la classe d'Attaque des Pokémons
class Attaques {
    constructor(nom,puissance,precision,pp,type){
        this.nom = nom
        this.puissance = puissance
        this.precision = precision
        this.pp = pp
        this.type = type
    }
}

// Création du Pokémon Tygnon
let tygnon = new Pokemon("Tygnon",50,105,79,35,110,76,"combat")

// Création du Pokémon Kicklee
let kicklee = new Pokemon("Kicklee",50,120,53,35,110,87,"combat")