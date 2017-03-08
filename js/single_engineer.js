$(function() {
	jeDate({
		dateCell:"#plan_start",
		format:"YYYY-MM-DD",
		choosefun:function(elem, val) {
			var planEnd = $('#plan_end').val();
			if(planEnd!='') {
				var timeEnd = toTimestamp(planEnd);
				var timeStart = toTimestamp(elem);
				var result = timeEnd-timeStart;
				if(result>0) {
					var days = Math.ceil(result/87600);
					$('.planDays').text(days).removeClass('red');
				} else {
					var days = Math.floor(result/87600);
					$('.planDays').text(days).addClass('red');
				}
			}
		}
	});
	jeDate({
		dateCell:"#plan_end",
		format:"YYYY-MM-DD",
		choosefun:function(elem, val) {
			var planStart = $('#plan_start').val();
			if(planStart!='') {
				var timeEnd = toTimestamp(elem);
				var timeStart = toTimestamp(planStart);
				var result = timeEnd-timeStart;
				if(result>0) {
					var days = Math.ceil(result/87600);
					$('.planDays').text(days).removeClass('red');
				} else {
					var days = Math.floor(result/87600);
					$('.planDays').text(days).addClass('red');
				}	
			}
		}
	});
	jeDate({
		dateCell:"#real_start",
		format:"YYYY-MM-DD",
		choosefun:function(elem, val) {
			var realEnd = $('#real_end').val();
			if(realEnd!='') {
				var timeEnd = toTimestamp(realEnd);
				var timeStart = toTimestamp(elem);
				var result = timeEnd-timeStart;
				if(result>0) {
					var days = Math.ceil(result/87600);
					$('.realDays').text(days).removeClass('red');
				} else {
					var days = Math.floor(result/87600);
					$('.realDays').text(days).addClass('red');
				}	
			}
		}
	});
	jeDate({
		dateCell:"#real_end",
		format:"YYYY-MM-DD",
		choosefun:function(elem, val) {
			var realStart = $('#real_start').val();
			if(realStart!='') {
				var timeEnd = toTimestamp(elem);
				var timeStart = toTimestamp(realStart);
				var result = timeEnd-timeStart;
				if(result>0) {
					var days = Math.ceil(result/87600);
					$('.realDays').text(days).removeClass('red');
				} else {
					var days = Math.floor(result/87600);
					$('.realDays').text(days).addClass('red');
				}	
			}
		}
	});
	jeDate({
		dateCell:"#building_plan_start",
		format:"YYYY-MM-DD",
		choosefun:function(elem, val) {
			var bplanEnd = $('#building_plan_end').val();
			if(bplanEnd!='') {
				var timeEnd = toTimestamp(bplanEnd);
				var timeStart = toTimestamp(elem);
				var result = timeEnd-timeStart;
				if(result>0) {
					var days = Math.ceil(result/87600);
				$('.bPlanDays').text(days).removeClass('red');
				} else {
					var days = Math.floor(result/87600);
				$('.bPlanDays').text(days).addClass('red');
				}	
			}
		}
	});
	jeDate({
		dateCell:"#building_plan_end",
		format:"YYYY-MM-DD",
		choosefun:function(elem, val) {
			var bplanStart = $('#building_plan_start').val();
			if(bplanStart!='') {
				var timeEnd = toTimestamp(elem);
				var timeStart = toTimestamp(bplanStart);
				var result = timeEnd-timeStart;
				if(result>0) {
					var days = Math.ceil(result/87600);
					$('.bPlanDays').text(days).removeClass('red');
				} else {
					var days = Math.floor(result/87600);
					$('.bPlanDays').text(days).addClass('red');
				}	
			}
		}		

	});
	jeDate({
		dateCell:"#building_real_start",
		format:"YYYY-MM-DD",
		choosefun:function(elem, val) {
			var bplanEnd = $('#building_real_end').val();
			if(bplanEnd!='') {
				var timeEnd = toTimestamp(bplanEnd);
				var timeStart = toTimestamp(elem);
				var result = timeEnd-timeStart;
				if(result>0) {
					var days = Math.ceil(result/87600);
					$('.bRealDays').text(days).removeClass('red');
				} else {
					var days = Math.floor(result/87600);
					$('.bRealDays').text(days).addClass('red');
				}	
			}
		}
	});
	jeDate({
		dateCell:"#building_real_end",
		format:"YYYY-MM-DD",
		choosefun:function(elem, val) {
			var brealStart = $('#building_real_start').val();
			if(brealStart!='') {
				var timeEnd = toTimestamp(elem);
				var timeStart = toTimestamp(brealStart);
				var result = timeEnd-timeStart;
				if(result>0) {
					var days = Math.ceil(result/87600);
					$('.bRealDays').text(days).removeClass('red');
				} else {
					var days = Math.floor(result/87600);	
					$('.bRealDays').text(days).addClass('red');
				}
			}
		}

	});



	$('#submitEngineer').submit(function() {
		var projectManager = $.trim($(this).find('input[name="project_manager"]').val());
		var planStart = $.trim($(this).find('input[name="plan_start"]').val());
		var planEnd = $.trim($(this).find('input[name="plan_end"]').val());
		var realStart = $.trim($(this).find('input[name="real_start"]').val());
		var realEnd = $.trim($(this).find('input[name="real_end"]').val());
		var workerType = $('select[name="worker_type"]').val();
		var buildingPlanStart = $.trim($(this).find('input[name="building_plan_start"]').val());
		var buildingPlanEnd = $.trim($(this).find('input[name="building_plan_end"]').val());
		var artisanName = $.trim($(this).find('input[name="artisan_name"]').val());
		var fee = $.trim($(this).find('input[name="fee"]').val());

		if(projectManager=='') {
			showError('请填写项目经理');
		}
		if(planStart=='') {
			showError('请选择计划开工日期');
		}
		if(planEnd=='') {
			showError('请选择计划结束日期');
		}
		if(realStart=='') {
			showError('请选择实际开工日期');
		}
		if(realEnd=='') {
			showError('请选择实际结束日期');
		}
		if(workerType==0) {
			showError('请选择工种');
		}
		if(buildingPlanStart=='') {
			showError('请选择施工阶段计划开工日期');
		}
		if(buildingPlanEnd=='') {
			showError('请选择施工阶段计划结束日期');
		}
		if(artisanName=='') {
			showError('请填写工匠');
		}
		if(fee=='') {
			showError('请填写费用');
		}else if(isNaN(fee)) {
			showError('费用必须是数字');
		}

		if($('.red')) {
			showError('开工时间不能晚于完成时间');
		}

		return false;
	});	

	$(document).click(function() {
		$('.artisanList').hide();
	});
});

/**添加工种开始**/
var artisanTypeNum=0;//用于累计添加工匠的数量
function addArtisanType() {
	artisanTypeNum+=1;
	var html='';
	html+='<tr class="newArtisanType'+artisanTypeNum+'" style="border-top:1px dashed #ddd;">';
	html+='<td class="td1">工种：</td>';
	html+='<td class="td2">';
	html+='<select name="worker_type">';
	html+='<option value="0">选择</option>';
	html+='<option value="1">工种一</option>';
	html+='<option value="2">工种二</option>';
	html+='</select>';
	html+='</td>';
	html+='<td class="td3"></td>';
	html+='<td class="td4"></td>';
	html+='<td class="td5"></td>';
	html+='<td class="td6"></td>';
	html+='</tr>';
	html+='<tr class="newArtisanType'+artisanTypeNum+'">';
	html+='<td>计划开工日期：</td>';
	html+='<td><input type="text" class="txt" name="building_plan_start" readonly="readonly" id="building_plan_start'+artisanTypeNum+'" onclick="getDates(this,'+artisanTypeNum+')"></td>';
	html+='<td>计划完成日期：</td>';
	html+='<td><input type="text" class="txt" name="building_plan_end" readonly="readonly" id="building_plan_end'+artisanTypeNum+'" onclick="getDates(this,'+artisanTypeNum+')"></td>';
	html+='<td>计划天数：<span class="bPlanDays'+artisanTypeNum+'"></span></td>';
	html+='<td></td>';
	html+='</tr>';
	html+='<tr class="newArtisanType'+artisanTypeNum+'">';
	html+='<td>实际开工日期：</td>';
	html+='<td><input type="text" class="txt" name="building_real_start" readonly="readonly" id="building_real_start'+artisanTypeNum+'" onclick="getDates(this,'+artisanTypeNum+')"></td>';
	html+='<td>实际完成日期：</td>';
	html+='<td><input type="text" class="txt" name="building_real_end" readonly="readonly" id="building_real_end'+artisanTypeNum+'" onclick="getDates(this,'+artisanTypeNum+')"></td>';
	html+='<td>实际天数：<span class="bRealDays'+artisanTypeNum+'"></span></td>';
	html+='<td></td>';
	html+='</tr>';
	html+='<tr class="newArtisanType'+artisanTypeNum+'">';
	html+='<td>工匠：</td>';
	html+='<td class="findArtisan">';
	html+='<input type="text" class="txt" name="artisan_name" onkeyup="getArtisan(this)">';
	html+='<ul class="artisanList">';						
	html+='</ul>';
	html+='</td>';
	html+='<td>费用：</td>';
	html+='<td><input type="text" class="txt" name="fee"></td>';
	html+='<td></td>';
	html+='</tr>';
	html+='<tr class="insertArtisan'+artisanTypeNum+' newArtisanType'+artisanTypeNum+'">';
	html+='<td colspan="6">';
	html+='<input type="button" value="添加工匠" onclick="addArtisan('+artisanTypeNum+')" class="btn addArtisans">';
	html+='</td>';
	html+='</tr>';	
	html+='<tr class="newArtisanType'+artisanTypeNum+'" style="border-bottom:1px dashed #dadada">';
	html+='<td colspan="6" class="btns">';
	html+='<input type="button" value="发送短信" class="btn"> ';
	html+='<input type="button" value="验收" class="btn"> ';
	html+='<input type="button" value="移除工种" class="btn btn-delete" onclick="removeArtisanType('+artisanTypeNum+')"> ';
	html+='</td>';
	html+='</tr>';
	$(html).insertBefore('.insertArtisanType');
}
/**添加工种结束**/

/**添加工匠**/
function addArtisan(num) {
	var html = '';
	html+='<tr class="newArtisanType'+num+'">';
	html+='<td>工匠：</td>';
	html+='<td class="findArtisan">';
	html+='<input type="text" class="txt" name="artisan_name" onkeyup="getArtisan(this)">';
	html+='<ul class="artisanList">';
	html+='</ul>';
	html+='</td>';
	html+='<td>费用：</td>';
	html+='<td><input type="text" class="txt" name="fee"></td>';
	html+='<td><a href="javascript:void(0);" class="btn btn-remove" onclick="removeArtisan(this)">移除</a></td>';
	html+='</tr>';
	if(num) {
		$(html).insertBefore('.insertArtisan'+num);
	} else {
		$(html).insertBefore('.insertArtisan');
	}
}

function getDates(e,num) {
	var id = '#'+$(e)[0].id;
	jeDate({
		dateCell:id,
	    format:"YYYY-MM-DD",
	    choosefun:function(elem, val) {
	    	if(id=='#building_plan_end'+num) {
	    		var bplanStart = $('#building_plan_start'+num).val();
				if(bplanStart!='') {
					var timeEnd = toTimestamp(elem);
					var timeStart = toTimestamp(bplanStart);
					var result = timeEnd-timeStart;
					if(result>0) {
						var days = Math.ceil(result/87600);
						$('.bPlanDays'+num).text(days).removeClass('red');
					} else {
						var days = Math.floor(result/87600);
						$('.bPlanDays'+num).text(days).addClass('red');
					}
				}
	    	} else if(id=='#building_plan_start'+num) {
	    		var bplanEnd = $('#building_plan_end'+num).val();
				if(bplanEnd!='') {
					var timeEnd = toTimestamp(bplanEnd);
					var timeStart = toTimestamp(elem);
					var result = timeEnd-timeStart;
					if(result>0) {
						var days = Math.ceil(result/87600);
						$('.bPlanDays'+num).text(days).removeClass('red');
					} else {
						var days = Math.floor(result/87600);
						$('.bPlanDays'+num).text(days).addClass('red');
					}
				}
	    	} else if(id=='#building_real_start'+num) {
	    		var brealEnd = $('#building_real_end'+num).val();
				if(brealEnd!='') {
					var timeEnd = toTimestamp(brealEnd);
					var timeStart = toTimestamp(elem);
					var result = timeEnd-timeStart;
					if(result>0) {
						var days = Math.ceil(result/87600);
						$('.bRealDays'+num).text(days).removeClass('red');
					} else {
						var days = Math.floor(result/87600);
						$('.bRealDays'+num).text(days).addClass('red');
					}
				}
	    	} else if(id=='#building_real_end'+num) {
	    		var brealStart = $('#building_real_start'+num).val();
				if(brealStart!='') {
					var timeEnd = toTimestamp(elem);
					var timeStart = toTimestamp(brealStart);
					var result = timeEnd-timeStart;
					if(result>0) {
						var days = Math.ceil(result/87600);
						$('.bRealDays'+num).text(days).removeClass('red');
					} else {
						var days = Math.floor(result/87600);
						$('.bRealDays'+num).text(days).addClass('red');
					}	
				}
	    	}	    		
		}
	});
}

function toTimestamp(str) {
	var timestamp2 = Date.parse(new Date(str));
	timestamp2 = timestamp2 / 1000;
	return timestamp2;
}

function getArtisan(e) {
	$(e).parent('.findArtisan').find('.artisanList').show();
	if($(e).val()=='') {
		$(e).parent('.findArtisan').find('.artisanList').hide();
	}
	$.ajax({
		type:'GET',
		url:'',
		data:{keyword:$(e).val()},
		success:function(data) {

		}
	});
}

function selectArtisan(str,e) {
	$(e).parents('.findArtisan').find('.txt').val(str);
	$('.artisanList').hide();
}


function removeArtisan(e) {
	$(e).parents('tr').remove();
}

function removeArtisanType(num) {
	$('.newArtisanType'+num).remove();
}