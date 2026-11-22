How to execute the programs:
1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Run each JavaScript file using:
node task1.js
node task2.js
node task3.js


task1.js:
Explanation:
1.	calculateResult() is a regular function that accepts marks and returns Pass or Fail.
2.	displayResult() is an arrow function that displays the learner's name and result.
3.	The learners array stores the names and marks of four learners.
4.	The for...of loop processes each learner one by one.
5.	The if...else statement checks whether the learner has scored 50 or above.


task2.js
Explanation:
1.	forEach() – Iterates through the array and prints the details of every student.
2.	map() – Creates a new array containing only the names of the students.
3.	filter() – Creates a new array containing students who scored 80 or above.


Task 3: Asynchronous JavaScript 
Question: 
1.	Explain the concept of Asynchronous JavaScript and describe the purpose of Callbacks, Promises, and Async/Await in handling asynchronous operations.
Asynchronous JavaScript allows a program to perform time-consuming operations without blocking the execution of other code.
For example:
•	Fetching data from a server.
•	Reading files.
•	Calling APIs.
JavaScript can continue executing other tasks while waiting for these operations to complete.

2.	 Explain what a Callback is and how it is used in asynchronous operations. 
ANSWER:
A callback is a function passed as an argument to another function. 
Callbacks are commonly used to handle asynchronous operations.



2. Explain what a Promise is and describe its three states: Pending, Fulfilled, and Rejected. 
ANSWER:
A Promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation.
A Promise has three states:
1.	Pending: The operation is still in progress.
2.	Fulfilled: The operation has completed successfully.
3.	Rejected: The operation has failed.

4.	Explain how Async/Await is used to handle Promises. 

Async/Await is a modern way of handling asynchronous operations in JavaScript using Promises.
async is used to declare an asynchronous function.
await is used inside an async function to wait for a Promise to settle before continuing execution.
It makes asynchronous code easier to read and understand.

4. Mention one advantage of using Async/Await compared with traditional callbacks. 
The main advantage of using Async/Await is that it makes asynchronous code easier to read, understand, and maintain. Async/Await provides a cleaner and simpler structure that looks similar to normal synchronous code. It also allows easy error handling using try...catch.