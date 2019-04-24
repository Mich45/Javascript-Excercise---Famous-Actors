import './style';
// Setup Jasmine testing
import {jasMineBootstrap} from './src/moya/global-jasmine-setup';
import {anwsers} from './src/moya/excercise-answer';

/*
----------Run Unit Test on Answer sheets -------------
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

/**
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

//Write Your Own Code Below, each correct answer will past the Unit test
/*
----------------------------------------------------
1. Create An Array of actors
----------------------------------------------------
*/


/*
----------------------------------------------------
2. Create Methods 
----------------------------------------------------
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


