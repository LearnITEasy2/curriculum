# 📊 Week 4: Working with Data

Data is everywhere! Whether you’re keeping track of your expenses, managing a to-do list, or storing user information, working with data is an essential skill in programming. This week, we’ll explore lists, dictionaries, and file operations—powerful tools that help us store, organize, and manipulate information efficiently.

## 🔹 Lists: Keeping Things in Order

A list is like a shopping list 🛒—a collection of items stored in a specific order. You can add, remove, or change items in a list as needed.

Example:
```
let shoppingList = ["Apples", "Bananas", "Carrots"];
console.log(shoppingList[0]); // Output: Apples

shoppingList.push("Milk"); // Add an item
console.log(shoppingList); // ["Apples", "Bananas", "Carrots", "Milk"]

shoppingList.pop(); // Remove the last item
console.log(shoppingList); // ["Apples", "Bananas", "Carrots"]
```

📌 Think of a list as a flexible container where you can store multiple values in a specific order.

## 🔹 Dictionaries (Objects): Organizing Information

A dictionary (also called an object in JavaScript) is like a contact list 📞. Instead of just storing values in a row, it keeps key-value pairs, so you can easily look up specific information.

Example:
```
let contact = {
  name: "Alice",
  phone: "123-456-7890",
  email: "alice@email.com"
};

console.log(contact.name); // Output: Alice
console.log(contact["phone"]); // Output: 123-456-7890

contact.address = "123 Main St"; // Adding a new key-value pair
console.log(contact);
```

📌 Dictionaries help structure data in a way that’s easy to retrieve and modify.

## 🔹 Manipulating Data

Once we have data stored in lists or dictionaries, we often need to filter, sort, or transform it.

Example: Sorting a List
```
let numbers = [42, 7, 99, 12];
numbers.sort((a, b) => a - b); // Sorting in ascending order
console.log(numbers); // [7, 12, 42, 99]

Example: Filtering Data in an Object Array

let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 }
];

let passedStudents = students.filter(student => student.grade > 80);
console.log(passedStudents); 
// [{ name: "Alice", grade: 85 }, { name: "Bob", grade: 92 }]
```

📌 Data manipulation allows us to shape and refine our information for better use.

## 🔹 Reading & Writing Files (File I/O)

In real applications, we often store data in files. In Node.js, we use the fs module to read and write files.

Writing to a File
```
const fs = require('fs');

fs.writeFileSync("example.txt", "Hello, this is some text!");
console.log("File written successfully!");
```
Reading from a File
```
let data = fs.readFileSync("example.txt", "utf-8");
console.log(data); // Output: Hello, this is some text!
```
📌 File I/O is crucial for storing data persistently.

## 📝 Your Turn! (Exercises)

🔹 Create a list of your favorite movies and print the second item.
🔹 Create a dictionary with details about yourself (name, age, favorite hobby) and print one piece of information.
🔹 Write a simple text file and read its contents using Node.js.

💡 Working with data is the backbone of software development! Understanding how to store, retrieve, and modify information efficiently will set you up for success. 🚀

✨ What real-life examples of lists and dictionaries can you think of? Drop them in the comments! 💬 #LearnToCode #JavaScript #DataHandling