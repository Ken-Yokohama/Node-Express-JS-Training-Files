# Node-Express-JS-Training-Files
Here are the training Files I've used to test, explore and create projects using Express &amp; NodeJS

Among these Files Include:
- intro-to-node
- Calculator

___
# Weather Project

This is a web application that gets your location data and passes that data to an express server. On the server, the server queries the Open Weather Map API database to access the weather data for each location. To use this project, Input the location you wish to search for the current weather on the input feild and click search to deiplay the current weather as well as humidity for the current location.

To build this project, you must first register an ccount with the Open Weather Map API at https://openweathermap.org/ and then place your API Key in the .env file.

This Project was made in partial fullfilment of the Complete Web Development Bootcamp by Angela Yu from Udemy.com

- my-express-server
- MailChimp-API-Practice
___
# Newsletter-SignUp

This is a web application that uses the MailChimp API to subscribe users to my personal mailing list. The landing page requires users for their name as well as their email which will then be saved to the MailChimp database. In the Mailchimp database, we are able to organize each user and filter which content we want to send for individual users. Additionally, using the MailChimp api allows us to syncs all data (subscriber, customers, orders, products) and enables marketing automation with email campaigns, automations, ads, postcards and more.

To build this project, you must first register an ccount with the Open Weather Map API at https://mailchimp.com/ and then place your API Key in the .env file. To further guide with implementation, please refer to the the MailChimp Developer Docs here https://mailchimp.com/developer/ .

>This Project was made in partial fullfilment of the Complete Web Development Bootcamp by Angela Yu from Udemy.com
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
