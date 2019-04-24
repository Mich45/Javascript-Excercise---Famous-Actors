// stores the favorite author in a constant variable
const favoriteAuthor = { name: "Ken Bruen", genre: "Noir", nationality: "Irish" };

// returns the actor object
function getActorByName() {
  return { title: "The Guards", author: "Ken Bruen" };
}

// returns a list of actors

/*
  const actors = [
      {name : "Leonardo DiCaprio", age: 41, numOscars : 1},
      {name : "Jennifer Lawrence", age: 25, numOscars : 1},
      {name : "Samuel L. Jackson", age: 67, numOscars : 0},
      {name : "Meryl Streep",      age: 66, numOscars : 3},
      {name : "John Cho",          age: 43, numOscars : 0}
  ];

*/
class Actor {
  constructor(name, age, numOscars = 0) {
    this.name = name;
    this.age = age;
    this.numOscars = numOscars;
  }

  hello() {
    let hello = `Hello, my name is ${this.name}`;
    console.log(hello);
    return hello;
  }

  hasMoreOscarsThan(otherActor) {
    return (this.numOscars > otherActor.numOscars) ? true : false;
  }
}


function getActors() {
  const actors = [
    new Actor("Leonardo DiCaprio", 41, 1),
    new Actor("Jennifer Lawrence", 25, 1),
    new Actor("Samuel L. Jackson", 67),
    new Actor("Meryl Streep", 66, 3),
    new Actor("John Cho", 43)
  ];
  return actors;
}
/**
 * Print the list of actors to the console
 */
function printActorObject() {
  let actors = getActors();
  for (let i = 0; i < actors.length; i++) {
    let actor = actors[i];
    let name = actor.name;
    let age = actor.age;
    let numOscars = actor.numOscars;

    console.log(actor);

  }
}
function getActorByName(paramName) {
  const actors = getActors();

  let actr = {};
  for (let i = 0; i < actors.length; i++) {
    let actor = actors[i];
    let name = actor.name;

    if (paramName === name) {
      actr = actor;
      break;
    }
  }

  return actr;
}

/**
 * The mean is the average of the numbers. 
 * To calculate: add up all the numbers, then divide by how many numbers there are
 */
function getAverageAge() {
  const actors = getActors();
  const countActors = actors.length;
  let total = 0;
  for (let i = 0; i < countActors; i++) {
    let age = actors[i].age;
    total += age;
  }
  return avg = (total / countActors);
}

function logExerciseData() {
  let leo = getActorByName('Leonardo DiCaprio');
  let jlaw = getActorByName('Jennifer Lawrence');
  let jcho = getActorByName('John Cho');
  let meryl = getActorByName('Meryl Streep');


console.log('-----Array list of all actors-----------------------------------\n');
printActorObject();
console.log('----------------------------------------------------------------');
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");

  console.log(leo);
  console.log(jlaw);
  console.log(jcho);
  console.log(meryl);
  console.log(jlaw.hasMoreOscarsThan(jcho));
  console.log(jlaw.hasMoreOscarsThan(meryl));
  console.log(leo.hasMoreOscarsThan(jlaw));

  console.log(meryl.hello());
  console.log(leo.hello());
  console.log(getAverageAge());


}

/**
 * exports the variables and functions above so that other modules can use them
 */
module.exports.anwsers = {
  getActorByName: getActorByName,
  getAverageAge: getAverageAge,
  getActors: getActors,
  printActorObject: printActorObject,
  Actor: Actor,
  logExerciseData: logExerciseData
}