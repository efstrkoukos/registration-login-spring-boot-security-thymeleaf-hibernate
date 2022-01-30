/**
 * 
 */
Ext.define('MyApp.view.allusers.ChartWindow.ChartStore', {
    extend: 'Ext.data.Store',

alias:'store.chartstore',

   /* constructor: function(config) {
        //constructor: function(config) {
        config = config || {};

        config.data = [
            { month: 'Jan', data1: 20, data2: 37, data3: 35, data4: 4, other: 4 },
            { month: 'Feb', data1: 20, data2: 37, data3: 36, data4: 5, other: 2 },
            { month: 'Mar', data1: 19, data2: 36, data3: 37, data4: 4, other: 4 },
            { month: 'Apr', data1: 18, data2: 36, data3: 38, data4: 5, other: 3 },
            { month: 'May', data1: 18, data2: 35, data3: 39, data4: 4, other: 4 },
            { month: 'Jun', data1: 17, data2: 34, data3: 42, data4: 4, other: 3 },
            { month: 'Jul', data1: 16, data2: 34, data3: 43, data4: 4, other: 3 },
            { month: 'Aug', data1: 16, data2: 33, data3: 44, data4: 4, other: 3 },
            { month: 'Sep', data1: 16, data2: 32, data3: 44, data4: 4, other: 4 },
            { month: 'Oct', data1: 16, data2: 32, data3: 45, data4: 4, other: 3 },
            { month: 'Nov', data1: 15, data2: 31, data3: 46, data4: 4, other: 4 },
            { month: 'Dec', data1: 15, data2: 31, data3: 47, data4: 4, other: 3 }
        ];

        this.callParent([config]);
    }*/
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            //remoteSort: true,
            storeId: 'chart.ChartStore',
            autoLoad: false,

			fields: [
				{
				name:'month',
				convert: function(v, rec) {
                        var res = rec.data.date.split("-");
                        if(res[1]==1)
						return "Ιαν";
						else if(res[1]==2)
						return "Φεβ";
						else if(res[1]==3)
						return "Μαρ";
						else if(res[1]==4)
						return "Απρ";
						else if(res[1]==5)
						return "Μαι";
						else if(res[1]==6)
						return "Ιουν";
						else if(res[1]==7)
						return "Ιουλ";
						else if(res[1]==8)
						return "Αυγ";
						else if(res[1]==9)
						return "Σεπ";
						else if(res[1]==10)
						return "Οκτ";
						else if(res[1]==11)
						return "Νοε";
						else if(res[1]==12)
						return "Δεκ";
                    }
				},
				{
					name:'date',
					type:'string'
				},
				{
					name:'weight',
					type:'int'
				}
			],
            proxy: {
                type: 'ajax',
                limitParam: '',
                startParam: '',
				url: '/user_info/search/getUserProgress',//?userId=33',
                reader: {
                    type: 'json',
					rootProperty: '_embedded.user_info',
                    
                }
            }
        }, cfg)]);
    }
});