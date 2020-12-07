# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for Model View Controller. Model holds all the data and will be referred when obtaining data for the view. View focuses on the what the user sees. The front end of an application is usually all done in view. And controller controls the flow of data from model to view. It is the bridge between the model and the view

  Researched answer:

  Model: Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. For instance, if you were building a To-do app, the model code would define what a “task” is and what a “list” is – since those are the main components of a todo app. 
  
  View: View code is made up of all the functions that directly interact with the user. This is the code that makes your app look nice, and otherwise defines how your user sees and interacts with it. 
  
  Controller: Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD stands for Create, Read, Update and Destroy. It is used when working with databases. Whether someone wants to create a new entry in the database. Read something from a database. Update something in a database. Or Destroy/Delete something in a database.

  Researched answer:

  A CRUD application is one that uses forms to get data into and out of a database

Create — This would consist of a function which we would call when a new library book is being added to the catalog. The program calling the function would supply the values for “title”, “author”, and “isbn”. After this function is called, there should be a new entry in the books resource corresponding to this new book. Additionally, the new entry is assigned a unique id, which can be used to access this resource later.

Read — This would consist of a function which would be called to see all of the books currently in the catalog. This function call would not alter the books in the catalog - it would simply retrieve the resource and display the results. We would also have a function to retrieve a single book, for which we could supply the title, author, or ISBN. Again, this book would not be modified, only retrieved.

Update — There should be a function to call when information about a book must be changed. The program calling the function would supply the new values for “title”, “author”, and “isbn”. After the function call, the corresponding entry in the books resource would contain the new fields supplied.

Delete — There should be a function to call to remove a library book from the catalog. The program calling the function would supply one or more values (“title”, “author”, and/or “isbn”) to identify the book, and then this book would be removed from the books resource. After this function is called, the books resource should contain all of the books it had before, except for the one just deleted.



3. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a database where you can put in obejcts. And are able to access those values using the id that are generated in the database

  Researched answer: 

  A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables. In a relational database, each row in the table is a record with a unique ID called the key. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.



4. What are the 5 HTTP verbs? What are they important?

  Your answer: GET POST PUT PATCH DELETE. They relate to the CRUD operations you can do in a database. The HTTP verbs are ways to retrieve (GET) data, (POST) update or upload data, (PUT) is done to replace or change data, (PATCH) is another way of changing or replacing data although it is frowned upon it allows you to change a singular piece of data rather than a whole set of data which is normally what happens when you use (PUT). And finally (DELETE) is done to delete data

  Researched answer: The HTTP verbs comprise a major portion of our “uniform interface” constraint and provide us the action counterpart to the noun-based resource. The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently. Of those less-frequent methods, OPTIONS and HEAD are used more often than others.



5. What is object-relational mapping?

  Your answer: Object-relational mapping also known as ORM is used to convert database information into readable and understanable data into our code editor. It makes it much easier to retrieve data from a database.

  Researched answer:
  ORMs generate objects which map to tables in the database virtually. Once these objects are up then coders can easily work to retrieve, manipulate or delete any field from the table without paying much attention to language specifically. It supports writing the complex long SQL queries in a simpler way.

  ORMs will shield your application from SQL injection attacks since the framework will filter the data for you! ORMs provide the concept of Database Abstraction which makes switching databases easier and creates a consistent code base for your application.


6. What is a gem?

  Your answer: Installing gem lets you install rspec

  Researched answer: 
  RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a "gem"), a tool designed to easily manage the installation of gems, and a server for distributing them.



7. What are primary keys? Why are they important?

  Your answer: Primary keys are assigned to each value inside of an object?

  Researched answer: A primary key is used to ensure data in the specific column is unique. You can only set constraints with primary keys, by setting a foreign key to another column which creates a relationship with the column that has the primary key set. A prime use of a primary key is in the case of a users table.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes

A RESTful route is a route that provides mapping from HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route depends on the HTTP verb and the URL.

- JSON

JavaScript Object Notation is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types

JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand

- Endpoints

An endpoint is a remote computing device that communicates back and forth with a network to which it is connected. 

An endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.

APIs work using ‘requests’ and ‘responses.’ When an API requests information from a web application or web server, it will receive a response. The place that APIs send requests and where the resource lives, is called an endpoint.

- Strong params

Strong Parameters is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted. It has its own DSL (Domain Specific Language, or in other words, a predefined syntax it understands), that allows you to indicate what parameters should be allowed. It also lets you indicate if each parameter should be a hash, array or scalar (i.e. integer, string, etc.), as well as some other functionality that is not relevant for this post.

- Validations

Validations are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address. Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.

