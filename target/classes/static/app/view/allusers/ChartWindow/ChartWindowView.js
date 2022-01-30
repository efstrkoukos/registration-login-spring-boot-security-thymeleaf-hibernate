/**
 * 
 */
Ext.define('MyApp.view.allusers.ChartWindow.ChartWindowView', {
	extend:'Ext.window.Window',
	requires:['MyApp.view.allusers.ChartWindow.ChartWindowViewModel'],
	modal:true,
	closable:true,
	viewModel:'chartwindow',
	width:600,
	title:'Πρόοδος',
	height:'80%',
	initComponent : function() {

		var chart=Ext.create('MyApp.view.allusers.ChartWindow.Chart', {});
		chart.items.items[0].getStore().getProxy().setExtraParam("userId", this.getViewModel().get('userId'));
		chart.items.items[0].getCaptions().title.setText(this.getViewModel().get('name'));//binding fails
		chart.items.items[0].getStore().reload();
		Ext.apply(this, {
							items : [ chart]
						});
		this.callParent(arguments);
	}
	
	
	
	
	
	
	
	
});