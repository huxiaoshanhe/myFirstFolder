$(function() {	
	resize();
	$(window).resize(function() {
		resize();
	});
});

function resize() {
	var mHeight = $(window).height()-124;
	$('.main').css('min-height',mHeight+'px');
}

function showSuccess(str,goWhere) {
	$('.successMsg').show().text(str);
	if(arguments.length==2) {
		setTimeout(function() {
			$('.successMsg').hide();
			location.href=goWhere;
		}, 2000);
	} else {
		setTimeout("$('.successMsg').hide()", 2000);
	}	
}
function showError(str,goWhere) {
	$('.errorMsg').show().text(str);
	if(arguments.length==2) {
		setTimeout(function() {
			$('.errorMsg').hide();
			location.href=goWhere;
		}, 2000);
	} else {
		setTimeout("$('.errorMsg').hide()", 2000);
	}	
}

function isPhone(str) {
	var phonea=/(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;
    if(phonea.test(str)==false){
        return false;
    } else {
    	return true;
    }
}

function isMobile(str) {
	var phonea=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
    if(phonea.test(str)==false){
        return false;
    } else {
    	return true;
    }
}

function isIdCard(str) {
	var isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/; 
    var isIDCard2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if((isIDCard1.test(str)==false)&&(isIDCard2.test(str)==false)){
        return false;
    } else {
    	return true;
    }
}

function urlGet(str) {
    var aQuery = window.location.href.split('?');
    var result = '';
    if (aQuery.length > 1) {
        var aBuf = aQuery[1].split('&');
        for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
            var aTmp = aBuf[i].split('=');
            if (str == aTmp[0]) {
                result = aTmp[1];
            }
        }
    }
    return decodeURI(result);
}