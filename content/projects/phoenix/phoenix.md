---
title: Phoenix
description: Send a last message to the people you love when you die
heroColor: "#524b9a"
titleColor: "#ffffff"
website: null
github: null
slug: phoenix
---

## What is Phoenix? 🤔
Phoenix was a web app that enabled people to send a last message to the people they care about when they died 💀

![Phoenix](https://bntz.io/static/assets/images/content/phoenix.png)

I know, it's creepy 😱

And now I know what you're thinking, how the hell is a web app going to know when I die? 🤔

Well, that's the interesting part, I created a mechanism called the "check in". The "check in" was a little button 🔘 you needed to press once a year to tell Phoenix that you were alive. If you don't press that button in a year, for Phoenix you're dead ☠️

Now, the way Phoenix sended the messages to the correspondant people was to first determine if you were dead, if you were, all your letters/messages went into a queue and Phoenix then sended those messages to its recipients.

A Phoenix letter/message was just like an email, you wrote the subject, body and specified to whom you wanted to send that message and bam! 💥

That's how Phoenix worked, interesting, huh? 😉

Yeah, I thought it was amazing, but it wasn't that cool at the end of the story... At least for other people.

## How I came with the idea? 💡
One day I was thinking about death and I said to myself: "It would be very sad if we die right now, and all our ideas were gone, forever".

Initially, I thought of an app to send a set of passwords to a person I trust when I die, like my email password or something, for that person to learn deeper about myself and my ideas... Anyways I was going to be dead so it didn't matter.

Then I started to think more about it and the truth was that I was going to need a lot of infrastructure to protect the passwords of users, and a lot of trust by their part of course! So I decided to make it with pure text instead of passwords, that was a better idea 😄

### Why I built it? 🙂
I made Phoenix to solve that problem that was picking my mind at the moment, and also because I entered an online hackathon called [Ruby Rampage](http://www.rubyrampage.com/) (formerly Rails Rumble) at the time of that idea, so I entered the hackathon and started to build Phoenix.

Obviously, I didn't make it on time 😅 I thought it was going to be an easy app to build but as I worked on it a lot of problems arised 🤦‍

An interesting point to notice is that Phoenix was my very first app ever! It was my [Bloc](https://bloc.io/) capstone project.

### How I built it? 👨‍💻
Ok, perhaps this was my most advanced app ever, it's funny because it was also my first app ever as I mentioned earlier, well here's what I used to build Phoenix.

![Phoenix architecture](https://bntz.io/static/assets/images/content/phoenix-architecture.jpeg)

👉 **Backend**

For the backend I used [Ruby on Rails](http://rubyonrails.org/).

👉 **Frontend**

At the time I was building Phoenix I didn't know about frontend at all, I was a backend guy 💻 (now I'm full-stack 😎)

So I went JS framework agnostic.

The only thing I implemented as part of the frontend were: [SCSS](http://sass-lang.com/), [ERB](http://guides.rubyonrails.org/layouts_and_rendering.html), [jQuery](https://jquery.com/) and [Turbolinks](https://github.com/turbolinks/turbolinks).

👉 **Server**

I used [Heroku](https://heroku.com/) with the [Puma](http://puma.io/) web server and a [PostgreSQL](https://www.postgresql.org/) database.

I ran some dynos on Heroku to keep some processes running, I had a worker dyno who handled [Redis](https://redis.io/) and [Sidekiq](http://sidekiq.org/) for background processing such as email/sms delivery and user tracking methods.

Also it's worth to notice that I built some bots I called my reapers 👻 who were in charge of marking people as dead (check who were dead or alive) and send the letters when someone "died" as well as checking who’s dying and send them sms/email reminders for them to check-in on time, and much more background stuff.

Here's how my reapers code looked like.

![Phoenix bots](https://bntz.io/static/assets/images/content/phoenix-bots.png)

I used a [cron job](https://en.wikipedia.org/wiki/Cron) with the **heroku-scheduler** add-on, since Heroku can't connect directly with cron jobs in Rails.

👉 **Analytics**

For analytics and marketing strategies I used [Mixpanel]() and [Google Analytics]().

Mixpanel is incredibly useful for tracking custom events on apps, such as user actions and info based on user behavior.

![Phoenix Mixpanel](https://bntz.io/static/assets/images/content/phoenix-mixpanel.png)

My favorite features of Mixpanel are segmentation, user activity and funnels. Give it a try! 😄

Google Analytics is essential on every app, it helped me a lot when launching on Product Hunt!

![Phoenix Google Analytics](https://bntz.io/static/assets/images/content/phoenix-google-analytics.png)

Thanks to Google Analytics I knew from where were my visitors coming (UTM tracking) and from which part of the world were they accessing Phoenix.

👉 **Monitoring**

For monitoring Phoenix performance I used [Skylight](https://www.skylight.io/) 🖥️📈📊

![Phoenix Skylight](https://bntz.io/static/assets/images/content/phoenix-skylight.png)

Skylight is a monitoring tool for Rails apps, the design and the weekly reports are pretty damn good. I highly recommend it 👍

You can use [New Relic](https://newrelic.com/) as well, but for Phoenix I wanted to try [Skylight](https://www.skylight.io/) 🙂

👉 **Email/SMS**

Sending emails was the most important part of Phoenix, since that was the core of Phoenix (sending messages to the people you love when you die) I needed the best solution out there, and then I found [Postmark](https://postmarkapp.com/) 💌

![Postmark](https://bntz.io/static/assets/images/content/postmark.png)

Postmark is incredibly powerful at sending emails, the best email delivery provider I’ve found so far, I’ve tried Sendgrid, Mandrill, Mailgun and SparkPost and none of them can beat Postmark.

What really makes Postmark so good is that they only focuses on transactional email, zero marketing, and that increases their deliverability rate almost to a perfect score, thus the value of Postmark, so I know I’ll never miss even a single email! Read more about that [here](https://postmarkapp.com/why/delivery).

It is the most expensive service out there though, but I really wanted the best for my users, because I want to deliver all the messages they write and get them into their people’s inbox at the speed of light! ⚡

For SMS reminders 📱 and number verifications I used [Nexmo](https://www.nexmo.com/), it is an alternative to [Twilio](https://www.twilio.com/).

👉 **Payments**

For payments 💵 I used [Conekta](https://www.conekta.com/en), an very good alternative to [Stripe](https://stripe.com/) in México 🇲🇽

👉 **Fonts and other stuff**

I used [Typekit](https://typekit.com/) for my web fonts. [Fonts.com](https://www.fonts.com/) are really good as well, more expensive but it got many more fonts compared to Typekit.

For my privacy policies I used [Iubenda](https://www.iubenda.com/en).

For fancy animations I used [AnimateCSS](https://daneden.github.io/animate.css/) (remember that I wasn't a very good frontend designer 😜 now I use [GreenSock](https://greensock.com/) 😎)

I bought the tryphoenix.co domain at [Namecheap](https://www.namecheap.com/).

[Github](https://github.com/) is my favourite code versioning and source code management tool.

And finally 🙌 for customer support 📞 I used [Buffer Reply](https://buffer.com/reply/) (formerly Respond) which is a new product for social customer service by [Buffer](https://buffer.com/).

### What was the build process? ⚒️
It all started with some sketches.

![Phoenix Sketch 1](https://bntz.io/static/assets/images/content/phoenix-sketch-1.jpeg)

![Phoenix Sketch 2](https://bntz.io/static/assets/images/content/phoenix-sketch-2.jpeg)

![Phoenix Sketch 3](https://bntz.io/static/assets/images/content/phoenix-sketch-3.jpeg)

And it evolved to this...

![Phoenix Dashboard](https://bntz.io/static/assets/images/content/phoenix-super-old-dashboard.png)

Then to this...

![Phoenix Dashboard](https://bntz.io/static/assets/images/content/phoenix-simple-dashboard.png)

And then to this...

![Phoenix Dashboard](https://bntz.io/static/assets/images/content/phoenix-very-old-dashboard.png)

And theeeen...

![Phoenix Dashboard](https://bntz.io/static/assets/images/content/phoenix-old-dashboard.png)

And finally 🙌

![Phoenix Dashboard](https://bntz.io/static/assets/images/content/phoenix-new-dashboard.png)

Quite improvements, huh? 😄

Here are few more images of the design evolution of Phoenix.

![Phoenix Shop](https://bntz.io/static/assets/images/content/phoenix-simple-shop.png)

![Phoenix Letters](https://bntz.io/static/assets/images/content/phoenix-simple-letters.png)

![Phoenix Contacts](https://bntz.io/static/assets/images/content/phoenix-old-contacts.png)

![Phoenix Check-in](https://bntz.io/static/assets/images/content/phoenix-old-checkin.png)

![Phoenix Letters](https://bntz.io/static/assets/images/content/phoenix-old-letters.png)

![Phoenix Settings](https://bntz.io/static/assets/images/content/phoenix-very-old-settings.png)

![Phoenix Settings](https://bntz.io/static/assets/images/content/phoenix-very-old-settings.png)

![Phoenix Letters](https://bntz.io/static/assets/images/content/phoenix-new-letters.png)

![Phoenix Check-in](https://bntz.io/static/assets/images/content/phoenix-new-checkin.png)

![Phoenix Settings](https://bntz.io/static/assets/images/content/phoenix-new-settings.png)

😎

### How long does it took to make? 📆
Whoa! A lot! 4 months working 14 hours per day every day, thanks to this project I'm now a [night owl](https://en.wikipedia.org/wiki/Night_owl_(person)) 🦉🌘 (but I'm working on becoming an [early bird](https://en.wikipedia.org/wiki/Lark_(person)) 🐦☀️)

### How much did it cost to build? 💸
I can't remember exactly how much it cost to build but something between **$150-$300 USD** in total 😬

I know, it's really bad (you'll see why in a moment)

### Was it hard to make? 🙈
Yes! Since it was my first real world application on production it was super hard to build!

And honestly, it was an advanced app for my level of knowledge at that moment, I'm very proud of that, I remember I passed nights trying to solve a single problem, I still remember that impotence of not knowing what to do, in thinking that I just didn't know how to solve a problem and that maybe the thing I'm trying to accomplish isn't possible, I gave up several times.

Phoenix was probably one of the best decisions I made in my life, I learned a lot from that app, not only in the technical side but in the business side as well, I learned so much, and I'm grateful for that.

At the end, I didn't give up, I continued searching for answers, navigating through documentation I didn't understand, bookmarking every single StackOverflow question and answer, reading long articles and watching YouTube videos, just to find out how to do something I couldn't find in the entire web, but I was looking for the most similar question, fuck I still remember I didn't even know how to ask the question I was trying to solve. I tried super hard, I talked with an [imaginary duck](https://en.wikipedia.org/wiki/Rubber_duck_debugging) and walked around my desk for hours, I dreamed code and numbers for entire weeks, and I'm not kidding.

At the end, I managed to finish Phoenix, and it worked perfectly fine, I was so proud of myself, it was my first ever app on production, the first domain I bought and configured in my life, those aha moments were the best feeling in the entire world.

I did it, I launched it, but nobody gave a shit.

### What was the business model? 💰
Phoenix was a [SaaS](https://en.wikipedia.org/wiki/Subscription_business_model) app (Subscription as a Service). That was the [business model](https://en.wikipedia.org/wiki/Business_model) for Phoenix.

I sold the access and usage of the app for a one-time fee (well, it wasn't a pure SaaS app 🤔) which I don't remember for how much I sold the access, but something between **$10-$20 USD**.

### What was the marketing plan? 📈
I launched Phoenix on [Product Hunt](https://www.producthunt.com/posts/phoenix-4) and the outcome was very good! It was my first Product Hunt launch ever (since then I have launched 8 products).

![Phoenix Product Hunt](https://bntz.io/static/assets/images/content/phoenix-producthunt.png)

At the end Phoenix got **96 upvotes** ✨

Not so bad for a first launch on Product Hunt! 😄

Before the launch I read a book by [Kiki Schirr](https://twitter.com/kikischirr) called [The Product Hunt Manual](https://www.producthunt.com/posts/the-product-hunt-manual) and after I finish the book I sent a Twitter DM to Kiki asking her if she could hunt my product 🙂

![Kiki Schirr on Twitter](https://bntz.io/static/assets/images/content/kiki-dm.png)

So Kiki really helped me with my first Product Hunt launch since she had already a high following on PH. Thanks Kiki ❤️

When I launched in Product Hunt, I received some important comments/feedback from some users!

![Product Hunt Comment](https://bntz.io/static/assets/images/content/phoenix-producthunt-comment-1.png)

![Product Hunt Comment](https://bntz.io/static/assets/images/content/phoenix-producthunt-comment-2.png)

![Product Hunt Comment](https://bntz.io/static/assets/images/content/phoenix-producthunt-comment-3.png)

![Product Hunt Comment](https://bntz.io/static/assets/images/content/phoenix-producthunt-comment-4.png)

![Product Hunt Comment](https://bntz.io/static/assets/images/content/phoenix-producthunt-comment-5.png)

![Product Hunt Comment](https://bntz.io/static/assets/images/content/phoenix-producthunt-comment-6.png)

### What were the results? 😬
The results \*sigh\* 😞 haha

I earned **$0 USD** Z-E-R-O, a big O.

At the beginning I was pretty excited because for the first time ever a writer for the VICE website contacted me asking for an interview about Phoenix 😍 I was getting attention from the press! 😱

![Phoenix Vice Message](https://bntz.io/static/assets/images/content/phoenix-vice-message.png)

![Phoenix on Vice](https://bntz.io/static/assets/images/content/phoenix-vice.png)

[Here's the link to the Vice article.](https://www.vice.com/en_us/article/zn8e9w/phoenix-the-service-that-lets-you-email-people-after-you-die)

I did get very happy because of that article, but I wasn't getting any paid customers 😞 that's the long story short.

Hey! The good thing is, I learned a lot! 😄

### What did I learn? 🙌
Well, apart from what I already pointed out before about my coding adventure with Phoenix, I also learned a lot about other areas like **UX**, **business** and **marketing**.

I also recommend you to read [this article](https://bntz.io/blog/perception) I wrote some time ago in which I write about the importance of building and launching a product, that's the only way we truly learn, by trial and error, just as I learned how to build complex apps by spending long nights thinking and thinking, the same principle applies to the side of launching a business or a project, **we think we're right until we get real**.

I recently made an interview for [Failory](http://failory.com/interview/phoenix.html) in which I describe what I learned when launching Phoenix.

I'm going to point out the important parts of the interview below.

👉 **Which was the problem with Phoenix? How did you realize? ⚠️ ❌**

Well the first thing were the metrics (metrics don't lie). I had thousands of visits but only 45 sign-ups! Here's the break-down of the stats:

* Sign-ups: 45 👥
* Monthly expenses: around $30 💸
* Total revenue: $0 💰

So it was a mess. I then realized a lot of things happened:

* I didn't have a proper audience
* Young people don't care about death as much
* Old people do care about it, but don't know tech!
* A bit "expensive" (around $30 per year, people were going to die anyway)

👉 **What was the mistakes you made? 📉 〽️**

I made a lot of mistakes, here they are:

1. It took me around half-a-year to build Phoenix, non-stop, coding all day and night, hours and hours of development
2. Bought a not-so-cheap domain (.co)
3. Hired a lawyer to help me with the legal stuff
4. Opened a bank account exclusively for Phoenix and other legal stuff (taxes and so on)
5. Bought an SSL certificate
6. Didn't have Facebook/Twitter/Google Login
7. Hired a designer to make my logo
8. Bought custom icons
9. Used the most expensive transactional email service (Postmark)
10. Bought custom email addresses
11. I was super positive
12. Slow registration flow
13. Didn't collect emails first
14. Didn't test the idea
15. Expensive servers (Heroku)
16. Didn't make it simple (!KISS)
17. No early customers
18. No audience (or weak audience)
19. No Paypal
20. No MVP

Scroll down to read the whys of each number.

👉 **What did you learn? 🤓📕**

1. You need to ship as fast as possible!
2. Don't worry about domains, just buy the cheapest one you can find.
3. Don't worry about the legal stuff, until you start generating lots of money, and that's hard to do.
4. Just focus on the profit and growth at the beginning, that's all.
5. SSL certificates are expensive, get them for free [here](https://letsencrypt.org/)
6. Add Facebook/Twitter/Google Login in all your projects! People are lazy!
7. Just design your own stuff, make it beautiful but not perfect.
8. Don't buy anything except for the essentials, you don't need it at the beginning, you got other things to care about.
9. If you're sending emails, go for the cheapest/reliable service, if you want to upgrade do it after the profits.
10. Custom email addresses!? Just use your own email!
11. Don't be positive, stay alert and real, things are going to be hard, don't fantasize.
12. If you want to get sign-ups, keep it simple, just email and password (and name if you want) that's all, long forms scares people, remember, people are lazy.
13. Get early users by creating an MVP, those are super important if you want initial growth.
14. Test your ideas! Talk to people in your niche audience, create personas, test your hypotheses!
15. Don't get an expensive server, your servers are not going to crash for 100 persons online, first get 100 persons, then solve the next problem. Take a look at [Surge](https://surge.sh/).
16. Again, keep it super simple! If you don't need a database, don't build a database!
17. Get early customers!
18. Be sure to hop in the right audience! Communities are everywhere, just look at Reddit, Forums, Facebook Groups or Slack groups!
19. People love to use PayPal because they are lazy to enter their credit card info, implement it!
20. Build an MVP! It can take you minutes to build, and it's very powerful to get leads and test your ideas before actually build em and fail (like me)

### What now? 😄
Now the project is dead ☠️ but I learned a lot from those mistakes and I've applied what I learned along my journey on other side-projects like [HexCandy](https://bntz.io/projects/hexcandy) and [Spoil Your Enemies](https://bntz.io/projects/spoil-your-enemies) 😄

I've been thinking on making the app open source for people to host it on their own servers if they want, but I need to do some modifications to the code first, and I'm planning to rewrite the app using the [Phoenix Web Framework](http://phoenixframework.org/) (Phoenix on Phoenix 😝) which uses the [Elixir programming language](https://elixir-lang.org/), I love to learn new technologies so it may be good idea to do 😃

That's all! I hope you found useful this study case! ❤️
