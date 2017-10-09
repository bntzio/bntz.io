---
title: Gitsy
description: Organize your GitHub stars like a true stargazer
heroColor: "#EE327D"
titleColor: "#ffffff"
website: null
github: null
slug: gitsy
---

## What is Gitsy? 🤔
Gitsy was a web app to organize your [GitHub](https://github.com) stars, you know when you excessively star cool open source projects (like me) and want to find a specific project it's a nightmare.

Gitsy aimed to solve this by adding tags to your starred projects, find by language and by name, as well as add multiple stars 🌟 to your favorite repositories (up to 3 stars) for you to find more easily your favorite, super favorite or mega favorite repositories 😄 the same way [Codepen](https://codepen.io) does.

## How I came with the idea? 💡
I'm a GitHub star addict ⭐ every time I find a cool open source project I immediately star it to keep it as a reference later in case I want to build a project with it.

Then I found [Astral](https://astralapp.com) and it was good but I really wanted the 3-stars feature so I built Gitsy with my own feature ideas.

### Why I built it? 🙂
I wanted a full control of my GitHub stars 🤗 Also I built it because of a challenge, combine the power of Rails and React.

### How I built it? 👨‍💻
- **Frontend:** [React/JSX](https://reactjs.org/)
- **Backend:** [Ruby on Rails](http://rubyonrails.org/) and [PostgreSQL](https://www.postgresql.org/)
- **Styling:** [SCSS](http://sass-lang.com/)
- **Tooling:** [Webpack](https://webpack.js.org/) and [RubyGems](https://rubygems.org/)
- **Server:** [Puma](http://puma.io/) on [Heroku](https://heroku.com/)
- **Analytics:** [Google Analytics](https://analytics.google.com/) and [GoSquared](https://www.gosquared.com/)
- **Others:** [React on Rails](https://github.com/shakacode/react_on_rails)

### What was the build process? ⚒️
Here's what it looks like.

![Gitsy Dashboard](https://bntz.io/static/assets/images/content/gitsy-dashboard.png)

### How long does it took to make? 📆
2 months 😬 I struggled a bit on connecting the Rails backend with the React frontend, but it was a nice challenge 😄 but honestly I think I did some hacky things, the code looks very hacky haha, I know there was better ways to do it but it did the job 😛

### How much did it cost to build? 💸
Only the **.co** domain which I purchased for about **$29 USD** 💰

### Was it hard to make? 🙈
Honestly, yes!

I learned a lot while building Gitsy, it was the first time I combined two technologies (Rails and React) together, but now it's cake 🍰

Also it was the first project I loved because I really needed it for my own purposes, it solved a problem I had, and for that I'm happy 🙂

### What was the business model? 💰
None! I built Gitsy to solve a problem I had, and made it public to help others solve that problem as well.

### What was the marketing plan? 📈
I just launched Gitsy on [Product Hunt](https://producthunt.com/) and that was it!

### What were the results? 😬
Very bad! 😞 haha, I just got 7 votes on Product Hunt!

![Gitsy on Product Hunt](https://bntz.io/static/assets/images/content/gitsy-producthunt.png)

And very few people signed up! I don't remember exactly but I got between 4-8 users only.

### What did I learn? 🙌
Technically speaking, I learned a lot, like how to work with a backend framework and a frontend library together, also I learned how to send **POST** and **GET** requests to a database and render the results in the frontend, query stuff to get the right results and how to work with API's like the [GitHub API](https://developer.github.com/v3/) to fetch data from users.

On the business side of things, I learned that a lot of the times your problems are not other people problems, so if you want to build something for yourself to solve a specific problem you have, build it for yourself only!

What I mean is your focus should be on you, not on others, when building Gitsy I was expecting that a lot of users were going to use my app, so I built it and designed it around users, and that was bad, a few examples:

* Bought a not so cheap domain
* Added features I didn't wanted (readme previews and tags)
* It took 2 months because I wanted it to look perfect, that's too much time!

Instead, focus on what you need only, and don't perfect your product if it's only for you, focus on the functionality to solve your problem as fast as possible, a super mvp (minimum viable product).

If you want, release it to the public, but don't waste a lot of money or time on it, if people likes it, then slowly add what they need/want based on feedback and so on, then  figure out a way to monetize it if people really use your project to keep it running 👍

### What now? 😄
The domain (gitsy.co) expired and I shutted down the app, it's no longer active, instead I went with [Astral](https://astralapp.com) which is an excellent app made by [Collin Henderson](https://twitter.com/syropian).

It doesn't have the 3-stars function but since the project is [open source](https://github.com/astralapp/astral) I can implement it if Collin accepts to.

I made a [pull request](https://github.com/astralapp/astral/commit/deb9ee98629b00b8ea33c6490d4a8715559e2fcd) some months ago to implement better alerts in the app.

And since I love open source projects I'm going with Astral instead, it solved my star problem so it's ok.

Also, in the following weeks I'm going to become an Astral [Patron](https://www.patreon.com/syropian) to show my support to the project ❤️

And maybe... Contribute by adding new features 👨‍💻
😄
