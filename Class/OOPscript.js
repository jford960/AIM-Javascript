// class Player {
//     constructor(startX, startY) {
//         this.x = startX;
//         this.y = startY
//     }

//     move(dx, dy) {
//         this.x += dx;
//         this.y += dy;
//     }
// }

// let player1 = new Player(0, 0);
// player1.x;
// player1.y;
// player1.move(3, 4);
// player1.x;
// player1.y;

// let player2 = new Player(2, 1);
// player2.x;
// player2.y;
// player2.move(5, 3);
// player2.x;
// player2.y;
// player1.x;
// player1.y;

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

let player = new Player(1, 2);
let enemy = new Enemy(3, 4);
player.hp;
enemy.distanceTo(player);
enemy.attack(player);
player.hp;
player.move(5, 5);
enemy.attack(player);
player.hp;


function Cat(name) {
    this.name = name;
    this.type = "menace"
}
Cat.prototype.sayHello = function () {
    console.log(`Miaou! My name is ${this.name}.`);
}

let kiki = new Cat('Kiki');
kiki.sayHello();

class Dog {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(
            `Woof! My name is ${this.name}.`
        )
    }
}

let felix = new Dog("Felix")

let luna = new Cat("Luna");
luna.sayHello = function () {
    console.log('What a wonderful moon!! My name is ' + this.name)
}

luna.sayHello();
kiki.sayHello();

let ruffman = new Dog("Ruff Ruffman");
ruffman.sayHello = function () {
    console.log(`Hi, my name is ${this.name}, and I host a show called Fetch with Ruff Ruffman!`)
}

ruffman.sayHello()
felix.sayHello()