Ext.define('MyApp.view.MainView3', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.gymmainview',
    requires: [
    	'Ext.panel.Panel',
        'Ext.button.Button',
		'MyApp.view.newuser.NewUserView',
		'MyApp.view.MainViewController'
		],
    id: 'gymmainView2',
    itemId: 'gymmainView2',
	controller:'mainviewcontroller',
	scrollable:'y',
    layout: {
                type: 'vbox',
                align: 'stretch'
            },
    defaultListenerScope: true,
	            items: [
				{
                xtype: 'toolbar',
                cls: 'sencha-dash-dash-headerbar shadow',
                height: 84,
                itemId: 'headerBar',
                items: [{
                        xtype: 'component',
                        reference: 'senchaLogo',
                        cls: 'sencha-logo',
                        html: '<div class="main-logo"><img src="../../graphics/images/mylogotest1.png"></div>',
                        //width: 250,
						layout:'fit',
                        height : '100%', 
						margin: '0 0 0 20'
                    }, {
                        margin: '0 0 0 8',
                        ui: 'header',
                        //iconCls: 'x-fa fa-navicon',
                        id: 'main-navigation-btn',
                        //                        handler: 'onToggleNavigationSize',
                        tooltip: 'Esconder painel de navegação'
                    },
                    '->'                   
                    ,  {
                        xtype: 'tbtext',
                        text: '<strong>Έξοδος</strong>',
                        cls: 'top-user-name'
                    } 
                ]
            },
			{
				xtype:'panel',
				width:'100%',
				height:'100%',
				layout:'hbox',
								
				items:[
			{
                xtype: 'panel',
				height:'100%',
				region:'west',
        		cls: 'sidePanel',
                id: 'sidebar',
                reference: 'mainContainerWrap',
                flex: 1,
                items: [{
                        xtype: 'treelist',
                        reference: 'navigationTreeList',
                        itemId: 'navigationTreeList',
                        ui: 'navigation',
                        //store: 'NavigationTree',
                        width: 250,
                        expanderFirst: false,
                        expanderOnly: false,
						listeners: {
					            	itemclick:{fn: 'onItemClick',
										scope :'controller'} 
					        }
					
					    ,
						store:{
							    fields: [{
						        name: 'text'
						    }],
						    root: {
						        expanded: true,
						        children: [{
						                text: 'Χρήστες',
						                iconCls: 'x-fa fa-user',
						                rowCls: 'nav-tree-badge #nav-tree-badge-new',
						                viewType: 'admindashboard',
						                routeId: 'dashboard', // routeId defaults to viewType
						                expanded: false,
						                selectable: false,
						                routeId: 'pages-parent',
						                id: 'users',
						
						                children: [{
						                    text: 'Εγγραφή Νέου Χρήστη',
						                    iconCls: 'x-fa fa-users',
						                    viewType: 'pageblank',
						                    leaf: true,
											id: 'reg_users',
				                                
						                }, {
						                    text: 'Μενού2',
						                    iconCls: 'x-fa fa-plus-square-o',
						                    viewType: 'pageblank',
						                    leaf: true
						                }]
						            }, {
						                text: 'Ασκήσεις',
						                iconCls: 'x-fa fa-calendar-o',
						                rowCls: 'nav-tree-badge #nav-tree-badge-hot',
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
							
						}
                           
                    }
                    
                ]
            },
	        {
	            xtype: 'panel',
	            region: 'center',
	            split: true,
				scrollable:'y',
				id:'contentPanel',
	            itemId: 'contentPanel',
				flex:5,
				height:'100%',
	            //layout: 'fit',
	            collapsible: false,
	            items:[{xtype:'label',text:'Central'}]
	        }]}
		]
		 
    
    
	});