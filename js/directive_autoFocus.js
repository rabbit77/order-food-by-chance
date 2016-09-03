/*
* @Author: 86409
* @Date:   2016-08-30 07:48:59
* @Last Modified by:   86409
* @Last Modified time: 2016-09-03 08:31:08
*/

'use strict';
(function (angular) {
	var app =angular.module('todoApp');
	app.directive('aotuFocus',function(){
		return {
			link:function(scope,element,attrs){
				element.on('dblclick',function(){
					angular.element(this).find('input').eq(0)[0].focus();
				})
			}
		}
	})
})(angular);