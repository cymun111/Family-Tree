
class grandParents {
  constructor(hairColor, eyeColor, name, highJump, vertical) {
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.name = name;
    this.highJump = highJump;
    this.vertical = function(){
        console.log(`${this.name} can jump ${this.highJump} inches high.`);}
    }

report(){
        return `
Hair Color: ${this.hairColor},
Eye Color: ${this.eyeColor}
Name: ${this.name}`;
          }
}
class parents extends grandParents{
  constructor(hairColor, eyeColor, name, highJump, vertical) {
    super(hairColor, eyeColor, name, highJump, vertical);
  }
}

class child extends grandParents {
  constructor(hairColor, eyeColor, name, highJump, vertical) {
    super(hairColor, eyeColor, name, highJump, vertical);
  }
}
var myArr = [];
let grandMa = new grandParents("Blond", "Blue", "GrandMa", "22");
grandMa.vertical();
myArr.push(grandMa);

let grandPa = new grandParents("White", "Brown", "GrandPa", "30");
grandPa.vertical();
myArr.push(grandPa);

let dad = new parents("Brown", "Brown", "Dad", "33");
dad.vertical();
myArr.push(dad);

let mom = new parents("Light Brown", "Hazel", "Mom", "20");
mom.vertical();
myArr.push(mom);

let son = new child("Blond", "Green", "John", "36");
son.vertical();
myArr.push(son);

let daughter = new child("Brown", "Alexandria's Genesis", "Jane", "17");
daughter.vertical();
myArr.push(daughter);
function myFunction(){
console.log(myArr);
}
myFunction();
