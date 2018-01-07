<template lang="pug">
    .about
        h2.h2.about-title Страница «Обо мне»
        .skillsList-wrapper
            .skillsList(v-for="(skillTitle, index) in skillsTitle" :key="index" )
                skills-list(:skillTitle="skillTitle" :skills="skills")
            
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    components: {
        skillsList: require('./aboutSkillsList')
    },
    data(){
        return{
            skillsTitle: ['Frontend', 'Workflow', 'Backend'],
        }
    },
    computed: {
        ...mapGetters(['skills']),
    },
    methods: {
        ...mapActions(['getSkills']),
    },
    created(){
        this.getSkills();
    }
}
</script>

<style lang="scss" src="../styles/componentsStyles/about.scss"></style>
