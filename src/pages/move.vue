<template>
  <f7-page  >
    <f7-navbar  back-link="Back" title="机器人控制"></f7-navbar>
<div v-show="aaa">123456</div>
    <div v-show="bbb">hhhhhhhh</div>

    <div class="move">

      <div class="control">
        <i class="material-icons left" @touchstart="goLeft" @touchend="bbb=true">keyboard_arrow_left</i>
        <i class="material-icons down" @touchstart="goDown">keyboard_arrow_down</i>
        <i class="material-icons right " @touchstart="goRight">keyboard_arrow_right</i>
        <i class="material-icons up" @touchstart="goUp">keyboard_arrow_up</i>
        <svg class="icon myIconStyle" >
          <use xlink:href="#icon-jiqiren1"></use>
        </svg>

      </div>

    </div>
  </f7-page>

</template>
<style scoped>
  .move{
    width: 100%;
    position: absolute;
    top:50%;
    transform: translate(0, -50%);
  }
  .control{
    position: relative;
    margin: 0 auto!important;
    width: 70vw;
    height: 70vw;
    background: #000;
    opacity: 0.7;
    border-radius: 50%;
  }
  .up{
    position: absolute;
    top:-8vw;
    left:50%;
    transform: translate(-50%,0);
    /*transition: all .28s ;*/

  }
  .right{
    position: absolute;
    right: -8vw;
    top:50%;
    transform: translate(0,-50%);
    /*transition: all .28s ;*/


  }
  .down{
    position: absolute;
    bottom: -8vw;
    left:50%;
    transform: translate(-50%,0);
    /*transition: all .28s ;*/

  }
  .left{
    position: absolute;
    left:-8vw;
    top:50%;
    transform: translate(0,-50%);
    /*transition: all .28s ;*/
  }
  /*.left:hover{*/
    /*font-size: 40vw;*/
  /*}*/
  /*.right:hover{*/
    /*font-size: 40vw;*/
  /*}*/
  /*.down:hover{*/
    /*font-size: 40vw;*/
  /*}*/
  /*.up:hover{*/
    /*font-size: 40vw;*/
  /*}*/
  .material-icons{
    font-size: 30vw;
    color: #00d8a0;

  }
  .myIconStyle{
    width: 15vw;
    height: 15vw;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
</style>
<script>


  export default {
    data() {
      return {
        aaa:false,
        bbb:false,

        password:'',
        newPassword:'',
        ackPassword:'',
        page:null,
        screenClose:true
      }
    },
    methods:{
      update(){
        console.log('update')
      },
      goLeft(){
        console.log('left')
        this.aaa=true;

      },
      goRight(){
        console.log('right')

      },
      goDown(){
        console.log('down')

      },
      goUp(){
        console.log('up')

      }

    },




  }

</script>
