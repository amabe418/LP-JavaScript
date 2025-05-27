// ─────────── 1) Base class Hero ───────────
class Hero {
    constructor(name, race) {
        this.name = name;
        this.race = race;
        this.hp = 100;
        this.mana = 50;
        this.atk = 10;
        this.def = 5;
        this.isAlive = true;
    }

    // Shared method: physical attack
    attack(target) {
        let damage = this.atk - target.def;
        damage = Math.max(0, damage);
        target.hp -= damage;
        console.log(`${this.name} attacks ${target.name} for ${damage} damage.`);

        if (target.hp <= 0) {
            target.hp = 0;
            target.isAlive = false;
            console.log(`${target.name} has died.`);
        } else {
            console.log(`${target.name} now has ${target.hp} HP.`);
        }
    }
}

// ─────────── 2) Class Shaman ───────────
class Shaman extends Hero {
    constructor(name, race) {
        super(name, race);
        this.class = "Shaman";
        // Race modifiers
        if (race === "Orc") {
            this.hp += 30;
            this.mana += 20;
            this.atk += 2;
            this.def += 3;
        } else if (race === "Human") {
            this.hp += 10;
            this.mana += 30;
            this.atk += 1;
            this.def += 1;
        }
    }

    // Shaman-only method: basic healing
    heal(target) {
        if (this.mana < 15) {
            console.log(`${this.name} does not have enough mana to heal.`);
            return;
        }
        this.mana -= 15;
        const healAmount = 20;
        target.hp += healAmount;
        console.log(
            `${this.name} heals ${target === this ? "himself" : target.name} for ${healAmount} HP.`
        );
        console.log(`${target.name} now has ${target.hp} HP.`);
    }
}

// ─────────── 3) Specialization: ElementalShaman ───────────
class ElementalShaman extends Shaman {
    constructor(name, race) {
        super(name, race);
        this.spec = "Elemental";
        // Spec modifiers
        this.atk += 3;
        this.mana += 10;
    }

    // Specialization-only method: lightning bolt
    castLightning(target) {
        if (this.mana < 20) {
            console.log(`${this.name} does not have enough mana for Lightning Bolt.`);
            return;
        }
        this.mana -= 20;
        let damage = 25 - target.def;
        damage = Math.max(0, damage);
        target.hp -= damage;
        console.log(
            `${this.name} casts Lightning Bolt on ${target.name} for ${damage} magic damage.`
        );
        if (target.hp <= 0) {
            target.hp = 0;
            target.isAlive = false;
            console.log(`${target.name} has been struck down.`);
        } else {
            console.log(`${target.name} now has ${target.hp} HP.`);
        }
    }
}

// ─────────── 4) Class Mage ───────────
class Mage extends Hero {
    constructor(name, race) {
        super(name, race);
        this.class = "Mage";
        // Race modifiers
        if (race === "Human") {
            this.mana += 50;
        } else if (race === "Orc") {
            this.mana += 20;
        }
        this.atk += 1;  // lower physical attack
    }

    // Mage-only method: basic spell
    castSpell(target) {
        if (this.mana < 10) {
            console.log(`${this.name} does not have enough mana.`);
            return;
        }
        this.mana -= 10;
        let damage = 15 - target.def;
        damage = Math.max(0, damage);
        target.hp -= damage;
        console.log(
            `${this.name} casts a spell on ${target.name} dealing ${damage} magic damage.`
        );
        if (target.hp <= 0) {
            target.hp = 0;
            target.isAlive = false;
            console.log(`${target.name} has died.`);
        } else {
            console.log(`${target.name} now has ${target.hp} HP.`);
        }
    }
}

// ─────────── 5) Specialization: ArcaneMage ───────────
class ArcaneMage extends Mage {
    constructor(name, race) {
        super(name, race);
        this.spec = "Arcane";
        // Spec modifiers
        this.atk += 2;
        this.mana += 20;
    }

    // Specialization-only method: arcane blast
    castArcaneBlast(target) {
        if (this.mana < 25) {
            console.log(`${this.name} does not have enough mana for Arcane Blast.`);
            return;
        }
        this.mana -= 25;
        let damage = 30 - target.def;
        damage = Math.max(0, damage);
        target.hp -= damage;
        console.log(
            `${this.name} casts Arcane Blast on ${target.name} for ${damage} magic damage.`
        );
        if (target.hp <= 0) {
            target.hp = 0;
            target.isAlive = false;
            console.log(`${target.name} has been obliterated.`);
        } else {
            console.log(`${target.name} now has ${target.hp} HP.`);
        }
    }
}

// ─────────── 6) Demo ───────────
const thrall = new ElementalShaman("Thrall", "Orc");
const jaina = new ArcaneMage("Jaina", "Human");

while (thrall.isAlive && jaina.isAlive) {
    console.log(thrall);
    console.log(jaina);

    thrall.castLightning(jaina);
    jaina.castArcaneBlast(thrall);
    thrall.heal(thrall);
    thrall.attack(jaina);
}

console.log(`\nResults:\nJaina HP: ${jaina.hp}\nThrall HP: ${thrall.hp}`);








