# Week 2: Getting Started with JavaScript
![](./js_getting_started.png)

## Part 1: Setting up your development environment

Before you start writing JavaScript code, we need to set up the development environment for convenience and efficiency. Let's go through all the steps to prepare everything you need to get started.

### Step 1: Installing a Text Editor

To write JavaScript code, you need a text editor. It can be a simple editor like Notepad++ or something more complex like Visual Studio Code (VSCode). We will use VSCode because it's free, powerful, and user-friendly.

1. Go to the [Visual Studio Code](https://code.visualstudio.com/) website.
2. Click the **Download for Windows** button (or for your operating system).
3. After downloading, open the file and follow the on-screen instructions to install VSCode.

### Step 2: Installing Node.js

Node.js is a JavaScript runtime that allows you to run JavaScript on your computer, not just in the browser. It's especially useful for developing server applications. We will use Node.js to run scripts on your computer.

1. Go to the [Node.js](https://nodejs.org/) website.
2. Click the **LTS** button (recommended for most users).
3. After downloading, open the installer and follow the on-screen instructions.
4. To check if Node.js is installed correctly, open the command line or terminal and enter the command:

   ```cli
   node -v
   ```

   If the installation was successful, you will see the version number of Node.js.

### Step 3: Checking and Setting Up Your Browser

Your browser will also play an important role in JavaScript development since we will run JavaScript scripts in the browser. Make sure you have a modern browser installed, such as Google Chrome, Mozilla Firefox, or Microsoft Edge. We will use the developer tools available in each of these browsers. These tools allow you to view, debug, and analyze your code directly in the browser.

#### How to open Developer Tools:

1. **Google Chrome**:
   - Right-click on the page and select **Inspect**.
   - Or use the shortcut keys: **F12** or **Ctrl + Shift + I** (Windows) or **Cmd + Option + I** (Mac).

2. **Mozilla Firefox**:
   - Right-click on the page and select **Inspect**.
   - Or use the shortcut keys: **F12** or **Ctrl + Shift + I** (Windows) or **Cmd + Option + I** (Mac).

3. **Microsoft Edge**:
   - Right-click on the page and select **Inspect**.
   - Or use the shortcut keys: **F12** or **Ctrl + Shift + I** (Windows) or **Cmd + Option + I** (Mac).

#### "Console" Tab

Once you've opened the developer tools, go to the **Console** tab. This is where all the output of the JavaScript code you write will appear. For example, if you use the `console.log()` command, the result will be displayed in this console.

- **Message output**: The console shows messages output by `console.log()`, `console.error()`, and other similar functions.
- **Errors**: If your code contains errors, they will be displayed here, which is very useful for debugging.
- **Command input**: You can also type JavaScript commands directly into the console to test them without needing to refresh the page.

#### "Elements" Tab

In the **Elements** tab, you can see the HTML structure of your website. This is useful for ensuring that your changes to the DOM (e.g., changing text on the page via JavaScript) have been applied correctly.

- You can click on elements in the HTML tree and see how changes are reflected on the page in real-time.
- You can also edit HTML code and styles directly in the browser to see how they affect the page's appearance.

#### "Network" Tab

The **Network** tab allows you to track all network requests made by your site. This is useful if your site is loading data from servers (e.g., via AJAX requests).

## Part 2: Differences Between Node.js and Browser JavaScript Engines

Before we start writing code, it’s helpful to understand how JavaScript works in the **browser** and in **Node.js**, as these two environments have different characteristics. Understanding these differences will help you better understand what you can and cannot do in each of them.

### **1. Environment and Purpose**

- **JavaScript in the Browser**:
  - **What is it?** JavaScript in the browser runs on web pages, like the ones you open in a browser (e.g., Chrome, Firefox, or Safari). It allows interaction with the content of the page: changing text, images, or responding to user actions like clicks.
  - **Examples of Use**:
    - Updating text or images on the page without reloading the site.
    - Validating form data (e.g., checking if an email is entered correctly).
    - Sending requests to the server to fetch data without reloading the page (e.g., using **AJAX** or **Fetch API**). We will cover this in more detail in later lessons.
  
- **Node.js**:
  - **What is it?** Node.js is an environment for running JavaScript outside of the browser. It is used for server-side work, not on a webpage. Node.js allows you to write server-side code that can handle user requests, work with files on your computer, manage databases, and much more.
  - **Examples of Use**:
    - Creating web servers that can handle user requests.
    - Working with files: reading and writing data on the server.
    - Handling requests from users via APIs (e.g., sending and receiving data from a server).

## Part 3: Writing and Running Your First JavaScript Script

Now that your environment is ready, let’s write and run your first JavaScript script. Today, we will work with code outside the browser, that is, in **Node.js**.

### Step 1: Launch Visual Studio Code (VS Code).

### Step 2: Creating a New Project and File for the Script

1. **Creating a New Folder for the Project**:
   - Create a folder on your computer where you will store all your JavaScript files. For example, name it "JavaScript_Projects".
   - In **VS Code**, select **File** -> **Open Folder** and choose this folder.

2. **Creating a New JavaScript File**:
   - In **VS Code**, click on **File** -> **New File**.
   - In the new window that opens, write your JavaScript code.
   - Save the file: **File** -> **Save As**. Choose a file name (e.g., `app.js` or `script.js`) and make sure the file extension is **.js**.

### Step 3: Writing Your First JavaScript Script

1. **Creating a Simple Script**:
   - Write the code that you want to run. For starters, use the following code to display a message:

     ```javascript
     console.log("Hello, World!");
     ```

2. **Save the File**:
   - After writing the code, don’t forget to save the file by pressing **Ctrl + S** (Windows) or **Cmd + S** (Mac).

### Step 4: Running the Script via the Terminal in VS Code

1. **Opening the Terminal in VS Code**:
   - Go to the **Terminal** menu -> **New Terminal**. This will open the terminal at the bottom of the screen, already set to your current folder where the file is located.

2. **Running the JavaScript File with Node.js**:
   - In the terminal, type the command to run your JavaScript file using **Node.js**. For example, if you saved the file as `app.js`, type the following command:

     ```bash
     node app.js
     ```

3. **Viewing the Result**:
   - You should see the result of the program’s execution in the terminal. It will look like this:

     ```
     Hello, World!
     ```

Congratulations, you just created your first JavaScript script!

### Step 5: Experimenting with Code

1. **Adding New Examples**:
   - After running the first example, you can create a new file for each new example. It’s recommended to name the files according to their content. For example, for logical operators, create a file named `logical_operators.js`.

2. **Example with Data Types**:
   - Create a new file, for example, `data_types.js`, and paste the following code:

     ```javascript
     let greeting = "Hello, World!";
     let age = 25;
     let isActive = true;
     let colors = ["red", "green", "blue"];

     console.log("Message: " + greeting);
     console.log("Age: " + age);
     console.log("Is user active? " + isActive);
     console.log("Favorite colors: " + colors.join(", "));
     ```

   - **Exercise for Students**:
     1. Change the value of the `age` variable to your real age.
     2. Add a new element to the `colors` array and output the updated array.
   - Save the file and run it via the terminal using the command:

     ```bash
     node data_types.js
     ```

3. **Example with Logical Operators**:
   - Create a new file, for example, `logical_operators.js`, and add the following code:

     ```javascript
     let age = 20;
     let hasPermission = true;

     // Using the AND (&&) operator
     if (age >= 18 && hasPermission) {
         console.log("Access granted");
     } else {
         console.log("Access denied");
     }

     // Using the OR (||) operator
     let isStudent = false;
     if (age < 18 || isStudent) {
         console.log("You can get a discount");
     } else {
         console.log("Discount not available");
     }

     // Using the NOT (!) operator
     let isActive = true;
     if (!isActive) {
         console.log("User is inactive");
     } else {
         console.log("User is active");
     }
     ```

   - **Exercise for Students**:
     1. Try changing the values of the variables and see how it affects the output of the program.
     2. Create a new example with logical operators to check age and access.
   - Save the file and run it:

     ```bash
     node logical_operators.js
     ```

4. **Example with Comparison Operators**:
   - Create a new file, for example, `comparison_operators.js`, and use the following code:

     ```javascript
     let a = 10;
     let b = 20;

     if (a == b) {
         console.log("a is equal to b");
     } else {
         console.log("a is not equal to b");
     }

     if (a === "10") {
         console.log("a is strictly equal to '10'");
     } else {
         console.log("a is not strictly equal to '10'");
     }

     if (a < b) {
         console.log("a is less than b");
     }
     ```

   - **Exercise for Students**:
     1. Try changing the values of `a` and `b` and see how it affects the comparison.
     2. Use different data types in comparison operators and observe the results.
   - Save the file and run it:

     ```bash
     node comparison_operators.js
     ```

5. **Example with Conditional Statements (if/else)**:
   - Create a new file, for example, `conditionals.js`, and add the following code:

     ```javascript
     let score = 75;

     if (score >= 90) {
         console.log("Excellent!");
     } else if (score >= 70) {
         console.log("Good");
     } else if (score >= 50) {
         console.log("Satisfactory");
     } else {
         console.log("Failed");
     }
     ```

   - **Exercise for Students**:
     1. Try changing the `score` variable and see what the program outputs.
     2. Create your own example with grades using conditional statements.
   - Save the file and run it:

     ```bash
     node conditionals.js
     ```

6. **Example with Loops (for and while)**:
   - Create a new file, for example, `loops.js`, and insert the following code:

     ```javascript
     let fruits = ["apple", "banana", "cherry", "orange"];

     // for loop to iterate over the array
     for (let i = 0; i < fruits.length; i++) {
         console.log(fruits[i]);
     }

     // while loop
     let count = 0;
     while (count < 5) {
         console.log("Counter: " + count);
         count++;
     }
     ```

   - **Exercise for Students**:
     1. Create an array with different products and use the `for` loop to output all the elements of the array.
     2. Change the condition in the `while` loop to output the counter from 5 to 10.
   - Save the file and run it:

     ```bash
     node loops.js
     ```