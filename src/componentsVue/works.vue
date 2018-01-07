<template lang="pug">
    .works
        h2.h2.blog-title Страница «Мои работы»
        .input-block
            .addNote Добавить запись
            input.input-works(type="text" placeholder="Название")
            input.input-blog(type="date" placeholder="Дата")
            label.loadPic
                .icon-loadPic
                input.input-file(type='file')
                span.span.input-text Загрузить картинку  
            button.button.button-works(type="button" @click='addBlog') Добавить

</template>

<script>
export default {
   
}
</script>

<style lang="scss" src="../styles/componentsStyles/works.scss">

</style>