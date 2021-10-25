//  INTRO TO ARRAYS

//  Arrays are generally described as "list-like objects"

//  They are basically single objects that contain multiple values stored in a list

const furniture = ['couch', 'chair', 'carpet', 'stove', 'bed']




// We denote an array using bracket notation []

// We can also hold different types of variables including objects (which we will cover later) & even other arrays

const pointlessArray = ['node', true, 8, 512, undefined, 'What would this be useful for?', ['here is another array', 'we would say this array is nested', 42]]




// To access a point inside an array we use indexes. Arrays are '0 indexed' which means the first value has the index position of 0 and the second has a position of 1 and so on

// To access a value we call on the array and then provide the index position of the value we would like to retrieve.  

console.log(pointlessArray[3])
// returns 512
console.log(pointlessArray[6])
// returns ['here is another array', 'we would say this array is nested', 42]
console.log(pointlessArray[6][0])
// returns 'here is another array'




// We can change a value in an array by using the assignment opperator

furniture[0] = 'desk'

console.log(furniture)
// returns const furniture = ['desk', 'chair', 'carpet', 'stove', 'bed']




// To find the length of an array we can use the .length property (this will become quite useful when creating loops)

console.log(furniture.length)
// returns 5



// Something useful to know is that if we had a superlong array and we didn't know how many items it held and we wanted to know the value of the last item we can say:

console.log(pointlessArray.length - 1)
// not matter how this array is updated or manipulated this function will always target the last element.  




// ARRAY METHODS

// One of the most useful things we can do with arrays is update them (known as mutating the array) or create a copy and change that (this is generally consider best practice)
// To do this we use array methods.  

// Adding or removing items

// To add or remove items we use the push, pop, shift, unshift slice and splice methods.

// push will add an item to the end of an array 
// pop will remove it from the end of an array
// unshift will add the item provided the start of an array 
// shift will remove it from the start

console.log(furniture.push('shelf'))
// this actually return 6. This is because even though the array is manipulated the method itself returns the length of the new array
console.log(furniture)
// ['desk', 'chair', 'carpet', 'stove', 'bed', 'shelf']

console.log(furniture.pop())
// only returns the value of the item removed 'shelf' in this case
console.log(furniture)
// ['desk', 'chair', 'carpet', 'stove', 'bed']

console.log(furniture.unshift('shelf'))
// again we get an returned value of the new length of the array
console.log(furniture)
// ['shelf', 'desk', 'chair', 'carpet', 'stove', 'bed'] now we see shelf is at the begining

// shift will behave like pop but at the start of the array





// But there are many other types of useful array methods like the .every method which checks if every item in an array passes a certain test

let arr = ["pig", "3", "goat", "sheep"]

console.log("passes.every: " + arr.every(item => typeof item === 'string'))

// With .filter we can create an array with only the items we filter for

arr = ["pig", 3, "goat", "sheep"]

console.log("filtered for string: " + arr.filter(item => typeof item === 'string'))
// here we use the filter method on an arr to filter for strings only


// heres an example of declaring you're filter function seperately from the method
const ages = [32, 33, 16, 40];

ages.filter(checkAdult)    // Returns [32, 33, 40]

function checkAdult(age) {
  return age >= 18;
}