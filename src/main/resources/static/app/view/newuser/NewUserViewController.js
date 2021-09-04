Ext.define('MyApp.view.newuser.NewUserViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newusercontroller',

	onChange:function(button, e, eOpts){
		if(Ext.getCmp('tdeetNU').getValue() !== "" || Ext.getCmp('tdeetNU').getValue() !== null)
		{
			var panel = button.up().up().up('panel');
			Ext.getCmp('tdeetNU').setValue();
			Ext.getCmp('tdeemNU').setValue();
			Ext.getCmp('fatsNU').setValue();
			Ext.getCmp('carbsNU').setValue();
			Ext.getCmp('proteinNU').setValue();	
			panel.getViewModel().set('bmi',null);
		}
	},
	
	
	
	
	
	onCalculate: function(button, e, eOpts) {
		var panel = button.up().up().up('panel');
		var tdee=0;	var tdeet=0;var ree=0;var sx=0;
		var height=Ext.getCmp('heightNU');var weight=Ext.getCmp('weightNU');
		var purpose=Ext.getCmp('purposeNU');var exce=Ext.getCmp('exce_lvlNU');
		var birth=Ext.getCmp('birthdayNU');	var fat=Ext.getCmp('fat_perNU');
		
		var today = new Date();
		var birthDate = birth.getValue();
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {age--;}
	
		
		if((Ext.getCmp('radio1').checked||Ext.getCmp('radio2').checked)
		 && height.isValid() && weight.isValid() &&	purpose.isValid() && exce.isValid() && birth.isValid() )
		{
			if( fat.getValue() != null )
			{
				ree=370+(21.6*(weight.getValue() * (1-(fat.getValue()/100))))
			}
			else
			{							
				sx=(Ext.getCmp('radio1').checked)? 5 : -161
				ree=10*weight.getValue() + 6.25 * height.getValue() -5 * age + sx;
				
			}
			tdee=ree*exce.getValue();
			tdee=Number((tdee).toFixed());
				if(purpose.getValue()=="LO")
					tdeet=Number((tdee-(tdee*0.2)).toFixed());
				else if(purpose.getValue()=="BU")
					tdeet=Number((tdee+(tdee*0.2)).toFixed());
				else
					tdeet=Number((tdee).toFixed());
					
			var bmi=Number((weight.getValue())/(Math.pow((height.getValue()/100),2))).toFixed(1);
			var protein=Number((tdee*0.3)/4).toFixed();
			var fats=Number((tdee*0.3)/9).toFixed();
			var carbs=Number((tdee*0.4)/4).toFixed();
					
			Ext.getCmp('tdeetNU').setValue(tdeet);
			Ext.getCmp('tdeemNU').setValue(tdee);
			Ext.getCmp('fatsNU').setValue(fats);
			Ext.getCmp('carbsNU').setValue(carbs);
			Ext.getCmp('proteinNU').setValue(protein);	
			panel.getViewModel().set('bmi',parseFloat(bmi));		
			
		}
		else
		Ext.Msg.alert("Προσοχή","Πρέπει να συμπληρώσετε όλα τα στοιχεία του πρώτου πλαισίου για να γίνει υπολογισμός");
		
		},
		
	onSubmit:function(button, e, eOpts) {
		/*if(Ext.getCmp('tdeetNU').getValue() == null || Ext.getCmp('tdeetNU').getValue()=="")
			Ext.Msg.alert("Προσοχή","Πρέπει να πατήσετε το κουμπί \"Υπολογισμός\" πρίν κάνετε εγγραφή");
		else
		{
			var conffun = function(buttonText) {
            if (buttonText == "yes") {
                submitfun();
            }
            if (buttonText == "no") {
                return false;
            }
        };

        var msb = Ext.MessageBox.confirm('Εγγραφή χρήστη', 'Είστε σίγουροι ότι θελετε να πραγματοποιήσετε εγγραφή νέου χρήστη; ', conffun);

		var submitfun = function(){
            var form = button.up().up('panel').down('form');
                values = form.getValues();
			debugger;
*/

				var successCallback = function(resp, ops) {
                        Ext.Msg.alert('Επιτυχής Διαγραφή', 'Η αίτηση διαγράφηκε');

                    };

                    // Failure
                    var failureCallback = function(resp, ops) {
                        Ext.Msg.alert('Αποτυχία Διαγραφής', 'Η αίτηση δεν διαγράφηκε');
                    };
			var values = Ext.Object.getValues({
			    firstName: 'Jacky',
			    lastName: 'food',
				email:'ss@ss.ss',
				password:'ssss'
			});
			
			Ext.Ajax.request({
                        url: "/registrationFromAdmin",
                        headers: { 'Content-Type': 'application/json' },
                        method: 'POST',
						params: {
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
								password:values.password
                            },
                        success: successCallback,
                        failure: failureCallback
                    });



				}
	//	}
	//}
    });