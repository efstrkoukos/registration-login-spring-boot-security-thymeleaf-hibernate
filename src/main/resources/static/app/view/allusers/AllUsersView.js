/**
 * 
 */
Ext.define('MyApp.view.allusers.AllUsersView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.allusersview',
    requires: [
    	'Ext.panel.Panel',
        'Ext.button.Button',
		'MyApp.view.allusers.AllUsersGrid',
		'MyApp.view.allusers.AllUsersStore',
		'MyApp.view.allusers.AllUsersViewController'	
		],
	controller: 'allusersviewcontroller',
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
		filterGrid = function (property, value) {
    	var grid = Ext.getCmp('Usersgrid');
	    if (grid.store.filters) {
	         grid.store.filters.each(function(item) {
	          if (item.property === property) {
	              grid.store.removeFilter(item);
	          }  
	        })
	    };
   
	    if (value) {
	        var matcher = new RegExp(Ext.String.escapeRegex(value), "i");
	        grid.store.addFilter({
	            filterFn: function (record) {
	                return matcher.test(record.get(property));
	            }
	        });
	        grid.store.filters.getAt(grid.store.filters.length-1).property=property;
	     }
		}
		var overtoolbar=Ext.create('Ext.toolbar.Toolbar',{
			width:'100%',
			items:[
				{
					xtype:'component',
					iconCls:'x-fa fa-search'
					
				},
				{
					xtype:'textfield',
					width:100,
					emptyText:'Όνομα',
					margin:'0 0 0 30',
					listeners: {
                        change: function(field, value) {
                            filterGrid('firstName', value);
                        }
                    }
				},
				{
					xtype:'textfield',
					width:100,
					emptyText:'Επώνυμο',
					margin:'0 0 0 50',
					listeners: {
                        change: function(field, value) {
                            filterGrid('lastName', value);
                        }
                    }
				},
				{
					xtype:'textfield',
					width:100,
					emptyText:'Τηλέφωνο',
					margin:'0 0 0 60',
					listeners: {
                        change: function(field, value) {
                            filterGrid('telephone', value);
                        }
                    }
				},
				
			]
		});
		Ext.apply(this, {
							items : [ overtoolbar,gridPanel ]
						});
		this.callParent(arguments);
	},

	});