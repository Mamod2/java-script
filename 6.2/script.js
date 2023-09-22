const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
console.log(people);

// Write the command to remove "James" from the array

people.pop();
console.log(people);

//3. Write the command to add "Matt" to the front of the array.

people.unshift("matt");
console.log(people);

//4.. Write the command to add your name to the end of the

people.push("Mahmoud");
console.log(people);

// Write the command to make a copy of the array using a
//slice. The copy should NOT include "Mary" or "Matt".

let peoplecopy = people.slice(1);
console.log(peoplecopy);

//Write the command that gives the indexOf where "Mary"
//is located.

let peopleindex = people.indexOf("Mary");
console.log(peopleindex);

//Write the command that gives the indexOf where "Foo" is
//located. What is returning? Why?

let peopleindexfoo = people.indexOf("Foo");
console.log(peopleindexfoo);

// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth"
people.splice (2,1, "elizabeth", "artie")
console.log(people);

//9. Create a new variable called withBob and set it equal
//to the people array concatenated with the string of "Bob"

const withbob=people.push ("withbob")
console.log(withbob,people);

