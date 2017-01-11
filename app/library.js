'use strict'
var file = {}
file.findMissing = function (arr1,arr2){
	if(arr1.length === arr2.length){
		return 0;
	}else if(arr2.length > arr1.length){
		return arr2.pop();
	}
}
 module.exports = file;
