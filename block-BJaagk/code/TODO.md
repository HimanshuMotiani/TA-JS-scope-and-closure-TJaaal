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
 Function definition is a procedure where execution code is written to achieve a result and function call using the function to achieve the task

7. What is the similarities between function definition and function call?


8. Is the code below valid or invalid. Explain with reason.

```js
function hello() {
  console.log('Hello World!');
}

hello.user = 'Sam'; // valid or invalid
```

9. What is higher order function explain with an example.
```js
///Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.
```
10. Explain what is callback function. Why you can pass a function inside a function?
