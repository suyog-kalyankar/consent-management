# Consent Management Application

Welcome to the Consent management application! This application allows users to provide their consent by filling out a form and then displays the consents on a separate page.

## Getting Started

1. Clone the repository:
```git clone https://github.com/suyog-kalyankar/consent-management.git```

2. Install dependencies:
```cd consent-management```
```npm install```

3. Run the application:
```npm start```
The application will be available at http://localhost:3000.

## Usage
### 1. Navigate to the home page:

 Visit http://localhost:3000/give-consent to access the consent form.

### 2. Fill out the form:

Provide your full name and email address in the form. Once you have entered valid information, the consent selector checkboxes will be enabled.

### 3. Select consent(s):

Choose at least one consent option from the enabled checkboxes. The "Give Consent" button will become active once you have made a selection.

### 4. Give Consent:

Click the "Give Consent" button to submit your consent. This will trigger a POST request to the /consents API with the provided information.

### 5. View Consents:

After giving consent, you will be redirected to the consents page. Here, consents are displayed in a table with pagination. Two rows are shown per page, and additional data is fetched from the /consents API and added on top.


## APIs

### POST /consents
Request Payload:
```ruby
{
  "id": 1,
  "fname": "John Doe",
  "email": "john.doe@example.com",
  "consents": ["Receive newsletter", "Allow tracking"]
}
```
Response:

Status: 201 Created

### GET /consents
Response:

Status: 200 OK
```ruby
{
metadata: {
    currentPage: 1,
    pageSize: 2,
    totalCount: 5,
    totalPages: 3,
  },
  "data": [
    {
      "id": 1,
      "fname": "John Doe",
      "email": "john.doe@example.com",
      "consents": ["Receive newsletter"]
    },
    {
      "id": 2,
      "fname": "Jane Smith",
      "email": "jane.smith@example.com",
      "consents": ["Receive newsletter", "Allow tracking"]
    },
    // Additional data
  ]
}
```

### Notes
The client-side pagination displays two rows per page on the consents page.
The consent form follows a dynamic flow: consent selector checkboxes are enabled after valid name and email inputs, and the "Give Consent" button is enabled after selecting at least one consent.

### Testing

Launches the test runner in the interactive watch mode.\
To check coverage use ```npm test -- --coverage```.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Screenshots
Following are the screenshots of 2 pages:
### 1. Give Consent
<img width="1500" alt="Screenshot 2023-11-13 at 11 49 12" src="https://github.com/suyog-kalyankar/consent-management/assets/30463183/ea03ae72-e2b1-4440-9b41-f00c6cc6d0c9">

### 2. Consents 
<img width="1508" alt="Screenshot 2023-11-13 at 11 49 35" src="https://github.com/suyog-kalyankar/consent-management/assets/30463183/1522914a-659d-4414-b140-253627d8c6d3">

