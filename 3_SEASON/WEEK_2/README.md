![](image.png)
# 👩‍💻 Week 2: CSS – Styling the Web  
*#css #frontend #webdevelopment*

Last week, you created your first web page using HTML. But let’s be honest—HTML on its own looks like something from the early 2000s 😅  
It’s time to add *style* and bring your page to life! Welcome to **CSS** — the language that makes your websites beautiful.

---

## 🌟 What is CSS?

CSS stands for **Cascading Style Sheets**. While HTML defines the structure of a webpage (headings, paragraphs, images), **CSS defines the presentation**—how those elements *look*.

You can use CSS to:
- Set colors and backgrounds 🎨
- Choose fonts and text styles ✍️
- Add spacing, borders, and alignment 📐
- Create layouts and responsive designs 🧱

---

## 🧩 How to Apply CSS?

There are **3 main ways to add CSS to your webpage**:

### 1. Inline styles — added directly to HTML elements  
👉 Use only for quick testing. Not recommended for real projects.
```html
<h1 style="color: red;">Hello World!</h1>
```

2. Internal CSS — written inside `<style>` in the HTML file

👉 Good for small projects or examples.

```html
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```

3. External CSS file — best practice ✅

👉 Keeps styling separate and reusable.

In index.html:
```html
<link rel="stylesheet" href="styles.css">
```
In styles.css:
```css
h1 {
  color: green;
}
```

🎨 Core CSS Concepts

✅ Selectors

They define what you are styling.
	•	h1, p, div — tag selectors
	•	.className — class selector
	•	#idName — ID selector

Example:
```css
/* Select all paragraphs */
p {
  font-size: 16px;
}
```
✅ Properties & Values

These define how to style something.

Example:
```css
body {
  background-color: #f0f0f0; /* light gray background */
  color: #333;              /* dark text color */
}
```
✏️ Typography and Text Styling
```css
p {
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: justify;
}
```
You can use:
	•	font-family: Sets the font
	•	font-size: Size in pixels, rem, or %
	•	font-weight: normal, bold, etc.
	•	text-align: left, right, center, justify

🌈 Colors and Backgrounds
```css
body {
  background-color: #ffffff;
  color: #111111;
}

button {
  background-color: #4CAF50;  /* green */
  color: white;
}
```
You can use:
	•	Named colors: red, blue
	•	Hex codes: #FF5733
	•	RGB/rgba: rgba(0,0,0,0.5)

📐 Box Model: Margin, Padding, and Border

Every element is a box. Here’s how it works:
```
+--------------------------+
|        Margin            |
|  +--------------------+  |
|  |     Border         |  |
|  |  +--------------+  |  |
|  |  |   Padding    |  |  |
|  |  |  +--------+  |  |  |
|  |  |  | Content | |  |  |
|  |  |  +--------+  |  |  |
|  |  +--------------+  |  |
|  +--------------------+  |
+--------------------------+
```
Example:
```css
.card {
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}
```
🧱 Layout Basics

✅ Centering Content
```css
.container {
  width: 600px;
  margin: 0 auto; /* centers horizontally */
}
```
✅ Flexbox (modern layout tool)
```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

Flexbox makes it easy to build responsive, aligned layouts.

🧠 Summary

CSS lets you transform a plain HTML page into something that feels modern, readable, and your own.
You now know how to:
	•	Add styles using different methods
	•	Use color, fonts, spacing, and layout tools
	•	Organize content visually

📚 Homework
	1.	Create an HTML page with:
	•	A title and 2–3 paragraphs of text
	•	An image and a button
	2.	Add a separate CSS file and style:
	•	Background color and font
	•	Headings (color, font-size)
	•	Paragraph spacing and alignment
	•	Image (add border or shadow)
	•	Button (hover effect, padding)
	3.	Bonus challenge 💡:
	•	Use Flexbox to align items side by side
	•	Add a container with a border and padding

Play with colors and layouts, and start making your page yours 🎨