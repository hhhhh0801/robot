<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <!--<f7-statusbar></f7-statusbar>-->

    <!-- Left Panel -->
    <!-- <f7-panel left reveal>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>
 -->
    <!--<Panel-left></Panel-left>-->
    <!-- Right Panel -->
<!--     <f7-panel right cover>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel> -->

    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>



  </f7-app>
</template>
<style>


</style>
<script>
// Import Routes
import routes from './routes.js';
export default {


  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.framework7.testapp', // App bundle ID
        name: '智能迎宾机器人', // App name
        theme: 'md', // Automatic theme detection
        // App routes
        routes: routes,

      },
    }
  },

  mounted: function() {
      // console.log(this.f7params);
  }



}

</script>
