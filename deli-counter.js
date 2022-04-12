/*
Build the line function that takes in an array and returns a string containing everyone 
with their current place in the line. See the example below for how this should be formatted. 
If there is nobody in line, it should say "The line is currently empty.".
*/

const katzDeli = []

function line(array){
  if(array.length === 0){
    console.log("The line is currently empty.")
  } else{
    let deliClientLine = ""
    for(let i = 0; i < array.length; i++){
      deliClientLine += `${i+1}.${array[i]}`  
    }
     return `The line is currently: ${deliClientLine}`
  }
}
  console.log(line(katzDeli))

/*
Build a function that a new customer will use when entering the deli. 
The takeANumber function should accept two arguments, the array for the 
current line of people (katzDeli), and a string containing the name of the
 person joining the end of the line. The method should call out (console.log()) 
 the person's name along with their position in line. Top-Tip: Remember that people 
 like to count from 1, not from 0 ("zero") like computers.
*/


  function takeANumber(array, name){
 
    array.push(name)
      return `Welcome, ${name}.You are number ${array.length} in line`
  }
  takeANumber(katzDeli, "Ada")

/*
Build the nowServing function which should call out (i.e. console.log()) the next 
person in line and then remove them from the front. If there is nobody in line, it 
should call out (console.log()) that "There is nobody waiting to be served!".
*/

function nowServing(array){
        console.log(`Currently serving ${array.shift()}`)    
    } 
    nowServing(katzDeli)


// 1. Write your functions here

// 2. Example Usage
// const katzDeli = []
// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.


// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"