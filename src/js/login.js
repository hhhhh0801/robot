import Vue from 'vue';

import VueResource from 'vue-resource';

// import VueRouter from 'vue-router';


import routes from '../routes.js';

Vue.use(VueResource);
// Vue.use(VueRouter);
// this.$route.push('/login');

// console.log(_this.code);
Vue.http.interceptors.push((request, next) => {
  if (window.localStorage.getItem('token')) {

  	console.log(request.headers);
  	console.log(1111);
	// request.method = 'options';
    // request.headers.set('Authorization', window.localStorage.getItem('token'));
    Vue.http.headers.common.Authentication = window.localStorage.getItem('token');

    console.log(request.headers);
	}
    next((response) => {//在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
    	

  });
})

