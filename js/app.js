
var data = [
	{
		"client": "Metia",
		"description": "",
		"address": "",
		"recruiter": "Dan Marsh",
		"location": "Leicester Square / Charing Cross",
		"salary": "45,000",
		"added": "11/05/15"
	},
	{
		"client": "Cohaesus",
		"description": "",
		"address": "",
		"recruiter": "Rory Field",
		"location": "Old Street",
		"salary": "40,000",
		"added": "11/05/15"
	},
	{
		"client": "Phantom",
		"description": "",
		"address": "",
		"recruiter": "James Stevens",
		"location": "Tottenham Court Road",
		"added": "11/05/15"
	}
];

var JobItem = React.createClass({
	render: function() {
		return (
			<li className="JobItsem">{this.props.client}</li>
		);
	}
});

var JobList = React.createClass({
	render: function() {
		return (
			<ul className="JobList">
				{
					data.map( function(item){
						return <JobItem client={item.client} />
					})
				}
			</ul>
		);
	}
});

React.render(
	<JobList data="data" />,
	document.querySelectorAll('.view')[0]
);