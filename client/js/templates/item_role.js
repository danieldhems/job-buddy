<div>
	<a href="#" class="role-title"><%= data.title %></a> / 
	<span class="role-salary"><%= data.salary || "salary not specified" %></span><br>
	<span class="role-client"><%= data.client %></span><br>
	<span class="role-location"><%= data.location || "location not specified" %></span><br>
	<span class="role-agent"><%= data.agent_name %></span><br><br>
	<span class="role-status">Interviewing: <%= data.interview_stage > 0 ? "Yes" : "no" %></span><br><br>
</div>