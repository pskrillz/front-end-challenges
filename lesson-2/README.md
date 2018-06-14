# Lesson 2: CSS, Styling, and Layout

Now that we understand HTML, Elements, and basic positioning, we can move on to working with CSS and styling/layout. 

_If you have content from `lesson-1` you can use that within the `<body>` tag instead of the provided content._

### Requirements

- We first need to differentiate content sections for our HTML Markup and organize things a bit.
- Create an element `<section>` that will encapsulate the `ABOUT ME`, `STRENGTHS`, and `EXPERIENCE` content areas. Add a class attribute to the `<section>` and give it a value of "main".
- Create an element `<aside>` that will encapsulate the `CONTACT` and `SOCIAL MEDIA` content areas. Add a class attribute to the `<aside>` and give it a value of "sidebar".
- Move the _first_ `<p>` that contains the image into the top of the `<aside>` above `CONTACT` and add comment code around it to indicate that it is its own content area.
- Lastly wrap a `<div>` section around the `<section>` and `<aside>` elements. Add a class attribute to the `<div>` and give it a value of "wrapper".

Your current DOM tree should look close to this: 

```
> BODY 
    > DIV (class="wrapper)
        > SECTION (class="main")
            > H1
            > P
            > H2
            > UL
                > LI
                > LI
                > LI
            > H2
            > OL
                > LI
                > LI
                > LI
        > ASIDE (class="sidebar")
            > P
                > IMG
            > P
            > ADDRESS
            > P
            > DIV

```

- Use the in document CSS `<style></style>` in the head to add styles for now. 
- Using the class selector for the wrapper `<div>`, add a `background-color` property and give it a value of `lightcyan`.
- Using the class selector for the main `<section>`, add a `background-color` property and give it a value of `lightgoldenrodyellow`.
- Using the class selector for the sidebar `<aside>`, add a `background-color` property and give it a value of `lightgreen`.
- On the sidebar class selector, give it a property of `border` and give it a value of `2px solid red`.
- Give the wrapper selector a margin property value of 20px.
- Give the wrapper selector a padding property value of 10px.
- Give the main selector a padding property value of 15px.
- Give the sidebar selector a padding property of 15px.
- On the wrapper clss selector, give it a display property value of `flex`.
- Using what you know of flexbox, align the main section content to the left and the sidebar aside section to the right of that.
- The `<section>` element should take up `3/4` of the alloted viewport width and must use flexbox properties to style this.
- The `<aside>` element should take up `1/4` of the alloted viewport width and must use flexbox properties to style this.
- Change the flexbox container background-color property to: `#FDFEFE`. 
- Change the left child flexbox item background-color property to: `#FBFEF2`.
- Change the right child flexbox item background-color property to: `ECF0F6`. 
- Change the right child flexbox item border property to: `1px dotted #000`.
- When everything is complete, move all the styles from your `<style>` tag and add them to `/css/main.css` and include it as an external stylesheet to `index.html`.
- **EXTRA:** Add additional styles to other elements on the page. Use CSS properties you have not used, consult the [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) for ideas. 
- **EXTRA:** Add classes to two existing elements, and style those.

### Key Concepts

- **CSS:** Stands for Cascading Style Sheets. A language used to program the visual appearance of HTML elements.
- **Rule:** A block of CSS that details particular stylistic instructions to be applied to an HTML element.
- **Selector:** The part of a CSS rule that determines which HTML elements the rule applies to.
- **Property:** The characteristic a CSS rule is altering. (For example, color, or font-size).
- **Value:** The attribute a CSS rule is applying to the specified property.
- **Box model:** A model that shows the properties of how the space around an element is assigned and manipulated with CSS.
- **Inheritance:** The process by which children elements share the properties of their parent elements.
- **Specificity:** In the instance that two styles conflict, the style that is applied will be the most specific of the two. For example, a style for a paragraph tag would not be applied if there was a style for a link within a paragraph. The link within the paragraph reference is more specific than paragraph.
- **Inline style:** Style that is added directly into the HTML for an element. Inline styling takes precedence over styling in your CSS files. It is not considered good practice to style HTML this way.
- **External Stylesheets:** A stylesheet that is linked to an HTML document and lives externally. 

## Links 

- [HTML Content Sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning)
- [CSS-Tricks: What is the DOM?](https://css-tricks.com/dom/)
- [Codepen: DOM Tree Visualizer](https://codepen.io/khoadnguyen/pen/EEGmvw)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_modelm)
- [CSS-Tricks: Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)