<template>
  <f7-page  >
    <div id="boundStatus">

      <f7-navbar  back-link="Back" title="连接机器人" ></f7-navbar>
      <div class="photo">
        <img src="../images/rob/robot.jpg" alt="">

      </div>
      <f7-card>
        <f7-list>
          <f7-list-item  header="机器人编号" title="12345678" >
            <!--<f7-icon slot="media" icon="demo-list-icon"></f7-icon>-->
            <div class="item-after connectRobot" v-if='connect==1'  @click="connectRobot">连接机器人</div>
            <div class="item-after closeConnectRobot" v-if='connect==2'  @click="closeConnectRobot">断开机器人</div>

            <!--<f7-list-after v-if='connect==1' class="closeBound" @click="connectRobot">连接机器人</f7-list-after>-->
            <!--<f7-list-after v-if='connect==2' class="closeBound" @click="closeConnectRobot">断开机器人</f7-list-after>-->

          </f7-list-item>
        </f7-list>
      </f7-card>
    </div>

  </f7-page>

</template>

<style scoped lang="less">
  /*@import '../css/myless.less';*/
  .demo-facebook-date{
    color: #00d8a0;
    font-size: 1.5em;
  }
  .iconfont{
    color: #437dff;
    font-size: 4em;
  }
  .connectRobot{
    color: #437dff!important;
    font-size: 1em!important;
  }
  .closeConnectRobot{
    color: red!important;
    font-size: 1em!important;

  }
</style>
<script>
  //  import './css/myless.less';


  export default {
    data() {
      return {
        username:'',
        pwd:'',
        page:null,
        screenClose:true,
        connect:1
      }
    },
    methods:{
      connectRobot(){
//        this.$f7router.navigate('/bound');
        this.$f7.dialog.alert('连接成功');

        console.log('connect');
        this.connect=2;

      },
      closeConnectRobot(){
        this.$f7.dialog.alert('断开连接成功');

        console.log('closeconnect');
        this.connect=1;
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
