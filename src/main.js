// Import Vue
import Vue from 'vue';

// Import F7
import echarts from 'echarts';

import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

import '../assets/icon/iconfont.css';
import '../assets/icon/iconfont.js';


import VueResource from 'vue-resource';
// import axios from 'axios'
// import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个

import VueRouter from 'vue-router';

import Jquery from './js/jquery-1.11.3.js';

// import Audit from './js/audit/logger.js';


import routes from './routes.js'

// Import F7 Styles
// import Framework7Styles from 'framework7/css/framework7.css';

import MainStyles from './css/main.css';
import Framework7Styles from './css/framework7.css';
// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import App Component
import App from './app';


import Login from './js/login';

import api from './js/api'

Vue.use(api);


Vue.use(VueResource);
Vue.use(VueRouter);
// Init F7 Vue Plugin
Vue.use(routes);

// window.auditUrl = '/mymodulename/javascript/log';
// Vue.prototype.axios = axios;
// Vue.prototype.qs = Qs;



Framework7.use(Framework7Vue,Framework7);

Vue.prototype.$echarts = echarts;

// Vue.prototype.URL = process.env.API_ROOT;//正式平台
// Vue.prototype.URL = 'http://local.misurino-crm.com';//测试平台
 // Vue.prototype.URL = '/api';//本地
let host = window.location.host;
console.log(host);
if(host == 'local.misurino-crm.cn'){
	Vue.prototype.URL = 'http://local.misurino-crm.cn/admin';//本地测试平台
		console.log(Vue.prototype.URL);
}
else if (host == 'misurino-crm-uat.archisense.cn'){
	Vue.prototype.URL = 'http://misurino-crm-uat.archisense.cn/admin';//uat测试平台
	console.log(Vue.prototype.URL);
}else if (host == 'misurino.marksense.cn'){
	Vue.prototype.URL = 'http://misurino.marksense.cn/admin';//正式平台
	console.log(Vue.prototype.URL);
}
else{
	Vue.prototype.URL = '/api/admin';//开发
	console.log(Vue.prototype.URL);
}
console.log(Vue.prototype.URL);
// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  }
});



