Ext.define('MyApp.view.newuser.NewUserView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.newuserview',
    requires: [
    	'Ext.panel.Panel',
        'Ext.button.Button',
		'MyApp.view.newuser.NewUserViewController',
		'MyApp.view.newuser.NewUserViewModel'
		],
	controller: 'newusercontroller',
	viewModel: {
        type: 'newuserviewmodel'
    },
    id: 'newuserView',
    itemId: 'newuserView',
	title:'<div style="text-align:center;">Εγγραφή Νέου Χρήστη</div>',
	//scrollable:'y',
	layout: {
        type: 'vbox',
        align: 'center',
        //pack: 'center'
    },
	items:[{
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
			xtype:'fieldset',
			title:'Στοιχεία Επικοινωνίας',
			margin:'20 0 0 0',
			items:[
			{
				xtype:'textfield',
				anchor:'100%',
				padding:'10 0 0 0',
				//width:500,				
				fieldLabel: 'Όνομα',
				name:'firstName',
				allowBlank:false,
                labelWidth: 100,
				centered:true,
				maxLength:100
				
			},
			{
				xtype:'textfield',
				anchor:'100%',
				width:500,
				fieldLabel: 'Επώνυμο',
				allowBlank:false,
				name:'lastName',
                labelWidth: 100,
				centered:true,
				maxLength:100
				
			},
			{
				xtype:'hiddenfield',
				name:'password',
                labelWidth: 100,
				centered:true,
				value:'the_value',
				maxLength:100
				
			},
			{
				xtype:'textfield',
				anchor:'100%',
				//width:500,				
				fieldLabel: 'Τηλέφωνο',
				name:'tel',
				id:'telNU',
                labelWidth: 100,
				centered:true,
				maxLength:100,
				vtype:'telNumber',
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
                allowOnlyWhitespace: false
				
			},
			{
				xtype:'textfield',
				anchor:'100%',
				//width:500,
				fieldLabel: 'email',
				name:'email',
				id:'emailNU',
                labelWidth: 100,
				centered:true,
				maxLength:100,
				vtype:'email',
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
                allowOnlyWhitespace: false
				
			},
			{
				xtype:'textfield',
				anchor:'100%',
				//width:500,
				fieldLabel: 'Username',
				hidden:true,
				disabled:true,
				name:'username',
				id:'usrNU',
                labelWidth: 100,
				centered:true,
				maxLength:100,
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
                allowOnlyWhitespace: false
				
			}]	
		},
		{
			xtype:'fieldset',
			margin:'20 0 0 0',
			items:[
			{
				xtype:'datefield',
				anchor:'100%',
				width:500,
				fieldLabel: 'Ημ/νία Γέννησης',
				name:'birthday',
				emptyText:'HH-MM-EEEE',
				id:'birthdayNU',
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
			id:'radiofieldNU',
			allowBlank:false,
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {
                    boxLabel  : 'Άνδρας',
                    name      : 'sex',
                    inputValue: 0,
                    id        : 'radio1',
					listeners:{
					change:  {
						fn: 'onChange',
						scope :'controller'
					}
				}
                }, {
                    boxLabel  : 'Γυναίκα',
                    name      : 'sex',
                    inputValue: 1,
                    id        : 'radio2',
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
					id:'heightNU',
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
					id:'weightNU',
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
					id:'fat_perNU',
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
					id:'purposeNU',
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
				id:'exce_lvlNU',
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
					
			}
			]
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
				id:'labelNU',
				bind:{html:'{comm}'},
				//margin:'0 0 0 70'
			}]}
			]},
			{
				xtype:'container',
				flex:1,
				layout:'hbox',
				items:[
					{
				xtype:'textfield',
				//anchor:'70%',
				width:170,
				fieldLabel: '*TDEE Στόχου',
				name:'tdeet',
				id:'tdeetNU',
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
				id:'tdeemNU',
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
				bind:'{bmi}',
				fieldLabel: '*BMI',
				margin:'0 0 0 20',
				name:'bmi',
				id:'bmiNU',
                labelWidth: 50,
				centered:true,
				validateOnChange: false,
                validateOnBlur: false,
                allowBlank: false,
				readOnly:true,
                allowOnlyWhitespace: false
				
			},
			/*{
				xtype:'label',
				id:'labelNU',
				bind:{html:'{comm}'},
				margin:'-12 0 0 7'
			}*/
					
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
				id:'proteinNU',
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
				id:'carbsNU',
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
				id:'fatsNU',
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
			text:'Εγγραφή νέου χρήστη',
			id:'submitbtnNU',
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
	         html: '<div style="text-align:center;"><i><b>*TDEE :</b> Ημερήσια πρόσληψη θερμίδων , <b>*BMI :</b> Δείκτης Μάζας Σώματος </i></div>',
	         allowBlank: false
        }
		
		
	] 
	}]



    });