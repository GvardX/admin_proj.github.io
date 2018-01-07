<template lang="pug">
    tr.item-row
        td.td.td-name {{skill.name}}
        td.td.td-input
            input.input(type="text" :value="skill.percents")
        td.td.td-percents %
        td.td.td-button 
            div(@click="removeSkill").td-button-x х
        
</template>

<script>
export default {
    props: {
        skill: Object,
    },
    methods: {
        removeSkill(){
            this.$emit('removeSkill', this.skill.id)
        }
    }
}
</script>

<style lang="scss" src="../styles/componentsStyles/aboutSkillsItem.scss">

</style>