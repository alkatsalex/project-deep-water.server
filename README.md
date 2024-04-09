
# 💧WaterTracker BackEnd 


[ENG](#ENG) [UA](#UA) [DE](#DE)

## ENG

Node.js server for [WaterTracker](https://denys90.github.io/runners_of_code__frontend/) | [GitHub](https://github.com/Denys90/runners_of_code__frontend)


WaterTracker this is an application for tracking the amount of water drunk, which helps to adhere to the daily norm. 

# 

This server is created to store users, store and process their personal dynamic data

## 📱Features 

- User registration and login using password
- Verification by mail
- User authorization and logout
- Editing user data (avatar, name, email, password)
- Changing the calculation of the daily rate of water consumption
- Adding, updating, deleting a record of consumed water
- Calculation of the amount of water consumed as a percentage and a list of all records of water consumption by the user for the current day
- Receiving information on the amount of water consumed for the selected month

## 🔧Tech Stack

```
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


## 🗂️Documentation

[Documentation](https://project-deep-water-server.onrender.com/api-docs/#/Water/patch_waters_daily_limit)



## 🌐API Reference

#### Auth

```
  POST /users/register  | Create a new user.
  POST /users/login     | Login user.
  POST /users/logout    | Logout user.
  GET  /users/current   | Get current user.

```


#### User

```
  GET   /users/info    | Get information about user.
  PATCH /users/info    | Change user's informations.
  PATCH /users/info    | Change user's avatar.

```

#### Water

```
  POST   /waters/created       | Created new day's water odject.
  PATCH  /waters/daily_limit   | Change daily limit.
  POST   /waters/drink         | Created one drink.
  DELETE /waters/drink/:id     | Delete one drink.
  PATCH  /waters/drink/:id     | Edit one drink.
  POST   /waters/month         | Take data for one month.
```





## 👆🏼Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```





## 🚀Run Locally

1. Clone the repo: `git clone https://github.com/alkatsalex/project-deep-water.server`
2. Install dependencies: `npm install`
3. Start the server: `npm start` or `npm run dev`


## 🧑🏻‍💻Authors

- [@Oleksii Katsal](https://github.com/alkatsalex) || [linkedin](https://www.linkedin.com/in/alkatsalex/)
- [@Igor Konoval ](https://github.com/IgorKonoval) || [linkedin](https://www.linkedin.com/in/ihor-konoval/)
- [@Valentina Hotsa ](https://github.com/ValentinaHotsa) || [linkedin](https://www.linkedin.com/in/valentynahotsa/)

## UA  


Сервер Node.js для [WaterTracker](https://denys90.github.io/runners_of_code__frontend/) | [GitHub](https://github.com/Denys90/runners_of_code__frontend)


WaterTracker - це додаток для відстеження кількості випитої води, яка допомагає дотримуватися добової норми.

#

Цей сервер створений для зберігання користувачів, зберігання та обробки їхніх персональних динамічних даних

## 📱Особливості

- Реєстрація користувача та вхід за допомогою пароля
- Верифікація за допомогою пошти
- Авторизація та вихід користувача
- Редагування даних користувача (аватар, ім'я, пошта, пароль)
- Зміна розрахунку добової норми водоспоживання
- Додавання, оновлення, видалення обліку спожитої води
- Розрахунок кількості спожитої води у відсотках і список усіх записів споживання води користувачем за поточну добу
- Отримання інформації про кількість спожитої води за обраний місяць

## 🔧Технічний стек

```
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


## 🗂️Документація

[Документація](https://project-deep-water-server.onrender.com/api-docs/#/Water/patch_waters_daily_limit)



## 🌐Довідник API

#### Auth

```
  POST /users/register  | Створення нового користувача.
  POST /users/login     | Авторизація користувача.
  POST /users/logout    | Вихід користувача.
  GET  /users/current   | Отримати поточного користувача.

```


#### User

```
  GET   /users/info    | Отримати інформацію про користувача.
  PATCH /users/info    | Змінити інформацію про користувача.
  PATCH /users/info    | Змінити аватар користувача.
```

#### Water

```
  POST   /waters/created       | Created new day's water odject.
  PATCH  /waters/daily_limit   | Змінити денну норму.
  POST   /waters/drink         | Створити один підход випитої води.
  DELETE /waters/drink/:id     | Видалити підход випитої води.
  PATCH  /waters/drink/:id     | Редагувати підход випитої води.
  POST   /waters/month         | Взяти дані за один місяць.
```


## 👆🏼Використання/Приклади

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```



## 🚀Як запустити сервер локально

1. Клонуйте репозиторій: `git clone https://github.com/alkatsalex/project-deep-water.server`
2. Встановити залежності: `npm install`
3. Запустіть сервер: `npm start` або `npm run dev`


## 🧑🏻‍💻Автори

- [@Oleksii Katsal](https://github.com/alkatsalex) || [linkedin](https://www.linkedin.com/in/alkatsalex/)
- [@Igor Konoval ](https://github.com/IgorKonoval) || [linkedin](https://www.linkedin.com/in/ihor-konoval/)
- [@Valentina Hotsa ](https://github.com/ValentinaHotsa) || [linkedin](https://www.linkedin.com/in/valentynahotsa/)




## DE




Node.js-Server für [WaterTracker](https://denys90.github.io/runners_of_code__frontend/) | [GitHub](https://github.com/Denys90/runners_of_code__frontend)


WaterTracker ist eine Anwendung zur Verfolgung der getrunkenen Wassermenge, die dabei hilft, die tägliche Norm einzuhalten. 

# 

Dieser Server wird erstellt, um Benutzer zu speichern, ihre persönlichen dynamischen Daten zu speichern und zu verarbeiten

## 📱Merkmale 

- Benutzerregistrierung und Anmeldung mit Passwort
- Verifizierung per Post
- Benutzerautorisierung und Abmeldung
- Bearbeiten von Benutzerdaten (Avatar, Name, E-Mail, Passwort)
- Änderung der Berechnung des täglichen Wasserverbrauchs
- Hinzufügen, Aktualisieren und Löschen einer Aufzeichnung des verbrauchten Wassers
- Berechnung der verbrauchten Wassermenge in Prozent und Auflistung aller Aufzeichnungen des Wasserverbrauchs des Benutzers für den aktuellen Tag
- Empfangen von Informationen über die im ausgewählten Monat verbrauchte Wassermenge


  
## 🔧Tech Stack

```
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


## 🗂️Dokumentation

[Dokumentation](https://project-deep-water-server.onrender.com/api-docs/#/Water/patch_waters_daily_limit)



## 🌐API-Referenz

#### Auth

```
  POST /users/register  | Erstellen Sie einen neuen Benutzer.
  POST /users/login     | Benutzer anmelden.
  POST /users/logout    | Benutzer abmelden.
  GET  /users/current   | Aktuellen Benutzer abrufen.

```


#### User

``` 
  GET   /users/info    | Informationen zum Benutzer abrufen.
  PATCH /users/info    | Benutzerinformationen ändern.
  PATCH /users/info    | Ändern Sie den Avatar des Benutzers.

```

#### Water

```
  POST   /waters/created       | Wasserobjekt für neuen Tag erstellt.
  PATCH  /waters/daily_limit   | Tageslimit ändern.
  POST   /waters/drink         | Habe ein Getränk kreiert.
  DELETE /waters/drink/:id     | Löschen Sie ein Getränk.
  PATCH  /waters/drink/:id     | Bearbeiten Sie ein Getränk.
  POST   /waters/month         | Nehmen Sie die Daten einen Monat lang auf.
```





## 👆🏼Verwendung/Beispiele

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```



## 🚀Lokal ausführen

1. Klonen Sie das Repo: `git clone https://github.com/alkatsalex/project-deep-water.server`
2. Abhängigkeiten installieren: `npm install`
3. Starten Sie den Server: `npm start` oder `npm run dev`


## 🧑🏻‍💻Autoren

- [@Oleksii Katsal](https://github.com/alkatsalex) || [linkedin](https://www.linkedin.com/in/alkatsalex/)
- [@Igor Konoval ](https://github.com/IgorKonoval) || [linkedin](https://www.linkedin.com/in/ihor-konoval/)
- [@Valentina Hotsa ](https://github.com/ValentinaHotsa) || [linkedin](https://www.linkedin.com/in/valentynahotsa/)
