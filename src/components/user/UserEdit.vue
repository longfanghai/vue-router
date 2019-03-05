<template>
<div>
    <h3>Edit the User</h3>
    <p>id:{{$route.params.id}}</p>
    <div style="height:700px;"></div>
   	 	<p id="data">Some extra data</p>
</div>
</template>
<script>
export default {
    data(){
        return {
            confimd:false
        }
    },
    beforeRouteLeave (to, from, next) {
        
            if(confirm('are you sure?')){
                next()
            }else{
                next(false)
            }
        
    }
}
</script>
