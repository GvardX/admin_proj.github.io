<template lang="pug">
  .tabs
    ul.tabs-list
        li.tabs-item(v-for="tab in tabs")
            router-link(:to="tab.href" exact-active-class="active-tab").tabs-link {{tab.name}}
</template>

<script>
export default {
    data(){
        return{
            tabs:   [
                {name: 'Tab 1', href: '/'},
                {name: 'Tab 2', href: '/blog'},
                {name: 'Tab 3', href: '/works'},
                
            ]
        }
    }
}
</script>

<style lang="scss" src="../styles/componentsStyles/tabs.scss">

</style>
