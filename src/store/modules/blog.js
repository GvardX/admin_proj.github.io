
const blog = {
    state: {
        data: []
    },
    getters: {
        posts(state){
            return state.data
        }
    },
    mutations: {
        addNewBlog(state, newBlog){
            return state.data.push(newBlog);
            console.log(newBlog);
        }
    },
}

export default blog