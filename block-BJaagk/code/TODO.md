1. Convert the function below into different forms of function expression.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}

// Your code goes here
let percentage = function(marks, total) {
  return (marks * 100) / total;
}
let percentage = function percentage(marks, total) {
  return (marks * 100) / total;
}
let percentage = (marks, total) =>{
  return (marks * 100) / total;
}
```

2. Write Function Declaration or Function Expression next to the function.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}
// Your answer
//function Declaration
```

```js
let percentage = function percentage(marks, total) {
  return (marks * 100) / total;
};
//Function Expression
```

```js
let percentage = function (marks, total) {
  return (marks * 100) / total;
};
// Function Expression
```

```js
let percentage = (marks, total) => {
  return (marks * 100) / total;
};
//Function Expression
```

```js
let percentage = (marks, total) => (marks * 100) / total;
//Function Expression
```

3. Why is a function definition an expression in JavaScript? Give one example of function expression.

```js
//As it can be assigned to a variable
let percentage = function (marks, total) {
  return (marks * 100) / total;
};
```
4. Why is a function call an expression in JavaScript?
```js
function add(a,b){
  return a+b;
}
function addAgain(a,b){
 console.log(a+b);
}
add(12,13); // 25 is an value from aan expression
addAgain(12,13) // undefined is an value from an expression

//So function call always returns a value fso called function expression
```

5. Write VALID and INVALID next to each example below with the reason.

```js
function add(a, b) {
  return a + b;
}

let five = add(2, 3); // valid // 5 is returned and stored in five
five = add; // valid as add function reference is assigned to five, so five will have a  function  value
five = five(10, 11); // valid as five is now a function 
five = function () {
  return 'Hello';
}; // valid as five is changed to a different function
```

6. What is the difference between function definition and function call? Explain with an example.
 ```js
 //Function definition is a procedure where execution code is written to achieve a result and function call using the function to achieve the task
 function add(){} // function definition
 add() //call
```
7. What is the similarities between function definition and function call?

```js
//Function Definition is an expression(function is an object) 
//Function call is an expression(function call always returns a value)
```

8. Is the code below valid or invalid. Explain with reason.

```js
function hello() {
  console.log('Hello World!');
}

hello.user = 'Sam'; // valid as function is an object

```

9. What is higher order function explain with an example.
```js
///Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.

function add(cb){ //HOF as it accepts the function 
  cb()
}
function add(){  //HOF as it return the function 
  function main(){
    return main 
  }
}
```
10. Explain what is callback function. Why you can pass a function inside a function?
```js
//because funtion is an expression in js so we can pass a function inside a function?
```