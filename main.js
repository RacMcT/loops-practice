
// Complete each of the following exercises:
// Use a do...while loop to console.log the numbers from 1 to 1000.
//FIX BUG WHERE I'M OUTPUTTING A STRING!!!!

let result = [];
let i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 1000);
console.log(result);

// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// Create a function that logs out the keys of the object using Object.keys().
console.log(Object.keys(person));

// Create a function that logs out the keys and values of the object using Object.entries().
console.log(Object.entries(person));

// Create an arrayOfPersons that contains multiple "people" objects. 
//You can simply copy/paste the person object you made above multiple times. 
//Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1920",
    gender: "female"
  },
  {
    firstName: "John",
    lastName: "Doe",
    birthDate: "Jan 24, 1945",
    gender: "male"
  },
  {
    firstName: "Joanna",
    lastName: "Doe",
    birthDate: "Feb 5, 1905",
    gender: "female"
  }
]

// Create a function that uses a for...of loop and an if statement to console.log the value 
//associated with the key birthDate of each object if the birth year is an odd number.



// Use .map() to map over the arrayOfPersons and console.log() their information.
// Use .filter() to filter the persons array and console.log only males in the array.
// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// BONUS - .filter() out the people in the array who are younger than 21.

