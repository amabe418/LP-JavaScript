// ─────────── 1) Base constructor Hero ───────────
function Hero(name, race) {
    this.name = name;
    this.race = race;
    // Base stats
    this.hp = 100;
    this.mana = 50;
    this.atk = 10;
    this.def = 5;
    this.is_alive = true
}

// Shared method: physical attack
Hero.prototype.attack = function (target) {
    var damage = this.atk - target.def;
    target.hp -= damage;
    console.log(
        this.name +
        " attacks " +
        target.name +
        " for " +
        damage +
        " damage."
    );
    if (target.hp <= 0) {
        target.hp = 0;
        console.log(target.name + " has died.");
        target.is_alive = false
    } else {
        console.log(target.name + " now has " + target.hp + " HP.");
    }
};

// ─────────── 2) Class Shaman ───────────
function Shaman(name, race) {
    Hero.call(this, name, race);
    this.class = "Shaman";
}
Shaman.prototype = Object.create(Hero.prototype);
Shaman.prototype.constructor = Shaman;

Shaman.prototype.heal = function (target) {
    if (this.mana < 15) {
        console.log(this.name + " does not have enough mana to heal.");
        return;
    }
    this.mana -= 15;
    var healAmount = 20;
    target.hp += healAmount;
    console.log(
        this.name +
        " heals " +
        (target.name === this.name ? "himself" : target.name) +
        " for " +
        healAmount +
        " HP."
    );
    console.log(target.name + " now has " + target.hp + " HP.");
};

// ─────────── 3) Specialization: ElementalShaman ───────────
function ElementalShaman(name, race) {
    Shaman.call(this, name, race);
    this.spec = "Elemental";
}
ElementalShaman.prototype = Object.create(Shaman.prototype);
ElementalShaman.prototype.constructor = ElementalShaman;

ElementalShaman.prototype.castLightning = function (target) {
    if (this.mana < 20) {
        console.log(this.name + " does not have enough mana for Lightning Bolt.");
        return;
    }
    this.mana -= 20;
    var damage = 25 - target.def;
    if (damage < 0) damage = 0;
    target.hp -= damage;
    console.log(
        this.name +
        " casts Lightning Bolt on " +
        target.name +
        " for " +
        damage +
        " magic damage."
    );
    if (target.hp <= 0) {
        target.hp = 0;
        console.log("⚡ " + target.name + " has been struck down.");
        target.is_alive = 0
    } else {
        console.log(target.name + " now has " + target.hp + " HP.");
    }
};

// ─────────── 4) Class Mage ───────────
function Mage(name, race) {
    Hero.call(this, name, race);
    this.class = "Mage";
    // Race modifiers
    if (race === "Human") {
        this.mana += 50;
    } else if (race === "Orc") {
        this.mana += 20;
    }
    this.atk += 1;  // lower physical attack
}
Mage.prototype = Object.create(Hero.prototype);
Mage.prototype.constructor = Mage;

Mage.prototype.castSpell = function (target) {
    if (this.mana < 10) {
        console.log(this.name + " does not have enough mana.");
        return;
    }
    this.mana -= 10;
    var damage = 15 - target.def;
    if (damage < 0) damage = 0;
    target.hp -= damage;
    console.log(
        this.name +
        " casts a spell on " +
        target.name +
        " dealing " +
        damage +
        " magic damage."
    );
    if (target.hp <= 0) {
        target.hp = 0;
        console.log("💥 " + target.name + " has died.");
        target.is_alive = 0
    } else {
        console.log(target.name + " now has " + target.hp + " HP.");
    }
};

// ─────────── 5) Specialization: ArcaneMage ───────────
function ArcaneMage(name, race) {
    Mage.call(this, name, race);
    this.spec = "Arcane";
    // Spec modifiers
    this.atk += 2;
    this.mana += 20;
}
ArcaneMage.prototype = Object.create(Mage.prototype);
ArcaneMage.prototype.constructor = ArcaneMage;

ArcaneMage.prototype.castArcaneBlast = function (target) {
    if (this.mana < 25) {
        console.log(this.name + " does not have enough mana for Arcane Blast.");
        return;
    }
    this.mana -= 25;
    var damage = 30 - target.def;
    if (damage < 0) damage = 0;
    target.hp -= damage;
    console.log(
        this.name +
        " casts Arcane Blast on " +
        target.name +
        " for " +
        damage +
        " magic damage."
    );
    if (target.hp <= 0) {
        target.hp = 0;
        console.log(target.name + " has been obliterated.");
    } else {
        console.log(target.name + " now has " + target.hp + " HP.");
    }
};

// ─────────── 6) Demo ───────────
var thrall = new ElementalShaman("Thrall", "Orc");
var jaina = new ArcaneMage("Jaina", "Human");

while (thrall.is_alive && jaina.is_alive) {
    console.log(thrall);
    // ElementalShaman { name:"Thrall", race:"Orc", class:"Shaman", spec:"Elemental", hp:130, mana:80, atk:15, def:8 }

    console.log(jaina);
    // ArcaneMage { name:"Jaina", race:"Human", class:"Mage", spec:"Arcane", hp:100, mana:120, atk:13, def:5 }

    thrall.castLightning(jaina);
    // Thrall casts Lightning Bolt on Jaina for 19 magic damage.
    // Jaina now has 81 HP.

    jaina.castArcaneBlast(thrall);
    // Jaina casts Arcane Blast on Thrall for 22 magic damage.
    // Thrall now has 108 HP.

    thrall.heal(thrall)
    //   Thrall heals himself for 20 HP.

    thrall.attack(jaina);
    // Thrall attacks Jaina for 10 damage.
    // Jaina now has 71 HP.
}

console.log(`\nResults:\nJaina HP: ${jaina.hp}\nThrall HP: ${thrall.hp}`)