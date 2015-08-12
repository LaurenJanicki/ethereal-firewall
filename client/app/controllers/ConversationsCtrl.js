angular.module('followApp')

.controller('ConversationsCtrl', ['$scope', '$rootScope', '$routeParams', 'ConversationsFactory', 'ContactsFactory', 
  function($scope, $rootScope, $routeParams, ConversationsFactory, ContactsFactory) {

  $scope.data = {};
  $scope.data.conversations = [];
  //$scope.contact = $rootScope.contact;
  //$rootScope.user = 3;

  $scope.addConversation = function() {
    $scope.conversation.ContactId = $rootScope.contact.id;
    ConversationsFactory.addConversation($scope.conversation)
    .then(function(conversation) {
      $scope.data.conversations.push(conversation);
    });
  };

  $scope.toggleConversationForm = function () {
    $scope.showAddConversation = !$scope.showAddConversation;
  };

  $scope.getConversations = function() {
    console.log("Here was the user ", $rootScope.user);
    console.log($routeParams.id);
    ConversationsFactory.getConversations($routeParams.id)
    .then(function(conversations) {
      console.log("Conversations: ", conversations);
      $scope.data.conversations = conversations; 
    });
  };

  $scope.getContact = function() {
    ContactsFactory.getContact($routeParams.id)
    .then(function(contact) {
      $scope.contact = contact;
    });
  };

  $scope.getContact();
  $scope.getConversations();
  
}]);