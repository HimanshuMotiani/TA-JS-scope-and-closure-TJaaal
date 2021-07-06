// ## Closure Exercise

// 1. Write a function, `outer` that takes an input `string`. Inside the function `outer` define another function expression named `sayHello` which alerts the `input`. `sayHello` should be call immediately after it is defined.

// ```js
// Your code goes here
function outer(str){
  let sayHello = ()=>{
    alert(str);
  }
sayHello();
}
outer("himanshu");


// 2. Write a function `delay` that accepts two arguments, a callback and the wait for the time in milliseconds (1000 ms is 1 second).
//  `delay` should return a function that, when invoked waits for the specified amount of time before executing. (Use setTimeout)


// Your code goes here
function delay(cb,time){
  return function(){
    setTimeout(cb,time);

}
}
let test  = delay(()=>console.log("Hello"),2000);
test();

// 3. Write a function with a closure. The first function should only take one argument, someone's last name,
//  and return the inner function.
//  The returned `inner` function should take one more argument, someone's first name. 
//  When inner function when called it should console.log both the first name and the last name with a space.

function lastName(lastName) {
  //  Your code goes here
  function inner(firstName){
    console.log(`${firstName } ${lastName}`)
  };
  return inner;
}

let lastNameLee = lastName('lee'); // logs nothing
lastNameLee('Brett'); //logs 'Brett Lee'


// This function is useful in case you want to create name for multiple people with same last name.


lastNameLee('Jane'); //logs 'Jane Lee'
lastNameLee('Lynne'); //logs 'Lynne Lee'


// 4. Create a `storyWriter` function that returns an object with two methods. 
// One method, `addWords` adds a word to your story and returns the story 
// while the other one, `erase`, resets the story back to an empty string. Here is an implementation:


function storyWriter() {
  // Your code goes here
  let str = '';
  return {
    addWords:function (word){
    str= str + ' ' + word
    return str;
    },
    erase:function (){
      str= '';
      return str;
    }    
  }
}

// Test
let farmLoveStory = storyWriter();
console.log(farmLoveStory.addWords('There was once a lonely cow.')); // 'There was once a lonely cow.'
console.log(farmLoveStory.addWords('It saw a friendly face.')); //'There was once a lonely cow. It saw a friendly face.'
console.log(farmLoveStory.erase()); //''

let storyOfMyLife = storyWriter();
console.log(storyOfMyLife.addWords('My code broke.')); // 'My code broke.'
console.log(storyOfMyLife.addWords('I ate some ice cream.')); //'My code broke. I ate some ice cream.'
console.log(storyOfMyLife.erase());


// 5. Create a function named `forEach` which accepts one parameter an array. Inside the function `forEach` there a variable named `index` which is initialized to `0`.

// When `forEach` function is called it returns another function. 
//When the returned function is called it returns the element from the array at specific index. 
//Every time you call the returned function the value of index should increment.


function forEach(arr) {
  // Your code goes here
  let index = 0;
function arrIndex(){
  if(index< arr.length){
  return arr[index++]; 
  }
} 
  return arrIndex;
}
let val = [1, 2, 3, 4, 5];
let next = forEach(val);
next(); // 1
next(); // 2
next(); // 3
next(); // 4
next(); // 5

// 6. Create a function named `addDesignation` which accepts a `title` and returns another function.

// The returned function accepts a string `prefix` and returns `prefix` and `title` with a space.


function addDesignation(title) {
  // your code goes here
  function designation(str){
return str + ' ' + title
  }
  return designation;
}

let sales = addDesignation('Salesman');
console.log(sales('Main')); // Main Salesman

let manager = addDesignation('Manager');
console.log(manager('Regional')); // Regional Manager
console.log(manager('Head')); // Head Manager


// 7. Create a function named `changeSalary` which accepts `currentSalary` (number) and returns an object that contains three methods

// - `raise` which will add `500` to the current salary and returns the updated salary
// - `lower` will decrease the salary by 500 returns the updated salary
// - `current` will return the current salary returns the updated salary


function changeSalary(currentSalary) {
  // Your code goes here
  return {
    raise: ()=>{
       currentSalary += 500;
      return currentSalary
    },
    lower: ()=>{
       currentSalary -= 500;
      return currentSalary
    },
    current:()=>{
      return currentSalary
    }
  }
}

let sam = changeSalary(2000);
sam.raise(); // 2500

let arya = changeSalary(4000);
arya.lower(); // 3500


// 8. Create a function named `nameFactory` which accepts `firstName` and `lastName` and returns an object with multiple functions.

// - `getFullName`: return the full name of the person with a space
// - `setFirstName`: accepts a parameter first name using which updates the firstName and return the updated full name
// - `setLastName`: accepts a parameter last name using which updates the firstName and return the updated full name


// Your code goes here
function  nameFactory(firstName, lastName){
  let fName = firstName;
  let lName = lastName;
  return {
    getFullName: ()=>{
     return fName + ' ' + lName
    },
    setFirstName: (name)=>{
      fName = name;
      return name + ' ' + lastName
    },
    setLastName: (lastName)=>{
      lName = lastName
      return  fName+ ' ' + lastName
    },
  }

}

let aryas = nameFactory('Arya', 'Stark');
console.log(aryas.getFullName()); // "Arya Stark"
console.log(aryas.setFirstName('Jon')); // "Jon Stark"
console.log(aryas.setLastName('Lannister')); // "Jon Lannister"


// 9. Create a function named `createTag` which accepts an HTML element name and returns another function.

// The returned function accepts a string (children) and returns the children with the tag you passed.


function createTag(tag) {
  // your code goes here
  function attachContent(str){
   return `<${tag}>${str}</${tag}>`
  }
  return attachContent;
}

let bold = createTag('b');
console.log(bold('Hello World!')); // <b>Hello World!</b>

let italic = createTag('i');
console.log(italic('Hello World!')); // <i>Hello World!</i>

