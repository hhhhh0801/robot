<template>
  <f7-page  >
    <f7-navbar  back-link="Back" title="相册" ></f7-navbar>
    <f7-block>
      <f7-row>
        <!--<f7-col>-->
          <!--<f7-photo-browser-->
            <!--:photos="photos"-->
            <!--ref="standalone"-->
          <!--&gt;</f7-photo-browser>-->
          <!--<f7-button raised @click="$refs.standalone.open()">Standalone</f7-button>-->
        <!--</f7-col>-->
        <!--<f7-col>-->
          <!--<f7-photo-browser-->
            <!--:photos="photos"-->
            <!--type="popup"-->
            <!--ref="popup"-->
          <!--&gt;</f7-photo-browser>-->
          <!--<f7-button raised @click="$refs.popup.open()">Popup</f7-button>-->
        <!--</f7-col>-->
        <f7-col>
          <f7-photo-browser
            :photos="photos"
            type="page"
            theme="dark"
            back-link-text="Back"
            ref="page"
          ></f7-photo-browser>
          <img src="../images/bj.png" raised @click="$refs.page.open()" style="width: 100px;height: 100px;">
          <!--<f7-button raised @click="$refs.page.open()">Page</f7-button>-->
        </f7-col>
      </f7-row>
    </f7-block>

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
        photos: [
          {
            url: 'https://img.zcool.cn/community/01b9345b1f835aa8012034f7daf58c.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
            caption: '',
          },
          {
            url: 'https://img.zcool.cn/community/0139015b9f620da801213dea9c1d29.jpg@260w_195h_1c_1e_1o_100sh.jpg',
            caption: 'I met this monkey in Chinese mountains',
          },
          {
            url: 'https://hbimg.huabanimg.com/2cf32215d7e4f26dc896291f7d64998bce9ae6d7de592-LIIuKz_fw658',
            caption: 'Beautiful mountains in Zhangjiajie, China',
          },
        ],
      };
    },
  }

</script>
