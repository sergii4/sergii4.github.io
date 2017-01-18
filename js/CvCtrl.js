cvApp.controller('CvCtrl', ['$scope', function($scope) { 
	$scope.projects = [
    {'company': 'Dubit',
     'name': 'Dubit',
     'desc': 'Different small Rest Api projects based on Spring Boot and wrapped in Docker container',
     'date': '2016 - present time',
     'position': 'java developer',
     'responsibilities': 'develop app from sratch, providing estimation, working on app architecture, implementation user stories'
 	},
    {'company': 'Levi9',
     'name': 'Backbase',
     'desc': 'Backbase CXP is a loosely coupled presentation layer that sits on top of your existing systems. It helps you to compose truly customer-centric dialogs across any device, and combines content, data, and functionality from different underlying systems (silos) into a new, fresh, UX presentation layer. Backbase CXP is based on ‘lean architecture’ principles and, unlike traditional portals, is up and running within months, not years.',
     'date': '2014 - 2015',
     'position': 'java developer',
     'responsibilities': 'working on app architecture, implementation user stories, bug fixing, maintatinance'
 	},
    {'company':'GlobalLogic',
     'name': 'Bottomline',
     'desc': 'Online banking payment system for all types UK payments',
     'date': '2013 - 2014',
     'position': 'java developer',
     'responsibilities': 'develop app from sratch, providing estimation, implementation user stories, bug fixing'
    },
    {'company':'Epam',
     'name': 'Sephora',
     'desc': 'Discount system for Sephora(perfume retailer). Main application (Sephora) communicate with discount system(Beauty Insider) via Web Services. Beauty Insider is responsible for all loyalty business logic.',
     'date': '2012 - 2013',
     'position': 'java developer',
     'responsibilities': 'implementation user stories, bug fixing, maintainance, writing js, sql scripts'
    },
    {'company':'Epam',
     'name': 'Octopustravel',
     'desc': 'System provides hotels search and booking functionality across one of the direct or partner brands, through web or XML interface.',
     'date': '2010 - 2012',
     'position': 'java developer',
     'responsibilities': 'adding new functionality, bug fixing, working on infrastructure'
    }
  ];

  $scope.edus = [
  {
  	'time': '2002-2006',
  	'location': 'Kharkiv, Ukraine',
  	'univer': 'National Technical University "Kharkiv Polytechnic University"',
  	'graduation': 'undergraduate, BSc (Hons) Computer Science'
  },
  {
  	'time': '2008-2006',
  	'location': 'Kharkiv, Ukraine',
  	'univer': 'National Technical University "Kharkiv Polytechnic University"',
  	'graduation':'graduate, Master of management IT-projects'
  }
  ]; 
	
  $scope.certificates = [
  {
  	'name':'Oracle Certified Professional, Java SE 6 Programmer'
  }
  ];

  $scope.blogs = [
  {
  	'name':'stackoverflow',
	'url' : 'http://stackoverflow.com/users/2219213/sergii-getman'
  },
  {
  	'name':'blogspot',
	'url' : 'http://developdevelop.blogspot.com/'
  }
  ];
}]);
