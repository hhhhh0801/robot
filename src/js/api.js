
exports.install = function (Vue, options) {

  Vue.prototype.api = function(res){
  	if(res.data.code == 0){
  		return true;

  	}
  	else if(res.data.code  == 40003){
  		this.$f7.dialog.alert('抱歉，您没有该页面的访问权限');
      this.$f7router.navigate('/');
  		
  	}
  	else if(res.data.code  == 40014||res.data.code  == 40015){
  		this.$f7.dialog.alert('请登陆后访问');
      this.$f7router.navigate('/login/');
  		
  	}
  	// else if(res.data.code  == 40016){
  	// 	this.$f7.dialog.alert('无用户数据');
   //    this.$f7router.navigate('/');
  		
  	// }

          
  };
};