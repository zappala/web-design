<template>
<div>
  <h1>Alignment</h1>

  <p>Alignment is used to organize and group elements, such as text blocks and images,
    to provide a clean look and to make it easier to find objects on the page. Use
    flexbox, grid, or a framework like Bootstrap to create a basic, column-oriented
    layout.</p>

  <div class="example-wrapper">
    <button v-on:click="toggleTP1()" class="pure-button">Toggle Alignment</button>
    <div class="example-container">

      <div class="example-header">
        <p>
          Example
        </p>
      </div>
      <div v-bind:class="{ tp1: tp1}" class="example">
        <div class="menu">
          <ul>
            <li class="m1">Home</li>
            <li class="m2">Clothing</li>
            <li class="m3">Shoes</li>
            <li class="m4">Accessories</li>
            <li class="m5">Cart</li>
          </ul>
        </div>
        <div class="heading">
          <img class="white" src="/images/child.png">
          Anna's Place
        </div>

        <div class="products">
          <div class="product p1">
            <h2>Fancy Nancy Shoes</h2>
            <img src="/images/shoes1.jpg">
          </div>
          <div class="product p2">
            <h2>Denim Jeans Shoes</h2>
            <img src="/images/shoes2.jpg">
          </div>
          <div class="product p3">
            <h2>Rocket Dog Shoes</h2>
            <img src="/images/shoes3.jpg">
          </div>
        </div>

      </div>
    </div>
  </div>

  <h2>Additional Resoures</h2>

  <ul>
    <li><a href="https://254-online.com/alignment-principle-design/">Alignment Principle Of Design</a></li>
    <li><a href="https://tympanus.net/codrops/2012/06/19/line-that-up-proper-alignment-in-web-design/">Line That Up: Proper Alignment in Web Design</a></li>
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

.example .m1 {
  padding-top: 10px;
}

.example .m2 {
  padding-top: -10px;
}

.example .m3 {
  padding-top: 20px;
}

.example .m4 {
  padding-top: -5px;
}

.example .m5 {
  padding-top: 10px;
}

.example .active {
  background: #8C2066;
}

.example .heading {
  display: flex;
  justify-content: center;
  height: 100px;
  background: #E53E36;
  color: white;
  text-align: center;
  font-size: 3em;
  font-family: 'Amatic SC';
  line-height: 100px;
  margin-bottom: 50px;
}


.example .heading {
  justify-content: right;
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

.example .icon {
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

.tp1 .m1,
.tp1 .m2,
.tp1 .m3,
.tp1 .m4,
.tp1 .m5 {
  padding: 0px;
}

.tp1 .heading {
  justify-content: center;
}

.tp1 .p1,
.tp1 .p2,
.tp1 .p3 {
  padding: 0px;
}

.tp1 .product:not(:last-child) {
  padding-right: 30px;
}

.tp2 .gray {
  display: none;
}

.tp2 .color {
  display: block;
}
</style>
