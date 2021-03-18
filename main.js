
// Complete each of the following exercises:
// Use a do...while loop to console.log the numbers from 1 to 1000.
//FIX BUG WHERE I'M OUTPUTTING A STRING!!!!

let i = 1;
do {
  console.log(i)
  i=i+1
} while (i<1000)

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

for (const people of arrayOfPersons){
  let birth = people.birthDate[people.birthDate.length -1]
  if (birth % 2 ==0){
    console.log(people.birth)
  }
}

// Use .map() to map over the arrayOfPersons and console.log() their information.

const newArr = arrayOfPersons.map(x => x)
console.log(newArr)
// Use .filter() to filter the persons array and console.log only males in the array.

const men = arrayOfPersons.filter(person => person.gender == "male")
console.log(men)

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

for (let i = 0; i < arrayOfPersons.length; i++) {
  console.log(parseInt(arrayOfPersons[i].birthDate.substring(7,11)))
if (parseInt(arrayOfPersons[i].birthDate.substring(7, 11)) < 1990) {
  console.log(true)
} else {
  console.log(false)
}
}


// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const elders = arrayOfPersons.filter(person => parseInt(person.birthDate.substring(7,11)) < 1990)
console.log(elders)


// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// BONUS - .filter() out the people in the array who are younger than 21.

