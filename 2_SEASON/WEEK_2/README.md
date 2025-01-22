🌟 Season 2: Programming Fundamentals 🌟

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

## Part 2: Writing and Running Your First JavaScript Script

Now that your environment is set up, let's write and run your first JavaScript script. We will start with a simple example and then make it a little more complex by adding user interaction and dynamic page updates.

### Step 1: Creating an HTML File

JavaScript typically works in conjunction with HTML. Let's create a simple HTML file that will load and run our JavaScript code.

1. Open VSCode.
2. Create a new file and save it with the `.html` extension, for example, `index.html`.
3. Insert the following code into the file:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My First JavaScript</title>
   </head>
   <body>
       <h1>Welcome to the World of JavaScript!</h1>
       <p id="message">The result will be displayed here.</p>

       <script src="script.js"></script>
   </body>
   </html>
   ```

   This code creates an HTML page with a title and a paragraph where the JavaScript output will appear.

### Step 2: Writing JavaScript Code

Now, let's create the JavaScript file.

1. In VSCode, create a new file and save it as `script.js` in the same folder as your HTML file.
2. Insert the following code into `script.js`:

   ```javascript
   // Ask for the user's name
   const name = prompt("What is your name?");
   
   // Get the current date and time
   const date = new Date();
   const hours = date.getHours();
   let greeting;

   // Create a greeting based on the time of day
   if (hours < 12) {
       greeting = "Good morning";
   } else if (hours < 18) {
       greeting = "Good afternoon";
   } else {
       greeting = "Good evening";
   }

   // Display the personalized message on the page
   const messageElement = document.getElementById("message");
   messageElement.textContent = `${greeting}, ${name}! The current time is: ${date.toLocaleTimeString()}`;
   ```

   This code does the following:
   1. Asks the user for their name using `prompt`.
   2. Determines the time of day and creates the corresponding greeting.
   3. Changes the text of the element with id `message` on the page to display the personalized greeting and the current time.

### Step 3: Running the Script

Now let's run the script.

1. Open the `index.html` file in your browser.
2. Open the developer tools (press **F12** or right-click and select **Inspect**).
3. Go to the **Console** tab. You won't see any messages in the console because we're displaying the result directly on the page, but you will see the personalized greeting and the current time displayed on the page.

When you open the page, the browser will prompt you for your name, and then display a message like:

```console
Good morning, John! The current time is: 10:30:15
```

Congratulations, you've just written a more complex JavaScript script!

## Conclusion

In this lecture, we set up your development environment, installed the necessary tools, and wrote a simple JavaScript program. You learned how to work with HTML and JavaScript, and how to run code in the browser. This is just the beginning, and in the next lecture, we will dive deeper into more advanced JavaScript concepts.


-------------------------------------------------------------------------------------------


# Лекция: Начало работы с JavaScript

## Часть 1: Настройка вашего рабочего окружения

Перед тем как начать писать код на JavaScript, нам нужно настроить рабочее окружение для удобства и эффективности. Пройдемся по всем шагам, чтобы подготовить все необходимое для начала.

### Шаг 1: Установка текстового редактора

Для написания JavaScript-кода вам нужен текстовый редактор. Это может быть простой редактор, например, Notepad++ или более сложный, как Visual Studio Code (VSCode). Мы будем использовать VSCode, так как он бесплатный, мощный и удобный.

1. Перейдите на сайт [Visual Studio Code](https://code.visualstudio.com/).
2. Нажмите кнопку **Download for Windows** (или для вашей операционной системы).
3. После загрузки откройте файл и следуйте инструкциям на экране, чтобы установить VSCode.

### Шаг 2: Установка Node.js

Node.js — это среда выполнения JavaScript, которая позволяет запускать JavaScript на вашем компьютере, а не только в браузере. Это особенно полезно для разработки серверных приложений. Мы будем использовать Node.js для запуска скриптов на вашем компьютере.

1. Перейдите на сайт [Node.js](https://nodejs.org/).
2. Нажмите кнопку **LTS** (она будет рекомендована для большинства пользователей).
3. После загрузки откройте установочный файл и следуйте инструкциям на экране.
4. Чтобы проверить, что Node.js установлен правильно, откройте командную строку или терминал и введите команду:

   ```cli
   node -v
   ```

   Если установка прошла успешно, вы увидите номер версии Node.js.

### Шаг 3: Проверка и настройка браузера

Ваш браузер также будет важной частью разработки на JavaScript, так как мы будем запускать JavaScript-скрипты в браузере. Убедитесь, что у вас установлен современный браузер, например, Google Chrome, Mozilla Firefox или Microsoft Edge. Мы будем использовать инструменты разработчика, которые есть в каждом из этих браузеров. Эти инструменты позволяют вам просматривать, отлаживать и анализировать ваш код непосредственно в браузере.

#### Как открыть инструменты разработчика:

1. **Google Chrome**:
   - Нажмите правой кнопкой мыши на странице и выберите **Inspect** (или **Просмотр кода**).
   - Либо используйте горячие клавиши: **F12** или **Ctrl + Shift + I** (для Windows) или **Cmd + Option + I** (для Mac).

2. **Mozilla Firefox**:
   - Нажмите правой кнопкой мыши на странице и выберите **Inspect** (или **Просмотр кода**).
   - Либо используйте горячие клавиши: **F12** или **Ctrl + Shift + I** (для Windows) или **Cmd + Option + I** (для Mac).

3. **Microsoft Edge**:
   - Нажмите правой кнопкой мыши на странице и выберите **Inspect** (или **Просмотр кода**).
   - Либо используйте горячие клавиши: **F12** или **Ctrl + Shift + I** (для Windows) или **Cmd + Option + I** (для Mac).

#### Вкладка "Console" (Консоль)

После того как вы открыли инструменты разработчика, перейдите на вкладку **Console**. Здесь будет отображаться весь вывод JavaScript-кода, который вы пишете. Например, если вы используете команду `console.log()`, результат будет выведен в эту консоль.

- **Вывод сообщений**: Консоль отображает сообщения, которые выводятся с помощью `console.log()`, `console.error()` или других подобных функций.
- **Ошибки**: Если ваш код содержит ошибки, они будут отображаться здесь. Это очень полезно для отладки.
- **Ввод команд**: Вы также можете вводить JavaScript-команды напрямую в консоль, чтобы проверить их выполнение без необходимости обновлять страницу.

#### Вкладка "Elements" (Элементы)

На вкладке **Elements** вы можете увидеть структуру HTML вашего сайта. Это полезно для того, чтобы убедиться, что ваши изменения в DOM (например, изменения текста на странице с помощью JavaScript) были применены правильно.

- Вы можете кликать по элементам в HTML-дереве и смотреть, какие изменения происходят на странице в реальном времени.
- Также на этой вкладке вы можете изменять HTML-код и стили прямо в браузере, чтобы быстро увидеть, как это влияет на отображение страницы.

#### Вкладка "Network" (Сеть)

Вкладка **Network** позволяет отслеживать все сетевые запросы, которые делает ваш сайт. Это полезно, если ваш сайт загружает данные с серверов (например, с помощью AJAX-запросов).

## Часть 2: Написание и запуск вашего первого скрипта на JavaScript

Теперь, когда ваше окружение настроено, давайте напишем и запустим наш первый JavaScript-скрипт. Мы начнем с простого примера, а затем сделаем его немного сложнее, добавив взаимодействие с пользователем и динамическое изменение страницы.

### Шаг 1: Создание HTML-файла

JavaScript обычно работает в связке с HTML. Давайте создадим простой HTML-файл, который будет загружать и запускать наш JavaScript-код.

1. Откройте VSCode.
2. Создайте новый файл и сохраните его с расширением `.html`, например, `index.html`.
3. Вставьте следующий код в файл:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My First JavaScript</title>
   </head>
   <body>
       <h1>Добро пожаловать в мир JavaScript!</h1>
       <p id="message">Здесь будет выводиться результат.</p>

       <script src="script.js"></script>
   </body>
   </html>
   ```

   Этот код создаёт HTML-страницу с заголовком и параграфом, в котором будет отображаться результат работы JavaScript.

### Шаг 2: Написание JavaScript-кода

Теперь создадим файл для JavaScript.

1. В VSCode создайте новый файл и сохраните его с именем `script.js` в той же папке, где находится ваш HTML-файл.
2. Вставьте следующий код в `script.js`:

   ```javascript
   // Запрашиваем имя пользователя
   const name = prompt("Как вас зовут?");
   
   // Получаем текущую дату и время
   const date = new Date();
   const hours = date.getHours();
   let greeting;

   // Формируем приветствие в зависимости от времени суток
   if (hours < 12) {
       greeting = "Доброе утро";
   } else if (hours < 18) {
       greeting = "Добрый день";
   } else {
       greeting = "Добрый вечер";
   }

   // Выводим персонализированное сообщение на страницу
   const messageElement = document.getElementById("message");
   messageElement.textContent = `${greeting}, ${name}! Текущее время: ${date.toLocaleTimeString()}`;
   ```

   Этот код делает следующее:
   1. Запрашивает имя пользователя с помощью `prompt`.
   2. Определяет текущее время суток и создает соответствующее приветствие.
   3. Меняет текст в элементе с id `message` на странице, добавляя персонализированное приветствие и текущее время.

### Шаг 3: Запуск скрипта

Теперь давайте запустим наш скрипт.

1. Откройте файл `index.html` в вашем браузере.
2. Откройте инструменты разработчика (нажмите **F12** или правой кнопкой мыши выберите **Inspect**).
3. Перейдите на вкладку **Console**. Вы не увидите никаких сообщений в консоли, потому что мы выводим результат прямо на страницу, но вы увидите, как на странице появится персонализированное приветствие с текущим временем.

Когда вы откроете страницу, браузер запросит ваше имя с помощью окна `prompt`, а затем отобразит сообщение вроде:

```console
Доброе утро, Иван! Текущее время: 10:30:15
```

Поздравляю, вы только что создали более сложный скрипт на JavaScript!

## Заключение

В этой лекции мы настроили ваше рабочее окружение, установили необходимые инструменты и написали простую программу на JavaScript. Вы научились работать с HTML и JavaScript, а также запускать код в браузере. Это только начало, и в следующей лекции мы будем углубляться в более сложные концепции JavaScript.