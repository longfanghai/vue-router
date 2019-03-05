<template>
    <div>
       <h1>The User Page</h1>
       <router-view></router-view>
       <button class="btn btn-primary" @click="goHome">gohome</button>
       
       {{id}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            num:18
        }
    },
    methods:{
        goHome(){
          this.$router.push({path:'/'})
        }
    },
    mounted(){
        console.log(this.$route.meta.keepAlive)
    },
    //在路由独享守卫后调用 不！能！获取组件实例 `this`，组件实例还没被创建
    beforeRouteEnter (to, from, next) {
        console.log('router enter');
        next(vm=>{
             // 通过 `vm` 访问组件实例`this` 执行回调的时机在mounted后面
            console.log(vm.num+'next 回调访问this')//18
        })
    },
    // 导航离开该组件的对应路由时调用，可以访问组件实例 `this`
    beforeRouteLeave (to, from, next) {
        console.log(this.$route);
        next()// 允许离开或者可以跳到别的路由 
       //  next(false); // 取消离开
    },
// 在当前路由改变，但是该组件被复用时调用 可以访问组件实例 `this`
// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    beforeRouteUpdate(to,from,next){
        console.log(this.$route+'routeupdate')
        next()
    }
}
</script>
