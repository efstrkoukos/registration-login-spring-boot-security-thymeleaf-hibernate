/**
 * 
 */

Ext.define('MyApp.view.allusers.AllUsersStore', {
	extend:'Ext.data.Store',
	requires: [
        'Ext.data.field.Field',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
	alias:'store.userstore',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            //remoteSort: true,
            storeId: 'allusers.AllUsersStore',
            autoLoad: true,
            fields: [
                {
                    name: 'firstName'
                },
                {
                    name: 'lastName'
                },
                {
                    name: 'email'
                },
                {
                    name: 'telephone'
                },
                {
                    name: 'enabled'
                },
                {
                    name: 'gender'
                }

            ],
            proxy: {
                type: 'ajax',
                limitParam: '',
                startParam: '',
                //url: '/user/search/findAllGymUsers',
				url: '/users_v/search/findAllGymUsers',
                reader: {
                    type: 'json',
					rootProperty: '_embedded.users_v',
                    
                }
            }
        }, cfg)]);
    }
	});