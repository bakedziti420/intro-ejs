<!--I think doing this as a catch-up activity is the right way to do it -->
<!--WDI5 9:02 -->

# Intro to EJS

Today we will introduce EJS: a tool that will save you time and DRY out your code by allowing you to use the power of Javascript inside your HTML views.  Let's get started!

## Getting started

Inside the starter-code folder is some HTML generated by concatenating a whole bunch of HTML strings together.  Wouldn't it be great if we could make this HTML appear without creating a giant string and appending it to our page?  Well we can, with EJS!

Before we get into the app itself, you will want to install the `EJS` package with Sublime.  Do you remember how to do this?

<details>
  <summary>Click here for a hint...</summary>
  You will need to enter `CMD + Shift + p` then type `Install Package`, select the `Package Control: Install Package` option, and then type `EJS`.  Select that option, then quit and reopen Sublime Text.
</details>

## Directions

1. First, we need to install the `express` and `ejs` packages with `npm install`.  
2. Now, take a look at `localhost:3000` to see what we're trying to build.
<!--WDI5 9:11 -->
3. To pull this messy string out of our app, we should create a `class.ejs` file.  Creating an EJS file will allow us to bring the power of JS into an HTML template.
4. Let's put our first line of HTML, the `title` property, into our new `class.ejs` file.
  - It should look like this: `<h1><%= title %></h1>`
  - **Note:** `<%= ... %>` means "execute JS and print out the result" in EJS
<!--WDI5 9:17 -->
5. Now, let's hook it up to our app!
  - First, comment out the unwieldy `html` string in `app.js`.
  - Next, we will replace the string with our EJS rendering.
  - It should look like this: `ejs.renderFile('./views/class.ejs', data, function(err,str) {html = str;});`
  - **Note:** `str` is the result of converting the EJS to pure HTML.
<!--WDI5 9:26 -->
6. Finally, let's let the power of EJS really fly by utilizing our friend, the `for` loop, *inside* our `class.ejs` file, to print out all our class supplies.  Use the commented-out `html` string for inspiration.  It should look like this:
```html
  <ul>
    <% for(var i=0; i<supplies.length; i++) { %>
      <li>
        <a href='supplies/<%= supplies[i] %>'>
          <%= supplies[i] %>
        </a>
      </li>
    <% } %>
  </ul>
```

<!--WDI5 9:37 -->

**Note:** `<% ... %>` means "execute JS and **do not** print out the result" in EJS
