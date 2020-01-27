<template>
<div>
  <h1>Visual Hierarchy</h1>

  <p>Visual hierarchy uses different relative sizes and forms of objects on
    a page to draw attention to the most important items. A web designer uses
    visual hierarchy to guide the user toward what they want the user to see
    first.</p>

  <div class="example-wrapper">
    <button v-on:click="toggleVH1()" class="pure-button">Toggle Visual Hierarchy</button>
    <div class="example-container">

      <div class="example-header">
        <p>
          Example
        </p>
      </div>
      <div v-bind:class="{ vh1: vh1}" class="example">
        <h1>CS 260 Web Programming</h1>

        <p>This course covers Web Programming at an introductory level with only CS 142 as
          a prerequisite. You will learn how to write web applications, including both
          front end and back end code. The primary language used will be JavaScript, along
          with HTML and CSS for formatting. The back end code will use Node, Express, and
          a Mongo database. The front end code will use Vue.</p>

        <p>By the end of the semester, you should feel comfortable writing and
          debugging a web application that uses JavaScript on both the front end and
          back end, along with a database and a REST API.</p>

        <p>In addition to pre-defined lab assignments, you will have an opportunity to develop your own web applications through creative projects.</p>

        <h2>Learning Outcomes</h2>
        <ul>

          <li>Use HTML and CSS to design websites that are visually and interactively
            pleasing, by following web design principles.</li>

          <li>Be proficient with JavaScript and several libraries.</li>

          <li>Use a framework to build the front end of a creative JavaScript web
            application that includes login, user input, and communication with a back end
            using a REST API.</li>

          <li>Use Node, Express, and a Mongo database to build the back end of a web
            application that provides a REST API, including user authentication and basic
            create/read/update/delete methods.</li>

          <li>Use Git to manage and collaborate on code.</li>

          <li>Setup a web and database server running on a remote virtual machine
            running Linux and use command line tools to manage the server.</li>

          <li>Register a domain name for your web server and setup separate subdomains
            for each lab and project you create for the class.</li>
        </ul>
      </div>
    </div>
  </div>

  <p>Visual hierarchy can use a variety of characteristics to distinguish
    items, including size, color, contrast, alignment, style, and space.</p>

  <p>Here is a good example of a site that uses all of those elements:</p>
  <img src="/images/fitbit.jpg">

  <h2>Additional Resoures</h2>

  <ul>
    <li><a href="https://www.interaction-design.org/literature/topics/visual-hierarchy">Visual Hierarchy</a></li>
    <li><a href="https://2stallions.com/blog/effective-web-design-principles-visual-hierarchy/">Effective Web Design Principles – Visual Hierarchy</a></li>
    <li><a href="https://www.interaction-design.org/literature/article/visual-hierarchy-organizing-content-to-follow-natural-eye-movement-patterns">Visual Hierarchy: Organizing content to follow natural eye movement patterns</a></li>
  </ul>

</div>
</template>

<script>
export default {
  name: 'visualhierarchy',
  data() {
    return {
      vh1: false,
      vh2: false,
      vh3: false,
      vh4: false
    }
  },
  methods: {
    toggleVH1() {
      this.vh1 = !this.vh1;
    },
    toggleVH2() {
      this.vh2 = !this.vh2;
    },
    toggleVH3() {
      this.vh3 = !this.vh3;
    },
    toggleVH4() {
      this.vh4 = !this.vh4;
    },

  }

}
</script>

<style scoped>
.example {
  padding: 30px;
}

.example h1,
.example h2 {
  font-size: 1em;
  padding: 0px;
  margin: 0px;
  font-weight: normal;
  display: inline;
}

.example p,
.example ul,
.example li {
  padding: 0px;
  margin: 0px;
  display: inline;
}

.example li {
  margin-left: 20px;
}

.vh1 h1,
.vh1 h2 {
  font-size: 2em;
  font-weight: bold;
  display: block;
}

.vh1 h1 {
  background: #8C2066;
  color: white;
  padding: 5px;
  padding-left: 30px;
  margin-left: -31px;
  margin-right: -31px;
}

.vh1 h2 {
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 10px;
}

.vh1 p,
.vh1 ul {
  display: block;
  margin: 10px 0px;
}

.vh1 li {
  display: list-item;
  padding: 8px;
}

.vh1 h1 {
  margin-bottom: 10px;
}
</style>
