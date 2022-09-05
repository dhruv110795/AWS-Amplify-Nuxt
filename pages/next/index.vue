<template>
  <section class="grail grail-active" id="grail">
    <div class="number">0006</div>

    <div class="container">
      <h2>
        <span>Brand-</span>
        On
      </h2>

      <div class="planet">
        <div class="world-steez-ring">
          <img
            src="https://brandoncjohnson.com/assets/img/grail-steez-ring.svg"
            alt="steez"
          />
        </div>
        <div class="world-steez">
          <img
            src="https://brandoncjohnson.com/assets/img/grail-circle.svg"
            alt="steez"
          />
        </div>
        <div class="world">
          <!-- <img
            src="https://brandoncjohnson.com/assets/img/grail-world.png"
            alt="world"
          /> -->
          <img src="~/assets/images/earth.png" alt="world" />
        </div>
      </div>
      <!-- end .planet -->
      <div class="text">
        <h3>Grail</h3>
        <p>
          I was lucky enough to see the launch of the NASA’s GRAIL mission and
          have presented at several team meetings. One of my driving goals is to
          be an investigator on a successful space mission.
        </p>

        <div class="vert-line"></div>
      </div>
      <div class="cv">
        <!-- <a href="">Latest News</a> <span>|</span>  --><a
          href="https://www.eaps.purdue.edu/people/faculty-pages/vitae/johnson-b.pdf"
          target="_blank"
          >Download CV</a
        >
      </div>
    </div>
    <!-- end .container -->
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grail {
  background: #000000;
  padding: 200px 0px;
  text-align: center;
  position: relative;
  color: #ffffff;
  padding-bottom: 0px;
  overflow: hidden;
  font-family: "Lucida Sans Typewriter", "Lucida Console", Monaco,
    "Bitstream Vera Sans Mono", monospace;
}

@media (max-width: 767px) {
  .grail {
    padding: 100px 0px;
  }
}

.grail .planet {
  height: 270px;
  position: relative;
}

@media (max-width: 767px) {
  .grail .planet {
    height: 20px;
  }
}

.grail .planet .world {
  width: 880px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  top: -260px;
  z-index: 5;
  img {
    width: 100%;
  }
}

@media (max-width: 960px) {
  .grail .planet .world {
    width: 700px;
    top: -200px;
  }
}

@media (max-width: 767px) {
  .grail .planet .world {
    display: none;
  }
}

.grail .planet .world-steez {
  -webkit-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -moz-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -ms-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transform: rotate(12deg) scale(0.8);
  -moz-transform: rotate(12deg) scale(0.8);
  -ms-transform: rotate(12deg) scale(0.8);
  transform: rotate(12deg) scale(0.8);
  width: 800px;
  left: 0px;
  right: 0px;
  top: -225px;
  margin: auto;
  position: absolute;
  z-index: 4;
}

@media (max-width: 960px) {
  .grail .planet .world-steez {
    width: 600px;
    top: -155px;
  }
}

@media (max-width: 767px) {
  .grail .planet .world-steez {
    display: none;
  }
}

.grail .planet .world-steez-ring {
  -webkit-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -moz-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -ms-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  position: absolute;
  width: 1065px;
  z-index: 6;
  left: 0px;
  right: 0px;
  top: 195px;
  margin: auto;
  opacity: 0;
}

@media (max-width: 1150px) {
  .grail .planet .world-steez-ring {
    left: -85px;
  }
}

@media (max-width: 960px) {
  .grail .planet .world-steez-ring {
    width: 865px;
  }
}

@media (max-width: 767px) {
  .grail .planet .world-steez-ring {
    display: none;
  }
}

.grail .text {
  position: relative;
  z-index: 10;
  width: 380px;
  margin: auto;
}

@media (max-width: 767px) {
  .grail .text {
    width: 100%;
  }
}

.grail .vert-line {
  -webkit-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -moz-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -ms-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1.5s all cubic-bezier(0.23, 1, 0.32, 1);
  width: 1px;
  background: #232323;
  height: 0px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  top: 240px;
}

@media (max-width: 767px) {
  .grail .vert-line {
    display: none;
  }
}

.grail .cv {
  color: #363636;
  margin-top: 290px;
  padding-top: 40px;
}

@media (max-width: 767px) {
  .grail .cv {
    margin-top: 20px;
  }
}

.grail .cv span {
  margin: 0px 5px;
}

.grail .cv a {
  color: #868686;
}

.grail .cv a:hover {
  color: #ffffff;
}

.grail .scroll {
  padding-top: 50px;
  margin-bottom: 100px;
  height: 30px;
  overflow: hidden;
}

@media (max-width: 767px) {
  .grail .scroll {
    margin-bottom: 70px;
  }
}

.grail .scroll svg,
.grail .scroll img {
  width: 20px;
  height: 30px;
}

.grail .scroll path {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  fill: #303030;
}

.grail .scroll a:hover path {
  fill: #ffffff;
}

.grail .logo {
  width: 140px;
  margin: auto;
  margin-bottom: -50px;
}

@media (max-width: 767px) {
  .grail .logo {
    width: 100px;
    margin-bottom: 0px;
  }
}

.grail .logo img {
  width: 140px;
}

@media (max-width: 767px) {
  .grail .logo img {
    width: 100px;
  }
}

.grail .logo a {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  display: block;
  padding: 20px;
  opacity: 0.7;
  border: 7px solid rgba(255, 255, 255, 0.22);
}

.grail .logo a:hover {
  opacity: 1;
  border: 7px solid #fff;
}

.grail h2 {
  color: #ffffff;
  font-size: 300px;
  line-height: 300px;
}

@media (max-width: 767px) {
  .grail h2 {
    font-size: 120px;
    line-height: 120px;
  }
}

.grail h2 span {
  font-size: 12px;
  letter-spacing: 4px;
  display: block;
  line-height: 12px;
  color: #484644;
  font-weight: normal;
}

.grail h3 {
  font-size: 60px;
  line-height: 60px;
  color: #ffffff;
}

@media (max-width: 767px) {
  .grail h3 {
    font-size: 40px;
    line-height: 40px;
  }
}

.grail-active .planet .world-steez-ring {
  top: 95px;
  opacity: 1;
}

.grail-active .planet .world-steez {
  -webkit-transform: rotate(0deg) scale(1);
  -moz-transform: rotate(0deg) scale(1);
  -ms-transform: rotate(0deg) scale(1);
  transform: rotate(0deg) scale(1);
}

.grail-active .vert-line {
  height: 250px;
}
</style>
