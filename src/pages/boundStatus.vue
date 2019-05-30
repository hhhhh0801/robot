<template>
  <f7-page  >
    <div id="boundStatus">
      <f7-navbar  back-link="Back" title="绑定" ></f7-navbar>
      <div class="photo">
        <img src="../images/rob/robot.jpg" alt="">

      </div>
      <f7-card>
        <f7-list>
          <f7-list-item  header="机器人编号" title="12345678" >
            <!--<f7-icon slot="media" icon="demo-list-icon"></f7-icon>-->
            <div  class="item-after closeBound" @click="removeBound">解开绑定</div>
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
  .closeBound{
    color: #437dff!important;

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
        screenClose:true
      }
    },
    methods: {
      removeBound() {
//        console.log('removeBound');
        this.$f7.dialog.alert('解除绑定成功');
        setTimeout(function () {
          this.$f7router.navigate('/bound');
        }.bind(this), 3000)

      },

    }



  }

</script>
