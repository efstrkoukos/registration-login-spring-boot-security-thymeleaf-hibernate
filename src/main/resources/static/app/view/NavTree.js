/**
 * 
 */
Ext.define('MyApp.view.NavTree', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.navtree',
    requires: [
    	'Ext.panel.Panel',
        'Ext.button.Button',
		'Ext.layout.container.HBox',
		'Ext.list.Tree',
		'MyApp.view.MainViewController'
		],
		scrollable : 'y',
					id: 'navtree',
					itemId : 'navtree',
					border : false,
					cls: 'sidePanel',
				
					    items: [{
                        xtype: 'treelist',
                        reference: 'navigationTreeList',
                        itemId: 'navigationTreeList',
                        width: 250,
                        expanderFirst: false,
                        expanderOnly: false,
						listeners: {
					            	itemclick:{
										fn: 'onItemClick',
										scope :'controller'} 
					        }
					    ,
						store:Ext.create('Ext.data.TreeStore',{
							    fields: [{
						        name: 'text'
						    }],
						    root: {
						        expanded: true,
						        children: [{
						                text: 'Χρήστες',
						                iconCls: 'x-fa fa-user',
						                viewType: 'admindashboard',
						                routeId: 'dashboard', // routeId defaults to viewType
						                expanded: false,
						                selectable: false,
						                routeId: 'pages-parent',
						                id: 'users',
						
						                children: [{
						                    text: 'Εγγραφή Νέου Χρήστη',
						                    iconCls: 'x-fa fa-user-plus',
						                    viewType: 'pageblank',
						                    leaf: true,
											id: 'reg_users',
				                                
						                }, {
						                    text: 'Όλοι οι χρήστες',
											id: 'all_users',
						                    iconCls: 'x-fa fa-users',
						                    viewType: 'pageblank',
						                    leaf: true
						                }]
						            }, {
						                text: 'Ασκήσεις',
						                iconCls: 'x-fa fa-calendar-o',
						                viewType: 'email',
						                expanded: false,
						                selectable: false,
						                routeId: 'pages-parent',
						                id: 'pages-parent',
						
						                children: [{
						                    text: 'Μενού1',
						                    iconCls: 'x-fa fa-calendar',
						                    viewType: 'pageblank',
						                    leaf: true
						                }, {
						                    text: 'Μενού2',
						                    iconCls: 'x-fa fa-plus-square-o',
						                    viewType: 'pageblank',
						                    leaf: true
						                }]
						            },
						                        
						        ]
						    }
							
						})
                           
                    }
                    
                ]
});