<template>
  <f7-page class="homebg" >
    <f7-navbar  back-link="Back" title="注册"></f7-navbar>

    <div class="registerForm">
      <f7-list no-hairlines-md >
        <f7-list-input
          outline
          label="请输入手机号"
          floating-label
          type="number"
          placeholder="请输入手机号"
          clear-button
        >
          <f7-icon material="account_box" slot="media"></f7-icon>
        </f7-list-input>
        <f7-list-input
          outline
          label="请输入密码"
          floating-label
          type="password"
          placeholder="请输入密码"
          clear-button
        >
          <f7-icon  material="lock" slot="media"></f7-icon>
        </f7-list-input>
        <f7-list-input
          outline
          label="请再次输入密码"
          floating-label
          type="password"
          placeholder="请再次输入密码"
          clear-button
        >
          <f7-icon  material="lock" slot="media"></f7-icon>
        </f7-list-input>
      </f7-list>
      <f7-block>
        <f7-row>
          <f7-col>
            <f7-button fill round>注册</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>

    </div>
  </f7-page>

</template>
<style>
  .registerForm{
    width: 100%;
    position: absolute;
    top:50%;
    transform: translate(0, -50%);
  }
</style>
<script>


  export default {
    data() {
      return {
        username:'',
        pwd:'',
        page:null,
        screenClose:true
      }
    },
    methods:{
//      login(){
//        //获取用户名和密码
//        const self = this;
//        const app = self.$f7;
//        this.$http.post(
//          this.URL+'/site/login',
//          {username:this.username,password:this.pwd},
//          {emulateJSON:true},
//        )
//          .then(function (response) {
//            // 响应成功回调
//            this.api(response);
//            console.log("response.data.1234567777777777777777777777777");
//            console.log(response.data.code);
//            if(response.data.code == 0){
//              localStorage.setItem('token',response.data.data.access_token);
//              window.localStorage.setItem('user_name',this.username);
//
//              var menu = JSON.stringify(response.data.data.menu);
//              window.localStorage.setItem('left_menu',menu);
//              console.log(menu);
//
//              this.screenClose = false;
//              self.$f7router.navigate('/');
//            }else{
//              app.dialog.alert('账号或密码输入错误');
//            }
//          }, function (response) {
//            // 响应错误回调
//            console.log(response)
//            console.log('failed')
//          });
//        // myApp.closeModal(loginScreen);
//
//      }
    },




  }

</script>
