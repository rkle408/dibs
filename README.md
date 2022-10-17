# Dibs
### About Dibs
Do you ever feel like you have so much junk in your home BUT you just can't bring yourself to throw it away? Conversely, do you ever want anything but just can't justify spending your hard-earned money on it? We have an application for you! Utilize our application to find people in your vicinity that want to take your junk OR to get items that are treasures, all for free... the only caveat? You have to get DIBS on the item, and you only have an hour to pick it up, otherwise, other people can call dibs on it! (But keep in mind, you can only call dibs on 8 items at a time!)

### Helping the World
Our application helps solve a major issue of trash contributing to climate change! Instead of buying and throwing away, you can give it to someone else to keep using! It will help to build community; what a better way to get to know your neighbors than to help each other out? It also helps to mitigate buyer's remorse!

### What We Learned from the Project
What we learned is that communication amongst team members is critical! We learned that we have different skill sets and together, we can make a great application with everyone's contributions. We reinforced that we should ask each other questions, that we have so much to learn from each other, and that it only makes us better coders. We learned that while our initial idea was <i>brilliant</i>, we need to focus on functionality first! As we get a functioning front-end and back-end, we can then focus on making our application better.

### Future Development
Ideas for future development include making a trade feature vs. just individually giving and taking items, adding a messaging feature, button to display your accrued treasures, a mobile app (maybe even utilizing a map or GPS feature).

## Table of Contents

-[Installation](#installation)

-[Usage](#usage)

-[Screenshots](#screenshots)

-[Collaborators](#collaborators)

-[Resources](#resources)

-[License](#license)

-[Walkthrough-Video](#walkthrough-video)

-[Deploy-Application](#deploy-application)

-[Features](#features)

-[Tests](#tests)

-[Technology-Stack](#technology-stack)

## Installation

If you do see our package.json in your folder, in the Integrated Terminal at the level of the package.json, run the command:
````
npm i
````

However, if you do not see it, please make sure you install the following packages in the Integrated Terminal:

````
npm i bcrypt body-parser connect-session-sequelize dotenv express express-handlebars express-session jest morgan multer mysql2 sequelize
````
## Usage

You will need to create a .env file add your own MySQL password in to initiate MySQL in this format:
````
DB_NAME='dibs_db'
DB_USER='*YOUR USERNAME*'
DB_PASSWORD='*YOUR PASSWORD*'
````
Open Integrated Terminal at schema.sql level, run command:
````
mysql -u root -p
````
Enter your password, then:
````
source schema.sql
````
Once loaded, run:
````
quit
````

Open Integrated Terminal at server.js level, run command:
````
node seeds/seed.js
````
Then:
````
node server.js
````

### Screenshots

1) Registration Page:
![screencapture1](https://user-images.githubusercontent.com/108099192/196065709-b53d6cc1-9fbe-49f9-a34f-8df2e0cb1754.png)

2) Login Page:
![screencapture2](https://user-images.githubusercontent.com/108099192/196065712-e2c5e350-77ef-4af9-b028-c7299fbcf7d0.png)

3) Login Page with user input:
![screencapture3](https://user-images.githubusercontent.com/108099192/196065703-3615e945-e9c1-43ed-a00f-4e714d06147a.png)

4) Homepage where items will be displayed:
![screencapture4](https://user-images.githubusercontent.com/108099192/196065702-92fd0179-e9c5-402c-91d5-1ee3dd700c2c.png)

5) Posting an item:
![screencapture5](https://user-images.githubusercontent.com/108099192/196065715-1f446334-1b50-4bd8-88f6-24d8074e3824.png)

6) Posted item:
![screencapture6](https://user-images.githubusercontent.com/108099192/196065700-000807d5-2190-4129-bcef-6610c3765b5a.png)

7) User's own profile with posted items:
![screencapture7](https://user-images.githubusercontent.com/108099192/196065692-061b4b6c-fdcf-4234-87e4-4c81af71a485.png)

8) Button functionality to put item back up for DIBS (aka grabs):
![screencapture8](https://user-images.githubusercontent.com/108099192/196065717-e78208e5-1ac2-4a73-83c4-028c2ff01ca8.png)

9) Button functionality to delete posted item:
![screencapture9](https://user-images.githubusercontent.com/108099192/196065716-3ad34be7-72f8-4287-99da-e1fbca139be8.png)

10) Different user's post:
![screencapture10](https://user-images.githubusercontent.com/108099192/196066189-43369575-dacb-408d-bae0-b9afe9e2f82a.png)

11) Homepage comprised of all posted items from different users:
![screencapture11](https://user-images.githubusercontent.com/108099192/196066191-2ad09c0f-a720-4457-8407-02a19c176bb5.png)


## Collaborators

- Sameer Bhattacharya - <https://github.com/sameersamuel>
- Vivian Chen - <https://github.com/vivianc11>
- Victoria El Bedewi - <https://github.com/elbedewi95>
- Alex Kinsman - <https://github.com/alexmkinsman>
- Rosa Le - <https://github.com/rkle408>

## Resources

- Hoang, Andrew. Instructor. Guidance given during class. Date accessed: October 13-15, 2022.
- Scharf, Michael. Teaching assistant. Guidance given during class time. October 10-14, 2022.
- <b>Bootstrap</b>. <https://getbootstrap.com/>. Date accessed: October 11, 2022.
- <b>MDBGO</b>. <https://mdbootstrap.com/docs/standard/extended/login/>. Date accessed: October 11, 2022.
- <b>npm</b>. <https://www.npmjs.com/>. Date accessed: October 11, 2022.
- "Giant octopus swim under water..." Image by upklyak on Freepik. <https://www.freepik.com/free-vector/giant-octopus-swim-water-ocean-vector-cartoon-illustration-underwater-sea-landscape-with-marine-animal-with-tentacles-suckers-ocean-bottom-with-seaweed-stones-purple-squid_25917780.htm>. Date accessed: October 11, 2022.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the MIT license.

## Walkthrough Video

<>

## Deploy Application

<>

## Features

Our application will allow you to make a username and password, and that will allow you access to be a "giver" and a "taker." As a giver, you can make posts to feature your items to give away, and as a taker, you can view posts and call dibs on up to 8 items at a time.

## Tests

To ensure our application is functioning, we wrote a test to ensure that credentials for our "Giver" cannot be left blank, i.e., username, email, password MUST have values. Our test also ensures that the password length is at minimum, 4 characters long.

To run this test, ensure you have installed Jest as previously mentioned in [Installation](#installation), open Integrated Terminal at server.js level, and run command:
````
npm run test
````

You should see green "passed" tests. If you alter the password lengths in the Giver.test.js file or erase a username, password, or email, then run the test, you will see that it will fail.

## Technology Stack

This project was built using [Node v16.17.0].
