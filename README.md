# Dibs

Do you ever feel like you have so much junk in your home BUT you just can't bring yourself to throw it away? Conversely, do you ever want anything but just can't justify spending your hard-earned money on it? We have an application for you! Utilize our application to find people in your vicinity that want to take your junk OR to get items that are treasures, all for free... the only caveat? You have to get DIBS on the item, and you only have an hour to pick it up, otherwise, other people can call dibs on it! (But keep in mind, you can only call dibs on 8 items at a time!)

Our application helps solve a major issue of trash contributing to climate change! Instead of buying and throwing away, you can give it to someone else to keep using! It will help to build community; what a better way to get to know your neighbors than to help each other out? It also helps to mitigate buyer's remorse!

What we learned is that communication amongst team members is critical! We learned that we have different skill sets and together, we can make a great application with everyone's contributions. We reinforced that we should ask each other questions, that we have so much to learn from each other, and that it only makes us better coders. We learned that while our initial idea was <i>brilliant</i>, we need to focus on functionality first! As we get a functioning front-end and back-end, we can then focus on making our application better.

Ideas for future development include making a trade feature vs. just individually giving and taking items, adding a messaging feature, button to display your accrued treasures, a mobile app (maybe even utilizing a map or GPS feature).

## Table of Contents

-[Installation](#installation)

-[Usage](#usage)

-[Screenshots](#screenshots)

-[Collaborators](#collaborators)

-[Resources](#resources)

-[License](#license)

-[Walkthrough-Video](#walkthrough-video)

-[Features](#features)

## Installation

<i>npm i bcrypt body-parser connect-session-sequelize dotenv express express-handlebars express-session mysql2 sequelize</i>

## Usage

You will possibly need to add your own MySQL password in to initiate MySQL in a .env file:

<i>DB_NAME='dibs_db'
DB_USER='*YOUR USERNAME*'
DB_PASSWORD='*YOUR PASSWORD*'</i>

Open Integrated Terminal, run command:

<i>node server.js</i>

### Screenshots



## Collaborators

- Sameer Bhattacharya - <https://github.com/sameersamuel>
- Vivian Chen - <https://github.com/vivianc11>
- Victoria El Bedewi - <https://github.com/elbedewi95>
- Alex Kinsman - <https://github.com/alexmkinsman>
- Rosa Le - <https://github.com/rkle408>

## Resources

- <b>Bootstrap</b>. <https://getbootstrap.com/>. Date accessed: October 11, 2022.
- <b>MDBGO</b>. <https://mdbootstrap.com/docs/standard/extended/login/>. Date accessed: October 11, 2022.
- <b>npm</b>. <https://www.npmjs.com/>. Date accessed: October 11, 2022.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the MIT license.

## Walkthrough Video

<>

## Features

Our application will allow you to make a username and password, and that will allow you access to be a "giver" and a "taker." As a giver, you can make posts to feature your items to give away, and as a taker, you can view posts and call dibs on up to 8 items at a time.