# Links

[Deployed Site](https://explore-app.netlify.app/)      
[Backend Repo](https://github.com/CAT3A2/explore-backend)   
[Fronend Repo](https://github.com/CAT3A2/explore-frontend)


# R1 Description of your website

For this project, we had no actual client

## Purpose

The purpose of this app is to give people a place to showcase and store their adventures and memories of past travels. It also gives users the ability to do some research on future vacations, looking up different posts and asking questions about the destinations and experiences. 

## Functionality / Features

### Users
Signing up to the web page gives users the ability to make posts themselves and also like other people's posts. 

### Posts
Posts are what makes it possible for users to share their experiences. Posts will consist of image(s) and/or text, but can also have tags, likes and comments. Users are also able to edit and delete their posts. 

### Search
There will be an option to search posts on the website. Search functionality is built around tags and destination added to the posts. 


## Target Audience

There will be two main groups of people using this application. First, people who would like to share their travels in the form of a post, which can include image(s) and/or text, kind of like a blog. Second, people who would like to see other peoples adventures, just for the pleasure of it, or maybe to plan their own future travels. Of course, one person can be both. This site will also give them an opportunity to communicate and discuss in the form of comments. 

## Tech Stack
- React
- Node
- Express
- PostgreSQL
- Heroku
- JavaScript
- HTML
- CSS
- SQL
- Git
- GitHub
- Material UI
- Sequalize

# R2 Dataflow Diagram

![Dataflow Diagram, User Auth](./docs/df1.png)
![Dataflow Diagram, Follower](./docs/df2.png)
![Dataflow Diagram, Social media](./docs/df3.png)

# R3 Application Architecture Diagram

![Application Architecture Diagram](./docs/aad.png)

# R4 User Stories

At first, we drafted first user stories with all the features we could think of for this app. Few days later, we realised implementing all those in the given timeline would be impossible and after consulting with TA we removed user stories about chat, donation and newsletter. Then, at the end of the week we refined existing user stories and added a few extra to go into more detail. 

### VISITOR
- As a visitor, I want to be able to sign up to the website, so I can publish posts.

### USER
- As a user, I want to be able to publish posts, so I can share my - experiences and have a place to collect all my memories. 
- As a user, I want to be able to update my post, so I can change any mistakes/typos I have made. 
- As a user, I want to be able to delete my post, so when I feel that it is no longer relevant, I can remove it.
- As a user, I want to be able to follow users whose content I am interested in, so I can find them more easily after.
- As a user, I want to be able to leave comments on posts, so I can ask questions or just start a conversation about the destination.
- As a user, I want to be able to like posts, to let the creators know, I appreciate their content.
- As a user, I want to be able to add an avatar, so I can add more personality to my account.
- As a user, I want to be able to see how many people have liked my posts, so I feel appreciated.
- As a user, I want quick access to the home page, so I can check the feed in one click. 
- As a user, I want to be able to quickly access my profile page so that I can overview all my posts.
- As a user, I want to be able to quickly access my profile page so that I can overview all my followers.
- As a user, I want to be able to quickly access my profile page so that I can overview all other users I have followed.
- As a user, I want to be able to visit about page, so I can learn of the purpose of the application and check out frequently asked questions

### BOTH
- As a {both}, I want to be able to search for posts, so I can look up something I am interested in, like a location
- As a {both}, I want to be able to look at the feed (posts on homepage), so I can see interesting things people are up to and also feel entertained.


# R5 Wireframes

For the design, we have decided to go with a simple layout and lighter tones to give it a more simple, familiar feel. All this will help to put main focus of the application on the images, which are the main feature of the app.  
There is also high contrast between text and background colour to help with accessibility.     
You can look at the wireframes in figma [here](https://www.figma.com/file/GVx8MyMiZLGge7rmVTg8Ll/Wireframes-for-T3A2?node-id=0%3A1).
### Sign Up page
![Sign Up wf](./docs/sign_up.png)
### Sign In page
![Sign In wf](./docs/sign_in.png)
### Home and Liked posts page
![Home page wf](./docs/home_likes.png)
### Single post page, popup
![Post wf](./docs/post.png)
### Profile page
![Profile wf](./docs/profile.png)
### Followers pop-up
![Followers wf](./docs/followers.png)
### About page
![About](./docs/about.png)

To understand better how the pages link to each other, check out our sitemap. 
![Sitemap](./docs/Sitemap.png)

We will implement a sticky navbar, that will always be available to the user with all the links on it. Clicking on the application name on the left will take user to the home pages, klicking on their profile image on the right will take them to their profile page, where they can see all of their posts as well as followers and followees. If you are visiting your own profile page, you will see a button "Create post", if it is someone elses post, same button will say "Follow". On the navbar will also be a serch field, meaning you can search for posts from every page in the application. 
We also plan to use primary and secondary colours that will contrast against the white background to call to action. As this is a travel app we are thinking of blue or green, colours most commonly associated with travel or holiday. 



# R6 Planning Methodology


We have decided to do weekly sprints (Agile). Every Monday, we will have a meeting, where we will discuss what we would like to get done in the next 6 days.     
In trello, we are documenting our meetings. There, we will also keep track of the documentation and coding. In Trello, we will label coding related tickets with “required”, “desired” and “nice to have”. This helps us to identify core features so we know what we need to work on first. Each card on kanban board will be assigned to appropriete team member.       
Right now, documentation (part A) is due soon, so we know to focus on that in the first sprint. After that, the very core feature of our app is posts, but to have posts, we need users. So we will start with users, move on to posts and from there we will let Trello cards with their labels guide us. If we get done with all our core features, and have time left, we will move on to “desired” and from there “nice to have” tickets.     
  
[Trello board](https://trello.com/b/NcTtLkBY/ca-t3-full-stack-app)   


![Trello screenshot](./docs/trello1.png)
![Trello screenshot](./docs/trello2.png)

# ERD

To help us get a clear understanding of our application, we also created ERD to help design the relational database. 

![ERD](./docs/erd.png)

# Meetings 


We had a scrum meeting every Monday, notes can be found on our Trello board. We also met up everyday at the library so every morning we gave each other an overview of our doings. 

# User testing

[Development](https://docs.google.com/spreadsheets/d/1L6I0_WZZEREfFol-MnpKZU8yU7KoEke01UMSmLEVhIA/edit#gid=0)      
[Production](https://docs.google.com/spreadsheets/d/184GDSvTNSSJHd-tSC5T29mGctwaZkqU45brM_Ea1Wk8/edit#gid=0)   


# Libraries
- Axios is a JavaScript library that is used to make XMLHttpRequests from the browser or HTTP requests from node. In this application it is used to send get, post and put requests from react frontend to express backend. 
- React Router Dom - is a library for React that allows the implementation of dynamic routing. React is a single page application, so changing routes does not necessarily make a new request to the server, but that when we change the route, React injects a component to dynamically render on the page. 
- React is a front-end framework used to create web applications. React makes it easy for the web pages to be dynamic and responsive. Instead of pages React applications consist of components which get rendered when a certain route is hit. 
- React-cookie is a cookie library for React and inherits it’s features straight from universal-cookie library. It makes using cookies very easy in React, making them globally accessible without any hassle. 
stateReducer???
- MUI is a UI library for React. According to their website, it provides a robust, customizable, and accessible library of foundational and advanced components, enabling developers to build the design system and develop React applications faster.
- Bootstrap is also a UI library for React. It is very similar to bootstrap and can be used for html files. It uses components instead of classes. 
- React-hook-form. According to logrocket.com React Hook Form is a library that helps you validate forms in React. It is a minimal library without any other dependencies, while being performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.
- Expres. According to expressjs.com Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- Bcrypt is a library that allows to salt and hash sensitive information like passwords and storing them in the database safely. 

- Multer is a node middleware that allows uploading files. It will only work with multipart forms
- According to sequelize.org, Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.   
Basically, it makes it easy to manage SQL databases. With swqualize you can define your models and set up relations


Reference:     

https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/     
https://blog.logrocket.com/react-hook-form-complete-guide/#:~:text=React%2Dhook%2Dform%20is%20a,code%20than%20other%20form%20libraries.       
https://mui.com/      
https://expressjs.com/     
https://sequelize.org/ 