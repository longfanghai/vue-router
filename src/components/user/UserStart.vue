<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link tag="li" class="list-group-item" to="/user/1">user1</router-link>
            <router-link tag="li" class="list-group-item" to="/user/2">user2</router-link>
            <router-link tag="li" class="list-group-item" to="/user/3">user3</router-link>
        </ul>
        <input @click="add" type="button" value="jia">{{num}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:0
        }
    },
    methods:{
        add(){
            return this.num++
        }
    }
   
}
</script>
