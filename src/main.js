// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from "./store/store";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$baseUrl = process.env.BASE_URL;

Vue.prototype.$requestParam = function(param) {
    var urlParam = new URLSearchParams()
    for (var key in param) {
        if (null != param[key] && '' != param[key]) {
            urlParam.append(key, param[key]);
        }
    }
    return urlParam;
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})