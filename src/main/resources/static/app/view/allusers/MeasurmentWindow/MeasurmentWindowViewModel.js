Ext.define('MyApp.view.allusers.MeasurmentWindow.MeasurmentWindowViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.measureviewmodel',
	data : {
	        bmi : null,
	    },
	formulas:{
		comm: function (get) {
			var val=get('bmi');
			if(val==null)
				return "";
			else if(val>24.9)
				return "<p style=\"color:red\"><strong>Αυξημένο</strong></p>";
			else if(val<18.5 )
				return "<p style=\"color:yellow\"><strong>Μειωμένο</strong></p>";
			else
            return "<p style=\"color:green\"><strong>Φυσιολογικό</strong></p>";
        },
	}
		
		

    });