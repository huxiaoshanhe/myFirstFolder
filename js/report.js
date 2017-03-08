$(function() {
	$('.changeWeeks').click(function() {
		$.jeDate('#cycle',{
			isTime:true,
			format:'YYYY.MM'
		});
		$('#cycle').click();
	});
	$('.changeYears').click(function() {
		$.jeDate('#year',{
		    format:"YYYY年",
		    isTime:false
		});
		$('#year').click();
	});
});