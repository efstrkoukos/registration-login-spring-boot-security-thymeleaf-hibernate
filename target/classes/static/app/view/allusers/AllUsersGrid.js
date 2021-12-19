/**
 * 
 */
Ext.define('MyApp.view.allusers.AllUsersGrid', {
	extend:'Ext.grid.Panel',
	width:'100%',
	height:'100%',
    columns: [
            {
                text: 'Όνομα',
                width: 170,
                sortable: false,
               // dataIndex: 'company'
            },
            {
                text: 'Επώνυμο',
                width: 170,
                sortable: true,
                formatter: 'usMoney',
                //dataIndex: 'price'
            },
            {
                text: 'Τηλέφωνο',
                width: 120,
                sortable: true,
                //dataIndex: 'change',
                //renderer: change
            },
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
                            return 'x-fa fa-angle-down';
                        }
                    }
                    ]},
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
                    ]},
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
                            return 'x-fa fa-utensils';
                        }
                    }
                    ]},
			

        ],

        
});