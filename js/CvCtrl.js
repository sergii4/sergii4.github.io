cvApp.controller('CvCtrl', ['$scope', function($scope) { 
	$scope.projects = [
    {'company': 'Deviget',
     'name': 'ring.com',
     'desc': 'video/photo streaming service',
     'date': '2019 - present time',
     'position': 'go/cloud engineer',
     'responsibilities': 'Building microservices from scratch, extending existing microservices, applying concurrency patterns, navigating through complex cloud architecture and providing info: dashboards, logs',
     'techologies': 'Golang, DynamoDB, Redis'
 	},		
    {'company': 'NDA',
     'name': 'NDA',
     'desc': 'communication platform',
     'date': '2018 - 2019',
     'position': 'golang developer',
     'responsibilities': 'I am responsible authentication and authorization users and application based on OpenID Connect, Missed Call API',
     'techologies': 'Golang, Dep, gRPC, Docker, Google Datastore, Redis'
 	},	
    {'company': 'Intellias',
     'name': 'Here',
     'desc': 'tool for generate test data for mapping systems',
     'date': '2017 - 2018',
     'position': 'java developer',
     'responsibilities': 'design, development',
     'techologies': 'Java 8, Junit, ReactJS'
 	},		
    {'company': 'GlobalLogic',
     'name': 'Royal Flora Holland',
     'desc': 'Big e-commerce platform for plants growers and customers',
     'date': '2017 - 2017',
     'position': 'java developer',
     'responsibilities': 'develop app from scratch (microservices based on bounded context), providing estimation, working on app architecture, implementation user stories',
     'techologies': 'CQRS, Elasticsearch, Spring, Microservices, Axon, Docker, AWS, React JS, Redux'
 	},
    {'company': 'Dubit',
     'name': 'Dubit',
     'desc': 'Different small Rest Api projects based on Spring Boot and wrapped in Docker container',
     'date': '2016 - 2017',
     'position': 'java developer',
     'responsibilities': 'develop app from scratch (microservices based on bounded context), providing estimation, working on app architecture, implementation user stories',
     'techologies': 'Spring, Microservices, Docker, AWS'
 	},
    {'company': 'Levi9',
     'name': 'Backbase',
     'desc': 'Backbase CXP is a loosely coupled presentation layer that sits on top of your existing systems. It helps you to compose truly customer-centric dialogs across any device, and combines content, data, and functionality from different underlying systems (silos) into a new, fresh, UX presentation layer. Backbase CXP is based on ‘lean architecture’ principles and, unlike traditional portals, is up and running within months, not years.',
     'date': '2014 - 2015',
     'position': 'java developer',
     'responsibilities': 'working on app architecture, implementation user stories, bug fixing, maintatinance',
     'techologies': 'Spring, Apache Camel'
 	},
    {'company':'GlobalLogic',
     'name': 'Bottomline',
     'desc': 'Online banking payment system for all types UK payments',
     'date': '2013 - 2014',
     'position': 'java developer',
     'responsibilities': 'develop app from sratch, providing estimation, implementation user stories, bug fixing',
     'techologies': 'Spring, Jax-Rs'
    },
    {'company':'Epam',
     'name': 'Sephora',
     'desc': 'Discount system for Sephora(perfume retailer). Main application (Sephora) communicate with discount system(Beauty Insider) via Web Services. Beauty Insider is responsible for all loyalty business logic.',
     'date': '2012 - 2013',
     'position': 'java developer',
     'responsibilities': 'implementation user stories, bug fixing, maintainance, writing js, sql scripts',
     'techologies': 'EJB 2, JSP, Servlets, WebLogic'
    },
    {'company':'Epam',
     'name': 'Octopustravel',
     'desc': 'System provides hotels search and booking functionality across one of the direct or partner brands, through web or XML interface.',
     'date': '2010 - 2012',
     'position': 'java developer',
     'responsibilities': 'adding new functionality, bug fixing, working on infrastructure',
     'techologies': 'Spring, Tomcat, JSP, Servlets'
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
  }
  ];
}]);
