Ext.define('MyApp.view.newuser.NewUserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.newuserviewmodel',
	data : {
	        bmi : null,
	    },
	formulas:{
		comm: function (get) {
			var val=get('bmi');
			if(val==null)
				return "";
			else if(val>24.9)
				return "<p style=\"color:red\">Αυξημένο</p>";
			else if(val<18.5 )
				return "<p style=\"color:yellow\">Μειωμένο</p>";
			else
            return "<p style=\"color:green\">Φυσιολογικό</p>";
        },
	}
		
		

    });