<template>
  <header id="baseHeader" class="sticky-top">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-12">
          <b-navbar
            type="light"
            class="px-0 py-space-xxs py-lg-space-xs d-flex justify-content-between"
          >
            <b-nav-item to="/" target="_self">
              <img
                class="logo d-lg-block"
                :src="require(`../assets/images/logo.png`)"
              />
            </b-nav-item>

            <b-nav-item><p>Coming Soon</p></b-nav-item>
            <b-nav-item
              class="fly-now d-none d-sm-inline-flex"
              @click="scrollToSection"
              >Fly Now</b-nav-item
            >
          </b-navbar>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { BNavbar, BCollapse, BNavbarNav, BNavItem } from "bootstrap-vue";

export default {
  name: "HeaderPartner",
  components: {
    "b-navbar": BNavbar,
    "b-collapse": BCollapse,
    "b-navbar-nav": BNavbarNav,
    "b-nav-item": BNavItem,
  },
  data() {
    return {};
  },
  methods: {
    scrollToSection() {
      var element = document.getElementById("contact-us");
      element.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  max-height: 47px;
}
#baseHeader {
  background: #000;
}
</style>
