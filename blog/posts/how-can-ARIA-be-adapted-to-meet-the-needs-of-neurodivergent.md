---
date: 2022-06-23
cover_image: https://images.unsplash.com/photo-1634621389197-d5f3b0056861
tags:
  - UX
  - mental-health
  - learning-disabilities
category: UX
published: true
created: 2022-06-22
description: How can ARIA be adapted to meet the needs of everyone? This is a question that has been asked by many, as ARIA is a powerful tool that can help people of all types to improve their reading skills. In this blog post, we will explore some of the ways that ARIA can be adapted to meet the needs of neurodivergent, and we will also discuss some of the benefits that ARIA can provide for people of the future.

excerpt: ARIA is not a standard, but it is supported by all the major browsers. ARIA is also being used more and more in web applications, so it's important to learn how to use it, as well as thinking about how it might evolve in the future.

title: How can ARIA be adapted to meet the needs of neurodivergent?
---

Neurodivergence is a term that refers to the various ways in which people's brains can differ from the "average" brain. This can include things like ADHD, autism, dyslexia, and other conditions. Neurodivergent people often have trouble fitting into traditional education and work environments, as they often do not think or learn in the same way as those who have no trouble fitting into traditional environments (such as the neuro-typical, or non-neurodivergent).

ARIA, which stands for [Accessible Rich Internet Applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), is a set of web development guidelines aimed at making web applications more accessible to people with disabilities. ARIA defines a number of new HTML elements and attributes which can be used to create more accessible user interfaces.

ARIA is not a standard, but it is supported by all the major browsers. ARIA is also being used more and more in web applications, so it's important to learn how to use it, as well as thinking about how it might evolve in the future.

## How can ARIA help people with learning disabilities?

Normally we think of ARIA when we need to make web applications more accessible to people with disabilities who cannot use a mouse or keyboard. After all, ARIA provides a way to interact with web applications using only a keyboard. But ARIA also provides a way to make web applications more accessible to people with disabilities who are blind, have low vision, or even those living with troubles when it comes to focus or cognitive impairments.

Since ARIA provides a way to interact with web applications using only a screen reader, this can be helpful for people with vision issues. But those with learning disabilities do not always have issues with reading due visual problems (often [misunderstood to be one of the causes of reading disorders like dyslexia](https://www.understood.org/en/articles/vision-therapy-and-dyslexia-what-you-need-to-know)). The main weaknesses in individuals with dyslexia have nothing to do with the eyes. Their problems with language and visual representation of word forms in the brain (not in the eyes).

So if you need to improve cognitive support for your app, you also need to consider the [“cognitive accessibility”](https://www.w3.org/WAI/cognitive/).

## COGA Standards

COGA Standards — defined by the [WAI-ARIA Working Group](https://www.w3.org/WAI/ARIA/) — are a set of guidelines for making web applications more accessible to people with disabilities.

Developers and product designers should consider [cognitive accessibility guidance](https://www.w3.org/WAI/WCAG2/supplemental/#cognitiveaccessibilityguidance) be considered when developing ARIA applications. This guidance can help developers create applications that are more accessible to users with cognitive disabilities. The guidance covers a variety of topics, including how to use ARIA roles and attributes, how to create accessible content, and how to design user interfaces that are easy to understand and use.

The following are some unique ways that ARIA can be used to improve the accessibility and usability of web applications:

### 1. ARIA can be used to provide additional information about the page, such as the position or layout

This can be helpful to orient with other information on the page. Giving information about the layout of the page is helpful for people with learning disabilities.

```html
<div role="main-example" class="main">
  <h1>Example</h1>
  <p role="fist-paragraph" aria-label="This is a paragraph">
    This is an example of using ARIA to provide information about the page such
    as layout.
  </p>
  <p role="second-paragraph" aria-label="This is a paragraph">
    This is an another example of using ARIA to provide position information.
  </p>
</div>
```

### 2. ARIA can be used to create complex navigation structures that are accessible to people using screen readers or other assistive technologies

This can help ensure that all users can navigate through web applications with ease. People with learning disabilities can use screen readers to navigate through the web application, and they can use the keyboard to navigate through the web application. For example, if you have a page with a table of contents, you can use ARIA to provide additional information about the table of contents.

```html
<nav role="navigation" aria-label="main navigation">
  <ul>
    <li><a href="#" aria-current="page">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<nav role="navigation" aria-label="table of contents">
  <ul>
    <li><a href="#">Chapter 1</a></li>
    <li><a href="#">Chapter 2</a></li>
    <li><a href="#">Chapter 3</a></li>
  </ul>
</nav>
```

### 3. ARIA can be used to provide additional information about elements on the page, such as the role, state, and properties of an element

This can help people who are using screen readers or other assistive technologies to understand the purpose of an element and its interactions. For example, `aria-pressed` is a button that is pressed. Correctly labeling an element is better for people with learning disabilities who have difficulty understanding the role of an element. Changing the color of the button to indicate that it is pressed is also helpful.

```html
<button
  role="button"
  aria-pressed="false"
  aria-expanded="false"
  aria-controls="example"
  aria-label="Press to expand"
>
  Example
</button>

<div id="example" hidden>
  <p>This is an example.</p>
</div>

<style>
  button[aria-pressed='false'] {
    background-color: #f0f0f0;
  }

  button[aria-pressed='true'] {
    /* background green */
    background-color: #00ff00;
  }
</style>

<!-- change aria label to true -->
<script>
  document.querySelector('button').setAttribute('aria-pressed', 'true');
</script>
```

</style>

### 4. ARIA can be used to create custom interactions and animations that are accessible to people using screen readers or other assistive technologies

This can help ensure that all users can interact with web applications in a way that is comfortable and natural for them. By using ARIA, you can create custom interactions and animations that are accessible to people with disabilities.

```html
<!-- add a progress bar with aria value labels -->
<div
  class="progress-bar"
  role="progressbar"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="100"
>
  0%
</div>

<!-- button to increase progress -->
<button
  role="progress example"
  aria-pressed="false"
  aria-label="Press to increase"
>
  Increase Progress
</button>

<script>
  const progressBar = document.querySelector('.progress-bar');
  const button = document.querySelector('button');

  // increment the progress bar on each click by a factor of 25
  button.addEventListener('click', () => {
    const newValue = parseInt(progressBar.getAttribute('aria-valuenow')) + 25;
    progressBar.setAttribute('aria-valuenow', newValue);
    progressBar.innerHTML = `${newValue}%`;

    // update the width of the progress bar
    progressBar.style.width = `${newValue}%`;

    // change the button to indicate that it is pressed
    button.setAttribute('aria-pressed', 'true');
  });
</script>

<style>
  /* style the progress bar initial state */
  .progress-bar {
    width: 0;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    margin: 10px 0;
  }

  /* style the progress bar when it is pressed */
  button[aria-pressed='false'] {
    background-color: #f0f0f0;
  }

  .progress-bar[aria-valuenow='0'] {
    background-color: #ff0000;
  }

  .progress-bar[aria-valuenow='25'] {
    background-color: #ffa500;
  }

  .progress-bar[aria-valuenow='50'] {
    background-color: #ffff00;
  }

  .progress-bar[aria-valuenow='75'] {
    background-color: #00ffff;
  }

  .progress-bar[aria-valuenow='100'] {
    background-color: #00ff00;
  }
</style>
```

### 5. Aria can be used to manage focus

This can be helpful for people who have trouble deciding which element to focus on. For example, if you have a modal dialog, you can use aria-modal to prevent the user from accessing the rest of the page.

```html
<!-- button to open dialog -->
<button
  class="open-dialog"
  role="button"
  aria-label="Press to open dialog"
  aria-controls="dialog"
  aria-expanded="false"
>
  Open Dialog
</button>

<!-- dialog -->
<div id="dialog" hidden>
  <h1>Example</h1>
  <p>This is an example of using ARIA to manage focus.</p>

  <!-- button to close dialog -->
  <button
    class="close-dialog"
    role="button"
    aria-label="Press to close dialog"
    aria-controls="dialog"
    aria-expanded="false"
  >
    Close Dialog
  </button>
</div>

<!-- script to open dialog -->
<script>
  const openDialog = document.querySelector('.open-dialog');
  const closeDialog = document.querySelector('.close-dialog');
  const dialog = document.querySelector('#dialog');

  openDialog.addEventListener('click', () => {
    dialog.setAttribute('aria-expanded', 'true');
  });

  closeDialog.addEventListener('click', () => {
    dialog.setAttribute('aria-expanded', 'false');
  });

  // close dialog when user clicks outside of it
  dialog.addEventListener('click', () => {
    dialog.setAttribute('aria-expanded', 'false');
  });

  // close dialog when user presses escape
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      dialog.setAttribute('aria-expanded', 'false');
    }
  });
</script>

<style>
  /* style the dialog */
  #dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    height: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  /* style the dialog when it is open */
  #dialog[aria-expanded='true'] {
    display: block;
  }

  /* style the dialog when it is closed */
  #dialog[aria-expanded='false'] {
    display: none;
  }

  /* style the close button */
  .close-dialog {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  /* style the close button when it is pressed */
  .close-dialog[aria-pressed='true'] {
    background-color: #f0f0f0;
  }
</style>
```

> A modal dialog should have an accessible name, announce itself as a dialog, and should provide standard methods for the user to close it. e.g. by a close button, by use of esc key, mouse clicking or tapping outside of the dialog, and ensuring F6 will continue to allow the user to move keyboard focus to the browser’s address bar. [The current state of the modal dialog accessibility](https://www.tpgi.com/the-current-state-of-modal-dialog-accessibility/)

While these examples of features and practices are great to follow today, in the near future ARIA will likely feature an augmented reality-based intervention that is designed to help people with ADHD and other disabilities focus and improve their attention span.

## ARIA: The next generation (augmented reality-based intervention)

Augmented Reality (AR) is an interactive experience that combines digital technology with the real world. This technology has the ability to help people with learning disabilities in a number of ways. For example, it can help them to better understand and remember information. Additionally, AR can help to improve problem-solving skills, communication abilities, and social skills.

Augmented reality can be used to help users interact with digital content in a more intuitive way. For example, a user is trying to read a text on a screen, they can use AR to enlarge the text or to change its color so that it is easier to read. This can be especially helpful for people with vision impairments or learning disabilities who may have difficulty reading text on a screen.

[A virtual or augmented reality component](https://medium.com/dish/hope-for-struggling-readers-early-evidence-from-the-use-of-augmented-reality-c0f9838ce6a3) of ARIA and [COGA](https://www.w3.org/WAI/cognitive/) would allow users to experience different environments and situations that can help improve focus and attention. If you can imagine, a tablet-based application that uses a combination of cognitive stimulation and virtual reality to help people with ADHD improve their focus and attention span.

Augmented reality-based intervention is based on scientific research that has shown that cognitive stimulation and virtual reality can help improve focus and attention in people with ADHD. The games and activities are designed to target the specific cognitive skills that are impaired in people with ADHD. There are many articles on the web about this topic, especially for Augmented reality-based intervention for people with ADHD and for people with learning disabilities — but much of the research examples are [still in progress and concept](https://www.behance.net/gallery/125177007/AR-Application-for-Dyslexia-Detection-Learning?tracking_source=search_projects_recommended%7Cdyslexia)

## Why does it matter? Why is it important? What is the purpose of COGA?

A recent study by Harvard University found that approximately one in five employees in the United States live with a learning disability. This number is significant, and yet many employers still view supporting users with learning disabilities as an edge case. ARIA is not an edge case, and many employees with learning disabilities rely on ARIA to access the web.

ARIA is a tool and COGA is a standard. Today, they are our most modern features designed to make the web accessible to everyone, including users with learning disabilities. Augmented reality could be combined with current browser technologies to make the web even more accessible to people with learning disabilities.

I think it's really important for everyone to be able to use technology, because it's such a huge part of our lives. Technology can help us learn, stay connected with friends and family, and do all sorts of things we wouldn't be able to do without it. I'm excited to help people living with learning disabilities use technology, and I think it's going to be a really rewarding experience. I can't wait to see how technology can help people with learning disabilities to reach their potential!
