var findACount = function(str){
	var re = /a/gi;
	if(str.match(re) === null){
		return 0;
	} else {
		return str.match(re).length;	
	}	
};


var areaCodeFinder = function(str){
	var re = /\(?(\d{3})/;
	return Number(str.match(re)[1]);
}


var adjustUrlParameter = function(url, param){
	var urlRe = /\?(\w*)\=(\d*)/;
	var paramRe = /(\w+)\=(\d*)/;
	if(urlRe.exec(url) === null){
		return url+'?'+param;
	} else {
		if(url.match(urlRe)[1] === param.match(paramRe)[1]){
			return url.replace(url.match(urlRe)[2], param.match(paramRe)[2]);
		} else if(url.match(urlRe)[1] !== param.match(paramRe)[1]){
			return url+'&'+param;
		}
	}
}


var stringPlusPlus = function(str){
	var re = /([0-9]+)/g;
	if(re.exec(str) === null){
		return str+'1';
	} else {
		var numStr = str.match(re);
		var plusNum = String(Number(numStr)+1);
		var revStr = String(numStr).slice(0, -(plusNum.length))+plusNum;
		return str.replace(numStr, revStr);
	}
}