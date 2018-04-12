# Lesson 4: DOM Traversal, DOM manipulation, and Javascript Interactivity

Now that we have a basic page with external styles, we can add interactivity. This is where Javascript comes into play.

If you have content from `lesson-2` you can use that within the `<body>` tag instead of the provided content.

### Requirements

- Review DOM: Understanding Concepts.
- Notice that the Javascript is at the bottom of the page now, vs the top and that it is external now vs. on the document. This is because the html has to fully load before the JS can interact with it.

**Task: 1**
- Traverse the DOM to find a `<a>` element.
- Use that element: add a `title` attribute.

**Task: 2**
- Find an array of list elements from the `<ul>`.
- Add a class to the _second_ list(`<li>`) element using javascript.

**Task: 3**
- Add a new `<div>` element tag at the bottom of the `<section>` with the class `main` and give it an id of `text-modify`.
- Traverse the DOM and utilize one of the [Core Interfaces of the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#Important_Data_Types) to add HTML content to the `text-modify` element.

**Task: 4**
- Add a button that `onClick` will call a show/hide toggle function.
- From that function using JS, add a style attribute of display `block`/`none` to toggle on and off when the function is runs.

**Task: 5**
- Add a new button with an `id` of `alert` under your current one in the HTML with an `alert` function that displays the text: "Thank you for viewing my resume!". The button text can be whatever you'd like. 
- **EXTRA:** Add an additional button with an `onClick` function that will add a class `"clicked"` to the parent DOM elment (`section` or `aside` depending on where the button is). From within the CSS for the `"clicked"` selector, add a property that will give it a `background-color` of red. 

### Key Concepts

- The Document Object Model, or DOM, is your browser's interpretation of the HTML it reads. When JavaScript changes the page, it updates the DOM, not the HTML.

## Links 

- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [CSS-Tricks: What is the DOM?](https://css-tricks.com/dom/)