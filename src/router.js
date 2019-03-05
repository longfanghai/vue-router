import home from './components/Home'
import header from './components/header'
import { resolve } from 'path';
/* import userstart from './components/user/UserStart.vue'
import userdetail from './components/user/UserDetail.vue'
import useredit from './components/user/UserEdit.vue'
import user from './components/user/User.vue' */

const user=resolve=>{
    require.ensure(['./components/user/User.vue'],()=>{
         resolve(require('./components/user/User.vue'))
    },'user')
}
const useredit=resolve=>{
    require.ensure(['./components/user/UserEdit.vue'],()=>{
         resolve(require('./components/user/UserEdit.vue'))
    },'user')
}
const userdetail=resolve=>{
    require.ensure(['./components/user/UserDetail.vue'],()=>{
         resolve(require('./components/user/UserDetail.vue'))
    },'user')
}
const userstart=resolve=>{
    require.ensure(['./components/user/UserStart.vue'],()=>{
         resolve(require('./components/user/UserStart.vue'))
    },'user')
}
export const routes=[
    {path:'/',components: {
        default:home,
        'header-top': header,
        'header-bottom': header
    },name:'home'},
    {path:'/user',components: {
        default:user,
        'header-bottom':header,
        'header-top': header
    },children:[
        {path:'',component:userstart},
        {path:':id',component:userdetail,beforeEnter: (to, from, next) => {
            // ...
            console.log(to);
            next()
        }},
        {path:':id/edit',component:useredit,name:'useredit'}
    ]},
    {path:'*',redirect: '/'}
]