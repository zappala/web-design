<template>
  <div>
    <h1>White Space</h1>

    <p>
      Web design carefully uses white space (also called negative space) between elements to help
      people process the material on a page. When elements are crammed together, it makes it
      difficult for your brain to focus on what the page contains. Good use of space makes a page
      more user friendly.
    </p>

    <div class="example-wrapper">
      <button v-on:click="togglePadding1()" class="pure-button">Toggle White Space</button>
      <div class="example-container">
        <div class="example-header">
          <p>Example</p>
        </div>
        <div v-bind:class="{ padding1: padding1 }" class="example">
          <h1>Example Heading</h1>
          <div class="inset">
            <img src="/images/lake.jpg" />

            <p>
              I took a trip past this lake once, on my way to Colorado. We passed it in early
              morning, as the sun came up and some fog was clearing away.
            </p>
          </div>
        </div>
      </div>
    </div>

    <p>You should carefully select spacing for all elements of page design:</p>

    <ul>
      <li>page structure: headers, footers, main content area, sidebar</li>
      <li>navigation: between and around menu items</li>
      <li>content: images, paragraphs, videos, lists, etc.</li>
    </ul>

    <div class="example-wrapper">
      <button v-on:click="togglePadding2()" class="pure-button">Toggle White Space</button>
      <div class="example-container">
        <div class="example-header">
          <p>Example</p>
        </div>
        <div v-bind:class="{ padding2: padding2 }" class="example">
          <h1>White Space</h1>
          <p>I want to make some important points:</p>
          <ul>
            <li>White space helps make text more readable.</li>
            <li>White space can users locate what they want more quickly.</li>
            <li>White space needs careful balance among elements.</li>
          </ul>
        </div>
      </div>
    </div>

    White space doesn't have to be white; it just needs to be empty.

    <div class="example-wrapper">
      <button v-on:click="togglePadding3()" class="pure-button">Toggle White Space</button>
      <div class="example-container">
        <div class="example-header">
          <p>Example</p>
        </div>
        <div v-bind:class="{ padding3: padding3 }" class="example">
          <div class="colorful">
            <img src="/images/lake.jpg" />
            <img src="/images/horses.jpg" />
            <img src="/images/beach.jpg" />
          </div>
        </div>
      </div>
    </div>

    <div class="example-wrapper">
      <button v-on:click="togglePadding4()" class="pure-button">Toggle White Space</button>
      <div class="example-container">
        <div class="example-header">
          <p>Example</p>
        </div>
        <div v-bind:class="{ padding4: padding4 }" class="example">
          <div class="brand">
            <img src="/images/flower.png" />
            <h1>Anna's Place</h1>
          </div>
        </div>
      </div>
    </div>

    <h2>Additional Resoures</h2>

    <ul>
      <li>
        <a href="https://www.interaction-design.org/literature/article/the-power-of-white-space"
          >The power of white space
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'whitespace',
  data() {
    return {
      padding1: false,
      padding2: false,
      padding3: false,
      padding4: false
    }
  },
  methods: {
    togglePadding1() {
      this.padding1 = !this.padding1
    },
    togglePadding2() {
      this.padding2 = !this.padding2
    },
    togglePadding3() {
      this.padding3 = !this.padding3
    },
    togglePadding4() {
      this.padding4 = !this.padding4
    }
  }
}
</script>

<style scoped>
.inset {
  display: flex;
}

.example h1 {
  font-size: 1em;
  padding: 0px;
  margin: 0px;
}

.example li {
  margin-left: 20px;
}

.inset img {
  width: 600px;
  object-fit: contain;
  align-self: flex-start;
}

.inset p {
  flex: 1 1 auto;
}

.colorful {
  display: flex;
  justify-content: space-between;
  background-color: #000;
}

.colorful img {
  width: 300px;
}

.brand {
  background-color: #8c2066;
  color: white;
  width: 900px;
  height: 400px;
}

.brand p {
}

.brand h1 {
  font-family: 'Indie Flower';
  font-size: 4em;
}

.padding1,
.padding2 {
  padding: 30px;
}

.padding1 h1,
.padding2 h1 {
  margin-bottom: 10px;
}

.padding1 p {
  padding-left: 30px;
}

.padding2 ul {
  padding: 10px 0px;
}

.padding2 li {
  margin-left: 30px;
  padding: 8px 0px;
}

.padding3 img:not(:first-child) {
  padding-left: 30px;
}

.padding3 .colorful {
  padding: 30px;
}

.padding4 .brand {
  display: flex;
  justify-content: center;
  line-height: 400px;
}

.padding4 img {
  margin-top: 140px;
  margin-right: 50px;
  height: 100px;
}

.padding4 p {
  font-size: 5em;
}

.padding4 h1 {
  font-family: 'Indie Flower';
}
</style>
