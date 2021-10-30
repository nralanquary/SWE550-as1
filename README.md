# SWE550-as1 ... Nourah Alanquary نوره العنقري (441204445)


This project is built based on (React-js, Express-js, Nodejs, Sql).

Connecting SQL Server to a NodeJS / Express JS backend of a React JS app.


Uses :  "proxy": "http://server:5000" for Docker, instead of "proxy": "http://localhost:5000"
to proxy the request to the backend through (Express JS)
also uses (concurrently).


The Database Schema: 

              CREATE TABLE EmployeeDemographics 
              ( EmployeeID int, 
              Firstname varchar(50), 
              Lastname varchar(50), 
              Age int, 
              Gender varchar(50) ) 

-------------------------------------------------------------------------
