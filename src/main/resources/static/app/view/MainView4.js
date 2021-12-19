/**
 * 
 */
Ext.define('MyApp.view.MainView4', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.gymmainview',
    requires: [
    	'Ext.panel.Panel',
        'Ext.button.Button',
		'MyApp.view.newuser.NewUserView',
		'MyApp.view.MainViewController',
		'MyApp.view.NavTree'
		],
    id: 'gymmainView2',
    itemId: 'gymmainView2',
	controller:'mainviewcontroller',
	layout : {
						type : 'fit'
					},
    defaultListenerScope: true,
	initComponent : function() {
		var navtree= Ext.create('MyApp.view.NavTree', {});
		var center = Ext.create('Ext.panel.Panel', {
							layout : 'card',
							itemId : 'center',
							id:'contentPanel',
							flex : 1,
							border : false,
							region : 'center',
							bodyPadding : 2,
		});
		var centerPanel = Ext.create('Ext.panel.Panel', {
							layout : {
								type : 'hbox',// was 'border'
								align : 'stretch',// New
								animate : true,
								animatePolicy : {
									x : true,
									width : true
								}
							},
							border : 0,
							items : [ navtree, center ],// ,
							// splitterX,
							// slidingPanel
							tbar : [{
								xtype: 'toolbar',
								height: 84,
								border: 0,
								width:'100%',
								menuAnchorY: -9,
								itemId: 'headerBar',
								items: [{
										xtype: 'component',
										reference: 'MyLogo',
										cls: 'sencha-logo',
										html: '<div class="main-logo"><img src="../../graphics/images/mylogotest1.png"></div>',
										layout:'fit',
										height : '100%', 
										margin: '0 0 0 20'
									}, {
										margin: '0 0 0 8',
										ui: 'header',
										id: 'main-navigation-btn'
									},
									'->'                   
									, 
									{
										xtype: 'button',
										iconCls: 'fa fa-bell',
										cls:'buttonr',
										text:'Ειδοποιήσεις',
										margin:'0 20 0 0'
									} , {
										xtype: 'button',
										text: '<strong>Έξοδος</strong>',
										cls: 'top-user-name',
										listeners: {
        									click: {fn:'logoutbtn',scope:'controller'}
												}
									} 
								]
							}]
								
							
						});
						Ext.apply(this, {
							items : [ centerPanel ]
						});
						this.callParent(arguments);
	}
	
});