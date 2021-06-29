1. What does thread of execution means in JavaScript?
```js
//In JS, is a synchronous process(one thing at one time by single threaded mechanism), code get exectued line by line from the top.
```
2. Where the JavaScript code gets executed?
```js
//It gets executed in JS engine, which converts the js code into machine code.
```
3. What does context means in Global Execution Context?
```js
// Whenever the JS engine is interpreting the code the execution context is created, In the phase, the context wrap all the js code  and provides the enviornement for the memory/information for the variables and function.
```
4. When do you create a global execution context.
```js
// Whenever the JS engine is interpreting the code the execution context is created, In the phase, the context wrap all the js code  and provides the enviornement for the memory/information for the variables and function.
```
5. Execution context consists of what all things?
```js
//memory and field
```
6. What are the different types of execution context?
```js
//Global execution context and local/function execution context
```
7. When global and function execution context gets created?
```js
//Whenever the JS engine is interpreting the code the global execution context is created,
// When function is invoked, When a function is invoked, a Local Execution Context is created. The responsibility of this context is to parse the called function and return the result to our global environment.
```
8. Function execution gets created during function execution or while declaring a function.
```js
//function execution 
```
9. Create a execution context diagram of the following code on your notebook. Take a screenshot/photo and store it in the folder named `img`. Use `![](./img/image-name.png)` to display it here.



```js
var user = "Arya";

function sayHello(){
  return `Hello ${user}`;
}

var userMsg = sayHello(user);
```

<!-- Put your image here -->

![](./img/image-name.jpg)



```js
var marks = 400;
var total = 500;

function getPercentage(amount, totalAmount){
  return (amount * 100) / totalAmount;
}

var percentageMarks = getPercentage(marks, total);
var percentageProfit = getPercentage(400, 200);
```

<!-- Put your image here -->

![](./img/image-name.jpg)



```js
var age = 21;

function customeMessage(userAge){
  if(userAge > 18){
    return `You are an adult`;
  }else {
    return `You are a kid`;
  }
}

var whoAmI = customeMessage(age);
var whoAmIAgain = customeMessage(12);
```

<!-- Put your image here -->

![](./img/image-name.jpg)