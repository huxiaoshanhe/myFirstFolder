$(function() {
	var num = 0;
	$('.addBtn .btn').click(function() {
		num+=1;
		var htmlStr = '<tr><td class="td1">材料名：</td><td class="td2"><input type="text" class="txt" name="name'+num+'"></td><td class="td1">单位：</td><td class="td2"><input type="text" class="txt" name="dept'+num+'"></td><td class="td1">数量：</td><td class="td2"><input type="text" class="txt" name="number'+num+'"></td><td class="td1">总价：</td><td class="td2"><input type="text" class="txt" name="total_price'+num+'"></td></tr>';
		$('.material-input-list').append($(htmlStr));
	});
});