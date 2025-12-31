cvApp.controller('CvCtrl', ['$scope', function($scope) {
	$scope.projects = [
    {'company': 'Neo4j',
     'name': 'Neo4j Cloud - Orchestration Team',
     'desc': 'Orchestration team responsible for database lifecycle management in Neo4j cloud platform',
     'date': 'May 2025 - present',
     'position': 'Lead Engineer',
     'achievementsList': [
       'Designed and implemented Kubernetes operators for large-scale database orchestration across multi-cloud environments',
       'Built automated backup and restore systems supporting high-availability database deployments',
       'Delivered infrastructure features requiring cross-team collaboration using GitOps workflows',
       'Led incident response and root-cause analysis for production database infrastructure',
       'Architected scalable solutions for database lifecycle management with infrastructure-as-code'
     ],
     'techologies': 'Golang, Kubernetes, Kustomize, ArgoCD, Database Operators, Docker, Terraform, Multi-cloud (AWS, GCP, Azure), Prometheus, Grafana'
 	},
    {'company': 'Neo4j',
     'name': 'Neo4j Cloud - Orchestration Team',
     'desc': 'Orchestration team responsible for database lifecycle management in Neo4j cloud platform',
     'date': 'November 2022 - April 2025',
     'position': 'Senior Software Engineer',
     'achievementsList': [
       'Designed and implemented database lifecycle orchestration features for large-scale multi-cloud deployments',
       'Built and maintained scalable Kubernetes-based infrastructure using Kustomize and ArgoCD for GitOps',
       'Improved system reliability and observability through automated monitoring, alerting, and distributed tracing',
       'Delivered critical infrastructure features through cross-team collaboration and infrastructure-as-code practices'
     ],
     'techologies': 'Golang, Kubernetes, Kustomize, ArgoCD, Docker, Multi-cloud (AWS, GCP, Azure), Terraform, Prometheus, Grafana, gRPC'
 	},
    {'company': 'Vonage',
     'name': 'Nexmo',
     'desc': 'Messaging and calling API platform',
     'date': '2020 - November 2022',
     'position': 'Go/Cloud Engineer',
     'achievementsList': [
       'Profiled and optimized microservices, fixing latency and network issues in Kubernetes clusters',
       'Migrated microservice from HTTP/1 to HTTP/2, improving performance',
       'Designed and implemented GraphQL to SQL transpiler',
       'Optimized Clickhouse database indexes and queries, reducing latency'
     ],
     'techologies': 'Golang, Redis, Docker, Kubernetes, AWS, NATS, Clickhouse, GraphQL'
 	},
    {'company': 'Deviget',
     'name': 'ring.com',
     'desc': 'Video/photo streaming service',
     'date': '2019 - 2020',
     'position': 'Go/Cloud Engineer',
     'achievementsList': [
       'Fixed microservice memory leak issues',
       'Designed and implemented Redis Delayed Tasks as cost-effective replacement for AWS SQS'
     ],
     'techologies': 'Golang, DynamoDB, Redis, Docker, Kubernetes, AWS'
 	},
    {'company': 'NDA',
     'name': 'NDA',
     'desc': 'Communication platform',
     'date': '2018 - 2019',
     'position': 'Golang Developer',
     'achievementsList': [
       'Integrated missed call authentication as cost-effective replacement for SMS',
       'Transitioned from Java to Golang for cloud-native development'
     ],
     'techologies': 'Golang, gRPC, Docker, Kubernetes, Google Datastore, Redis, GCloud'
 	},
    {'company': 'Earlier Experience',
     'name': '',
     'desc': 'Various Java Developer roles (2010-2017)',
     'date': '2010 - 2017',
     'position': 'Java Developer (Junior → Senior)',
     'achievementsList': [
       'Designed and implemented microservices using Spring ecosystem',
       'Developed e-commerce platforms, banking systems, and enterprise applications',
       'Worked with Docker, Kubernetes, and AWS in early cloud-native projects'
     ],
     'techologies': 'Java, Spring, Microservices, Docker, Kubernetes, AWS'
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

  $scope.opensources = [
  {
  	'name': 'neotest-go',
  	'url': 'https://github.com/nvim-neotest/neotest-go',
  	'description': 'Go language adapter for Neotest testing framework in Neovim. Maintainer',
  	'stars': '146'
  }
  ];

  $scope.certificates = [
  {
  	'name':'Oracle Certified Professional, Java SE 6 Programmer'
  }
  ];
}]);
