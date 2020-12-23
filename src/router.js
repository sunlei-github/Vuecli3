import router from 'vue-router';
// import divrouter1 from "./components/divrouter1.vue"
const user={
    template: '<div>User</div>'
}

export default new router({
    routes:[
        {
            path:'/router1',
            component:user
        }
    ]
})