cvApp.controller('CvCtrl', ['$scope', function($scope) { 
	$scope.projects = [
    {'company': 'Neo4j',
     'name': 'Neo4j Cloud - Orchestration Team',
     'desc': 'Database lifecycle management and reliability for Neo4j cloud platform',
     'date': 'May 2025 - present',
     'position': 'Lead Engineer',
     'achievements': 'Designing and implementing database operator features for Kubernetes-based orchestration. Building backup and restore systems for cloud database deployments. Delivering features requiring cross-team collaboration. Contributing to metrics, monitoring, and incident response. Architecting solutions for database lifecycle management in multi-cloud environments using GitOps practices',
     'techologies': 'Golang, Kubernetes, Kustomize, ArgoCD, Database Operators, Docker, Terraform, Multi-cloud (AWS, GCP, Azure), Backup Systems, Monitoring (Prometheus, Grafana), Incident Management'
 	},
    {'company': 'Neo4j',
     'name': 'Neo4j Cloud - Orchestration Team',
     'desc': 'Database lifecycle management and reliability for Neo4j cloud platform',
     'date': 'November 2022 - April 2025',
     'position': 'Senior Software Engineer',
     'achievements': 'Designed and implemented database lifecycle orchestration features for Neo4j cloud platform. Built and maintained Kubernetes-based infrastructure using Kustomize for multi-cloud deployments. Improved system reliability and observability through comprehensive monitoring and automation. Collaborated with multiple teams to deliver critical infrastructure features using GitOps workflows',
     'techologies': 'Golang, Kubernetes, Kustomize, ArgoCD, Docker, Multi-cloud (AWS, GCP, Azure), Terraform, Prometheus, Grafana, Distributed Systems, gRPC'
 	},
    {'company': 'Vonage',
     'name': 'Nexmo',
     'desc': 'solutions on top of messaging/calling API',
     'date': '2020 - November 2022',
     'position': 'go/cloud engineer',
     'achievements': 'Successfully profiled microservices and fixed latency issues between them, network issues such as lack of TCP ports in Kubernetes cluster caused by poorly tuned HTTP clients. Migrated microservice from HTTP/1 to HTTP/2. Designed and implemented GraphQL to SQL transpiler. Optimized database indexes(Clickhouse) and queries to reduce their latency',
     'techologies': 'Golang, Redis, Docker, Kubernetes, AWS, NATS messaging, Clickhouse, GraphQL'
 	},		
    {'company': 'Deviget',
     'name': 'ring.com',
     'desc': 'video/photo streaming service',
     'date': '2019 - 2020',
     'position': 'go/cloud engineer',
     'achievements': 'Fixed microservice memory leak issues. Desinged, implemented and tested replacement for Amamzon Web Service (SQS) - Redis Delayed Tasks - to reduce company expenses',
     'techologies': 'Golang, DynamoDB, Redis, Docker, Kubernetes, AWS'
 	},		
    {'company': 'NDA',
     'name': 'NDA',
     'desc': 'communication platform',
     'date': '2018 - 2019',
     'position': 'golang developer',
     'achievements': 'Integrated missed call authentication approach as a replacement to SMS to reduce company expenses. Learned a new programming language - Golang',
     'techologies': 'Golang, Dep, gRPC, Docker, Kubernetes, Google Datastore, Redis, GCloud'
 	},	
    {'company': 'Intellias',
     'name': 'Here',
     'desc': 'tool for generate test data for mapping systems',
     'date': '2017 - 2018',
     'position': 'java developer',
     'achievements': 'Designed and implemented a data generation command tool line for use by other teams inside the company. Profiled the tool and fixed memory leaks',
     'techologies': 'Java 8, Junit, ReactJS, AWS'
 	},		
    {'company': 'GlobalLogic',
     'name': 'Royal Flora Holland',
     'desc': 'Big e-commerce platform for plants growers and customers',
     'date': '2017 - 2017',
     'position': 'java developer',
     'achievements': 'Designed and implemented microservices.',
     'techologies': 'CQRS, Elasticsearch, Spring, Microservices, Axon, Docker, Kubernetes, AWS, React JS, Redux'
 	},
    {'company': 'Dubit',
     'name': 'Dubit',
     'desc': 'Different small Rest Api projects based on Spring Boot and wrapped in Docker container',
     'date': '2016 - 2017',
     'position': 'java developer',
     'achievements': 'Got familiar with cloud native application development. Designed and implemented microservices.',
     'techologies': 'Spring, Microservices, Docker, AWS, Kubernetes, Rancher'
 	},
    {'company': 'Levi9',
     'name': 'Backbase',
     'desc': 'Backbase CXP is a loosely coupled presentation layer that sits on top of your existing systems. It helps you to compose truly customer-centric dialogs across any device, and combines content, data, and functionality from different underlying systems (silos) into a new, fresh, UX presentation layer. Backbase CXP is based on ‘lean architecture’ principles and, unlike traditional portals, is up and running within months, not years.',
     'date': '2014 - 2015',
     'position': 'java developer',
     'achievements': 'Designed and implemented microservices. Fixed bugs which required a lot of investigation',
     'techologies': 'Spring, Apache Camel'
 	},
    {'company':'GlobalLogic',
     'name': 'Bottomline',
     'desc': 'Online banking payment system for all types UK payments',
     'date': '2013 - 2014',
     'position': 'java developer',
     'achievements': 'Designed and implemented microservices.',
     'techologies': 'Spring, Jax-Rs'
    },
    {'company':'Epam',
     'name': 'Sephora',
     'desc': 'Discount system for Sephora(perfume retailer). Main application (Sephora) communicate with discount system(Beauty Insider) via Web Services. Beauty Insider is responsible for all loyalty business logic.',
     'date': '2012 - 2013',
     'position': 'java developer',
     'achievements': 'Implemented user stories, fixed bugs.',
     'techologies': 'EJB 2, JSP, Servlets, WebLogic'
    },
    {'company':'Epam',
     'name': 'Octopustravel',
     'desc': 'System provides hotels search and booking functionality across one of the direct or partner brands, through web or XML interface.',
     'date': '2010 - 2012',
     'position': 'java developer',
     'achievements': 'Got familiar with agile development. Added new functionality, fixed bugs, improved CD/CI infrastructure',
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
}]);
