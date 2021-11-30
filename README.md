# Node-Express-JS-Training-Files
Here are the training Files I've used to test, explore and create projects using Express &amp; NodeJS

### Technical Documentation
- [Intro-to-node](https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#intro-to-node)
- [Calculator](https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#calculator)
- [Weather Project](https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#weather-project)
- [My-Express-Server](https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#my-express-server)
- [MailChimp-API-Practice](https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#mailchimp-api-practice)
- [Newsletter-SignUp](https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#newsletter-signup)
- [EJS/todoist-v1](https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#ejstodoist-v1)
- [Ejs-Challenge-Blog](https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#ejs-challenge-blog)
- [Blog-Website-with-Database](https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#connecting-your-mongodb-database)


___
# Intro-To-Node

This is my first Hello World web application using nodejs This application was made to understand the basics of node, express, node version control and npm packages.
___
# Calculator

Calculator is a Web App that uses Node.js to allow to submit the inputs of the page to calculate the result of the inputs given.

### Please use the following for the operators:

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

### Technologies Used

- HTML
- NODE.js
- Express.js
- npm body-parser
___
# Weather Project

This is a web application that gets your location data and passes that data to an express server. On the server, the server queries the Open Weather Map API database to access the weather data for each location. To use this project, Input the location you wish to search for the current weather on the input feild and click search to deiplay the current weather as well as humidity for the current location.

To build this project, you must first register an account with the [Open Weather Map API](https://openweathermap.org/) and then place your API Key in the .env file.

This Project was made in partial fullfilment of the Complete Web Development Bootcamp by Angela Yu from Udemy.com

![Open Weather API](https://blog.weatherapi.com/wp-content/uploads/2020/02/cropped-Asset-62-1.png)

___
# My-Express-Server

This is a simple web application that uses expressJS to create a basic server. In this server, we tackle basic routing. 

### Routes
- "/" Home Page
- "/contact" Contacts Page
- "/about" About Me Page
- "/hobbies" Hobbies Page
___
# MailChimp-API-Practice
___
# Newsletter-SignUp

This is a web application that uses the MailChimp API to subscribe users to my personal mailing list. The landing page requires users for their name as well as their email which will then be saved to the MailChimp database. In the Mailchimp database, we are able to organize each user and filter which content we want to send for individual users. Additionally, using the MailChimp api allows us to syncs all data (subscriber, customers, orders, products) and enables marketing automation with email campaigns, automations, ads, postcards and more.

| NPM Packages Used | Description                                      |
| ----------------- | ------------------------------------------------ |
| body-parser       | used to collect input from submitted forms       |
| dotevn            | used to hide our API KEYS                        |
| express           | used to handle the server                        |
| request           | used to handle failure/sucess and write jsonData |

to start this project you must download the repository, install any dependencies then start app.js

```bash
npm install

node app.js
```

To build this project, you must first register an account with the [MailChimp API](https://mailchimp.com/ "MailChimp API Home Page") and then place your API Key in the .env file. 

To further guide with implementation, please refer to the the [MailChimp Developer Docs](https://mailchimp.com/developer/ "MailChimp Developer Docs").

>This Project was made in partial fullfilment of the Complete Web Development Bootcamp by Angela Yu from Udemy.com

![Mail Chimp API](https://images.ctfassets.net/3g7s03pwyjhz/2IzXOYWCE0GGMMMcGaQGUa/417075681409c9f43a359a999498c71b/bigcartel_headerx2.png?q=75&w=998&fm=webp)
___
# EJS/todoist-v1

This is a web appication that uses EJS for templating as well as partials for components. The frontend gets and displays the current date & month at the top. Input feilds allows users to input any tasks they have for the given day. Users can also crossout any tasks that have been completed.

To build this project, users must first in stall any npm dependencies. Since we are using EJS to template our file, any additional pages can use header.ejs and footer.ejs found in the views folder to style the page quickly.

This Project was made in partial fullfilment of the Complete Web Development Bootcamp by Angela Yu from Udemy.com
___
# ejs-challenge-blog
This is a node web application that uses Node & Express on the backend and EJS for the front end templating. This application is a personal blog which has a functional Navbar on the top and a sticky footer on the bottom. 

The content of the page will be generated using EJS partials for each blogpost. For Added cleanlisness, each post is truncated by 100 characters with an acnhor tag appented to the end which references the full blog post. Each blog post can be read independently on a single page.

To be able to make a new blog post, users can follow the /compose route which would redirect them to a page that allows users to publish new blog posts. 

To build this project, users must first in stall any npm dependencies. Since we are using EJS to template our file, any additional pages can use header.ejs and footer.ejs found in the views folder to style the page quickly.

This Project was made in partial fullfilment of the Complete Web Development Bootcamp by Angela Yu from Udemy.com
___
# Blog-Website-with-Database
This is version 2 of the previous EJS challenge blog that uses Node & Express on the backend and EJS for the front end templating with the addition of using MongoDB as the local database. This application is a personal blog and uses MongoDB to pull each blog post from a database and render them.

The content of the page will be generated using EJS partials for each blogpost. For Added cleanlisness, each post is truncated by 100 characters with an acnhor tag appented to the end which references the full blog post. Each blog post can be read independently on a single page.

To be able to make a new blog post, users can follow the /compose route which would redirect them to a page that allows users to publish new blog posts. 

To build this project, users must first in stall any npm dependencies. Since we are using EJS to template our file, any additional pages can use header.ejs and footer.ejs found in the views folder to style the page quickly.

This Project was made in partial fullfilment of the Complete Web Development Bootcamp by Angela Yu from Udemy.com

| NPM Packages Used | Description                                      |
| ----------------- | ------------------------------------------------ |
| body-parser       | used to collect input from submitted forms       |
| ejs               | used to handle templating                        |
| express           | used to handle the server                        |
| mongoose          | ODM used to handle MongoDB                       |
| lodash            | used to format the routing for each blog post    |

### Connecting your MongoDB Database

To be able to properly use this web application, please install the latest version of [MongoDb](https://www.mongodb.com/).

In our app.js install Mongoose using npm or yarn:
```
npm install mongoose
```

Using Mongoose, connect your database using:
```
mongoose.connect("mongodb://localhost:27017/blogDB");
```
___
