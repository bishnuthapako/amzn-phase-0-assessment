const katzDeli = []

function takeANumber(array, name){
 
  katzDeli.push(name)
    return `Welcome, ${name}. You are number ${array.length} in line`
}

const customerLine = ["Ada", "Grace", "Kent"]

function line(array, string){
  const newLineArray = []
  for(let i = 0; i < array.length; i++){
    newLineArray.push(array[i])
  }
  if(array.length === 0){
    return "The line is currently empty."
  } else {
    return (`The line is currently ${string}.`)
  }
  return newLineArray
  
}
// console.log(takeANumber(katzDeli, "Ada"))
// console.log(takeANumber(katzDeli, "Grace"))
// console.log(takeANumber(katzDeli, "Kent"))

function nowServing(deliCounterLine){
    if(deliCounterLine.length > 0){
        return `Currently serving: ${deliCounterLine.shift()}.` 
        
    } else{
        return "There is nobody waiting to be served!"

    }

}



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