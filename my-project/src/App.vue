<template>
  <div>
    <v-header></v-header>
    <v-section></v-section>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'
  import section from './components/section/section.vue'
  export default {
    components: {
      'v-header': header,
      'v-footer': footer,
      'v-section': section
    }
  }
</script>

<style>

</style>
