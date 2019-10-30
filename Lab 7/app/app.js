var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.name = "Faseeh Ahmed";
	$scope.faculty = "Faculty of Business and IT";
	$scope.university = {name:"Ontario Tech University", url:"https://ontariotechu.ca/"};
	$scope.contacts = {email:"faseeh.ahmed@ontariotechu.net", phone:"416-824-1236"};
	$scope.skills = [
		{name:"Leadership", text: "I took a course called collaborative leadership"},
		{name:"Data Visualization", text: "I have worked with softwares such as Tableau and Microsoft Power BI"},
		{name:"Microsoft Excel", text: "I can create nice charts, graphs and visuals. This is also complemented with my VBA knowledge"}
	];
	$scope.programmingSkills = ["Python", "SQL", "HTML5", "CSS3", "Javascript", "AngularJS", "jQuery", "Node.js", "Express.js", "Ajax", "PHP", "Bootstrap5", "Git", "VBA"];
	$scope.courses = [
		{
			name: "Web and Script Programming",
			number: "INFR 3120",
			time:["Tuesday 5:10PM - 6:30PM", "Thursday 5:10PM - 6:30PM"],
			instructor: "Amirali Abari"
		},
		{
			name: "Introduction to Financial Accounting",
			number: "INFR 1130",
			time:["Monday 2:10PM - 3:30PM", "Tuesday 11:10AM - 12:30PM"],
			instructor: "Big Ngo"
		},
		{
			name: "Business Simulation and Analytics",
			number: "INFR 1130",
			time:["Monday 11:10AM - 12:30PM", "Monday 6:40PM - 9:30PM"],
			instructor: "Michael Bliemel"
		},
		{
			name: "Introduction to Cloud Services",
			number: "INFR 2670",
			time:["Monday 2:10PM - 3:30PM", "Thursday 2:10PM - 3:30PM"],
			instructor: "Richard W. Pazzi"
		},
		{
			name: "Introduction to Computer Security",
			number: "INFR 2600",
			time:["Tuesday 8:10AM - 9:30AM", "Thursday 8:10AM - 9:30AM"],
			instructor: "Brent MacRae"
		}
	]

	$scope.propertyName = 'name';
	$scope.sortBy = function(propertyName) {
		$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	};
}]);