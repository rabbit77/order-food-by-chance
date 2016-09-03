(function (window,angular) {
	'use strict';
	var app=angular.module('todoApp',[]);
	app.controller('todoCtrl',['$scope','$filter','$interval',function ($scope,$filter,$interval) {
		//查增删改
		//初始化添加的文本
		$scope.todotext='';
		//查看
		$scope.todoList=[
			{text:'辣白菜炒饭',completed:false},
			{text:'鲜蔬韩粉石锅拌饭',completed:false},
			{text:'辛拉面',completed:false},
			{text:'大酱汤',completed:false},
		];
		//增
		$scope.addTodo=function () {
			//过滤空的数据
			if($scope.todotext.length>0){
				$scope.todoList.push({text:$scope.todotext,completed:false});
				$scope.todotext='';
			}
		};
		//删除
		$scope.delTodo=function (data) {
			//找到下标
			var index=$scope.todoList.indexOf(data);
			//通过下标删除数据
			$scope.todoList.splice(index,1);
		}
		//修改
		//共同的todoEdit
		$scope.todoEdit={};
		$scope.editTodo=function (data) {
			$scope.todoEdit=data;
		}
		//失去焦点后将数据保存起来
		$scope.saveTodo=function () {
			$scope.todoEdit={};
		}
		//监视数据变化
		//添加true表示可以去监视对象或者数组
		//未完成的数量
		$scope.itemleft=0;
		$scope.$watch('todoList',function (newVal,oldVal) {
			$scope.itemleft=$filter('filter')(newVal).length;
		},true);
		//删除已完成的数据
		$scope.clearCompleted=function () {
			//临时的数据
			var tempTodoList=[];
			for(var i=0;i<$scope.todoList.length;i++){
				if(!$scope.todoList[i].completed){
					tempTodoList.push($scope.todoList[i]);
				}
			}
			$scope.todoList=tempTodoList;
		}
		//鼠标点击事件
		  $scope.select=function () {
				var insistTime=0;
		 	 	var timer=$interval(function(){
		 	  	for(var i=0;i<$scope.todoList.length;i++){
		 	   	$scope.todoList[i].completed=false;}
		 		 $scope.index = Math.floor(Math.random()*($scope.todoList.length));
		 		 $scope.todoList[$scope.index].completed=true;
		 		insistTime++;
		 		if(insistTime>20){
		 			$interval.cancel(timer);
		 		}
		 	  },180)
		 }
	}]);
})(window,angular);
