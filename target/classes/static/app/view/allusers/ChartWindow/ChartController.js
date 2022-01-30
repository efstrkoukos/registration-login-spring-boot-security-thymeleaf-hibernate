/**
 * 
 */
Ext.define('MyApp.view.allusers.ChartWindow.ChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.line-basic',


    onSeriesTooltipRender: function(tooltip, record, item) {

		var date = record.get('date').replace(/[^0-9]+/g,' ').split(" ");
          var finaldate= date[2]+"-"+date[1]+"-"+date[0];
		tooltip.setHtml("Βάρος: "+record.get('weight') +"kg"+ "<br>"+"Ημ/νία.: "+finaldate);

    },

    onItemHighlight: function(chart, newHighlightItem, oldHighlightItem) {
        this.setSeriesLineWidth(newHighlightItem, 4);
        this.setSeriesLineWidth(oldHighlightItem, 2);
    },

    setSeriesLineWidth: function(item, lineWidth) {
        if (item) {
            item.series.setStyle({
                lineWidth: lineWidth
            });
        }
    },
	onItemClick:function(chart,item) {
		//console.log(item);
		chart.up('panel').getViewModel().set('hid',false);
		var htmlstring= this.returnProgress(item.index,item);
		chart.up('panel').getViewModel().set('htmlstring',htmlstring);
		//console.log(string);
		chart.up('panel').getViewModel().set('userInfo',item.record.data);
		var date = item.record.data.date.replace(/[^0-9]+/g,' ').split(" ");  
		chart.up('panel').getViewModel().set('dateform',date[2]+"-"+date[1]+"-"+date[0]);//formulas do not work
		var goal=item.record.data.goal;
		if(goal==1)
		chart.up('panel').getViewModel().set('goal','Αύξηση Βάρους');
		else if(goal==0)
		chart.up('panel').getViewModel().set('goal','Διατήρηση Βάρους');
		else
		chart.up('panel').getViewModel().set('goal','Μείωση Βάρους');
	},
	
	returnProgress:function(idx,item) {
		var weight=item.record.data.weight;
		var goal=item.record.data.goal;
		try{
		var nextweight=item.record.store.data.items[idx+1].data.weight;
		}catch(error) {
  		console.log(error);}
		//αν υπάρχει επόμενο δηλαδή αν δεν είναι το index το τελευταίο
		if(idx+1 != item.record.store.data.length)
		{
			var gain_weight=nextweight-weight;
			if(goal==1)
			{
				
				if(gain_weight>0)
					return '<p style=\"color:#6E9553\"><b>Ο χρήστης πέτυχε τον στόχο του αυξάνοντας βάρος στην επόμενη μέτρηση!</b></p>';
				else if(gain_weight<0)
					return '<p style=\"color:#FF8971\"><b>Ο χρήστης έχασε βάρος στην επόμενη μέτρησή του.<br>Πρέπει να προσπαθήσει περισσότερο!</b></p>';
				else
					return '<p style=\"color:#FF8971\"><b>Ο χρήστης διατήρησε το βάρος του στην επόμενη μέτρησή του.<br>Πρέπει να προσπαθήσει περισσότερο!</b></p>';
			}
			else if(goal==0)
			{
				if(gain_weight>0)
					return '<p style=\"color:#FF8971\"><b>Ο χρήστης αύξησε βάρος στην επόμενή του μέτρηση.<br>Πρέπει να προσπαθήσει περισσότερο!</b></p>';
				else if(gain_weight<0)
					return '<p style=\"color:#FF8971\";><b>Ο χρήστης έχασε βάρος στην επόμενη μέτρησή του.<br>Πρέπει να προσπαθήσει περισσότερο!</b></p>';
				else
					return '<p style=\"color:#6E9553\"><b>Ο χρήστης πέτυχε τον στόχο του διατηρώντας βάρος στην επόμενη μέτρηση!</b></p>';
			}
			else if(goal==-1)
			{
				if(gain_weight>0)
					return '<p style=\"color:#FF8971\"><b>Ο χρήστης αύξησε βάρος στην επόμενή του μέτρηση.<br>Πρέπει να προσπαθήσει περισσότερο!</b></p>';
				else if(gain_weight<0)
					return '<p style=\"color:#FF8971\"><b>Ο χρήστης έχασε βάρος στην επόμενη μέτρησή του.<br>Πρέπει να προσπαθήσει περισσότερο!</b></p>';
				else
					return '<p style=\"color:#6E9553\"><b>Ο χρήστης πέτυχε τον στόχο του χάντοντας βάρος στην επόμενη μέτρηση!</b></p> ';
			}
		}
		else
		return null;
	},

    onPreview: function() {
        var chart;

        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');

            return;
        }

        chart = this.lookup('chart');

        chart.preview();
    }

});