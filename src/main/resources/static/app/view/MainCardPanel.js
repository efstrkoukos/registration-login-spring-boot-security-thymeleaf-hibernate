/**
 * 
 */
Ext.define('MyApp.view.MainCardPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.gymmaincard',
	layout : 'card',
	itemId : 'center',
	id:'homePanel',
	flex : 1,
	border : false,
	region : 'center',
	bodyPadding : 2,
	items:[{
		xtype:'container',
		layout: {
		    type: 'vbox',
		    align: 'middle'
		},
		items:[
			{
				xtype:'container',
				layout:'hbox',
				items:[
					{
						xtype:'button',
						height:150,
						cls:'tra-button',
						width:150,
						margin:'50 0 0 50',
						iconCls:'x-fa fa-user fa-5x grayIcon',
						overCls:'x-fa fa-user fa-3x',
						iconAlign:'top',
						//text:'<p style="color:grey;"><b>Ενεργά μέλη</b></p>',
						textAlign:'right',
						listeners:{
							mouseover:function(){
								this.setText('<p style="color:grey;"><b>Ενεργά μέλη</b></p>');
							},
							mouseout:function(){
								this.setText('');
							},
						}
					},
					{
						xtype:'button',
						height:150,
						cls:'c1-button',
						width:150,
						margin:'50 0 0 50',
						iconAlign:'top',
						//text:'<p style="color:grey;"><b>Μέλη με θετική <br>πρόοδο</b></p>',
						iconCls:'x-fa fa-pie-chart fa-5x grayIcon',
						overCls:'x-fa fa-pie-chart fa-3x',
						listeners:{
							mouseover:function(){
								this.setText('<p style="color:grey;"><b>Μέλη με θετική <br>πρόοδο</b></p>');
							},
							mouseout:function(){
								this.setText('');
							},
						}
					},
					{
						xtype:'button',
						height:150,
						cls:'userno-button',
						width:150,
						margin:'50 0 0 50',
						iconAlign:'top',
						iconCls:'x-fa fa-user-times fa-5x grayIcon',
						overCls:'x-fa fa-user-times fa-3x',
						listeners:{
							mouseover:function(){
								this.setText('<p style="color:grey;"><b>Ανενεργά μέλη</b></p>');
							},
							mouseout:function(){
								this.setText('');
							},
						}
					}
				]
				
			},
			{
				xtype:'container',
				layout:'hbox',
				items:[
					{
						xtype:'button',
						height:150,
						width:150,
						cls:'scale-button',
						margin:'50 0 0 50',
						iconAlign:'top',
						iconCls:'x-fa fa-balance-scale fa-5x grayIcon',
						overCls:'x-fa fa-balance-scale fa-3x',
						listeners:{
							mouseover:function(){
								this.setText('<p style="color:grey;"><b>Νέο ζύγισμα</b></p>');
							},
							mouseout:function(){
								this.setText('');
							},
						}
					},
					{
						xtype:'button',
						height:150,
						cls:'c2-button',
						width:150,
						margin:'50 0 0 50',
						iconAlign:'top',
						iconCls:'x-fa fa-pie-chart fa-5x grayIcon',
						overCls:'x-fa fa-pie-chart fa-3x',
						listeners:{
							mouseover:function(){
								this.setText('<p style="color:grey;"><b>Μέλη με αρνητική <br>πρόοδο</b></p>');
							},
							mouseout:function(){
								this.setText('');
							},
						}
					},
					{
						xtype:'button',
						height:150,
						width:150,
						cls:'top-button',
						margin:'50 0 0 50',
						iconAlign:'top',
						iconCls:'x-fa fa-arrow-circle-up fa-5x grayIcon',
						overCls:'x-fa fa-arrow-circle-up fa-5x',
						listeners:{
							mouseover:function(){
								this.setText('<p style="color:grey;"><b>Top 3 PRs</b></p>');
							},
							mouseout:function(){
								this.setText('');
							},
						}
					}
					
				]
				
			}
			
		]
		}
		
		
	]
});