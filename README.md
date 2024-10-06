# NASA_PACE_Challenge
PACE in the Classroom NASA Challenge
The Plankton Aerosol Cloud ocean Ecosystem (PACE) satellite launched and has begun returning data about Earth’s oceans and atmosphere. NASA’s open science policy allows for all the PACE data to be accessed by the public, but it can be difficult to understand if you are not already familiar with these types of data. Your challenge is to create a digestible set of materials that can be used in classrooms across the world to help students understand the data and information that PACE is gathering, and improve ocean literacy worldwide.


# BlueSphere
BlueSphere is a web application that is interactive where there are learning materials, activities, and quizzes that teachers can use for their lessons. And with this children can easily use then to explore and play around with the web application.

Teachers can select any of the topics, Planktons, Aerosol, Clouds, Ocean Ecosystem, and 2 buttons would appear where they can choose either a page for learning and a page for activities and quizzes.

The benefits that BlueSphere has are, with the code that retrieves NASA's PACE data it randomly chooses 3 data and filter their data by getting necessary parts, such as the Abstract, and then put into a JSON file where one can interpret it. With the interpreted data it can be added to the learning materials of the specific topic and can be easily added. 

The benefits of Sphere are, its simple, interactive, informative, and accessible. Teachers and students can easily use this and play around with this website for them to learn more about PACE and its data.

We hope to achieve that teachers will use this website with their lesson plans in which students can use and explore the data that is collected and hope they will improve their ocean literacy even if its a tiny bit.

The tools we used for the frontend part of the web application is ReactJS and Vite. We used this for the frontend part so it would be easier to implement certain activities for which a user can interact with. For the backend side we have used python. With python we used the package "earthaccess" to access and retrieve NASA's EarthData. And with this we have inserted the filtered data into a JSON file and interpret it into learning materials that teachers can use.

# To run the app

## Demo

[BlueSphere Video Demo](https://drive.google.com/file/d/1r7UUQ7iaRvF0qfcBw7HP82V8wZzAq_BH/view?usp=sharing)


## Run Locally

Clone the project

```bash
  git clone https://github.com/VinnRe/NASA_PACE_Challenge.git
```

## To run the website

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## To run the backend and get the PACE data. 
We are assuming you are using Python 3.10 or above

```bash
  cd backend
```

Install the packages

```bash
  pip install -r requirements.txt
```

Start the main file

```bash
  python main.py
```
