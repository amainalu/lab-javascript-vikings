// Soldier
class Soldier {
    constructor (health,strength){
        this.health= health;
        this.strength= strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(thedamage){
        this.health -= thedamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super();
        this.name = name;
        this.health=health;
        this.strength=strength;
    }
        receiveDamage (thedamage){
            if(this.health - thedamage >0){
                console.log(`${name} has received ${theDamage} points of damage`);
            } else if (this.health - thedamage <=0){
                console.log(`${name} has died in act of combat`);
            } else { 
                this.health -= thedamage;  
            }
        }    
        battleCry(){
            console.log("Odin owns you all");
        }
    } 

// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
        super();
        this.health=health;
        this.strength=strength;
    }
    receiveDamage(thedamage){
        if (this.health - damage >0){
            console.log(`A Saxon has received ${thedamage} points of damage`)
        }else if (this.health - damage <= 0){
            console.log(`A Saxon has died in combat`);
        } else {
            this.health -= thedamage;
        }
    }
}

// War
class War {
    vikingArmy=[];
    saxonArmy=[];
    addViking (numberOfVikingsSoldiers) {
        this.vikingArmy.push[i]
    };
    addSaxon (numberOfSaxonSoldiers) {
        this.numberOfSaxonSoldiers.push[i]
    };

}
