'use strict';

angular.module('rtfmApp')
  .controller('ThreadCtrl', function ($scope, $firebase) {
    var fire = new Firebase("https://houwarnickrtfm.firebaseio.com/threads");
    $scope.threads = $firebase(fire);
    $scope.newThreadTitle = '';
    $scope.newReply = '';
    $scope.showReply = false;
    $scope.addThread = function(e){
    	if(e.keyCode !== 13){
    		return;
    	}
    	$scope.threads.$add({name: $scope.newThreadTitle});
    	$scope.newThreadTitle = '';
    }
    $scope.changeThread = function(id){
      var threadRef = new Firebase("https://houwarnickrtfm.firebaseio.com/threads"+id);
      $scope.showReply = true;
      $scope.currentThread = $firebase(threadRef);
      $scope.replies = $scope.currentThread.$child('replies');
      $scope.currentSelection = $scope.threads.$child(id);
    }

    $scope.addReply = function(e){
    	if(e.keyCode !== 13){
    		return;
    	}
    	$scope.replies.$add({name: $scope.newReply});
    	$scope.newReply = '';
    }
  });
