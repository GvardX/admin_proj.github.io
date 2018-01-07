<template lang="pug">
    div
        .skillTitle {{skillTitle}}
        table.table
            skills-item(v-for="skill in skills" :key="skill.id" :skill="skill" v-if="checkSkillType(skillTitle) == skill.type" @removeSkill="removeSkill")
        button.button.button-addSkill(type='button' @click="addSkill").addSkill Добавить
        input.input-addSkill(type="text" @keydown.enter="addSkill" v-model="newSkill")
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props: {
        skillTitle: String,
        skills: Array,
    },
    data(){
        return{
            newSkill: '',
        }   
    },
    methods: {
        ...mapMutations(['addNewSkill', 'removeExistedSkill']),
        addSkill(){
            this.addNewSkill({
                id: Math.round(Math.random()*1000),
                name: this.newSkill,
                percents: 0,
                type: this.checkSkillType(this.skillTitle)
            });
            this.newSkill = ''
        },
        removeSkill(skillID){
            this.removeExistedSkill(skillID);
        },
        checkSkillType(skillTitle){
            switch(skillTitle){
                case 'Frontend':
                    return 1
                case 'Workflow':
                    return 2
                case 'Backend':
                    return 3
            }
        }
    },
    components:{
        skillsItem: require('./aboutSkillsItem')
    }
}
</script>

<style lang="scss" src="../styles/componentsStyles/aboutSkillsList.scss">

</style>
