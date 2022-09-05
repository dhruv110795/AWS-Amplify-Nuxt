<template>
  <div>
    <base-header />
    <Nuxt />
  </div>
</template>
<script>
import BaseHeader from "../components/BaseHeader.vue";

export default {
  name: "DefaultLayout",
  components: {
    "base-header": BaseHeader,
  },
};
</script>
