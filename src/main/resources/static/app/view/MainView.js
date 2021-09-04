Ext.define('MyApp.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.gymmainview',
    requires: [
    	'Ext.panel.Panel',
        'Ext.button.Button'
		],
    id: 'gymmainView',
    itemId: 'gymmainView',
    layout: 'border',
    defaultListenerScope: true,
        items: [
        {
            xtype: 'panel',
            region: 'west',
            split: true,
            autoScroll: true,
            itemId: 'menuPanel',
            resizable: true,
            width: '30%',
            animCollapse: true,
            collapsed: false,
            collapsible: true,
            header: false,
            title: 'Υπηρεσίες',
            titleCollapse: false,
            layout: {
                type: 'accordion',
                animate: true
            },
            dockedItems: [
                {
                    xtype: 'container',
                    dock: 'top',
                    height: 50,
                    itemId: 'adminMenu',
                    style: {
                        'background-color': '#ffffff'
                    },
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'label',
                            flex: 1,
                            
                            height: 300,
                            itemId: 'mybutton',
                            //maxWidth: 150,
                            style: {
                                'background-color': '#232d38'
                            },
                            glyph: 'xf0c0@FontAwesome',
                            text: 'GymGeek',
							align:'middle'
                            
                        }
                    ]
                },
                {
                    xtype: 'container',
                    dock: 'top',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'button',
                            flex: 1,
                            height: 30,
                            itemId: 'mybutton',
                            //glyph: 'xf234@FontAwesome',
							iconCls:'fa fa-user-plus',
                            text: 'Εγγραφή Νέου Χρήστη',
                            listeners: {
                                click: 'onAddUserView',
                                //afterrender: 'toStartPolling'
                            }
                        },
                        {
                            xtype: 'button',
                            border: 0,
                            disabled: true,
                            hidden: true,
                            id: 'notifbut_company',
                            style: {
                                'background-color': 'red'
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'panel',
                    itemId: 'Service1',
                    minHeight: 150,
                    width: 150,
                    animCollapse: true,
                    collapsed: true,
                    title: 'Service1',
                    dockedItems: [
                        {
                            xtype: 'button',
                            dock: 'top',
                            height: 30,
                            glyph: 'xf187@FontAwesome',
                            text: 'SubService',
                            listeners: {
                                //click: 'onViewAccidentClick'
                            }
                        },
                        {
                            xtype: 'button',
                            dock: 'top',
                            height: 30,
                            glyph: 'xf067@FontAwesome',
                            text: 'SubService2',
                            listeners: {
                                //click: 'onNewAccidentClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    itemId: 'Service2',
                    minHeight: 150,
                    width: 150,
                    animCollapse: true,
                    collapsed: true,
                    //disabled: true,
                    title: 'Service2',
                    dockedItems: [
                        {
                            xtype: 'button',
                            dock: 'top',
                            height: 30,
                            glyph: 'xf187@FontAwesome',
                            text: 'SubService',
                            listeners: {
                                //click: 'onViewIllnessClick'
                            }
                        },
                        {
                            xtype: 'button',
                            dock: 'top',
                            height: 30,
                            glyph: 'xf067@FontAwesome',
                            text: 'SubService2',
                            listeners: {
                                //click: 'onNewIllnessClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    itemId: 'Service3',
                    minHeight: 150,
                    width: 150,
                    animCollapse: true,
                    collapsed: true,
                    title: 'Service3',
                    dockedItems: [
                        {
                            xtype: 'button',
                            dock: 'top',
                            height: 30,
                            glyph: 'xf187@FontAwesome',
                            text: 'SubService1',
                            listeners: {
                                //click: 'onViewSundayPmtClick'
                            }
                        },
                        {
                            xtype: 'button',
                            dock: 'top',
                            height: 30,
                            glyph: 'xf067@FontAwesome',
                            text: 'SubService2',
                            listeners: {
                                //click: 'onNewSundayPmtClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    itemId: 'Service4',
                    minHeight: 150,
                    width: 150,
                    animCollapse: true,
                    collapsed: true,
                    //disabled: true,
                    title: 'Service4',
                    dockedItems: [
                        {
                            xtype: 'button',
                            dock: 'top',
                            height: 30,
                            glyph: 'xf187@FontAwesome',
                            text: 'SubService',
                            listeners: {
                                //click: 'onViewJobRecrOfficeClick'
                            }
                        },
                        {
                            xtype: 'button',
                            dock: 'top',
                            height: 30,
                            glyph: 'xf067@FontAwesome',
                            text: 'SubService2',
                            listeners: {
                                //click: 'onNewJobRecrOfficeClick'
                            }
                        }
                    ]
                },                                                                      
        
                {
                    xtype: 'panel',
                    border: false,
                    itemId: 'emptyPanel',
                    animCollapse: false,
                    collapsed: false,
                    hideCollapseTool: true,
                    overlapHeader: true,
                    listeners: {
                        
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            split: true,
            itemId: 'contentPanel',
            layout: 'fit',
            collapsible: false,
            items:[{xtype:'label',text:'Central'}]
        }],

		onAddUserView: function(button, e, eOpts) {
        var view=Ext.getCmp('gymmainView');
        var center = view.getComponent('contentPanel');
        center.removeAll();
        var viewsub = Ext.create('MyApp.view.newuser.NewUserView');
        center.add(viewsub);
    	}
    
    
	});