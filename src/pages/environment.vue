<template>
  <f7-page  >
    <f7-navbar  back-link="Back" title="环境质量" ></f7-navbar>
    <f7-block>
      <f7-row>
        <f7-col>
          <f7-card class="demo-facebook-card">
            <f7-card-header >
              <div class="demo-facebook-avatar"><i class="iconfont icon-wendu"></i></div>
              <div class="demo-facebook-name">温度</div>
              <div class="demo-facebook-date">37℃</div>
            </f7-card-header>
          </f7-card>
        </f7-col>
        <f7-col>
          <f7-card class="demo-facebook-card">
            <f7-card-header >
              <div class="demo-facebook-avatar"><i class="iconfont icon-shidu"></i></div>
              <div class="demo-facebook-name">湿度</div>
              <div class="demo-facebook-date">30%</div>
            </f7-card-header>
          </f7-card>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>
          <f7-card class="demo-facebook-card">
            <f7-card-header >
              <div class="demo-facebook-avatar"><i class="iconfont icon-PM"></i></div>
              <div class="demo-facebook-name">PM 2.5</div>
              <div class="demo-facebook-date">200</div>
            </f7-card-header>
          </f7-card>
        </f7-col>
        <f7-col></f7-col>

      </f7-row>

    </f7-block>
  </f7-page>

</template>
<style scoped>
  .demo-facebook-date{
    color: #00d8a0;
    font-size: 1.5em;
  }
  .iconfont{
    color: #437dff;
    font-size: 4em;
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
      goHome(){
        this.$f7.dialog.alert('绑定成功');
//        alert('绑定成功');
        setTimeout(function(){

          this.$f7router.navigate('/home');
        }.bind(this),3000)

      },
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
