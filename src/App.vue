<template lang="pug">
  .app
    .header
      app-header
    .tabs
      tabs
    .content
      router-view
</template>

<script>
export default {
  name: 'app',
  components:{
    appHeader: require('./componentsVue/header'),
    tabs: require('./componentsVue/tabs'),
    about: require('./componentsVue/about'),
    
  }
}
</script>

<style lang="scss" ></style>
