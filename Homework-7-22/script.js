class Actor {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    distanceTo(otherActor) {
        let dx = otherActor.x - this.x;
        let dy = otherActor.y - this.y;
        return Math.hypot(dx, dy);
    }
}

class Player extends Actor {
    constructor(startX, startY) {
        super(startX, startY);
        this.hp = 100;
    }
}

class Enemy extends Actor {
    attack(player) {
        if (this.distanceTo(player) < 4) {
            player.hp -= 10;
            return true;
        }
        else {
            return false;
        }
    }
}

class Npc extends Actor {
    dialog(player) {
        if (this.distanceTo(player) <= 1) {
            console.log("Drink this!");
            player.hp = Math.min(100, player.hp + 5);
            console.log(`New player health: ${player.hp}`)
        } else {
            console.log("Adventurer, come over here!")
        }
    }
}

class Mage extends Player {
    teleport(newX, newY) {
        this.x = newX;
        this.y = newY;
        console.log(`Mage teleported to (${this.x}, ${this.y})`)
    }
}

class Orc extends Enemy {
    attack(player) {
        if (this.distanceTo(player) < 4) {
            player.hp -= 20;
            console.log(`New player health: ${player.hp}`)
            return true;
        }
        else {
            console.log("The attack missed!")
            return false;
        }
    }
}

let player1 = new Player(1, 1);
player1.hp = 93;
let healer = new Npc(1, 3);

console.log("P1 health " + player1.hp)
healer.dialog(player1);
player1.move(0, 1);
healer.dialog(player1);
healer.dialog(player1);

let mage = new Mage(2, 2);
mage.teleport(6, 6);

let orc1 = new Orc(-6, -6);
orc1.attack(player1);
orc1.move(6, 6);
orc1.attack(player1);

function intAcceptor(intInput) {
    try {
        if (Number.isInteger(intInput)) {
            console.log("Input accepted")
        } else {
            throw "Input not accepted, please input an integer next time"
        }
    } catch (error) {
        console.log(error);
    }
}

intAcceptor(5);
intAcceptor(5.7);
intAcceptor("hi");
intAcceptor(player1);


function indexChecker(index) {
    let testArray = [5, 10, 15, 20];
    try {
        if (testArray[index] == undefined) {
            throw "Index Error"
        }
        else {
            console.log(`The value at index ${index} is: ${testArray[index]}`)
        }
    } catch (error) {
        console.log(error);
    }
}

indexChecker(2);
indexChecker("hi");
indexChecker(6);
indexChecker(-2);

function badFunction() {
    try {
        console.log(nonDeclared);
        console.log("We should never reach this");
    } catch (error) {
        console.error("This code executes after an error occurs")
    }
}

badFunction();