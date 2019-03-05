<template>
    <div>
        <p>
            id:{{$route.params.id}}
            <!-- <router-link tag="button" class="btn brn-primary" 
            :to="'/user/'+$route.params.id+'/edit'">edit</router-link> -->
            <router-link tag="button" class="btn btn-primary" 
            :to="link">edit</router-link>
        </p>
    </div>
</template>
<<script>
export default {
    data(){
        return {
            link:{
                name:'useredit',
                params:{id:this.$route.params.id},
                query:{local:'zf',q:123},
                hash:'#data'
            }
        }
    },
       beforeRouteUpdate(to,from,next){
        console.log(this.$route+'12')
    }
}
</script>