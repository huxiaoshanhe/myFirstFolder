$(function() {
	$('#projectSubmit').submit(function() {
		var address = $.trim($(this).find('input[name="address"]').val());
		var rooms = $(this).find('select[name="room"]').val();
		var halls = $(this).find('select[name="hall"]').val();
		var washrooms = $(this).find('select[name="washroom"]').val();
		var kitchens = $(this).find('select[name="kitchen"]').val();
		var area = $.trim($(this).find('input[name="area"]').val());
		var host = $.trim($(this).find('input[name="host"]').val());
		var phone = $.trim($(this).find('input[name="mobile"]').val());
		var idCard = $.trim($(this).find('input[name="id_card"]').val());
		var projectType = $(this).find('select[name="project_type"]').val();
		var projectLevel = $(this).find('select[name="project_level"]').val();
		if(address=="") {
			showError('请填写物理地址');
		}
		if(rooms==0) {
			showError('请选择室数');
		}
		if(halls==0) {
			showError('请选择厅数');
		}
		if(washrooms==0) {
			showError('请选择卫数');
		}
		if(kitchens==0) {
			showError('请选择厨数');
		}		
		if(area=='') {
			showError('请填写面积');
		} else if(isNaN(area)) {
			showError('面积必须是数字');
		}
		if(host=='') {
			showError('请填写业主');
		}
		if(phone=='') {
			showError('请填写电话');
		} else if(!isPhone(phone)) {
			showError('电话格式不正确');
		}
		if(idCard=='') {
			showError('请填写身份证');
		} else if(!isIdCard(idCard)) {
			showError('身份证格式不正确');
		}
		if(projectType==0) {
			showError('请选择项目类型');
		}
		if(projectLevel==0) {
			showError('请选择项目级别');
		}

		var data  = {
			'address':address,
			'rooms':rooms,
			'halls':halls,
			'washrooms':washrooms,
			'kitchens':kitchens,
			'area':area,
			'host':host,
			'phone':phone,
			'idCard':idCard,
			'projectType':projectType,
			'projectLevel':projectLevel
		};

		$.ajax({
			type:'POST',
			url:'',
			data:data,
			success:function(msg) {

			}
		});
		return false;
	});
});