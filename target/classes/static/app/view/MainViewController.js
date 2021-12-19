/**
 * 
 */
Ext.define('MyApp.view.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewcontroller',

onItemClick:function(treeModel, record, item, index, e, eOpts){
	var treenode=record.node.data;
	if(treenode.leaf && treenode.id=='reg_users'){
		var center = Ext.getCmp('contentPanel');//view.getComponent('contentPanel');
        center.removeAll();
        var viewsub = Ext.create('MyApp.view.newuser.NewUserView');
        center.add(viewsub);
		}
	else if(treenode.leaf && treenode.id=='all_users'){
		var center = Ext.getCmp('contentPanel');//view.getComponent('contentPanel');
        center.removeAll();
        var viewsub = Ext.create('MyApp.view.allusers.AllUsersView');
        center.add(viewsub);		
	}
		
	},
logoutbtn:function(){
	window.sessionStorage.removeItem("GGjwt");
	var currpage=window.location.href;
	currpage=currpage.replace("/login","/")
	window.location.href=currpage;
}

});