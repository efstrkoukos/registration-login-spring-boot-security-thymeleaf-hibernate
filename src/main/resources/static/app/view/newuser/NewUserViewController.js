Ext.define('MyApp.view.newuser.NewUserViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newusercontroller',

	onChange:function(button, e, eOpts){
		if(Ext.getCmp('tdeetNU').getValue() != "")
		{
			var panel = button.up().up().up().up('panel');
			Ext.getCmp('tdeetNU').setValue();
			Ext.getCmp('tdeemNU').setValue();
			Ext.getCmp('fatsNU').setValue();
			Ext.getCmp('carbsNU').setValue();
			Ext.getCmp('proteinNU').setValue();	
			panel.getViewModel().set('bmi',null);
			//Ext.getCmp('bmiNU').setValue();	
			//Ext.getCmp('labelNU').setValue();
		}
	},
	
	
	
	
	
	onCalculate: function(button, e, eOpts) {
		//var panel = button.up().up().up('panel');
		var panel = button.up('newuserview');
		var tdee=0;	var tdeet=0;var ree=0;var sx=0;
		var height=Ext.getCmp('heightNU');var weight=Ext.getCmp('weightNU');
		var purpose=Ext.getCmp('purposeNU');var exce=Ext.getCmp('exce_lvlNU');
		var birth=Ext.getCmp('birthdayNU');	var fat=Ext.getCmp('fat_perNU');
		
		var today = new Date();
		if(birth.getValue() !=null && birth.isValid()){
		var birthDate = birth.getValue();
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {age--;}}
	
		
		if((Ext.getCmp('radio1').checked||Ext.getCmp('radio2').checked)
		 && height.isValid() && weight.isValid() &&	purpose.isValid() && exce.isValid() && birth.isValid() 
			&& (height.getValue()!=null)&&(weight.getValue()!=null)&&(purpose.getValue()!=null)&&(exce.getValue()!=null)&&(birth.getValue()!=null))
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
		else{
		Ext.Msg.alert("Προσοχή","Πρέπει να συμπληρώσετε όλα τα στοιχεία του πρώτου πλαισίου για να γίνει υπολογισμός");}
		
		},
		
	onSubmit:function(button, e, eOpts) {
		Ext.getCmp('submitbtnNU').disabled=true;
		/*if((Ext.getCmp('tdeetNU').getValue() == null || Ext.getCmp('tdeetNU').getValue()=="")&&
		(Ext.getCmp('telNU').getValue()!=null && Ext.getCmp('emailNU').getValue()!=null &&Ext.getCmp('usrNU').getValue()!=null && Ext.getCmp('emailNU').isValid() )){//TODO and new fieldset is not empty
			//Ext.Msg.alert("Προσοχή","Πρέπει να πατήσετε το κουμπί \"Υπολογισμός\" πρίν κάνετε εγγραφή");
			Ext.Msg.alert("Προσοχή","Πρέπει να συμπληρώσετε όλα τα πεδία πρίν κάνετε εγγραφή");
			Ext.getCmp('submitbtnNU').disabled=false;}*/
			if(!button.up('form').isValid()){
			Ext.Msg.alert('Αποτυχία Υποβολής', 'Παρακαλώ διορθώστε τα λάθος πεδία');//button.up('form').markInvalid();
			Ext.getCmp('submitbtnNU').disabled=false;
			}
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
			//debugger;


				var successCallback = function(resp, ops) {
                        Ext.Msg.alert('Επιτυχής Εγγραφή', 'Ο χρήστης '+values.firstName+' '+values.lastName+' είναι πλέον μέλος της υπηρεσίας!');
						var jsonresp=Ext.JSON.decode(resp.responseText);
						var uid=jsonresp.userid;
						var view=Ext.getCmp('gymmainView');
        				var center = view.getComponent('contentPanel');
						// TODO show main panel
        				center.removeAll();

                    };

                    // Failure
                    var failureCallback = function(resp, ops) {
						Ext.getCmp('submitbtnNU').disabled=false;
                        Ext.Msg.alert('Αποτυχία Εγγραφής', 'Η εγγραφή του χρήστη απέτυχε');
                    };

			Ext.Ajax.request({
                        url: "/registrationFromAdmin",
                        //headers: { 'Content-Type': 'application/json' },
                        method: 'POST',
						params: {
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
								password:values.password,
								birthday:values.birthday,
								sex:values.sex,
								height:values.height,
								weight:values.weight,
								fat:values.fat_per,
								purpose:values.purpose,
								exce:values.exce_lvl,
								telephone:values.tel,
								username:values.username,
								tdeet:values.tdeet,
								tdeem:values.tdeem,
								bmi:values.bmi,
								protein:values.protein,
								carbs:values.carbs,
								fats:values.fats
								
								
                            },
                        success: successCallback,
                        failure: failureCallback
                    });



				}
		}
	}
    });