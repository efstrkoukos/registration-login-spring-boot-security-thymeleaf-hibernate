/**
 * 
 */
Ext.define('MyApp.view.allusers.AllUsersView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.allusersview',
    requires: [
    	'Ext.panel.Panel',
        'Ext.button.Button',
		'MyApp.view.allusers.AllUsersGrid'		
		],
	//controller: '',
	/*viewModel: {
        type: ''
    },*/
    id: 'allUsersView',
    itemId: 'allusersView',
	layout : {
						type : 'vbox'
					},
	title:'<div style="text-align:center;">Όλοι οι Χρήστες</div>',
	defaultListenerScope: true,
	initComponent : function() {
		var gridPanel=Ext.create('MyApp.view.allusers.AllUsersGrid', {});
		var overtoolbar=Ext.create('Ext.toolbar.Toolbar',{
			width:'100%',
			items:[
				{
					xtype:'textfield',
					width:100,
					margin:'0 0 0 10'
				},
				{
					xtype:'textfield',
					width:100,
					margin:'0 0 0 10'
				},
				{
					xtype:'textfield',
					width:100,
					margin:'0 0 0 10'
				}
			]
		});
		Ext.apply(this, {
							items : [ overtoolbar,gridPanel ]
						});
		this.callParent(arguments);
	}
	});