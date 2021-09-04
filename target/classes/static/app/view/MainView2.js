Ext.define('MyApp.view.MainView2', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.gymmainview2',
    requires: [
    	'Ext.panel.Panel',
        'Ext.button.Button',
		],
    id: 'gymmainView',
    itemId: 'gymmainView',
    layout: 'border',
    defaultListenerScope: true,
        items: [
	{
		xtype: 'treelist',
		region:'west',
	    store: {
	        root: {
	        expanded: true,
	            children: [{
	                text: 'detention',
	                leaf: true,
	            }, {
	                text: 'homework',
	                expanded: true,
	                children: [{
	                    text: 'book report',
	                    leaf: true,
	                }, {
	                    text: 'algebra',
	                    leaf: true,
	                }]
	            }, {
	                text: 'buy lottery tickets',
	                leaf: true,
	            }]
	        }
	    }
	
	}
     ,
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