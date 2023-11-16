<template>
  <div>
    <h1>Typography</h1>

    <p>
      Typography includes every aspect of web design that makes text easy to read. This includes
      choosing the typeface, font size, line spacing, letter spacing, and width of a text block.
    </p>

    <p>
      Avoid long lines in paragraphs of text. A good rule of thumb is to keep the line length to
      between 40 and 60 characters.
    </p>

    <div class="example-wrapper">
      <button v-on:click="toggleTP1()" class="pure-button">Toggle Typography</button>
      <div class="example-container">
        <div class="example-header">
          <p>Example</p>
        </div>
        <div v-bind:class="{ tp1: tp1 }" class="example">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>

          <h1>Main Header</h1>

          <h2>Secondary Header</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>

    <p>
      One good place to get free fonts for web design is
      <a href="https://fonts.google.com/">Google Fonts</a>. You can find a font that you want, add
      it to your cart, choose different weights, and then copy the link you'll need to add the
      font(s) to your site. The link should go in the <code>head</code> element, with your CSS
      files.
    </p>

    <img src="/images/google-fonts.png" />

    <p>
      Consider the following example of typography. Examine the font family and size used for the
      motto and the headings below. Notice the selection of fonts and sizes for the brand, menu
      items, and other text of the page, and how these contrast with each other.
    </p>

    <img src="/images/bluepixel.jpg" />

    <p>
      A good rule of thumb is to use only 1 to 3 fonts in your web design, to avoid confusing users
      with too many styles.
    </p>

    <p>
      The example below use a minimalistic design, with clear hierarchy established by font sizes,
      borders, and white space.
    </p>

    <img src="/images/four32c.png" />

    <h2>Additional Resoures</h2>

    <ul>
      <li><a href="https://practicaltypography.com/">Butterick's Practical Typography</a></li>
      <li>
        <a href="https://www.webfx.com/blog/web-design/the-basics-of-typography/"
          >The Basics of Typography</a
        >
      </li>
      <li><a href="https://typographyhandbook.com/">Typography Handbook</a></li>
      <li>
        <a
          href="https://medium.com/plan-of-attck/12-beautiful-examples-of-web-typography-30749d8256a4"
          >12 Beautiful Examples of Web Typography</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'typography',
  data() {
    return {
      tp1: false,
      tp2: false,
      tp3: false,
      tp4: false
    }
  },
  methods: {
    toggleTP1() {
      this.tp1 = !this.tp1
    },
    toggleTP2() {
      this.tp2 = !this.tp2
    },
    toggleTP3() {
      this.tp3 = !this.tp3
    },
    toggleTP4() {
      this.tp4 = !this.tp4
    }
  }
}
</script>

<style scoped>
img {
  max-width: 600px;
}

.example-wrapper {
  width: 900px;
}

.example {
  padding: 30px;
}

.example h1,
.example h2 {
  font-size: 1em;
  padding: 0px;
  margin: 0px;
  font-weight: normal;
}

.example ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  margin-bottom: 30px;
  padding: 5px;
}

.example li {
  color: white;
}

.example li {
  margin-left: 20px;
}

.example p {
  max-width: 900px !important;
}

.tp1 h1 {
  font-size: 2em;
  font-weight: bold;
  display: block;
}

.tp1 h1 {
  font-family: 'Lora';
  margin-bottom: 10px;
}

.tp1 h2 {
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Lora';
}

.tp1 li {
  font-family: 'Raleway';
}

.tp1 p {
  font-family: 'Raleway';
  width: 600px;
}
</style>
