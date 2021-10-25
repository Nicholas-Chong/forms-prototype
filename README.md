# Forms Prototype

This project includes the prototype backend and frontend code for the Forms App.

# Backend API

## Tech Stack

The backend is built on the **Django Rest Framework (DRF).** DRF provides a toolkit for building REST APIs. Key built in features include data serialization and Oauth1/Oauth2 support. DRF's flexibility also makes it easy to add new endpoints, ensuring that our API service can continue to expand as the product grows. DRF has been proven to work at scale, large companies like Red Hat, Heroku, and Eventbrite using the framework. 

## Endpoints

|  Endpoint | Usage|
| ------------- | ------------- |
| GET /form | Retieves all the forms  |
| POST /form | Creates a new form |
| GET /form/{form id}  | Retrieves a sepcific form |
| POST response/save_form_responses/ | Saves a list of new responses |

## Data Model

![](.github/datamodel.png)

This section will go over a few of the more complex/challenging decisions I made when designing the data models.

### Storing Responses

The initial design had the different types of responses stored in seperate tables (email, boolean, text, etc). This design ensured that the number of rows in each table would be relatively small, ensuring faster query speeds. However, it also resulted in a design in which several tables had the possibilty of being under utilized (ex. If the "boolean" response type turns out to be unpopular among users, the "boolean" table would be underutilized). 

I decided it was not worth the complexity of storing different response types in seperate tables, and modified the design to store all responses in one table. 

