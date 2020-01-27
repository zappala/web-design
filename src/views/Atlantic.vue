<template>
<div>
  <div class="controls">
    <label class="control">White space
      <input type="checkbox" @click="toggleSpacing()" v-model="spacing">
    </label>
    <label class="control">Visual Hierarchy
      <input type="checkbox" @click="toggleHierarchy()" v-model="hierarchy">
    </label>
    <label class="control">Navigation
      <input type="checkbox" @click="toggleNavigation()" v-model="navigation">
    </label>
    <label class="control">Color
      <input type="checkbox" @click="toggleColor()" v-model="color">
    </label>
  </div>
  <div v-bind:class="{ spacingOff: !spacing, hierarchyOff: !hierarchy, navigationOff: !navigation, colorOff: !color, alignmentOff: !alignment}">
    <div class="header">
      <div class="menu-before">
      </div>
      <ul class="menu">
        <li><img src="/images/atlantic/general/hamburger.png"></li>
        <li><img src="/images/atlantic/general/search.png"></li>
        <li>Popular</li>
        <li>Latest</li>
        <li class="push">My Account</li>
        <li class="special">Give a Gift</li>
      </ul>
      <div id="brand">
        <div class="logo">
          <svg class="c-nav__icon--lacroix c-nav__big-a-icon--lacroix">
            <use xlink:href="#icon-atlantic-big-a">
              <symbol id="icon-atlantic-big-a" viewBox="0 0 87.83 134">
                <path d="M24.48 95.13c-.56 0-.74-.37-.74-.93l13.08-55.88c.19-.94.93-.94 1.12 0L50.09 94.2c0 .56-.19.93-.75.93zM48.22.19a22.54 22.54 0 0 1-7.66 5.05c-.75.19-.94.37-1.13 1.12l-26.72 112.5c-2 9-4.67 10.66-11.77 11.22a.88.88 0 0 0-.94.93v2.06a.88.88 0 0 0 .92.93h25.6a.88.88 0 0 0 .93-.93V131a.88.88 0 0 0-.93-.93c-9.53 0-10.47-2.81-8.6-10.66l4.49-19.25a1.18 1.18 0 0 1 1.12-.93h26.74a1.19 1.19 0 0 1 1.13.93l5 23.18c1.12 5-.75 6.17-7.1 6.73a.88.88 0 0 0-.93.93v2.06a.88.88 0 0 0 .93.93h37.62a.88.88 0 0 0 .94-.93V131a.88.88 0 0 0-.94-.93c-5.79-.56-8.22-1.5-9.34-6.73L49.34.57c-.19-.56-.75-.75-1.12-.38"></path>
              </symbol>
            </use>
          </svg>
        </div>
        <div class="name">
          <svg class="c-nav__icon--lacroix c-nav__atlantic-wordmark--lacroix">
            <use xlink:href="#icon-atlantic-wordmark">
              <symbol id="icon-atlantic-wordmark" viewBox="0 0 214 33.24">
                <path d="M39.39 13.2c-2.4 0-4.43 1.82-7 5.32-1.18 1.64-2.7 4-3.37 5-.38.51-.68.43-.47-.12l1.78-4.56 6.36-17.5C37 .62 34.46-.25 34 .62v.09c-1.09 2.32-3.12 3.08-6.75 2.95S16.32 1.52 10.8 1.52C3.88 1.52 0 5.78 0 10.8c0 2.82 1.85 4.64 4.34 4.55a2.27 2.27 0 0 0 2.41-1.81 1.2 1.2 0 0 0-1.56-1.43c-2.45.51-3.29-1.18-3.29-2.49 0-3.12 2.66-5.44 8.22-5.44 1.43 0 4.22.34 7.17.67-3.75 11.3-7.55 21.77-8.48 24.25a2.07 2.07 0 0 1-1.35 1.44c-1.34.42-1.77.46-2.61.67-1.27.3-1.06 1.35-.17 1.31 1.6-.09 3.67-.3 5.31-.3 2 0 5.61.17 6.16.21 1 .09 1.14-1.14.3-1.26-.59-.09-1.56-.25-2.49-.38-1.1-.13-1.43-.59-1.18-1.48.55-1.47 7-20.11 8.27-24 2 .25 3.71.42 4.84.5 2.33.14 4.57 0 6.5-1.41l-5.1 14.4-4.47 12.33c-.76 2 2.1 2.15 2.74.93a81.64 81.64 0 0 1 7.63-12.36c1.86-2.7 3.59-4.31 4.81-4.31.93 0 1.47.51 1.47 1.65 0 1.52-.71 3.88-2.15 7.89-1.89 5.23-2.61 6.62-3.24 6.66s-1.86-1.52-2.53-1.69a1.39 1.39 0 0 0-1.65.72c-.34.59-.12 2.49 2.74 2.62 3.42.16 6.33-3.34 8.35-8.94 1.39-3.8 1.73-5.74 1.73-7.13 0-2.7-1.26-3.97-3.33-3.97zM97.29 31.29c-2.15-.5-3-1.3-3-2.15l.09-1.77c0-1.3 1-20.49 1.22-23.36.17-2.11-2.24-2-3.25-.76l-2 2.57C87.89 8.9 78 21.68 73.17 27.67A11.5 11.5 0 0 1 68 31.25c-.8.21-.72 1.06.17 1.06.71 0 2.82-.25 4.38-.25s4.43.12 5.15.16 1-.76 0-1c-2-.59-3-1-3-1.52s.46-1.22 1.56-2.74c.84-1.18 2.86-3.84 5.1-6.79H91c-.21 4.05-.46 8.31-.5 9.15a1.14 1.14 0 0 1-.93 1.14l-2.15.63c-.59.17-.85 1.27.08 1.23 2.11-.13 3.88-.3 4.81-.3 1.39 0 3.75.3 4.85.34s.94-.85.13-1.07zm-6-15.47c0 .76-.09 1.6-.13 2.49h-8.25c3.84-5.07 7.89-10.38 8.23-10.89s.67-.25.63.13c-.13 1.86-.34 5.27-.5 8.27zM55.08 13.5c-3.67-.17-7.76 4.09-9.7 10.5-1.9 6.2.21 8.77 2.53 8.77 1.69 0 4.51-2.19 6.07-4.72.55-.89.13-1.82-.71-.89-1.06 1.14-2.49 2.36-4 2.07-1-.17-1.94-1.9-.46-6.2 3.54-.17 7.71-2.19 8.77-5.53.92-2.88-.98-3.96-2.5-4zm.38 3.12c-.89 2.61-4 4.8-6.24 5.35 2.15-5.69 4.21-7.21 5.52-7.17.72 0 1.06.82.72 1.82zM109.4 15.62h3.42c.76 0 1.14-.21 1.3-.76.3-.72.13-1.06-.63-1.06h-3.42l1.65-4.38c.21-.59 0-.89-.34-.89h-1.77c-.46 0-.63.13-.84.72L107 13.83h-2.7c-.38 0-.68-.08-.93 1.06-.09.55 0 .76.55.76h2.4l-4.09 10.67a45.64 45.64 0 0 0-1.69 4.68c-.25 1.48.64 2.07 1.73 1.86 2.15-.38 5.23-2.62 8-6.12.76-1 .13-1.64-.63-.84a34.4 34.4 0 0 1-3.67 3.16c-1.1.72-1.64.21-1.26-.84zM147.44 14.62c.25-.59-.59-.76-2.53-1.13-.59-.13-.93.5-1.94 2.61a4 4 0 0 0-3.5-1.43c-3.08.08-6.88 2.86-10 7.12-2.49 3.42-3.25 5.78-2.78 8.31a3.11 3.11 0 0 0 3.08 2.52c2.32.08 4.64-2.11 7-4.52l1.48-1.48c.42-.42.8-.17.54.34a23.77 23.77 0 0 0-1.89 4.17c-.3 1.48.5 1.86 1.64 1.69 2.19-.29 5.61-2.32 8.23-5.94.75-1.06 0-1.65-.68-.85a26.62 26.62 0 0 1-3.75 3.29c-1.14.76-1.65.55-1.31-.34.17-.55.8-2.07 6.41-14.36zm-9.74 11c-2.66 2.45-4.81 4.22-6.29 4.22-1 0-1.47-.43-1.56-1.14-.25-1.86 1.44-4.68 2.83-6.58 2.4-3.16 5.36-5.78 7.25-5.78 1.31 0 2 .55 2.11 1.35.25 1.46-2.19 5.93-4.34 7.87zM196.28 12.91c-2.07 0-4.85 1.47-7.47 4.38-.84 1-.21 1.65.59.93a20.28 20.28 0 0 1 2.87-2.19c.89-.55 1.48-.13 1.22.67-.21.64-.84 2.2-1.3 3.25l-2.87 6.58c-.8 1.86-1.56 3.71-1.73 4.22-.38 1.31.29 2 1.35 2 2 0 4.77-1.65 7.42-4.6.84-1 .21-1.64-.59-.93a28 28 0 0 1-3.12 2.4c-.88.54-1.52.12-1.22-.68.21-.59.84-1.94 1.26-2.91l2.91-6.58c.85-1.94 1.82-4 2-4.55.32-1.28-.31-1.99-1.32-1.99zM198.81 2.7a2.39 2.39 0 0 0-2.53 2.15 2.09 2.09 0 0 0 1.85 2.45 2.43 2.43 0 0 0 2.49-2.11 2.08 2.08 0 0 0-1.81-2.49zM210.49 13.54c-3.71-.17-7.68 4.13-9.62 10.46s.17 8.77 2.62 8.77c1.69 0 4.51-2 6.2-4.72.55-.89.13-1.82-.72-.89-1.05 1.14-2.4 2.19-3.79 2.11s-2.37-2-.76-6.62c2.36-6.66 4-7.42 4.72-7.47s2.19 1.86 3.08 2.07a1.36 1.36 0 0 0 1.64-.71c.38-.72.14-2.83-3.37-3zM186.54 13.83h-3.42l1.64-4.38c.22-.59 0-.89-.33-.89h-1.78c-.46 0-.63.13-.84.72l-1.73 4.55h-2.74c-.38 0-.67-.08-.93 1.06-.08.55.05.76.55.76h2.41l-4.09 10.67a43.34 43.34 0 0 0-1.69 4.68c-.26 1.48.63 2.07 1.73 1.86 2.15-.38 5.23-2.62 8-6.12.76-1 .13-1.64-.64-.84a34.33 34.33 0 0 1-3.68 3.16c-1.1.72-1.65.21-1.27-.84l4.71-12.6h3.42c.76 0 1.14-.21 1.31-.76.29-.69.12-1.03-.63-1.03zM122.94 25.73a40.24 40.24 0 0 1-3.8 3.33c-1.1.72-1.64.21-1.26-.84L128.17.97c.17-.42.08-1-.51-1a58.6 58.6 0 0 0-6 .68c-.34.08-.51.59-.13.71l2.28.85c.46.17.51.38.21 1.14l-8.84 22.97a43.34 43.34 0 0 0-1.69 4.68c-.25 1.48.63 2.07 1.73 1.86 2.28-.38 5.52-2.62 8.35-6.29.76-1.01.13-1.64-.63-.84zM166.33 25.81l2.49-5c1.35-2.74 1.61-4 1.61-4.93 0-1.81-.93-2.74-2.83-2.74-2.66 0-4.77 2.11-8 6.66-.89 1.22-1.48 2.15-2.66 3.67-.38.47-.67.42-.46-.13l1.64-4.09a17 17 0 0 0 1.35-4.47c0-1.09-.46-1.6-1.64-1.6-1.44 0-3.25.76-6.41 4.77-1.14 1.47 0 1.64.38 1.18.63-.64 2-2.07 2.91-2.87s1.72-.55 1.39.42a18.36 18.36 0 0 1-.8 2.24l-5 12.27c-.68 1.69 2.53 2.07 3.08.8 1.73-4 5.52-9 7.08-11.22 2.28-3.25 4.26-5.48 5.69-5.48.76 0 1.1.42 1.1 1.22a5.83 5.83 0 0 1-.59 2l-3.54 7.55c-1 2-1.94 4.13-2.11 4.68-.42 1.31.3 2 1.43 2 2 0 4.77-1.65 7.43-4.6.84-1 .21-1.64-.59-.93a29 29 0 0 1-3.12 2.41c-.92.59-1.56.12-1.26-.72.21-.6.97-2.16 1.43-3.09z"></path>
              </symbol>
            </use>
          </svg>
        </div>
      </div>
    </div>

    <div class="top-stories">
      <div class="sidebar1">
        <div class="story">
          <img src="/images/atlantic/stories/divided.jpg" alt="we the people" />
          <p class="imagecredits">Katie Martin / The Atlantic</p>
          <h1>America Is Now the
            Divided Republic the Framers Feared</h1>
          <p class="author">Lee Drutman</p>
        </div>
        <div class="story"> <img alt="properties for sale" src="/images/atlantic/stories/opioid.jpg">
          <p class="imagecredits">Spencer Platt / Getty/p>
            <h1>The True Cause of the Opioid Epidemic</h1>
            <p class="author">Olga Khazan</p>
        </div>
      </div>
      <div class="feature">
        <div class="story">
          <img src="/images/atlantic/stories/itunes.jpg" />
          <h1>What the
            Death of iTunes Says About Our Digital Habits</h1>
          <p class="lead">We started
            the 2010s obsessed with our electronic hygiene &mdash; and ended them a nation of
            digital hoarders. Eleven ideas about the decade that killed iTunes.</p>
          <p class="author">Robinson Meyer</p>
        </div>
      </div>
      <div class="sidebar2">
        <div class="story">
          <div class="text">
            <h1>Happy New Year From the President of the United States</h1>
            <p class="author">David A. Graham</p>
          </div>
          <div class="image ">
            <img src="/images/atlantic/stories/newyear.jpg" alt="Donald Trump">
          </div>
        </div>
        <div class="story">
          <div class="text">
            <h1>The R. Kelly Story Is Bigger
              Than Most People Know</h1>
            <p class="author">Spencer Kornhaber</p>
          </div>
          <div class="image">
            <img src="/images/atlantic/stories/carter.jpg" alt="Lanita Carter, one of Kelly's accusers.">
          </div>
        </div>
        <div class="story">
          <div class="text">
            <h1>The
              Inverted Likability Test</h1>
            <p class="author">Yascha Mounk </p>
          </div>
          <div class="image">
            <img src="/images/atlantic/stories/democrats.jpg" alt="Democratic presidential candidates">
          </div>
        </div>
        <div class="story">
          <div class="text">
            <h1>Watch: A Substance Like Nothing Else on Earth</h1>
            <p class="author">Elyse Kelly</p>
          </div>
          <div class="image">
            <img src="/images/atlantic/stories/amber.jpg" alt="amber">
          </div>
        </div>
      </div>
    </div>
    <div class="midlevel">
      <div class="story">
        <img src="/images/atlantic/stories/hand.jpg" alt="The hand of an elderly patient">
        <p class="imagecredits">Yasser Chalid / Getty</p>
        <h1>My 92-Year-Old Dad Didn't Need More Medical Care </h1>
        <p class="lead">Ordering up more tests and surgeries for dying patients is easy.
          Getting patients the end-of-life care they deserve takes much more effort.</p>
        <p class="author">Ezekiel J. Emanuel </p>
      </div>
      <div class="story">
        <img src="/images/atlantic/stories/cheney.jpg" alt="Dick Cheney peering over a globe">
        <p class="imagecredits">Joseph Sohm / Shutterstock / The Atlantic</p>
        <h1>The World Dick Cheney Built</h1>
        <p class="lead"> The vice president had spent most of his career trying to
          lift the restraints on presidential authority. After 9/11, he did just
          that.</p>
        <p class="author">James Mann </p>
      </div>
      <div class="story">
        <img src="/images/atlantic/stories/littlewomen.jpg" alt="Little Women film">
        <p class="imagecredits">Wilson Webb / Sony</p>
        <h1>One Way the New Little Women Film Is Radical</h1>
        <p class="lead">With remarkable clarity, Greta Gerwig's adaptation establishes love and its complement, sacrifice, as mutually engaged emotions.</p>
        <p class="author">John Matteson </p>
      </div>
      <div class="story">
        <img src="/images/atlantic/stories/castro.jpg" alt="Julian Castro">
        <p class="imagecredits">Mike Blake / Reuters</p>
        <h1>The 2020 U.S. Presidential Race: A Cheat Sheet</h1>
        <p class="lead">Julián Castro leaves the Democratic race as a more interesting, though not more popular, candidate than when he joined it.</p>
        <p class="author">David A. Graham </p>
      </div>
    </div>

    <div class="midlevel2">
      <div class="photostory">
        <div class="story">
          <div class="text">
            <p class="highlight">Photo</p>
            <h1>Kennecott Mines: An Alaskan Ghost Town</h1>

            <p class="lead">The remaining structures of an early-20th-century mining
              town in Alaska's Wrangell&ndash;St. Elias National Park and Preserve</p>
            <p class="author">Alan Taylor </p>
          </div>
          <div class="image">
            <img src="/images/atlantic/stories/ghost.jpg" alt="ghost town">
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="story">
          <div class="text">
            <h1>When Cracking Down on Protests Backfires</h1>
            <p class="author">Yasmeen Serhan </p>
          </div>
          <div class="image">
            <img src="/images/atlantic/stories/protest.jpg" alt="Security personnel grab student protesters during a demonstration.">
          </div>
        </div>
        <div class="story">
          <div class="text">
            <h1>Gen-X Women Are Caught in a Generational Tug-of-War</h1>
            <p class="author">Ada Calhoun</p>
          </div>
          <div class="image">
            <img src="/images/atlantic/stories/genx.jpg" alt="Gen X Women">
          </div>
        </div>
      </div>
      <div class="sidebar2">
        <div class="story">
          <div class="text">
            <h1>America's Coal Consumption Entered Free Fall in 2019 </h1>
            <p class="author">Robinson Meyer</p>
          </div>
          <div class="image">
            <img src="/images/atlantic/stories/coal.jpg" alt="coal">
          </div>
        </div>
      </div>
    </div>

    <div class="promotions">
      <div class="skinnyleft">
        <div class="writers">
          <div class="heading">
            <div class="left">
              <h1>Writers</h1>
            </div>
            <div class="right">
              <p class="see">See All</p>
            </div>

          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/david-graham.jpg">
            </div>
            <div class="text">
              <p class="author">David A. Graham</p>
              <p class="lead">Happy New Year From the President of the United States</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/spencer-kornhaber.jpg">
            </div>
            <div class="text">
              <p class="author">Spencer Kornhaber</p>
              <p class="lead">The R. Kelly Story Is Bigger Than Most People Know</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/robinson-meyer.jpg">
            </div>
            <div class="text">
              <p class="author">Robinson Meyer</p>
              <p class="lead">What the Death of iTunes Says About Our Digital Habits</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/olga-khazan.jpg">
            </div>
            <div class="text">
              <p class="author">Olga Khazan</p>
              <p class="lead">The True Cause of the Opioid Epidemic</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/alan-taylor.jpg">
            </div>
            <div class="text">

              <p class="author">Alan Taylor</p>
              <p class="lead">2020: New Year’s Celebrations Around the World</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/annika-neklason.jpg">
            </div>
            <div class="text">

              <p class="author">Annika Neklason</p>
              <p class="lead">Watching the 2010s Become History</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/peter-beinart.png">
            </div>
            <div class="text">

              <p class="author">Peter Beinart</p>
              <p class="lead">The Embassy Attack Revealed Trump’s Weakness</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/amanda-mull.jpg">
            </div>
            <div class="text">
              <p class="author">Amanda Mull</p>
              <p class="lead">America Loves Its Unregulated Wellness Chemicals</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/uri-friedman.jpg">
            </div>
            <div class="text">
              <p class="author">Uri Friedman</p>
              <p class="lead">In Iraq, the U.S. Gets Hit Where It Hurts</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/helen-lewis.jpg">
            </div>
            <div class="text">
              <p class="author">Helen Lewis</p>
              <p class="lead">Why The Witcher Is Better Than Game of Thrones</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/derek-thompson.png">
            </div>
            <div class="text">
              <p class="author">Derek Thompson</p>
              <p class="lead">The 2020 Election Will Break History</p>
            </div>
          </div>
          <div class="writer">
            <div class="image">
              <img src="/images/atlantic/headshots/yasmeen-serhan.png">
            </div>
            <div class="text">
              <p class="author">Yasmeen Serhan</p>
              <p class="lead">The Problem With a Host Country Failing to Protect Its Embassies</p>
            </div>
          </div>
        </div>
        <div class="podcasts">
          <div class="heading">
            <div class="left">
              <h1>Podcasts</h1>
            </div>
            <div class="right">
              <p class="see">See All</p>
            </div>

          </div>
          <div class="podcast">
            <div class="image">
              <img alt="Podcast cover art" src="/images/atlantic/general/square.png">
            </div>
            <div class="text">
              <p class="episode">Episode 121</p>
              <p>Why Impeachment Is Different This Time Around</p>
            </div>
          </div>
          <div class="podcast">
            <div class="image">
              <img alt="Podcast cover art" src="/images/atlantic/general/crazy-genius.jpg">
            </div>
            <div class="text">
              <p class="episode">Season 3 Episode 7</p>
              <p>How Has Netflix Changed Entertainment?</p>
            </div>
          </div>
        </div>
      </div>
      <div class="widemiddle">
        <div class="latest">
          <div class="heading">
            <div class="left">
              <h1>Latest</h1>
            </div>
            <div class="right">
              <p class="see">See All</p>
            </div>
          </div>

          <div class="storycenter">
            <div class="image">
              <img alt="Voters in Mississippi in 2018" src="/images/atlantic/stories/voters.jpg">
            </div>
            <div class="text">
              <h1>The 2020 Election Will Break History</h1>
              <p><span class="author">Derek Thompson</span><span class="date">January 1, 2020</span></p>
            </div>
          </div>
          <div class="storycenter">
            <div class="image">
              <img src="/images/atlantic/stories/protestors.jpg">
            </div>
            <div class="text">
              <h1>The Problem With a Host Country Failing to Protect Its Embassies</h1>
              <p><span class="author">Yasmeen Serhan </span>
                <span class="date">December 31, 2019</span></p>
            </div>
          </div>
          <div class="storycenter">
            <div class="image">
              <img src="/images/atlantic/stories/memorable.jpg">
            </div>
            <div class="text">
              <h1>The Most Memorable Family and Education Interviews of the Year</h1>
              <p><span class="author">Julie Beck, Ashley Fetters, Joe Pinsker, and Alia Wong</span>
                <span class="date">December 31, 2019</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="skinnyright">
        <div class="popular">
          <div class="heading">
            <div class="left">
              <h1>Popular</h1>
            </div>
            <div class="right">
              <p class="see">See All</p>
            </div>
          </div>
          <div class="item">
            <h1><span class="number">1</span>The 15 Best Books of 2019</h1>
            <p class="author">The Atlantic Culture Desk </p>
          </div>
          <div class="item">
            <h1><span class="number">2</span>America Is Now the Divided Republic the Framers Feared</h1>
            <p class="author">Lee Drutman</p>
          </div>
          <div class="item">
            <h1><span class="number">3</span>The True Cause of the Opioid Epidemic</h1>
            <p class="author">Olga Khazan</p>
          </div>
          <div class="item">
            <h1><span class="number">4</span>Your Bedroom Is Too Hot</h1>
            <p class="author">James Hamblin</p>
          </div>
          <div class="item">
            <h1><span class="number">4</span>Happy New Year From the President of the United States</h1>
            <p class="author">David A. Graham</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sections">
      <div class="section">
        <h1>Politics</h1>
        <div>
          <div class="item">The 2020 U.S. Presidential Race: A Cheat Sheet</div>
          <div class="item">In Iraq, the U.S. Gets Hit Where It Hurts</div>
          <div class="item">Marketing Psychiatric Drugs to Jailers and Judges</div>
        </div>
      </div>
      <div class="section">
        <h1>Culture</h1>
        <div>
          <div class="item">The R. Kelly Story Is Bigger Than Most People Know</div>
          <div class="item">One Way the New Little Women Film Is Radical</div>
          <div class="item">Why The Witcher Is Better Than Game of Thrones</div>
        </div>
      </div>
      <div class="section">
        <h1>Technology</h1>
        <div>
          <div class="item">What the Death of iTunes Says About Our Digital Habits</div>
          <div class="item">The Purest Fandom Is Telling Celebrities They're Stupid</div>
          <div class="item">Why Kids Online Are Chasing 'Clout'</div>
        </div>
      </div>
    </div>
    <div class="sections">
      <div class="section">
        <h1>Ideas</h1>
        <div>
          <div class="item">Happy New Year From the President of the United States</div>
          <div class="item">America Is Now the Divided Republic the Framers Feared</div>
          <div class="item">The Inverted Likability Test</div>
        </div>
      </div>
      <div class="section">
        <h1>Science</h1>
        <div>
          <div class="item">The Survival Advantage of Being a Fancy Baby Coot</div>
          <div class="item">A Field Guide for the Entire 21st Century</div>
          <div class="item">What Happens to Meat When You Freeze It for 35,000 Years</div>
        </div>
      </div>
      <div class="section">
        <h1>Books</h1>
        <div>
          <div class="item">The Woman Who Made Modern Journalism</div>
          <div class="item">Inside Tech's Fever Dream</div>
          <div class="item">Diving Into Pop Music's Hidden Depths</div>
        </div>
      </div>
    </div>
    <div class="sections">
      <div class="section">
        <h1>Family</h1>
        <div>
          <div class="item">The Most Memorable Family and Education Interviews of the Year</div>
          <div class="item">Dear Therapist: I Survived Cancer, but Now I’m Afraid My Husband Resents Me</div>
          <div class="item">A Harebrained Scheme to Sell Christmas Trees on the Streets of New York</div>
        </div>
      </div>
      <div class="section">
        <h1>Business</h1>
        <div>
          <div class="item">Stop Believing in Free Shipping</div>
          <div class="item">How Baseball Cards Got Weird</div>
          <div class="item">Medicaid's Dark Secret</div>
        </div>
      </div>
      <div class="section">
        <h1>Global</h1>
        <div>
          <div class="item">2020: New Year's Celebrations Around the World</div>
          <div class="item">The Problem With a Host Country Failing to Protect Its Embassies</div>
          <div class="item">Photos of Australia's Raging Bushfires</div>
        </div>
      </div>
    </div>
    <div class="sections">
      <div class="section">
        <h1>Health</h1>
        <div>
          <div class="item">The True Cause of the Opioid Epidemic</div>
          <div class="item">America Loves Its Unregulated Wellness Chemicals</div>
          <div class="item">John Lewis and the Fight That Can't Be Won</div>
        </div>
      </div>
      <div class="section">
        <h1>Education</h1>
        <div>
          <div class="item">What School Could Be If It Were Designed for Kids With Autism</div>
          <div class="item">When Schools Try to Tweak Winter Break, Families Fight Back</div>
          <div class="item">How to Save a Dying Language</div>
        </div>
      </div>
      <div class="section">
        <h1>Letters</h1>
        <div>
          <div class="item">Letters: Are Eye Exams Necessary?</div>
          <div class="item">The Commons</div>
          <div class="item">Letters: Sharing a Bed Is 'a Comfort, Not a Burden'</div>

        </div>
      </div>
    </div>

    <div class="footer">
      <div class="sitemap">
        <div class="group">
          <h1>About</h1>
          <p>Our History</p>
          <p>Staff</p>
          <p>Careers</p>
        </div>
        <div class="group">
          <h1>Contact</h1>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Advertise</p>
          <p>Press</p>
        </div>
        <div class="group">
          <h1>Podcasts</h1>
          <p>Radio Atlantic</p>
          <p>Crazy/Genius</p>
          <p>The Atlantic Interview</p>
          <p>Audio Articles</p>
        </div>
        <div class="group">
          <h1>Subscription</h1>
          <p>Purchase</p>

          <p>Give a Gift</p>
          <p>Manage Subscription</p>
          <p>Download iOS App</p>
          <p>Newsletters</p>
        </div>
        <div class="group">
          <h1>Follow</h1>
          <div class="icons">
            <div>
              <i class="fab fa-facebook-square"></i>
            </div>
            <div>
              <i class="fab fa-instagram"></i>
            </div>
            <div>
              <i class="fab fa-youtube"></i>
            </div>
            <div>
              <i class="fab fa-twitter"></i>
            </div>
            <div>
              <i class="fab fa-linkedin"></i>
            </div>
            <div>
              <i class="fab fa-flipboard"></i>
            </div>
            <div>
              <i class="fab fa-rss"></i>
            </div>
          </div>

        </div>
      </div>
      <div class="bottom">
        <div class="legal">
          <div class="policies">
            <div>Privacy Policy</div>
            <div>Do Not Sell My Personal Information</div>
            <div>Advertising Guidelines</div>
            <div>Terms Conditions</div>
            <div>Responsible Disclosure</div>
            <div>World Edition</div>
            <div>Site Map</div>
          </div>
          <p>TheAtlantic.com Copyright (c) 2020 by The Atlantic Monthly Group. All Rights Reserved.</p>
        </div>
        <div class="mark">
          <svg viewBox="0 0 214 33.24">
            <use xlink:href="#icon-atlantic-wordmark">
              <symbol id="icon-atlantic-wordmark" viewBox="0 0 214 33.24">
                <path d="M39.39 13.2c-2.4 0-4.43 1.82-7 5.32-1.18 1.64-2.7 4-3.37 5-.38.51-.68.43-.47-.12l1.78-4.56 6.36-17.5C37 .62 34.46-.25 34 .62v.09c-1.09 2.32-3.12 3.08-6.75 2.95S16.32 1.52 10.8 1.52C3.88 1.52 0 5.78 0 10.8c0 2.82 1.85 4.64 4.34 4.55a2.27 2.27 0 0 0 2.41-1.81 1.2 1.2 0 0 0-1.56-1.43c-2.45.51-3.29-1.18-3.29-2.49 0-3.12 2.66-5.44 8.22-5.44 1.43 0 4.22.34 7.17.67-3.75 11.3-7.55 21.77-8.48 24.25a2.07 2.07 0 0 1-1.35 1.44c-1.34.42-1.77.46-2.61.67-1.27.3-1.06 1.35-.17 1.31 1.6-.09 3.67-.3 5.31-.3 2 0 5.61.17 6.16.21 1 .09 1.14-1.14.3-1.26-.59-.09-1.56-.25-2.49-.38-1.1-.13-1.43-.59-1.18-1.48.55-1.47 7-20.11 8.27-24 2 .25 3.71.42 4.84.5 2.33.14 4.57 0 6.5-1.41l-5.1 14.4-4.47 12.33c-.76 2 2.1 2.15 2.74.93a81.64 81.64 0 0 1 7.63-12.36c1.86-2.7 3.59-4.31 4.81-4.31.93 0 1.47.51 1.47 1.65 0 1.52-.71 3.88-2.15 7.89-1.89 5.23-2.61 6.62-3.24 6.66s-1.86-1.52-2.53-1.69a1.39 1.39 0 0 0-1.65.72c-.34.59-.12 2.49 2.74 2.62 3.42.16 6.33-3.34 8.35-8.94 1.39-3.8 1.73-5.74 1.73-7.13 0-2.7-1.26-3.97-3.33-3.97zM97.29 31.29c-2.15-.5-3-1.3-3-2.15l.09-1.77c0-1.3 1-20.49 1.22-23.36.17-2.11-2.24-2-3.25-.76l-2 2.57C87.89 8.9 78 21.68 73.17 27.67A11.5 11.5 0 0 1 68 31.25c-.8.21-.72 1.06.17 1.06.71 0 2.82-.25 4.38-.25s4.43.12 5.15.16 1-.76 0-1c-2-.59-3-1-3-1.52s.46-1.22 1.56-2.74c.84-1.18 2.86-3.84 5.1-6.79H91c-.21 4.05-.46 8.31-.5 9.15a1.14 1.14 0 0 1-.93 1.14l-2.15.63c-.59.17-.85 1.27.08 1.23 2.11-.13 3.88-.3 4.81-.3 1.39 0 3.75.3 4.85.34s.94-.85.13-1.07zm-6-15.47c0 .76-.09 1.6-.13 2.49h-8.25c3.84-5.07 7.89-10.38 8.23-10.89s.67-.25.63.13c-.13 1.86-.34 5.27-.5 8.27zM55.08 13.5c-3.67-.17-7.76 4.09-9.7 10.5-1.9 6.2.21 8.77 2.53 8.77 1.69 0 4.51-2.19 6.07-4.72.55-.89.13-1.82-.71-.89-1.06 1.14-2.49 2.36-4 2.07-1-.17-1.94-1.9-.46-6.2 3.54-.17 7.71-2.19 8.77-5.53.92-2.88-.98-3.96-2.5-4zm.38 3.12c-.89 2.61-4 4.8-6.24 5.35 2.15-5.69 4.21-7.21 5.52-7.17.72 0 1.06.82.72 1.82zM109.4 15.62h3.42c.76 0 1.14-.21 1.3-.76.3-.72.13-1.06-.63-1.06h-3.42l1.65-4.38c.21-.59 0-.89-.34-.89h-1.77c-.46 0-.63.13-.84.72L107 13.83h-2.7c-.38 0-.68-.08-.93 1.06-.09.55 0 .76.55.76h2.4l-4.09 10.67a45.64 45.64 0 0 0-1.69 4.68c-.25 1.48.64 2.07 1.73 1.86 2.15-.38 5.23-2.62 8-6.12.76-1 .13-1.64-.63-.84a34.4 34.4 0 0 1-3.67 3.16c-1.1.72-1.64.21-1.26-.84zM147.44 14.62c.25-.59-.59-.76-2.53-1.13-.59-.13-.93.5-1.94 2.61a4 4 0 0 0-3.5-1.43c-3.08.08-6.88 2.86-10 7.12-2.49 3.42-3.25 5.78-2.78 8.31a3.11 3.11 0 0 0 3.08 2.52c2.32.08 4.64-2.11 7-4.52l1.48-1.48c.42-.42.8-.17.54.34a23.77 23.77 0 0 0-1.89 4.17c-.3 1.48.5 1.86 1.64 1.69 2.19-.29 5.61-2.32 8.23-5.94.75-1.06 0-1.65-.68-.85a26.62 26.62 0 0 1-3.75 3.29c-1.14.76-1.65.55-1.31-.34.17-.55.8-2.07 6.41-14.36zm-9.74 11c-2.66 2.45-4.81 4.22-6.29 4.22-1 0-1.47-.43-1.56-1.14-.25-1.86 1.44-4.68 2.83-6.58 2.4-3.16 5.36-5.78 7.25-5.78 1.31 0 2 .55 2.11 1.35.25 1.46-2.19 5.93-4.34 7.87zM196.28 12.91c-2.07 0-4.85 1.47-7.47 4.38-.84 1-.21 1.65.59.93a20.28 20.28 0 0 1 2.87-2.19c.89-.55 1.48-.13 1.22.67-.21.64-.84 2.2-1.3 3.25l-2.87 6.58c-.8 1.86-1.56 3.71-1.73 4.22-.38 1.31.29 2 1.35 2 2 0 4.77-1.65 7.42-4.6.84-1 .21-1.64-.59-.93a28 28 0 0 1-3.12 2.4c-.88.54-1.52.12-1.22-.68.21-.59.84-1.94 1.26-2.91l2.91-6.58c.85-1.94 1.82-4 2-4.55.32-1.28-.31-1.99-1.32-1.99zM198.81 2.7a2.39 2.39 0 0 0-2.53 2.15 2.09 2.09 0 0 0 1.85 2.45 2.43 2.43 0 0 0 2.49-2.11 2.08 2.08 0 0 0-1.81-2.49zM210.49 13.54c-3.71-.17-7.68 4.13-9.62 10.46s.17 8.77 2.62 8.77c1.69 0 4.51-2 6.2-4.72.55-.89.13-1.82-.72-.89-1.05 1.14-2.4 2.19-3.79 2.11s-2.37-2-.76-6.62c2.36-6.66 4-7.42 4.72-7.47s2.19 1.86 3.08 2.07a1.36 1.36 0 0 0 1.64-.71c.38-.72.14-2.83-3.37-3zM186.54 13.83h-3.42l1.64-4.38c.22-.59 0-.89-.33-.89h-1.78c-.46 0-.63.13-.84.72l-1.73 4.55h-2.74c-.38 0-.67-.08-.93 1.06-.08.55.05.76.55.76h2.41l-4.09 10.67a43.34 43.34 0 0 0-1.69 4.68c-.26 1.48.63 2.07 1.73 1.86 2.15-.38 5.23-2.62 8-6.12.76-1 .13-1.64-.64-.84a34.33 34.33 0 0 1-3.68 3.16c-1.1.72-1.65.21-1.27-.84l4.71-12.6h3.42c.76 0 1.14-.21 1.31-.76.29-.69.12-1.03-.63-1.03zM122.94 25.73a40.24 40.24 0 0 1-3.8 3.33c-1.1.72-1.64.21-1.26-.84L128.17.97c.17-.42.08-1-.51-1a58.6 58.6 0 0 0-6 .68c-.34.08-.51.59-.13.71l2.28.85c.46.17.51.38.21 1.14l-8.84 22.97a43.34 43.34 0 0 0-1.69 4.68c-.25 1.48.63 2.07 1.73 1.86 2.28-.38 5.52-2.62 8.35-6.29.76-1.01.13-1.64-.63-.84zM166.33 25.81l2.49-5c1.35-2.74 1.61-4 1.61-4.93 0-1.81-.93-2.74-2.83-2.74-2.66 0-4.77 2.11-8 6.66-.89 1.22-1.48 2.15-2.66 3.67-.38.47-.67.42-.46-.13l1.64-4.09a17 17 0 0 0 1.35-4.47c0-1.09-.46-1.6-1.64-1.6-1.44 0-3.25.76-6.41 4.77-1.14 1.47 0 1.64.38 1.18.63-.64 2-2.07 2.91-2.87s1.72-.55 1.39.42a18.36 18.36 0 0 1-.8 2.24l-5 12.27c-.68 1.69 2.53 2.07 3.08.8 1.73-4 5.52-9 7.08-11.22 2.28-3.25 4.26-5.48 5.69-5.48.76 0 1.1.42 1.1 1.22a5.83 5.83 0 0 1-.59 2l-3.54 7.55c-1 2-1.94 4.13-2.11 4.68-.42 1.31.3 2 1.43 2 2 0 4.77-1.65 7.43-4.6.84-1 .21-1.64-.59-.93a29 29 0 0 1-3.12 2.41c-.92.59-1.56.12-1.26-.72.21-.6.97-2.16 1.43-3.09z"></path>
              </symbol>
            </use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      spacing: true,
      hierarchy: true,
      navigation: true,
      color: true,
      alignment: true,
    }
  },
  methods: {
    toggleSpacing() {
      this.spacing = !this.spacing;
    },
    toggleHierarchy() {
      this.hierarchy = !this.hierarchy;
    },
    toggleNavigation() {
      this.navigation = !this.navigation;
    },
    toggleColor() {
      this.color = !this.color;
    },
    toggleAlignment() {
      this.alignmentOff = !this.alignmentOff;
    },
  }

}
</script>

<style scoped>
body {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  font-size: 14.8px;
  font-weight: 400;
}

img {
  width: 100%;
}

.header:before {
  content: " ";
  width: 100%;
  height: 4px;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6000000;
}

.header {
  margin: 50px 0px 150px 0px;
  padding: 0px 0px 20px 0px;
  border-bottom: 1px solid #999;
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
}

/* Logo and Brand */
.header .logo {
  background-color: #fff;
}

.header .logo svg {
  fill: #e7131a;
  z-index: 5000;
  width: 170px;
  height: 125px;
}

.header .name svg {
  margin-top: 10px;
  fill: #000;
  z-index: 5001;
  width: 155px;
  height: 32px;
}

#brand {
  position: absolute;
  top: 80px;
  left: 50%;
  text-align: center;
}

.header img {
  display: block;
  height: 18px;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 5px 10px 0 0px;
  display: flex;
  justify-content: flex-start;
}

.menu li {
  display: inline;
  padding: 8px 15px;
}

.push {
  margin-left: auto;
}

.menu li.special {
  color: white;
  background: #e7131a;
  border-radius: 5px;
  display: inline-block;
  padding: 8px 18px;
}

/* Top Stories */
.top-stories,
.midlevel {
  display: flex;
  margin: 15px 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.midlevel2 {
  display: flex;
  margin: 15px 50px;
  padding-bottom: 20px;
}

.feature {
  width: 50%;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}

.sidebar1,
.sidebar2 {
  width: 25%;
}

.sidebar1>.story+.story,
.sidebar2>.story+.story {
  padding-top: 15px;
  border-top: 1px solid #eee;
}

/* Midlevel */
.midlevel {
  display: flex;
  margin-top: 10px;
}

.midlevel .story {
  width: 25%;
}

.midlevel2 .photostory {
  width: 50%;
}

.midlevel2 .sidebar {
  width: 25%;
}

.midlevel2 .sidebar2 {
  width: 25%;
}

.promotions {
  display: flex;
  margin: 15px 50px;
}

.skinnyleft,
.skinnyright {
  width: 25%;
}

.widemiddle {
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;
}

/* Story spacing */
.story {
  padding: 0px;
  margin: 0px;
}

.sidebar1 .story {
  margin-right: 20px;
}

.sidebar2 .story {
  margin-left: 20px;
}

.feature .story {
  margin: 0px 20px;
}

.midlevel .story:not(:first-child) {
  padding-left: 20px;
  border-left: 1px solid #eee;
}

.midlevel .story:not(:last-child) {
  padding-right: 20px;
}

/* Story images */
/* Fonts */
h1 {
  font-family: 'EB Garamond', serif;
}

.story {
  font-family: 'EB Garamond', serif;
}

.feature {
  text-align: center;
}

.feature h1 {
  font-size: 36npx;
  font-weight: 300;
  padding: 0px 20px;
}

.feature .lead {
  font-size: 18px;
  padding: 0px 20px;
}

.sidebar h1 {
  font-size: 14px;
  font-weight: 300;
}

.sidebar1 h1 {
  font-size: 18px;
  font-weight: 300;
}

.sidebar2 h1 {
  font-size: 14px;
  font-weight: 300;
  margin-top: 0px;
}

.sidebar2 .story {
  display: flex;
}

.sidebar2 .story .text {
  width: 67%;
  padding-right: 10px;
}

.sidebar .story {
  display: flex;
}

.sidebar2 .story .image {
  width: 33%;
  padding-left: 0px 10px;
}

.sidebar .story .text {
  width: 67%;
  padding-right: 10px;
}

.sidebar .story .image {
  width: 33%;
  padding-left: 0px 10px;
}

.midlevel .story h1 {
  font-size: 18px;
  font-weight: 300;
}

.midlevel .lead {
  color: #999;
  font-weight: 200;
}

.midlevel2 .photostory h1 {
  font-size: 18px;
  font-weight: 300;
}

.midlevel2 .lead {
  color: #999;
  font-weight: 200;
}

.midlevel2 .photostory .story {
  display: flex;
  padding-right: 20px;
}

.midlevel2 .photostory .story .text {
  width: 50%;
  padding-right: 10px;
}


.midlevel2 .photostory .image {
  width: 50%;
  padding-left: 0px 10px;
}

.photostory .highlight {
  margin: 0px;
  color: #ec1b23;
}

.midlevel2 .sidebar {
  padding: 0px 20px;
  border-left: 1px solid #eee;
}

.midlevel2 .sidebar2 {
  border-left: 1px solid #eee;
}

.imagecredits {
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-size: 5pt;
  color: #5e6a74;
  text-align: right;
  margin: 0px;
}

.author {
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-size: 7pt;
  font-weight: 800;
}

.promotions>h1 {
  text-transform: uppercase;
  font-family: 'Arapey', serif;
  letter-spacing: 2px;
  font-size: 24px;
}

.skinny-left {
  padding-right: 20px;
}

.skinny-right {
  padding-left: 20px;
}

.heading {
  display: flex;
  padding-bottom: 5px;
  border-bottom: 1px solid #999;
}

.heading h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0px;
}

.right {
  margin-left: auto;
}

.see {
  text-transform: uppercase;
  color: #999;
  font-size: 8pt;
  vertical-align: text-bottom;
}

.writer {
  display: flex;
  margin-top: 15px;
}

.writer .image {
  width: 25%;
  padding-right: 10px;
}

.writer img {
  width: 85%;
  border-radius: 50px;
}

.writer .text {
  width: 75%;
  line-height: 16px;
  padding-top: 5px;
}

.writer .author {
  margin: 0px;
}

.writer .lead {
  color: #666;
  margin: 0px;
  font-family: 'Raleway', sans-serif;
  font-size: 9pt;
}

.storycenter {
  display: flex;
  margin-top: 15px;
}

.storycenter .image {
  width: 33%;
  padding-right: 10px;
}


.storycenter .text {
  width: 67%;
}

.storycenter h1 {
  font-size: 24px;
  font-weight: 300;
  margin-top: 0px;
}

.storycenter .author {
  margin-right: 10px;
}

.storycenter .date {
  text-transform: uppercase;
  font-size: 7pt;
  font-weight: 800;
  color: #777;
}

.skinnyright .item h1 {
  font-size: 14px;
  font-weight: 300;
  margin-top: 10px;
}

.number {
  color: #ec1b23;
  margin-right: 10px;
}

.skinnyright .item:not(:first-child) {
  padding-top: 5px;
  border-top: 1px solid #eee;
}

.skinnyright .item:not(:last-child) {
  padding-bottom: 5px;
}

.podcasts {
  margin-top: 30px;
}

.podcast {
  display: flex;
  margin-top: 5px;
}

.podcast .image {
  width: 50%;
}

.podcast .image img {
  width: 90%;
}

.podcast .text {
  width: 50%;
}

.podcast .episode {
  text-transform: uppercase;
  font-size: 7pt;
  font-weight: 800;
  color: #222;
}

.podcast:not(:first-child) {
  padding-top: 10px;
  border-top: 1px solid #eee;
}

.podcast:not(:last-child) {
  padding-bottom: 10px;
}

.sections {
  display: flex;
  margin: 40px 50px;
}

.section {
  width: 33%;
}

.section h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0px;
}

.section:not(:last-child) {
  padding-right: 30px;
}

.section div:first-child {
  border-top: 1px solid #666;
  padding-top: 20px;
}


.section div:not(:first-child) {
  padding-top: 10px;
}

.section div:not(:last-child) {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.footer {
  color: #ccc;
  background-color: black;
  padding: 30px 150px;
}

.sitemap {
  font-size: 13px;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}


.sitemap h1 {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 800;
}

.group {
  width: 20%;
}

.group:not(:first-child) {
  padding-left: 30px;
}

.group:not(:last-child) {
  padding-right: 30px;
}


.legal {
  padding-top: 15px;
  font-size: 10px;
  width: 80%;
}

.policies {
  display: flex;
}

.policies div {
  width: fit-content;
}

.policies div:not(:first-child) {
  padding-left: 5px;
}

.policies div:not(:last-child) {
  padding-right: 5px;
  border-right: 1px solid #ccc;
}

.bottom {
  display: flex;
}

.mark {
  width: 20%;
}

.mark svg {
  float: right;
  fill: #ccc;
  z-index: 5000;
  margin-top: 15px;
  width: 120px;
}

.icons {
  display: flex;
  flex-wrap: wrap;
}

.icons div {
  font-size: 14px;
  margin: 5px 0px;
  width: 33%;
}

#content ul {
  max-width: 100%;
}

.controls {
  background: #000;
  padding: 10px;
  color: white;
  font-size: 14px;
}

.control {
  padding-right: 20px;
}

.spacingOff * {
  padding: 0px !important;
  margin: 0px !important;
}

.hierarchyOff * {
  font-size: 1em !important;
  font-family: sans-serif !important;
  font-weight: normal !important;
  text-transform: none;
  color: #000 !important;
}

.navigationOff .menu {
  display: flex;
  flex-wrap: wrap;
  float: right;
  margin-top: -50px;
  width: 200px;
}

.navigationOff .header {
  border-bottom: none;
}

.navigationOff #brand {
  position: relative;
  float: left;
  top: -40px;
  left: 0%;
  text-align: left;
}

.navigationOff .top-stories {
  margin-top: 160px !important;
  float: clear !important;
}

.colorOff .menu li.special {
  background: #000;
}

.colorOff .photostory .highlight {
  color: #000;
}

.colorOff .number {
  color: #000;
}

.colorOff .header .logo svg {
  fill: #000;
}

.colorOff img {
  -webkit-filter: grayscale(100%);
  /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>
