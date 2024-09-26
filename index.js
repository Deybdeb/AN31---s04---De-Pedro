//console.log('Hello');

/* 
 	statements that will tell the computer instructions 
	to perform 

	-js statements end with (;) optional 
		-semicolons are not required in js 
		we will use it to use as good practice 
		and locate where the statement ends

	- Syntax 
		the set of rules that describes how statements must 
		be constructed



 */
	

	// all lines/blocks of code shoulde be written in a specific manner to work 

	// comments are parts of the that gets ignored to describe the written code 
	
	
	/*
	


	*/



/*

	[Section] Variables 
	- to contain data 
	- tells our device that a variable name is 
	created and is ready to store data

	// syntax: let//const variableName; 


*/

let MyVariable;
console.log(MyVariable);
//console.log useful for printing values of variables 


//variable declaration

let hello = 'juan';
var Num_1 = 1; 
console.log(Num_1); 

 /*
	Guides in writing variables 
	1. use the let keyword followed by the variable name
	of your choosing use the assign value 

	2. variables names should start with lowercase character, 
	use "useCamel" case 

	3. for constant variables used the 'const' keyword 
	4. variable names should be indicative (or descriptive )
	of the value being stored to avoid confusion. 

 */ 

let productName = 'desktop computer'; 
console.log(productName);

const pi = 3.141;
console.log(pi); 

// re assigning variables vs initializing variables
//initializing 
let supplier;
supplier = "Rainier Jocsing"; 
console.log(supplier); 

//reassigning variables 
supplier = 'makmak store'; 
console.log(supplier);


// hoisting default behavior of javascript of moving variables to the top

// in term of variables andd constant, keyword var is hoisting and let and const does not allow hoisting 

a = 5; 
console.log(a);
var a;

let outerVariable = "asa labas toh"; 
{ 

	let innerVariable = " asa loob ako";
	console.log(innerVariable); //right way  
}

console.log(outerVariable);
//console.log(innerVariable);

let productPrice = '20000', productCode = 'DC103';
console.log(productCode, productPrice); 

/*
	- Data Types 
		- String 
			are series of characters that create a word, 
			phrase, a sentence, or anything related to creating 
			or anything 
			- '' or " " literals 
*/


let country = 'Philippines';
let city = "Metro Manila"; 

// concatenation of strings to create a single string using " + "

let fullAddress = country + ' , ' + city
console.log(fullAddress); 

let greeting = ' I live at ' + ', ' + city;
console.log(greeting); 

// The escape character (\) in string in combination in other characrer can produce diff effects 
// '\n' - new line

let mailAddress = 'Metro Manila \n\n Philippines';
console.log(mailAddress);

let message = "Juan\s employees went home early";
console.log(message); 
 

//numbers - integers or whole number 
let headCount = '26'; 
console.log(headCount);
 

 // Boolean values are normally used to store values relating to the state of things

let isMarried = true; 
let inGoodConduct = false; 

console.log('Mak is gay', + isMarried);