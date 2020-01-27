<template>
<div>
  <h1>Responsive Design</h1>

  <p>Users will visit your website from many different types of devices, each
    with different screen resolutions. Responsive design covers the techniques
    needed to ensure that each device can display the website, with no loss in
    content, though the arrangement of the content on the page may differ. A brief
    illustration of this idea is shown below.</p>

  <div class="example-wrapper" v-bind:class="{ tp1: tp1 }">
    <button v-on:click="toggleTP1()" class="pure-button">Toggle Responsive Design</button>
    <div class="example-container">

      <div class="example-header">
        <p>
          Example
        </p>
      </div>
      <div class="example">
        <div class="heading">
          <h1>Header</h1>
        </div>
        <div class="area">
          <h1>Content</h1>
        </div>
        <div class="features">
          <div class="feature1">
            <h1>Feature 1</h1>
          </div>
          <div class="feature2">
            <h1>Feature 2</h1>
          </div>
          <div class="feature3">
            <h1>Feature 3</h1>
          </div>
        </div>
        <div class="footer">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  </div>

  <p>CSS provides a number of features to create responsive designs:</p>

  <ul>

    <li><a href="https://internetingishard.com/html-and-css/flexbox/">Flexbox</a>
      provides the ability to control how elements are laid out in one
      direction (horizontally or vertically), with overflow to allow wrapping across
      multiple rows or columns.</li>

    <li><a href="https://learncssgrid.com/">Grid</a> provides the ability to
      control how elements are laid out in a two-dimensional grid, with a variety
      of features. The <a href="https://gridbyexample.com/examples/">Grid By
        Example</a> site is a helpful reference for design alternatives. The
      <a href="http://cssgridgarden.com/">Grid Garden</a> is an interactive learning
      tool for CSS Grid.</li>

    <li><a href="https://internetingishard.com/html-and-css/responsive-design/">CSS
        media queries</a> enable you to build responsive designs by modifying flexbox
      or grid arrangements for different screen resolutions. </li>

    <li>CSS frameworks, such as <a href="https://getbootstrap.com/">Bootstrap</a> and <a href="https://purecss.io/">Pure CSS</a> provide responsive grid systems.
      Essentially, you mark up your code with some CSS classes, and then the
      framework arranges it automatically for different screen resolutons.</li>
  </ul>

  <p>If you are stuck knowing when to use Flexbox vs Grid, a few good articles
    include <a href="https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf">The
      ultimate CSS battle: Grid vs Flexbox</a> by Per Harald Borgen and <a href="https://tutorialzine.com/2017/03/css-grid-vs-flexbox">CSS Grid VS
      Flexbox: A Practical Comparison</a> by Danny Markov.</p>

  <h2>Additional Resoures</h2>

  <ul>
    <li><a href="https://internetingishard.com/html-and-css/responsive-design/">Responsive Design</a></li>
    <li><a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive">Responsive Web Design Basics</a></li>
    <li><a href="https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/">Bottom Navigation Pattern On Mobile Web Pages: A Better Alternative?</a></li>

  </ul>

</div>
</template>

<script>
export default {
  name: 'navigation',
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
      this.tp1 = !this.tp1;
    },
    toggleTP2() {
      this.tp2 = !this.tp2;
    },
    toggleTP3() {
      this.tp3 = !this.tp3;
    },
    toggleTP4() {
      this.tp4 = !this.tp4;
    },

  }

}
</script>

<style scoped>
.example-wrapper {
  width: 300px;
}

.example {
  padding: 30px;
}

.example h1 {
  font-size: 1.5em;
  font-weight: bold;
  display: block;
  font-family: 'Lora';
  margin-bottom: 10px;
}

.example div {
  text-align: center;
  font-family: 'Amatic SC';
  line-height: 50px;
  margin: 0px;
}

.example .heading {
  background: #B7D6FB;

}

.example .area {
  background: #EAEDF0;
}

.feature1 {
  background: #F0CF96;
}

.feature2 {
  background: #E59E9F;
}

.feature3 {
  background: #C7C7F6;
}

.footer {
  background: #ccc;
}


.p1 {
  padding-top: 40px;
}

.p2 {
  padding-top: -10px;
}

.p3 {
  padding-top: 20px;
}

.heading img {
  height: 100px;
}

.product img {
  height: 200px;
}


.example .products {
  display: flex;
}

.example .product:not(:last-child) {
  padding-right: 30px;
}

.example .product h2 {
  font-size: 1.2em;
}

.tp1 {
  width: 900px;
}

.tp1 .features {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.tp1 .features div {
  width: 33%;
  line-height: 100px;
}
</style>
