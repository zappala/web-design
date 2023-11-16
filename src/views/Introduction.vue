<template>
  <div>
    <h1>Introduction</h1>

    <p>This site discusses the following web design principles:</p>

    <div class="cards">
      <div class="card">
        <h2>White Space</h2>
        <p>
          White space is the space <em>between</em> things on a page. Balancing positive (white)
          space and negative (non-white) space helps provide an aesthetic look and enhances
          usability by making it easier to find objects on the page.
        </p>
      </div>

      <div class="card">
        <h2>Visual Hierarchy</h2>

        <p>
          Visual hierarchy creates different relative sizes and forms of objects on a page, to draw
          attention to the most important items. A web designer uses visual hierarchy to guide the
          user toward what they want the user to see first.
        </p>
      </div>

      <div class="card">
        <h2>Typography</h2>

        <p>
          Typography includes every aspect of web design that makes text easy to read. This includes
          choosing the typeface, font size, line spacing, letter spacing, and width of a text block.
        </p>
      </div>

      <div class="card">
        <h2>Navigation</h2>

        <p>
          It should be easy to find things on a web site. Navigation helps a user locate information
          easily, regardless of which page it is on.
        </p>
      </div>

      <div class="card">
        <h2>Color</h2>

        <p>
          Color is tied to the brand of a website and also helps create a mood or emotion for the
          site.
        </p>
      </div>

      <div class="card">
        <h2>Alignment</h2>

        <p>
          Alignment of items on a website, such as text blocks and images, conveys a sense of
          professionalism and also makes the site appealing.
        </p>
      </div>

      <div class="card">
        <h2>Responsive Design</h2>

        <p>
          A responsive design enables people to get the full benefit of your website regardless of
          whether they are browsing on a phone, tablet, or computer.
        </p>
      </div>
    </div>

    <router-link class="pure-button" to="/whitespace" tag="button">Continue</router-link>
  </div>
</template>

<script>
export default {
  name: 'introduction'
}
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 33%;
  border: 1px solid #aaa;
  padding: 10px;
  background-color: #eee;
  margin-bottom: 30px;
  margin-right: 30px;
}

.card:not(:last-child) {
}
</style>
