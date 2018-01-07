<template lang="pug">
    .blog
        h2.h2.blog-title Страница «Блог»
        .input-block
            .addNote Добавить запись
            input.input-blog(type="text" placeholder="Название" v-model='blog.title')
            input.input-blog(type="date" placeholder="Дата" v-model='blog.date')
            textarea.input-blog.input-textarea(type="text" placeholder="Содержание" v-model='blog.content')
            button.button.button-blog(type="button" @click='addBlog') Добавить
        .test-blog(v-for='post in posts')
            .test-title {{post.title}}
            .test-date {{post.date}}
            .test-content {{post.content}}
            
            
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
   data(){
       return{
           blog:{
               title: '',
               date: '',
               content: ''
           }
       }
   },
   methods: {
       ...mapMutations(['addNewBlog']),
       addBlog(){     
            this.addNewBlog({
                title: this.blog.title,
                date: this.blog.date,
                content: this.blog.content
            }),
            this.blog.title = '',
            this.blog.date = '',
            this.blog.content = ''
       }
   },
   computed: {
       ...mapGetters(['posts'])
   },
}
</script>

<style lang="scss" src="../styles/componentsStyles/blog.scss">

</style>