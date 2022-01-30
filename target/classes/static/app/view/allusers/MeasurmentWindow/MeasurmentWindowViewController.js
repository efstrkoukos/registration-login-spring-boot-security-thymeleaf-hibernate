/**
 * 
 */
Ext.define('MyApp.view.allusers.MeasurmentWindow.MeasurmentWindowViewController', {
	extend:'Ext.app.ViewController',
	alias:'controller.measurments',
	
		onChange:function(button, e, eOpts){
		if(Ext.getCmp('tdeetME').getValue() != "")
		{
			var panel = button.up('measurerview');

			//var panel = button.up().up().up().up('panel');
			Ext.getCmp('tdeetME').setValue();
			Ext.getCmp('tdeemME').setValue();
			Ext.getCmp('fatsME').setValue();
			Ext.getCmp('carbsME').setValue();
			Ext.getCmp('proteinME').setValue();	
			Ext.getCmp('bmiME').setValue();
			panel.getViewModel().set('bmi',null);

		}
	},

	onCalculate: function(button, e, eOpts) {
		//var panel = button.up().up().up('panel');
		var panel = button.up('measurerview');
		var tdee=0;	var tdeet=0;var ree=0;var sx=0;
		var height=Ext.getCmp('heightME');var weight=Ext.getCmp('weightME');
		var purpose=Ext.getCmp('purposeME');var exce=Ext.getCmp('exce_lvlME');
		var birth=Ext.getCmp('birthdayME');	var fat=Ext.getCmp('fat_perME');
		
		var today = new Date();
		if(birth.getValue() !=null && birth.isValid()){
		var birthDate = birth.getValue();
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {age--;}}
	
		
		if((Ext.getCmp('radio1m').checked||Ext.getCmp('radio2m').checked)
		 && height.isValid() && weight.isValid() &&	purpose.isValid() && exce.isValid() && birth.isValid() 
			&& (height.getValue()!=null)&&(weight.getValue()!=null)&&(purpose.getValue()!=null)&&(exce.getValue()!=null)&&(birth.getValue()!=null))
		{
			if( fat.getValue() != null )
			{
				ree=370+(21.6*(weight.getValue() * (1-(fat.getValue()/100))))
			}
			else
			{							
				sx=(Ext.getCmp('radio1m').checked)? 5 : -161
				ree=10*weight.getValue() + 6.25 * height.getValue() -5 * age + sx;
				
			}
			tdee=ree*exce.getValue();
			tdee=Number((tdee).toFixed());
				if(purpose.getValue()==-1)
					tdeet=Number((tdee-(tdee*0.2)).toFixed());
				else if(purpose.getValue()==1)
					tdeet=Number((tdee+(tdee*0.2)).toFixed());
				else
					tdeet=Number((tdee).toFixed());
					
			var bmi=Number((weight.getValue())/(Math.pow((height.getValue()/100),2))).toFixed(1);
			var protein=Number((tdee*0.3)/4).toFixed();
			var fats=Number((tdee*0.3)/9).toFixed();
			var carbs=Number((tdee*0.4)/4).toFixed();
					
			Ext.getCmp('tdeetME').setValue(tdeet);
			Ext.getCmp('tdeemME').setValue(tdee);
			Ext.getCmp('fatsME').setValue(fats);
			Ext.getCmp('carbsME').setValue(carbs);
			Ext.getCmp('proteinME').setValue(protein);	
			Ext.getCmp('bmiME').setValue(bmi);
			panel.getViewModel().set('bmi',parseFloat(bmi));		
			
		}
		else{
		Ext.Msg.alert("Προσοχή","Πρέπει να συμπληρώσετε όλα τα στοιχεία για να γίνει υπολογισμός");}
		
		},
		
		onSubmit: function(button, e, eOpts) {
			var values=button.up('form').getForm().getValues();
			Ext.getCmp('submitbtnME').disabled=true;
			if(button.up('form').isValid()){
				var successCallback = function(resp, ops) {
						button.up('measurerview').destroy();
                        Ext.Msg.alert('Επιτυχία', 'Η ανανέωση στοιχέιων μέτρησης έγινε με επιτυχία.');
                    };
				
				var failureCallback = function(resp, ops) {
						Ext.getCmp('submitbtnME').disabled=false;
                        Ext.Msg.alert('Αποτυχία', 'Η ανανέωση στοιχέιων μέτρησης απέτυχε');
                    };
			Ext.Ajax.request({
                        url: "/newUserInfo",
                        method: 'POST',
						params: {
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
								fats:values.fats,
								userid:values.userid
                            },
                        success: successCallback,
                        failure: failureCallback
                    });
		}
		}
	
	});