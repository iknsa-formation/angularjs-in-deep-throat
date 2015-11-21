var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'AppController',
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            controller: 'AboutController',
            templateUrl: 'templates/about.html'
        })
        .when('/recruitement', {
            controller: 'RecruitementController',
            templateUrl: 'templates/recruitement.html'
        })
        .when('/quotation', {
            controller: 'QuotationController',
            templateUrl: 'templates/quotation.html'
        })
        .when('/contact', {
            controller: 'ContactController',
            templateUrl: 'templates/contact.html'
        })
        .when('/404', {
            controller: 'NotFoundController',
            templateUrl: 'templates/404.html'
        })
        .otherwise({redirectTo: '/404'})
        ;
});

app.controller('AppController', ['$scope', function($scope){
}]);

app.controller('AboutController', ['$scope', function($scope){
    console.log('AboutController');
}]);

app.controller('RecruitementController', ['$scope', function($scope){
    console.log('RecruitementController');
}]);

app.controller('QuotationController', ['$scope', function($scope){
    console.log('QuotationController');
}]);

app.controller('ContactController', ['$scope', function($scope){
    $scope.contactSubmit = function() {
        var savedData = JSON.parse(window.localStorage.getItem('contactData'));

        if(savedData === null) {
            savedData = [];
        }

        if($scope.tnc === undefined) {
            $scope.tnc = false;
        }

        var newData = {
            name: $scope.name,
            email: $scope.email,
            message: $scope.message,
            tnc: $scope.tnc
        };

        if($scope.name !== undefined && $scope.email !== undefined && $scope.message !== undefined) {
            savedData.push(newData);
            window.localStorage.setItem('contactData', JSON.stringify(savedData));
            console.log('savedData');
        }
        console.log(savedData);
    }
}]);

app.controller('NotFoundController', ['$scope', function($scope){
    console.log('NotFoundController');
}]);
