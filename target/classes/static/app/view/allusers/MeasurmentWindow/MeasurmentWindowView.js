/**
 * 
 */

Ext.define('MyApp.view.allusers.MeasurmentWindow.MeasurmentWindowView', {
	extend:'Ext.window.Window',
	alias: 'widget.measurerview',
	requires:['MyApp.view.allusers.MeasurmentWindow.MeasurmentWindowViewController',
	'MyApp.view.allusers.MeasurmentWindow.MeasurmentWindowViewModel'],
	modal:true,
	closable:true,
	controller:'measurments',
	viewModel:{type:'measureviewmodel'},
	width:800,
	title:'<div style="text-align:center;">Νέα Μέτρηση</div>',
	height:'90%',
	items:[
		{
		xtype:'form',
		scrollable:'y',
		width:'100%',
		height:'100%',
		layout: {
                type: 'vbox',
                align: 'center',
            },
        defaults: {
            width: 600
        },
		items:[
			
			{
				xtype:'textfield',
				anchor:'100%',
				padding:'10 0 0 0',
				readOnly:true,				
				fieldLabel: 'Ονοματεπώνυμο',
				name:'name',
				reference:'name',
				allowBlank:false,
                labelWidth: 100,
				centered:true,
				maxLength:100
				
			},
			{
				xtype:'hiddenfield',
				anchor:'100%',
				name:'userid'
				
			},
			
			{
				xtype:'datefield',
				anchor:'100%',
				width:500,
				readOnly:true,
				fieldLabel: 'Ημ/νία Γέννησης',
				name:'birthday',
				reference :'birthday',
				emptyText:'HH-MM-EEEE',
				id:'birthdayME',
                labelWidth: 100,
				altFormats: 'd-m-Y|d/m/Y',
				centered:true,
				maxLength:100,
				allowBlank:false,
				validateOnChange: false,
                validateOnBlur: true,
				listeners:{
					change:  {
						fn: 'onChange',
						scope :'controller'
					}
				}
				
			},
			{
			xtype      : 'radiogroup',
            fieldLabel : 'Φύλο',
            //defaultType: 'radiogroup',
			id:'radiofieldME',
			allowBlank:false,
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {
                    boxLabel  : 'Άνδρας',
                    name      : 'sex',
					readOnly:true,
					reference:'male',
                    inputValue: '0',
                    id        : 'radio1m',
					listeners:{
					change:  {
						fn: 'onChange',
						scope :'controller'
					}
				}
                }, {
                    boxLabel  : 'Γυναίκα',
                    name      : 'sex',
					reference :'female',
                    inputValue: 'l',
					readOnly:true,
                    id        : 'radio2m',
					margin:'0 0 0 50',
					listeners:{
					change:  {
						fn: 'onChange',
						scope :'controller'
					}
				}
                }],
					
			},
			{
				xtype:'container',
				layout:{type:'hbox'},
				items:[{
					xtype:'numberfield',
					emptyText:'cm',
					fieldLabel:'Ύψος',
					name:'height',
					id:'heightME',
					maxValue: 300,
                    minValue: 100,
					allowBlank:false,
					validateOnChange: false,
					listeners:{
					change:  {
						fn: 'onChange',
						scope :'controller'
					}
				}
				},
				{
					xtype:'numberfield',
					emptyText:'kg',
					fieldLabel:'Βάρος',
					validateOnChange: false,
					name:'weight',
					margin:'0 0 0 10',
					id:'weightME',
					maxValue: 500,
                    minValue: 10,
					allowBlank:false,
					listeners:{
					change:  {
						fn: 'onChange',
						scope :'controller'
					}
				}
				}]
					
				
			},
			{
				xtype:'container',
				layout:{type:'hbox'},
				items:[{
					xtype:'numberfield',
					emptyText:'Προαιρετικό πεδίο',
					fieldLabel:'Σωματικό λίπος %',
					name:'fat_per',
					id:'fat_perME',
					listeners:{
					change:  {
						fn: 'onChange',
						scope :'controller'
					}
				}
				},
				{
					xtype:'combobox',
					fieldLabel:'Στόχος',
					name:'purpose',
					margin:'6 0 0 10',
					valueField: 'name',
					displayField:'abbr',
					allowBlank: false,
					id:'purposeME',
		            store: [{
		                abbr: 'Αύξηση Βάρους',
		                name: 1
		            }, {
		                abbr: 'Διατήρηση Βάρους',
		                name: 0
		            }, {
		                abbr: 'Μείωση Βάρους',
		                name: -1
		            }, ],
					listeners:{
					change:  {
						fn: 'onChange',
						scope :'controller'
					}
				}
					
				}]
					
				
			},
			{
				xtype:'combobox',
				fieldLabel:'Σωματική Άσκηση',
				name:'exce_lvl',
				id:'exce_lvlME',
				margin:'6 0 0 135',
				valueField: 'factor',
				allowBlank: false,
				displayField:'abbr',
				store: [{
		                abbr: 'Καθόλου ',
		                factor: 1.2
		            }, {
		                abbr: 'Λίγο (1-2 φορές την εβδομάδα)',
		                factor: 1.375
		            }, {
		                abbr: 'Κανονικά (3-5 φορές την εβδομάδα)',
		                factor: 1.55
		            }, 
					{
						abbr: 'Πολύ (6-7 φορές την εβδομάδα)',
						factor: 1.725
					}],
				listeners:{
					change:  {
						fn: 'onChange',
						scope :'controller'
					}
				}
					
			},
					{
		xtype:'panel',
		title:'<div style="text-align:center;">Μετρήσεις</div>',
		width:600,//'70%',
		margin:'20 0 0 0',
		layout: {
        type: 'vbox',
        align: 'center',
    	},
		items:[
			{
				xtype:'container',
				width:'100%',
				layout:{
				type:'hbox',
				align: 'center',
				pack: 'center',
				//margin:'0 180 0 0',
				},
				items:[
					{
				xtype:'component',//separator component
				width:225,

			},
			{
			xtype:'button',
			text:'Υπολογισμός',
			margin:'10 0 10 0',
			width:150,
			listeners: {
                        click: {
                            fn: 'onCalculate',
                            scope: 'controller'
                        }
                    }
			},
			{
				xtype:'container',
				margin:'0 0 0 70',
				width:275,
				items:[
				
			
			{
				xtype:'label',
				id:'labelME',
				bind:{html:'{comm}'},
				margin:'0 0 0 70'
			}
			]
			}
			]
			},
			{
				xtype:'container',
				//flex:1,
				layout:'hbox',
				items:[
					{
				xtype:'textfield',
				//anchor:'70%',
				width:170,
				fieldLabel: '*TDEE Στόχου',
				name:'tdeet',
				id:'tdeetME',
                labelWidth: 100,
				centered:true,
				maxLength:100,
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
				readOnly:true,
                allowOnlyWhitespace: false
				
			},
			{
				xtype:'textfield',
				//anchor:'70%',
				width:170,
				fieldLabel: '*TDEE Διατήρησης',
				margin:'0 0 0 20',
				name:'tdeem',
				id:'tdeemME',
                labelWidth: 100,
				centered:true,
				maxLength:100,
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
				readOnly:true,
                allowOnlyWhitespace: false
				
			},
			{
				xtype:'numberfield',
				//anchor:'70%',
				width:130,
				bind:{value:'{bmi}'},
				fieldLabel: '*BMI',
				margin:'0 0 0 20',
				name:'bmi',
				id:'bmiME',
                labelWidth: 50,
				centered:true,
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
				readOnly:true,
                allowOnlyWhitespace: false
				
			},

					
				]
							
		},
		{
				xtype:'container',
				flex:1,
				padding:'0 0 10 0',
				layout:'hbox',
				items:[
					{
				xtype:'numberfield',
				//anchor:'70%',
				width:170,
				fieldLabel: 'Πρωτείνες Στόχου',
				name:'protein',
                labelWidth: 100,
				id:'proteinME',
				centered:true,
				maxLength:100,
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
				readOnly:true,
                allowOnlyWhitespace: false
				
			},
			{
				xtype:'numberfield',
				//anchor:'70%',
				width:170,
				fieldLabel: 'Υδατάνθρακες Στόχου',
				margin:'0 0 0 20',
				name:'carbs',
				id:'carbsME',
                labelWidth: 100,
				centered:true,
				maxLength:100,
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
				readOnly:true,
                allowOnlyWhitespace: false
				
			},
			{
				xtype:'numberfield',
				//anchor:'70%',
				width:130,
				maxLength:100,
				fieldLabel: 'Λιπαρά Στόχου',
				margin:'0 0 0 20',
				name:'fats',
				id:'fatsME',
                labelWidth: 50,
				centered:true,
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
				readOnly:true,
                allowOnlyWhitespace: false
				
			}
								
				]
				
			
		}
		]
		},
		{
			xtype:'button',
			text:'Καταχώρηση',
			id:'submitbtnME',
			height:50,
			width:200,
			margin:'15 0 10 0',
			listeners: {
                        click: {
                            fn: 'onSubmit',
                            scope: 'controller'
                        }
                    }	
		},
		{
	         xtype: 'label',
	         labelWidth: '800',
	         labelSeparator : "",
			 padding:'25 0 0 0',
	         html: '<div style="text-align:center;"><i><b>*TDEE :</b> Ημερήσια πρόσληψη θερμίδων , <b>*BMI :</b> Δείκτης Μάζας Σώματος </i></div>',
	         allowBlank: false
        }
	
			]	
		}
		
		
	] 


	
	
});