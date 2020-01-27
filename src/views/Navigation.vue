<template>
<div>
  <h1>Navigation</h1>

  <p>It should be easy to find things on a web site. Navigation helps a user
    locate information easily, regardless of which page it is on.</p>

  <p>Some important tips:</p>

  <ul>
    <li>Use plain language that anyone can understand.</li>

    <li>Use meangful choices on buttons: "Get Started" or "No Thanks" instead
      of "OK" and "Cancel"</li>

    <li>Use conventional navigation locations -- top and/or left sides of
      the page.</li>

    <li>Secondary navigation should be clearly distinguishable from primary navigation.</li>

    <li>For large sites, use breadcrumbs to help the user know where they are.</li>
  </ul>

  <div class="example-wrapper">
    <button v-on:click="toggleTP1()" class="pure-button">Toggle Navigation</button>
    <div class="example-container">

      <div class="example-header">
        <p>
          Example
        </p>
      </div>
      <div v-bind:class="{ tp1: tp1}" class="example">
        <div class="menu">
          <ul>
            <li>Home</li>
            <li class="active">Products</li>
            <li>Contact</li>
          </ul>

          <div class="content">
            <h1>Products</h1>
            <div class="menu2">
              <ul>
                <li><img class="icon" src="/images/right-down.png"> </li>
                <li>Mens</li>
                <li>Womens</li>
                <li class="active">Children</li>
              </ul>
            </div>

            <div class="products">
              <div class="product">
                <h2>Fancy Nancy Shoes</h2>
                <img src="/images/shoes1.jpg">
              </div>
              <div class="product">
                <h2>Denim Jeans Shoes</h2>
                <img src="/images/shoes2.jpg">
              </div>
              <div class="product">
                <h2>Rocket Dog Shoes</h2>
                <img src="/images/shoes3.jpg">
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  </div>

  <h2>Additional Resoures</h2>

  <ul>
    <li><a href="https://www.butterfly.com.au/blog/design/10-steps-for-better-website-navigation">10 steps for better website navigation</a></li>
    <li><a href="https://www.smashingmagazine.com/2011/06/planning-and-implementing-website-navigation/">Website Navigation – Planning And Implementing</a></li>
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
img {
  max-width: 600px;
}

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
  flex-direction: row-reverse;
}

.example ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-bottom: 30px;
  width: 100px;
}

.example li {
  padding-bottom: 5px;
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

.example .content {
  width: 800px;
}

.products img {
  height: 150px;
}

.tp1 .menu {
  display: flex;
  flex-direction: column;
}

.tp1 ul {
  display: flex;
  flex-direction: row;
  background-color: #333;
  margin-bottom: 30px;
  width: 100%;
}

.tp1 li {
  color: white;
  padding: 0px;
  padding: 10px;
}

.tp1 .active {
  background: #8C2066;
}

.tp1 .menu2 ul {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 30px;
  width: 100%;
}

.tp1 .menu2 li {
  color: black;
  padding: 0px;
  text-decoration: underline;
}

.tp1 .menu2 .active {
  color: #8C2066;
  background: #fff;
  font-weight: bold;
}

.tp1 .icon {
  display: block;
  width: 30px;
  margin-top: -5px;
}

.example li {
  margin-left: 20px;
}

.example p {
  max-width: 900px !important;
}
</style>
