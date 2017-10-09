---
title: HexCandy
description: Delicious color tracker for designers
heroColor: "#ef3e4a"
titleColor: "#ffffff"
website: "http://hexcandy.com"
github: null
slug: hexcandy
---

## What is HexCandy? 🤔
HexCandy is a web app I made for designers to track their favorite colors 🙌

When you're surfing the web sometimes you find a site with a nice background color, or some site logo has a color that you really like, etc.

HexCandy aims to solve just that, it enables you to save cool colors you find in the web for you to keep track of them.

## How I came with the idea? 💡
Before HexCandy existed whenever I found a color I liked I went straight to my [ColorZilla](http://www.colorzilla.com/) Chrome extension to get the hexadecimal code for that color (**#ef3e4a** is the hex code for the red background color you're seeing at the top of this page 👆) and then ColorZilla saved that color I picked and it was nice, but there was 4 problems.

1. The colors were only stored in the Chrome extension itself, so if for whatever reason I delete the extension or my change computers I wouldn't be able to get my saved colors again
2. The ColorZilla extension only saves the last 60 colors in the color history panel, so if I wanted to get the #61 color from somewhere I loose the #1
3. The UI wasn't good, and the colors were very small, just squares like this size 👉 ◼️
4. I couldn't differentiate similar colors, so it wasn't easy to reference them

So one day I decided to create a web app to solve this problem, and HexCandy was born.

### Why I built it? 🙂
I wanted some way to be able to store my favorite colors in a nice user interface, and have them always with me, backed up in a database to access them whenever I need em.

### How I built it? 👨‍💻
I built HexCandy using [React](https://reactjs.org/) for the frontend and [Firebase](https://firebase.google.com/) for the backend.

I also incorporated [Redux](http://redux.js.org/).

### What was the build process? ⚒️
Pretty straightforward, I just wanted a blank canvas with colors, so I decided to start off with a simple HTML and CSS page just to see how it would look like.

I drew some CSS circles with different background colors and then I added a small text underneath them to act as the name of the color.

When I finished the page I looked at it and I really loved the idea 😍

So I began coding to make the app interactive, I used React because I wanted a single page application, it was a good decicion to make because of the interactivity of the app, people just added a hex code in an input field, gave it a name, clicked a button to add the color and voila! ✨

I call the HexCandy colors, candies 🍬 because they look like candies 🤗

![HexCandy Colors](https://bntz.io/static/assets/images/content/hexcandy-colors.png)

Here's HexCandy in action.

![HexCandy Dashboard](https://bntz.io/static/assets/images/content/hexcandy-app.gif)

### How long does it took to make? 📆
1 month 😄 it's a pretty simple app, yet powerful.

### How much did it cost to build? 💸
Nothing, nada.

Well... Just the `.com` domain. Around **$15 USD/year**.

I host the site on [Heroku](https://heroku.com/) but it's ok since I'm on the free plan.

### Was it hard to make? 🙈
Nope! Since this was my 3rd React app on production it was easy to make 😄

### What was the business model? 💰
At the beginning I didn't think of any way to monetize the app, so I don't have a current business model around HexCandy, but recently I've been starting to think about a good one because people actually use the app! ❤️

### What was the marketing plan? 📈
Only [Product Hunt](https://www.producthunt.com/posts/hexcandy) 😸

I got **155 total votes** which is not a lot but it's not that bad as well 🙂

I'm planning to create a marketing strategy for 2018 😉 (I'll post the updates in this page)

### What were the results? 😬
Lots of sign-ups! 🙌 (well, not so much, just some hundreds)

I don't know how many real users I have because I messed up my analytics 😅 I combined the demo database with the real database so I have a giant database full with data of demo accounts and real accounts, I need to fix that 😝

Anyways, the good thing is, people use the app almost everyday 😄

### What did I learn? 🙌
I learned a lot about integrating React and Firebase 🔥

Also, I made a lot of testing (TDD/BDD) for this app, so I learned how to test components and functionality using [Expect](https://github.com/mjackson/expect), [Karma](https://karma-runner.github.io) and [Mocha](https://mochajs.org/) ☕

In the business side of things, I applied what I learned in older side-projects like [Phoenix](https://bntz.io/projects/phoenix) and [Gitsy](https://bntz.io/projects/gitsy).

Things like:
* Build stuff for myself and keep it super simple
* Iterate and add features based on customer feedback
* Add Facebook/Twitter login functionality instead of just email
* Build and ship fast, the importance of a good MVP
* Don't waste a lot of resources

And overall the results were as expected 🙌

The only way makers can test wether or not their products are going to be used by people and validate creator's ideas is to put out a product in front of people, talk to them and see what happens.

So makers, go out and [make things](https://bntz.io/blog/perception) 🙂

### What now? 😄
HexCandy is one of those apps that were built originally for personal purposes to solve the creator problems, but gained traction and it solved a pain point of other people as well, so I'm planning to launch **HexCandy V2** 🎉

I'll write the details in this page when the launch happens (2018)

I hope everything goes well, if not, I'll post my advice and lessons learned as well, one of my main mission in my maker journey is to be as transparent as possible.

Cheers! 😃
