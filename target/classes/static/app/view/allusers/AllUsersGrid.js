/**
 * 
 */
Ext.define('MyApp.view.allusers.AllUsersGrid', {
	extend:'Ext.grid.Panel',
	requires:['MyApp.view.allusers.AllUsersStore'],
	alias:'widget.allusersgrid',
	width:'100%',
	height:'100%',
	id:'Usersgrid',
	plugins: 'gridfilters',
	viewModel:{
		data:{
			userId:null,
			name:null
		}
	},
	store:{type: 'userstore'},
    columns: [
            {
                text: 'Όνομα',
                width: 170,
                sortable: false,
                dataIndex: 'firstName',
				filter: {
		            type: 'string',
        		}
            },
            {
                text: 'Επώνυμο',
                width: 170,
                sortable: true,
                dataIndex: 'lastName',		
				filter: {
		            type: 'string',
        		}
            },
            {
                text: 'Τηλέφωνο',
                width: 120,
                sortable: true,
                dataIndex: 'telephone',
                //renderer: change
            },
			{
            xtype: 'actioncolumn',
			text:'Πληροφορίες',
            flex:1,
            enableColumnHide: false,
            hideable: false,
            menuDisabled: true,
            items: [
                    {
                        getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                            return 'x-fa fa-info';
                        }
                    }
                    ]},
           
            {
            xtype: 'actioncolumn',
			text:'Ενεργός',
            flex:1,
            enableColumnHide: false,
            hideable: false,
            menuDisabled: true,
            items: [
                    {
                        getClass: function(v, metadata, r, rowIndex, colIndex, store) {
							if(r.data.enabled==0)
							return 'x-fa fa-close';
							else
                            return 'x-fa fa-check';
                        }
                    }
                    ]},
            {
            xtype: 'actioncolumn',
			text:'Πρόοδος',
            flex:1,
            enableColumnHide: false,
            hideable: false,
            menuDisabled: true,
            items: [
                    {
                        getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                            return 'x-fa fa-bar-chart';
                        }
                    }
                    ],
			handler: function(view, rowIndex, colIndex, item, e, record, row) {

				this.up('allusersgrid').getViewModel().set('userId',record.data.id);
				this.up('allusersgrid').getViewModel().set('name',record.data.firstName+" "+record.data.lastName);
				var win=Ext.create('MyApp.view.allusers.ChartWindow.ChartWindowView',{viewModel:{parent:this.up('allusersgrid').getViewModel()}});
				win.show();
			}
			},
			{
            xtype: 'actioncolumn',
			text:'Ασκήσεις',
            flex:1,
            enableColumnHide: false,
            hideable: false,
            menuDisabled: true,
            items: [
                    {
                        getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                            return 'x-fa fa-cogs';
                        }
                    }
                    ]},
			{
            xtype: 'actioncolumn',
			text:'Νέα Μέτρηση',
            flex:1,
            enableColumnHide: false,
            hideable: false,
            menuDisabled: true,
            items: [
                    {
                        getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                            return 'x-fa fa-balance-scale';
                        }
                    }
                    ],
			handler: function(view, rowIndex, colIndex, item, e, record, row) {
				
                                var window=Ext.create('MyApp.view.allusers.MeasurmentWindow.MeasurmentWindowView',{});
								window.down('form').getForm().findField('name').setValue(record.data.firstName+" "+record.data.lastName);
								var pD = record.data.birthday.replace(/[^0-9]+/g,' ').split(" ");
               					var bd = pD[2]+"-"+pD[1]+"-"+pD[0];
								window.down('form').getForm().findField('birthday').setValue(bd);
								window.down('form').getForm().findField('userid').setValue(record.data.id);
								//TODO fill height//maybe left join the view
								if(record.data.gender==0)
								Ext.getCmp('radio1m').setValue(true);
								else
								Ext.getCmp('radio2m').setValue(true);
								
								window.show();
                            }
			},
			{
            xtype: 'actioncolumn',
			text:'Δίαιτα',
            flex:1,
            enableColumnHide: false,
            hideable: false,
            menuDisabled: true,
            items: [
                    {
                        getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                            return 'x-fa fa-cutlery';
                        }
                    }
                    ],
			handler: function(view, rowIndex, colIndex, item, e, record, row) {
				
                                var window=Ext.create('MyApp.view.allusers.DietWindow.DietWindowView',{});
								window.show();
                            }
				},
			

        ],

        
});