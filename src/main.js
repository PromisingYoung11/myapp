import Vue from 'vue'
// import { Row, Button } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import mock from './api/mock'
import Cookies from 'js-cookie';

//全局引入
Vue.use(ElementUI);
//按需引入
// Vue.use(Row);
// Vue.use(Button);
Vue.config.productionTip = false


// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
    //判断token存不存在
    const token = Cookies.get('token')
        // 如果token不存在，说明当前用户未登录，应该跳转至登陆页
    if (!token && to.name !== 'login') { //需要跳转的页面不是login时
        next({ name: 'login' })
    } else if (token && to.name === 'login') { //token存在用户已登录 此时跳转到首页
        next({ name: 'home' })
    } else {
        next();
    }
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')