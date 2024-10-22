# ClientManagementApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


Client Management Application - Functional Specification Document
Overview
This document provides a detailed description of the functionality of the Client Management Application, which enables users to manage clients and their meetings. The application is composed of three key sections: the Home Page, Client Management Page, and Meeting Schedule Management Page. Each section is designed to provide an intuitive and streamlined experience for users handling client-related tasks.

1. Home Page
Purpose:
The Home Page allows users to view the meeting schedules for a specific date along with associated client information.
Functionality:
Date Selection:
Users are required to select a date from a calendar widget to view the scheduled meetings.
Upon selecting a date, the system will display all meetings scheduled for that day.
Meeting Schedule Display:
The list of meetings is displayed alongside relevant client information, making it easy for users to track meetings with specific clients on the selected date.

2. Client Management Page
Purpose:
The Client Management Page enables users to create, view, edit, and delete client records.
Functionality:
Create New Client:
Users can create a new client by filling out the form with the client's information (such as name, contact details, etc.).
Once the form is completed, the user can submit the data to add the new client to the system.
Client Details Table:
Below the form, a table lists all existing clients, displaying key details for each client.
Client Actions (Edit & Delete):
Edit:
Each client record in the table has an "Edit" button.
When clicked, the information of the selected client is populated into the form above, allowing the user to modify the details.
The user can make changes and click the "Save Changes" button to update the client information.
If the user decides not to save changes, they can click the "Cancel" button to discard the changes.
Delete:
Each client record also has a "Delete" button.
When clicked, the system will prompt the user for confirmation before removing the client from the list.

3. Meeting Schedule Management Page
Purpose:
The Meeting Schedule Management Page allows users to schedule, view, edit, and delete meetings. It also facilitates client selection when scheduling meetings.
Functionality:
Schedule a Meeting:
Users can schedule a new meeting by filling out a form with meeting details such as date, time, and topic.
The form includes a dropdown menu where the user can select an associated client from the list of clients stored in the system.
After entering all required information, the user can submit the form to schedule the meeting.
Meeting Schedule Table:
Below the meeting form, a table lists all scheduled meetings along with relevant details (meeting date, time, client, etc.).
Meeting Actions (Edit & Delete):
Edit:
Each meeting in the table has an "Edit" button.
Clicking this button populates the form above with the details of the selected meeting.
Users can modify the meeting details and click "Save Changes" to update the schedule.
If no changes are required, the user can click "Cancel" to revert any modifications.
Delete:
Each meeting record includes a "Delete" button.
Clicking the delete button will prompt a confirmation dialogue, after which the user can delete the meeting if confirmed.

4. Data Storage:
The application utilizes a JSON-based database instead of MySQL to manage the data of clients and meetings. This provides lightweight, flexible data handling suitable for smaller-scale applications.



