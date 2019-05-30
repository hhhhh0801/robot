import HomePage from './pages/home.vue';


import LoginPage from './pages/login.vue';
import RegisterPage from './pages/register.vue';
import UpdatePassPage from './pages/updatePass.vue';
import MovePage from './pages/move.vue';
import PhotographPage from './pages/photograph.vue';
import PicturesPage from './pages/pictures.vue';
import VideoPage from './pages/video.vue';
import BoundPage from './pages/bound.vue';
import BoundStatusPage from './pages/boundStatus.vue';
import ConnectPage from './pages/connect.vue';
import EnvironmentPage from './pages/environment.vue';









// import UserListPage from './pages/user-list.vue';
// import UserDetailsPage from './pages/user-details.vue';
//
//
//
//
//
//
// import MsgListPage from './pages/msg-list.vue';
// //
// import MsgListMorePage from './pages/msg-list-more.vue';
//
// import UserAssistantPage from './pages/user-assistant.vue';
// import StoreListPage from './pages/store-list.vue';
// import SellReportPage from './pages/sell-report.vue';
//
//
//
//
// import LabelListPage from './pages/label-list.vue';
// import LoginPage from './pages/login.vue';
// import QrcodePage from './pages/qrcode.vue';
// import NewQrcodePage from './pages/new-qrcode.vue';
// import AutoreplyPage from './pages/autoreply.vue';
// import MainreplyPage from './pages/mainreply.vue';
// import OrderListPage from './pages/order-list.vue';
// import OrderDetailsPage from './pages/order-details.vue';
// import UserinteractivePage from './pages/user-interactive.vue';
// import NewMainreplyPage from './pages/new-mainreply.vue';
// import DynamicRoutePage from './pages/dynamic-route.vue';
// import MenuSettingsPage from './pages/menu-settings.vue';
// import TemplateMesPage from './pages/template-mes.vue';
import NotFoundPage from './pages/not-found.vue';
//
// import QrcodeReportPage from './pages/qrcode-report.vue';
// import MenuReportPage from './pages/menu-report.vue';
// import UserReportPage from './pages/user-report.vue';
//
// import PanelLeftPage from './pages/panel-left.vue';
// import PanelRightPage from './pages/panel-right.vue';

export default [

  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/home',
    component: HomePage,
    // reloadAll:true
  },
  {
    path: '/updatePass',
    component: UpdatePassPage,
    // reloadAll:true
  },
  {
    path: '/move',
    component:MovePage,
    // reloadAll:true
  },
  {
    path: '/photograph',
    component:PhotographPage,
    // reloadAll:true
  },
  {
    path: '/pictures',
    component:PicturesPage,
    // reloadAll:true
  },
  {
    path: '/video',
    component:VideoPage,
    // reloadAll:true
  },
  {
    path: '/bound',
    component:BoundPage
    ,
    // reloadAll:true
  },
  {
    path: '/boundStatus',
    component:BoundStatusPage
    ,
    // reloadAll:true
  },
  {
    path: '/environment',
    component:EnvironmentPage,
    // reloadAll:true
  },
  {
    path: '/connect',
    component:ConnectPage,
    // reloadAll:true
  },

  // {
  //   path: '/autoreply/',
  //   component: AutoreplyPage,
  //   // reloadAll:true
  // },
  // {
  //   path: '/mainreply/',
  //   component:MainreplyPage,
  //   // reloadAll:true
  // },
  // {
  //   path: '/new-mainreply/:id',
  //   component:NewMainreplyPage,
  //   // reloadAll:true
  // },
  // {
  //   path: '/template-mes/',
  //   component:TemplateMesPage,
  //   // reloadAll:true
  // },
  // {
  //   path: '/qrcode/',
  //   component:QrcodePage,
  //   // reloadAll:true
  // },
  // {
  //   path: '/new-qrcode/',
  //   component:NewQrcodePage,
  //   // reloadAll:true
  // },
  // {
  //   path: '/menu-settings/',
  //   component:MenuSettingsPage,
  //   // reloadAll:true
  // },
  // {
  //   path: '/label-list/',
  //   component: LabelListPage,
  // },
  // {
  //   path: '/user-assistant/',
  //   component: UserAssistantPage,
  // },
  // {
  //   path: '/login/',
  //   component: LoginPage,
  //   // reloadAll:true
  // },
  //
  // {
  //   path: '/panel-left/',
  //   component: PanelLeftPage,
  //   // reloadAll:true
  // },
  // {
  //   path: '/panel-right/',
  //   component: PanelRightPage,
  //   // reloadAll:true
  // },
  //
  // {
  //   path: '/msg-list-more/:user_open_id',
  //   component: MsgListMorePage,
  // },
  //
  // {
  //   path: '/msg-list/',
  //   component: MsgListPage,
  // },
  // {
  //   path: '/order-list/:user_open_id',
  //   component: OrderListPage,
  // },
  // {
  //   path: '/order-list/',
  //   component: OrderListPage,
  // },
  // {
  //   path: '/order-details/:id',
  //   component: OrderDetailsPage,
  // },
  // {
  //   path: '/user-details/:id',
  //   component: UserDetailsPage,
  // },
  //
  //
  //
  //
  //
  // {
  //   path: '/user-interactive/:user_open_id',
  //   component: UserinteractivePage,
  // },
  //
  // {
  //   path: '/user-interactive/',
  //   component: UserinteractivePage,
  // },
  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId',
  //   component: DynamicRoutePage,
  // },
  // {
  //   path: '/qrcode-report/',
  //   component:QrcodeReportPage,
  // },
  // {
  //   path: '/menu-report/',
  //   component:MenuReportPage,
  // },
  // {
  //   path: '/user-report/',
  //   component:UserReportPage,
  // },
  // {
  //   path: '/store-list/',
  //   component:StoreListPage,
  // },
  // {
  //   path: '/sell-report/',
  //   component:SellReportPage,
  // },




  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
