console.log("the future says: ", future());

function future() {
  return "You'll never have flying cars.";
}

// you are using a function declaration. It will not be hoisted
// it is decared as a constant variable / binding type its name is power
// there are two defined parameters base and exponent
// inside the function you define a variable result to hold the result of the 
// work. Then you use a for loop with sentinal variable count initalized as 0,
// that will run until the second parameter exponent is exceeded. You Then
// modify the sentinal variable by incrementing it once every loop cycle.
// Every loop cycle you store the multiplication of the base times itself in the 
// result variable. Once the for loop is finished you return the now full result 
// variable to the calling expression. 
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

function returnAnElement(array, index) {
  return array[index];
}

const spellMeOut = (array) => {
  for(i = 0; i < array.length; i++) {
    let holdMe = [];
    holdMe = array[i];
    if(holdMe < array[(i + 1)]) {
      console.log("bigger");
    }
    console.log(array[i]);
  }
}

var scores = [98, 85, 91, 78, 82];
var position = 3;
var positionElement = returnAnElement(scores, position);
console.log('positionElement:', positionElement);

spellMeOut(scores);
