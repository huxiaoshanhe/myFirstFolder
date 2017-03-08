$(function() {
	$('#artisanEditSubmit').submit(function() {
		var name = $.trim($(this).find('input[name="name"]').val());
		var idCode = $.trim($(this).find('input[name="id_card"]').val());
		var mobile = $.trim($(this).find('input[name="mobile"]').val());
		var skillLevel = $(this).find('select[name="skill_level"]').val();
		if(name=='') {
			showError('请填写姓名');
		}
		if(idCode=='') {
			showError('请填写身份证号');
		} else if(!isIdCard(idCode)) {
			showError('身份证格式不正确');
		}

		if(mobile=='') {
			showError('请填写手机号');
		} else if(!isMobile(mobile)) {
			showError('手机格式不正确');
		}

		if(skillLevel==0) {
			showError('请选择技能评级');
		}
		var data = {
			name:name,
			idCode:idCode,
			mobile:mobile,
			skillLevel:skillLevel,
			fee:$(this).find('select[name="worker_type"]').val()
		}

		if($('select[name="worker_type"]')) {
			var workerType = $('select[name="worker_type"]').val();
			if(workerType==0) {
				showError('请选择工种');
			}
			data.workerType = workerType;
		}

		return false;
	});
});