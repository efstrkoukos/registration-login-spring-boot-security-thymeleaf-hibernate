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
	else if(treenode.leaf && treenode.id=='home-page'){
		var center = Ext.getCmp('contentPanel');//view.getComponent('contentPanel');
        center.removeAll();
        var viewsub = Ext.create('MyApp.view.MainCardPanel');
        center.add(viewsub);		
	}
		
	},
onlogoclick:function(){
		var center = Ext.getCmp('contentPanel');//view.getComponent('contentPanel');
        center.removeAll();
        var viewsub = Ext.create('MyApp.view.MainCardPanel');
        center.add(viewsub);
	},
logoutbtn:function(){
	window.sessionStorage.removeItem("GGjwt");
	var currpage=window.location.href;
	currpage=currpage.replace("/login","/")
	window.location.href=currpage;
},

notificationsPolling:function()
{

	 Ext.direct.Manager.addProvider({//this works
	            type: 'polling',
	            url: '/getNotifs',
                qualifier: 'Keep Alive',
				interval: 10000,//every minute
	            id: 'pollB-provider',
	            listeners: {
	                data: function (provider, result, eOpts) {
					if(result.xhr.status==401)//token expired
					{
						this.logoutbtn();
					}
	               }
	            }
	        });

        var pollB = Ext.direct.Manager.getProvider('pollB-provider');
}

});