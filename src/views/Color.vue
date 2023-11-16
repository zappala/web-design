<template>
  <div>
    <h1>Color</h1>

    <p>
      Color can help establish both the brand and the mood of your website. Often a company or
      organization will establish a particular color scheme that is recognizeable as connected to
      their brand over time. Color can also establish mood -- consider the difference between a dark
      gray versus a bright yellow.
    </p>

    <p>
      Color can often be difficult for beginners to get right. A good way to avoid a bad design is
      to start with black and white. Then choose 2 or 3 colors to create a style for the website and
      add them in sparingly. You might, for example, choose a color for a site header, or for text
      headings or buttons. Shades of gray can also be effective and work with any color.
    </p>

    <div class="example-wrapper">
      <button v-on:click="toggleTP1()" class="pure-button">Toggle Color</button>
      <div class="example-container">
        <div class="example-header">
          <p>Example</p>
        </div>
        <div v-bind:class="{ tp1: tp1 }" class="example">
          <div class="menu">
            <ul>
              <li>Home</li>
              <li>Clothing</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Cart</li>
            </ul>
          </div>
          <div class="heading">
            <img class="white" src="/images/child.png" />
            <img class="black" src="/images/child-black.png" />
            Anna's Place
          </div>

          <div class="products">
            <div class="product">
              <h2>Fancy Nancy Shoes</h2>
              <img src="/images/shoes1.jpg" />
            </div>
            <div class="product">
              <h2>Denim Jeans Shoes</h2>
              <img src="/images/shoes2.jpg" />
            </div>
            <div class="product">
              <h2>Rocket Dog Shoes</h2>
              <img src="/images/shoes3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <p>
      The below is a wonderful example taken from
      <a href="https://www.smashingmagazine.com/2016/04/web-developer-guide-color/"
        >an article by Laura Elizabeth in Smashing Magazine</a
      >:
    </p>

    <div class="example-wrapper">
      <button v-on:click="toggleTP2()" class="pure-button">Toggle Color</button>
      <div class="example-container">
        <div class="example-header">
          <p>Example</p>
        </div>
        <div v-bind:class="{ tp2: tp2 }" class="example">
          <div class="examples">
            <img class="gray" src="/images/color-in-practice-gray.jpg" />
            <img class="color" src="/images/color-in-practice.jpg" />
          </div>
        </div>
      </div>
    </div>

    <h2>Additional Resoures</h2>

    <ul>
      <li>
        <a href="https://www.smashingmagazine.com/2016/04/web-developer-guide-color/"
          >A Simple Web Developer’s Color Guide</a
        >
      </li>
      <li>
        <a href="https://getflywheel.com/layout/website-color-schemes/"
          >Website Color Schemes: Theory, practice, and inspiration</a
        >
      </li>
      <li>
        <a
          href="https://thenextweb.com/dd/2015/04/07/how-to-create-the-right-emotions-with-color-in-web-design/"
          >Web design color theory: how to create the right emotions with color in web design</a
        >
      </li>
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
.example-wrapper {
  width: 900px;
}

.example {
  padding: 30px;
}

.example h1 {
  font-size: 2em;
  font-weight: bold;
  display: block;
  font-family: 'Lora';
  margin-bottom: 10px;
}

.example .menu {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.example ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.example li {
  padding: 0px;
}

.example .active {
  background: #8c2066;
}

.example .heading {
  display: flex;
  justify-content: center;
  height: 100px;
  background: #fff;
  color: black;
  text-align: center;
  font-size: 3em;
  font-family: 'Amatic SC';
  line-height: 100px;
  margin-bottom: 50px;
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

.example .icon {
  display: none;
}

.white {
  display: none;
}

.tp1 .heading {
  background: #e53e36;
  color: white;
}

.tp1 .white {
  display: block;
}

.tp1 .black {
  display: none;
}

.example p {
  max-width: 900px !important;
}

.examples img {
  width: 900px;
}

.example .gray {
  display: block;
}

.example .color {
  display: none;
}

.tp2 .gray {
  display: none;
}

.tp2 .color {
  display: block;
}

.example img {
  -webkit-filter: grayscale(100%);
  /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.tp1 img,
.tp2 img {
  -webkit-filter: none;
  /* Safari 6.0 - 9.0 */
  filter: none;
}
</style>
