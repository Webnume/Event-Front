# Front-end-test-database

## Installation
`npm install -g json-server` 

## Launch database
`json-server --watch db.json`

## Endpoints

`GET    /event`
Get current event main information

`GET    /user`
Get current user data.

`GET    /bookings`
Get booking list. Allow you to display participants for example

`POST   /bookings/:id`
Add a booking to the list

`PATCH  /bookings/:id`
Update a booking item

`DELETE /bookings/:id`
Delete a booking