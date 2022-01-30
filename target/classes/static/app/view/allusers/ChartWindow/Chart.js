/**
 * 
 */

Ext.define('MyApp.view.allusers.ChartWindow.Chart', {
    extend: 'Ext.Panel',
	requires:[
	'MyApp.view.allusers.ChartWindow.ChartController',
	'MyApp.view.allusers.ChartWindow.ChartViewModel',
	'MyApp.view.allusers.ChartWindow.ChartStore'
	],
    xtype: 'line-basic',
    controller: 'line-basic',
	layout:'fit',
	viewModel:'chart',
			bbar:[
				{
				xtype:'container',
				layout:'vbox',
				bind:{hidden:'{hid}'},
				items:[
				{
				xtype:'container',
				layout:'hbox',
				items:[
					{
						xtype:'displayfield',
						fieldLabel:'<b>Ύψος<b/>',
						bind:'{userInfo.height}'
					},
					{
						xtype:'displayfield',
						margin:'0 0 0 30',
						fieldLabel:'<b>Βάρος<b/>',
						bind:'{userInfo.weight}'
					},
					{
						xtype:'displayfield',
						margin:'0 0 0 30',
						fieldLabel:'<b>BMI<b/>',
						bind:'{userInfo.bmi}'
					},
					
				]
			},
			{
				xtype:'container',
				layout:'hbox',
				items:[
					{
						xtype:'displayfield',
						fieldLabel:'<b>Ημ/νία<b/>',
						bind:'{dateform}'
					},
					{
						xtype:'displayfield',
						margin:'0 0 0 20',
						fieldLabel:'<b>Στόχος<b/>',
						bind:'{goal}'
					}

				]
			},
			
			{
				xtype:'label',
				margin:'-20 0 20 0',
				bind:{html:'{htmlstring}'}//TODO this indicates the progress
			}
			]
			}
			
			],

            items: [{
                xtype: 'cartesian',
				name:'cartesian',
                width: '50%',
                height: 400,
				store:Ext.create('MyApp.view.allusers.ChartWindow.ChartStore', {}),
				//bind:{store:'{CHART_DATA}'},
                insetPadding: 40,
                innerPadding: {
                    left: 40,
                    right: 40
                },
				plugins: {
				        chartitemevents: {
				            moveEvents: true
				        }
				    },
				interactions: {
	            type: 'panzoom',
	            zoomOnPanGesture: true
	        	},
				 animation: {
				            duration: 200
				        },
				captions: {
				            title:'  ' ,
				            /*credits: {
				                text: 'Data: Browser Stats 2012\nSource: http://www.w3schools.com/',
				                align: 'left'
				            }*/
				        },
                axes: [{
                    type: 'numeric',
                    //fields: 'data1',
					fields: 'weight',
 					position: 'left',
		            minimum: 30,//bind to viewmodel as max weight-const
		            maximum: 124,//bind to viewmodel as max weight+const
		            //renderer: 'onAxisLabelRender'

                }, {
                    type: 'category',
            		position: 'bottom',
		            label: {
		                rotate: {
		                    degrees: -45
		                }
		            }
                }],
	            series: [{
	            type: 'line',
	            //xField: 'month',
	            //yField: 'data1',
				xField: 'month',
	            yField: 'weight',
	            style: {
	                lineWidth: 2,
					fill:'#000000',
					stroke:'#000000'
					
	            },
	            marker: {
	                radius: 4,
	                lineWidth: 2
	            },
	            label: {
	                //field: 'data1',
					field: 'weight',
	                display: 'over'
	            },
	            highlight: {
	                fillStyle: '#848383',
	                radius: 5,
	                lineWidth: 2,
	                strokeStyle: '#000000'
	            },
	            tooltip: {
	                trackMouse: true,
	                showDelay: 0,
	                dismissDelay: 0,
	                hideDelay: 0,
	                renderer: 'onSeriesTooltipRender'
	            }
	        }],
			listeners: {
						itemclick:'onItemClick',
			            itemhighlight: 'onItemHighlight'
			        }
            }
			
			
			
			]

   

});