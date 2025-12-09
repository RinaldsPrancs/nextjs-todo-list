CREATE TABLE `todo_list` (
	`id` int AUTO_INCREMENT NOT NULL,
	`content` varchar(255) NOT NULL,
	`checked` boolean NOT NULL DEFAULT false,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `todo_list_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`age` int NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
