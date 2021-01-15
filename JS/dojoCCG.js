class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }

  stat(){
    console.log(`Power: ${this.power}, Resilience: ${this.res}`);
  }

  attack(target){
    if (target instanceof Unit) {
      target.res -= this.power;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

class Effect extends Card {
  constructor(name, cost, stat, amount) {
    super(name, cost);
    this.stat = stat;
    this.amount = amount;
    if (this.amount > 0) {
      this.direction = "increase";
    } else {
      this.direction = "reduce";
    }
  }

  text() {
    console.log(`${this.direction} target's ${this.stat} by ${this.amount}`);
  }

  play(target) {
    if(target instanceof Unit) {
      if (this.stat == "resilience") {
        target.res += this.amount;
      } else if (this.stat == "power") {
        target.power += this.amount;
      } else {
        throw new Error("Not an attribute of Unit");
      }
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);

const effect1 = new Effect("Hard Algorithm", 2, "resilience", 3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "power", 2);

unit1.stat();
unit2.stat();
unit1.attack(unit2);
unit2.stat();
effect1.play(unit2);
unit2.stat();