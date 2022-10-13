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

## Installation
````
npm i bcrypt body-parser connect-session-sequelize dotenv express express-handlebars express-session jest mysql2 sequelize
````
## Usage

You will possibly need to add your own MySQL password in to initiate MySQL in a .env file:
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



## Collaborators

- Sameer Bhattacharya - <https://github.com/sameersamuel>
- Vivian Chen - <https://github.com/vivianc11>
- Victoria El Bedewi - <https://github.com/elbedewi95>
- Alex Kinsman - <https://github.com/alexmkinsman>
- Rosa Le - <https://github.com/rkle408>

## Resources

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