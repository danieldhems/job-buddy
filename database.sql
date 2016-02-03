create table roles
(
	`id` int(3) not null auto_increment,
	`agent_id` int(3) not null,
	`title` text,
	`salary` int(7),
	`location` text,
	`address` text,
	`interview_id` int(30),
	PRIMARY KEY (`id`)
);

create table interviews
(
	`id` int(3) not null auto_increment,
	`agent_id` int(3) not null,
	`datetime` timestamp,
	`contact` text,
	`stage` int(2),
	PRIMARY KEY (`id`)
);

create table agents
(
	`id` int(3) not null auto_increment,
	`name` text,
	`company` text,
	`phone_number` int(11),
	`mobile_number`int(11),
	PRIMARY KEY (`id`)
);

create table offers
(
	`id` int(3) not null auto_increment,
	`role_id` int(3) not null,
	`salary` int(7),
	`accepted` boolean default false,
	PRIMARY KEY (`id`)
);