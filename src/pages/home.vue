<template>
  <f7-page>

    <div class="status">{{status}}</div>
    <div class="photo">
      <img src="../images/rob/robot.jpg" alt="">

    </div>
    <f7-block>
      <f7-row>
        <f7-col @click="goPages('/boundStatus')">
          <svg class="icon myIconStyle" >
            <use xlink:href="#icon-chuanranke"></use>
          </svg>
          <f7-button  >绑定</f7-button>
        </f7-col>
        <f7-col >

          <svg class="icon myIconStyle" >
            <use xlink:href="#icon-xiangji"></use>
          </svg>
          <f7-button  >拍照</f7-button>
        </f7-col>
        <f7-col >
          <svg class="icon myIconStyle" >
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <f7-button  >视频录制</f7-button>
        </f7-col>
        <f7-col raised @click="$refs.page.open()" >
          <f7-photo-browser
            :photos="photos"
            type="page"
            theme="dark"
            back-link-text="Back"
            ref="page"
          ></f7-photo-browser>
          <svg class="icon myIconStyle" >
            <use xlink:href="#icon-tupian"></use>
          </svg>
          <f7-button  >相册</f7-button>
        </f7-col>
      </f7-row>

    </f7-block>
    <f7-block>
      <f7-row>
        <f7-col @click="goPages('/connect')">
          <svg class="icon myIconStyle" >
            <use xlink:href="#icon-yiyuan"></use>
          </svg>
          <f7-button  >连接</f7-button>
        </f7-col>
        <f7-col @click="goPages('/environment')">
          <svg class="icon myIconStyle" >
            <use xlink:href="#icon-yuedu"></use>
          </svg>
          <f7-button  >环境质量</f7-button>
        </f7-col>
        <f7-col @click="goPages('/move')">
          <svg class="icon myIconStyle" >
            <use xlink:href="#icon-qitake"></use>
          </svg>
          <f7-button  >行动控制</f7-button>
        </f7-col>
        <f7-col @click="goPages('/updatePass')">
          <svg class="icon myIconStyle" >
            <use xlink:href="#icon-shezhi"></use>
          </svg>
          <f7-button  >修改密码</f7-button>
        </f7-col>

      </f7-row>

    </f7-block>



  </f7-page>
</template>

<style scoped>

  .myIconStyle{
    width:40px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .status{
    position: absolute;
    top: 2vw;
    right: 2vw;
    z-index: 999;
    padding: 2px 0;
    width:100px;
    text-align: center;
    border-radius: 10px;
    background: #4cd992;
    color: #fff;
  }






</style>


<script>

// import Echarts from 'echarts';
//import userMenu from './user_menu.vue';


export default {
//  components:{userMenu},
  data() {
    return {
      status:'失去连接',
      page:null,
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
          html: '<video controls="controls"  src="http://video.699pic.com/videos/97/38/78/b_fwndiv2VJik31552973878_10s.mp4"></video>',
          caption: 'Beautiful mountains in Zhangjiajie, China',
        },
      ],

    }
  },
  methods: {
    goPages(herf){
      console.log(herf);
      this.$f7router.navigate(herf);

    },
    // 新增用户查看更多
//    viewMore: function () {
//      var el = event.currentTarget;
//      console.log('el.user_id------------------');
//      console.log(el.id);
//
//      this.$f7router.navigate('/user-details/' + el.id);
//      // this.$f7router.navigate('/not-found/');


//    },

//    loginOut() {
//      window.localStorage.clear('token');
//      // console.log("token："+window.localStorage.getItem('token'));
//      this.$f7router.navigate('/login/', {reloadAll: true});
//
//
//    },
  },


  created: function () {
//      console.log('----home created----');
//      this.$http.get(this.URL + '/api/dashboard-data', {emulateJSON: true}).then(function (response) {
//        // 响应成功回调
//        this.api(response);
//        console.log(response.data.data);
//
//        console.log(this.name);
//        this.WechatNewFansLists = response.data.data.WechatNewFansList.slice(0, 7);
//        this.WechatNewMessages = response.data.data.WechatNewMessage;
//        this.wechatCount = response.data.data.WechatCount;
//        this.memberCount = response.data.data.memberCount
//        console.log(response.data.data.WechatNewMessage);
//
//
//      }, function (response) {
//        // 响应错误回调
//        console.log(response);
//        console.log('failed')
//      });
//      this.user_name = localStorage.user_name;
//      console.log(this.user_name);
  },


}
</script>
