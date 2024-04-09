
# WaterTracker BackEnd 


Node.js server for [WaterTracker](https://denys90.github.io/runners_of_code__frontend/) | [GitHub](https://github.com/Denys90/runners_of_code__frontend)


WaterTracker this is an application for tracking the amount of water drunk, which helps to adhere to the daily norm. 

# 

This server is created to store users, store and process their personal dynamic data

## Features 

- User registration and login using password
- Verification by mail
- User authorization and logout
- Editing user data (avatar, name, email, password)
- Changing the calculation of the daily rate of water consumption
- Adding, updating, deleting a record of consumed water
- Calculation of the amount of water consumed as a percentage and a list of all records of water consumption by the user for the current day
- Receiving information on the amount of water consumed for the selected month

## Tech Stack

```http 
   - Node.js
   - Cloudinary
   - Cors
   - Dotenv
   - Express
   - Gravatar
   - Joi
   - JWT (JSON Web Tokens)
   - Mongoose
   - Morgan
   - Multer
   - Nodemailer
   - Swagger-ui-express

 ```


## Documentation

[Documentation](https://project-deep-water-server.onrender.com/api-docs/#/Water/patch_waters_daily_limit)



## API Reference

#### Auth

```http
  POST /users/register  | Create a new user.
  POST /users/login     | Login user.
  POST /users/logout    | Logout user.
  GET  /users/current   | Get current user.

```


#### User

```http 
  GET   /users/info    | Get infirmation about user.
  PATCH /users/info    | Change user's informations.
  PATCH /users/info    | Change user's avatar.

```

#### Water

```http 
  POST   /waters/created       | Created new day's water odject.
  PATCH  /waters/daily_limit   | Change daily limit.
  POST   /waters/drink         | Created one drink.
  DELETE /waters/drink/:id     | Delete one drink.
  PATCH  /waters/drink/:id     | Edit one drink.
  POST   /waters/month         | Take data for one month.
```





## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```





## Run Locally

1. Clone the repo: `git clone https://github.com/alkatsalex/project-deep-water.server`
2. Install dependencies: `npm install`
3. Start the server: `npm start` or `npm run dev`


## Authors

- [@Oleksii Katsal](https://github.com/alkatsalex) || [linkedin](https://www.linkedin.com/in/alkatsalex/)
- [@Igor Konoval ](https://github.com/IgorKonoval) || [linkedin](https://www.linkedin.com/in/ihor-konoval/)
- [@Valentina Hotsa ](https://github.com/ValentinaHotsa) || [linkedin](https://www.linkedin.com/in/valentynahotsa/)

