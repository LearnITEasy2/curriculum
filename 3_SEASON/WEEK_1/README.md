![](./it-nauryz.png)

# 🌍 Week 1: HTML - Structuring the Web

## 🏗️ What is HTML?

HTML (HyperText Markup Language) is the skeleton of every webpage. It structures content using tags and elements. Think of it like Lego blocks—each block (tag) has a purpose, and when combined, they form a complete webpage.

## 🏠 Understanding HTML Tags & Elements

Tags are the building blocks of HTML. Most tags come in pairs:

✅ Opening tag: `<tag>`
✅ Closing tag: `</tag>`
❌ Some are self-closing, like `<br>` (line break) or `<img>` (image).

## 🔹 Basic HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Blog</h1>
    <p>This is my first webpage. I love learning HTML!</p>
</body>
</html>
```

✅ Everything inside `<html>` is part of the webpage.
✅ `<head>` contains metadata and the title of the page.
✅ `<body>` contains all visible content.

## 🏆 Commonly Used HTML Tags

### 📝 Text & Headings

Tag	Purpose	Example
| Tag       | Purpose       | Example                           |
|-----------|---------------|-----------------------------------|
| `<h1> - <h6>` | Headings      | `<h1>Main Title</h1>`            |
| `<p>`     | Paragraph     | `<p>This is a paragraph.</p>`     |
| `<strong>`| Bold text     | `<strong>Important text</strong>` |
| `<em>`    | Italic text   | `<em>Emphasized text</em>`        |

👉 Example:
```html
<h1>Welcome to My Blog</h1>
<h2>Introduction</h2>
<p>This is an <strong>important</strong> topic about HTML.</p>
```
### 🔗 Links & Navigation

Tag	Purpose	Example
| Tag   | Purpose             | Example                                                |
|-------|---------------------|--------------------------------------------------------|
| `<a>` | Link                | `<a href="https://example.com">Visit Website</a>`      |
| `<nav>` | Navigation Section | `<nav><a href="home.html">Home</a></nav>`              |

👉 Example:
```html
<a href="https://google.com" target="_blank">Go to Google</a>
```

✅ target="_blank" opens the link in a new tab.

### 🖼️ Images & Media

Tag	Purpose	Example
| Tag     | Purpose | Example                                           |
|---------|---------|---------------------------------------------------|
| `<img>` | Image   | `<img src="image.jpg" alt="A beautiful view">`    |
| `<video>`| Video  | `<video src="video.mp4" controls></video>`        |

👉 Example:
```html
<img src="cat.jpg" alt="A cute cat" width="300">
```

✅ alt="..." describes the image for accessibility.
✅ width="300" sets the image width.

### 📋 Lists (Great for Menus & Blogs!)

Tag	Purpose	Example
| Tag   | Purpose        | Example                      |
|-------|----------------|------------------------------|
| `<ul>` | Unordered List | `<ul><li>Item 1</li></ul>`   |
| `<ol>` | Ordered List   | `<ol><li>Step 1</li></ol>`   |

👉 Example:
```html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
</ul>
```

✅ Use `<ul>` for bullet points and `<ol>` for numbered lists.

### 🏛️ Tables (Used for Organizing Data)

Tag	Purpose	Example
| Tag     | Purpose    | Example                                |
|---------|------------|----------------------------------------|
| `<table>` | Table      | `<table><tr><td>Data</td></tr></table>` |
| `<tr>`    | Table Row  | `<tr>...</tr>`                         |
| `<td>`    | Table Cell | `<td>Value</td>`                       |

👉 Example:
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
</table>
```

✅ Use `<th>` for headers and `<td>` for data cells.

### 🎨 Attributes - Adding Extra Details to Tags

Attributes give extra information about an element. They go inside the opening tag.

Example Attributes:

Attribute	Purpose	Example
| Attribute | Purpose             | Example                                      |
|-----------|---------------------|----------------------------------------------|
| `href`    | URL for links       | `<a href="https://example.com">Visit</a>`    |
| `src`     | Image/video source  | `<img src="image.jpg">`                      |
| `alt`     | Image description   | `<img src="cat.jpg" alt="A cute cat">`       |
| `id`      | Unique element ID   | `<h1 id="title">Hello</h1>`                  |
| `class`   | Group elements      | `<p class="intro">Welcome</p>`               |
| `style`   | Inline styling      | `<p style="color:red;">Red text</p>`         |

👉 Example:

```html
<a href="https://example.com" target="_blank" title="Click to visit">Visit Example</a>
```

✅ title="..." shows a tooltip when hovering over the link.


### 📦 Divs & Sections – Structuring Your Webpage

Not all HTML elements are about content—some help with layout and structure.

🔹`<div>` – A Generic Container

A `<div>` (short for division) is like a box that groups elements together. It’s mainly used for styling and layout control.

🔹 Example:
```html
<div style="background-color: lightgray; padding: 10px;">
    <h2>My Blog</h2>
    <p>Welcome to my blog! Here I share my thoughts on coding.</p>
</div>
```
✅ The `<div>` groups the heading and paragraph together and adds background color & padding.

🛠 Practical Use Case – Div as a Layout Block
```html
<div class="header">
    <h1>My Website</h1>
</div>

<div class="content">
    <p>This is the main content of the page.</p>
</div>

<div class="footer">
    <p>Contact: me@example.com</p>
</div>
```
✅ The `<div>` elements separate header, content, and footer, making it easier to style with CSS later.

🔸 `<section>` – Organizing Content

A `<section>` is similar to a `<div>`, but more meaningful. It groups content that is thematically related.

🔹 Example:
```html
<section>
    <h2>About Me</h2>
    <p>I'm a web developer who loves coding!</p>
</section>

<section>
    <h2>Projects</h2>
    <p>Check out my latest web projects.</p>
</section>
```
✅ Why use `<section>` instead of `<div>`?
	•	Div is a generic container, mainly for layout.
	•	Section is for semantic structure, making content easier to understand.

📊 Div vs. Section – When to Use?

Feature	`<div>`	`<section>`
Purpose	General layout grouping	Meaningful content grouping
Used for?	Styling, structure	Thematic sections of a page
SEO Benefit?	No impact	Helps search engines understand page structure
Example Use	Grouping navbar items	Blog post sections

🚀 Best practice: Use `<section>` when your content is related (like sections of an article), and `<div>` when you just need layout grouping.

🎯 Exercise Time!

💡 Task: Create a simple web page using:
✅ A `<div>` to group a header and footer
✅ A `<section>` for content areas

👨‍💻 How to Test?
	1.	Copy and paste this into a .html file.
	2.	Open it in your browser!
```html
<!DOCTYPE html>
<html>
<head>
    <title>Div & Section Example</title>
</head>
<body>

    <div style="background-color: #333; color: white; padding: 10px;">
        <h1>Welcome to My Website</h1>
    </div>

    <section>
        <h2>About Me</h2>
        <p>I love coding and teaching others.</p>
    </section>

    <section>
        <h2>My Projects</h2>
        <p>Check out my work in web development!</p>
    </section>

    <div style="background-color: #333; color: white; padding: 10px;">
        <p>Contact: me@example.com</p>
    </div>

</body>
</html>
```
🚀 Keep going! Next, we’ll style these sections using CSS to make them look amazing! 🎨✨

### 🎯 Exercise Time!

💡 Task: Create a simple blog post page using:
✅ A heading (`<h1>`)
✅ A paragraph (`<p>`)
✅ An image (`<img>`)
✅ A list (`<ul>` or `<ol>`)
✅ A link (`<a>`)

### 📌 Bonus: Add an attribute to make the link open in a new tab!

👨‍💻 How to Test?
	1.	Open Notepad++, VS Code, or any text editor.
	2.	Save the file as blog.html.
	3.	Open it in your browser to see your webpage in action! 🎉

💡 Keep Going!

HTML is the foundation, but web pages need style too! 🎨

🚀 Next Week: CSS – Styling the Web! Stay tuned! 🎨✨