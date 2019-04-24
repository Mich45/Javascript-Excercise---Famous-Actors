import './style';
// Setup Jasmine testing
import {jasMineBootstrap} from './src/moya/global-jasmine-setup';
import {anwsers} from './src/moya/excercise-answer';
/**
 * 
 * 
 * 
 * Excercise:
 * 
 * How to create an Array in javaScript
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 * 
 * 
 * How to create an object in javaScript
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
 * 
 * Question asked by Maurizio Casalino in the group: JavaScript on facebook.
 */

/*
----------------------------------------------------
To write your own answers change showCorrectAnswer to false
showCorrectAnswer = false
----------------------------------------------------
*/

const showCorrectAnswer = true;
if(showCorrectAnswer){
  console.log("----------------------------------------------------------------");
  anwsers.logExerciseData();
  console.log("----------------------------------------------------------------");
}

/*
----------------------------------------------------
1. Create An Array of actors
----------------------------------------------------
*/
/*
Create a variable named actors and assign to it an array of five objects, each of which represents a famous actor.

Each actor object should have properties for:
      the actor's name,
      the actor's age, 
      and the number of Oscars the actor has received (you can call this property oscars or numOscars).

  These are the actors to use:

    Leonardo DiCaprio (age 41, 1 Oscar)

    Jennifer Lawrence (age 25, 1 Oscar)

    Samuel L. Jackson (age 67, no Oscars)

    Meryl Streep (age 66, 3 Oscars)

    John Cho (age 43, no Oscars)
*/



/*
----------------------------------------------------
2. Create Methods 
----------------------------------------------------
*/


/*
In addition to the three properties already mentioned, each actor object should have the following two methods:
1. hello
2. hasMoreOscarsThan

hello - this method logs to the console the string "Hello, my name is " followed by the actor's name.

hasMoreOscarsThan - this method accepts one actor object as a parameter and returns true if the actor has more Oscars than the one that is passed as a parameter and false otherwise.

Now write the following functions: getActorByName , getAverageAge

getActorByName - this function expects a string as a parameter and returns the object in the actors array whose name property is equal to the string that is passed in (if there is one).

getAverageAge - this function returns the average age of all the actors in the array.
*/




/*
----------------------------------------------------
3. using the console verify the output below.
----------------------------------------------------
*/



//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//DO NOT EDIT BELOW THIS LINE 
//
//- Jasmine code testing
//-------------------------------------------------------------------------------------------

describe('1. Create Variable', function() {
	it('an object named actors should be created', function() {
	    expect(typeof actors).not.toBe('undefined')
	});
});

//----------------------------------------

describe('2. Create function', function() {
	it('a function named getActorByName should be created', function() {
	    expect(typeof getActorByName).not.toBe('undefined')
	});

	it('a function named getAverageAge should be created', function() {
	    expect(typeof getAverageAge).not.toBe('undefined')
	});
});


//----------------------------------------
describe('logs hello message to the console', () => {
  let originalLogFunc;
  beforeEach(function () { originalLogFunc = console.log; console.log = jasmine.createSpy('log') })

  it('output the string "Hello, my name is " followed by the actor\'s name', () => {
    // Arrange
    const x = 'Leonardo DiCaprio';
    const leo = getActorByName(x);


    // Act
    const y = leo.hello();
    expect(console.log).toHaveBeenCalledWith(y);

    // Assert
    expect(y).toBe("Hello, my name is " + x);
  });

  afterEach(function () { console.log = originalLogFunc; originalLogFunc = undefined })
});


describe('getAverageAge()', () => {

  it('Average age of actor', () => {

    // Act
    const y = getAverageAge();

    // Assert
    expect(y).toBe(48.4);
  });
});

//-----------------------------------------------------
//-----------------------------------------------------
//---Load jasmine test--------------------------------- 
jasMineBootstrap();
//-----------------------------------------------------


