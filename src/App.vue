<template>
  <div id="app">
    <div id="layout" :class="{ active: activeMenu }">
      <!-- Menu toggle -->
      <a
        @click="toggleMenu()"
        href="#menu"
        id="menuLink"
        class="menu-link"
        :class="{ active: activeMenu }"
      >
        <!-- Hamburger icon -->
        <span></span>
      </a>

      <div id="menu" :class="{ active: activeMenu }">
        <div class="pure-menu">
          <div class="pure-menu-heading">
            <p>Web Design<br />Principles</p>
          </div>

          <ul class="pure-menu-list">
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/" exact>Home</router-link>
            </li>
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/introduction">Introduction</router-link>
            </li>
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/whitespace">White Space</router-link>
            </li>
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/visualhierarchy"
                >Visual Hierarchy</router-link
              >
            </li>
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/typography">Typography</router-link>
            </li>
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/navigation">Navigation</router-link>
            </li>
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/color">Color</router-link>
            </li>
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/alignment">Alignment</router-link>
            </li>
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/responsivedesign"
                >Responsive Design</router-link
              >
            </li>
            <li class="pure-menu-header">Examples</li>
            <li class="pure-menu-item">
              <router-link class="pure-menu-link" to="/atlantic">The Atlantic</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div id="main">
        <div id="content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: true
    }
  },
  methods: {
    toggleMenu() {
      this.activeMenu = !this.activeMenu
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}

body {
  color: #2c3e50;
}

.pure-img-responsive {
  max-width: 100%;
  height: auto;
}

/*
  Add transition to containers so they can push in and out.
  */
#layout,
#menu,
.menu-link {
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

/*
  This is the parent `<div>` that contains the menu and the content area.
  */
#layout {
  position: relative;
  left: 0;
  padding-left: 0;
}

#layout.active #menu {
  left: 150px;
  width: 150px;
}

#layout.active .menu-link {
  left: 150px;
}

/*
  The content `<div>` is where all your content goes.
  */
.content {
  margin: 0 auto;
  padding: 0 2em;
  max-width: 800px;
  margin-bottom: 50px;
  line-height: 1.6em;
}

.header {
  margin: 0;
  color: #333;
  text-align: center;
  padding: 2.5em 2em 0;
  border-bottom: 1px solid #eee;
}

.header h1 {
  margin: 0.2em 0;
  font-size: 3em;
  font-weight: 300;
}

.header h2 {
  font-weight: 300;
  color: #ccc;
  padding: 0;
  margin-top: 0;
}

.content-subhead {
  margin: 50px 0 20px 0;
  font-weight: 300;
  color: #888;
}

/*
  The `#menu` `<div>` is the parent `<div>` that contains the `.pure-menu` that
  appears on the left side of the page.
  */

#menu {
  margin-left: -150px;
  /* "#menu" width */
  width: 158px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  /* so the menu or its navicon stays above all content */
  background: #191818;
  background: #353732;
  background: #fff;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
  box-shadow: 0px 10px 0px 0px #888888;
}

/*
      All anchors inside the menu should be styled like this.
      */
#menu a {
  /* color: white; */
  border: none;
  padding: 0.6em 0 0.6em 0.6em;
}

/*
      Remove all background/borders, since we are applying them to #menu.
      */
#menu .pure-menu,
#menu .pure-menu ul {
  border: none;
  background: transparent;
}

/*
      Add that light border to separate items into groups.
      */
#menu .pure-menu ul,
#menu .pure-menu .menu-item-divided {
}

/*
          Change color of the anchor links on hover/focus.
          */
#menu .pure-menu li a:hover,
#menu .pure-menu li a:focus {
}

/*
      This styles the selected menu item `<li>`.
      */
#menu .router-link-active,
#menu .pure-menu-heading {
  background: #1f8dd6;
  color: #fff;
}

#menu .router-link-active:hover,
#menu .router-link-active:focus {
  color: #fff !important;
}

/*
          This styles a link within a selected menu item `<li>`.
          */
#menu .router-link-active a {
}

/*
      This styles the menu heading.
      */
#menu .pure-menu-heading {
  font-size: 110%;
  color: #fff;
  margin: 0;
  margin-bottom: 30px;
}

/* -- Dynamic Button For Responsive Menu -------------------------------------*/

/*
  The button to open/close the Menu is custom-made and not part of Pure. Here's
  how it works:
  */

/*
  `.menu-link` represents the responsive menu toggle that shows/hides on
  small screens.
  */
.menu-link {
  position: fixed;
  display: block;
  /* show this only on small screens */
  top: 0;
  left: 0;
  /* "#menu width" */
  background: #000;
  background: rgba(0, 0, 0, 0.7);
  font-size: 10px;
  /* change this value to increase/decrease button size */
  z-index: 10;
  width: 2em;
  height: auto;
  padding: 2.1em 1.6em;
}

.menu-link:hover,
.menu-link:focus {
  background: #000;
}

.menu-link span {
  position: relative;
  display: block;
}

.menu-link span,
.menu-link span:before,
.menu-link span:after {
  background-color: #fff;
  width: 100%;
  height: 0.2em;
}

.menu-link span:before,
.menu-link span:after {
  position: absolute;
  margin-top: -0.6em;
  content: ' ';
}

.menu-link span:after {
  margin-top: 0.6em;
}

/* -- Responsive Styles (Media Queries) ------------------------------------- */

/*
  Hides the menu at `48em`, but modify this based on your app's needs.
  */
@media (min-width: 48em) {
  .header,
  .content {
    padding-left: 2em;
    padding-right: 2em;
  }

  #layout {
    padding-left: 150px;
    /* left col width "#menu" */
    left: 0;
  }

  #menu {
    left: 150px;
  }

  .menu-link {
    position: fixed;
    left: 150px;
    display: none;
  }

  #layout.active .menu-link {
    left: 150px;
  }
}

@media (max-width: 48em) {
  /* Only apply this when the window is small. Otherwise, the following
      case results in extra padding on the left:
          * Make the window small.
          * Tap the menu to trigger the active state.
          * Make the window large again.
      */
  #layout.active {
    position: relative;
    left: 150px;
  }
}

/* General Styles */

#content {
  margin-left: 80px;
  margin-bottom: 50px;
}

#content p {
  max-width: 600px;
}

#content ul {
  max-width: 600px;
}

li {
  margin: 8px 0px;
}

.pure-button {
  background: #353732;
  color: white;
}

/* Examples */

.example * {
  padding: 0px;
  margin: 0px;
}

.example-wrapper {
  margin: 40px 0px;
  width: 900px;
}

.example-wrapper button {
  margin-bottom: 5px;
}

.example-container {
}

.example-header {
  background-color: #fff;
  color: #000;
  width: 20px;
}

/*
  .example-header p {
    transform: rotate(-90deg);
    text-transform: uppercase;
    position: relative;
    top: 50px;
    font-size: 0.8em;
    letter-spacing: 2px;
  }*/

.example-header p {
  font-size: 0.8em;
  letter-spacing: 2px;
  margin: 0px;
  text-transform: uppercase;
}

.example {
  border: 1px dotted #ccc;
}

.pure-menu-link {
  color: #2c3e50;
}

.pure-menu-header {
  font-weight: bold;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 3px 10px;
}
</style>
