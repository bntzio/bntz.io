---
title: How to fix Ruby on Rails in OSX El Capitan
topic: code
date: 10/10/2015
slug: fix-ruby-on-rails
---

Two days ago, I upgraded to El Capitan, since then my Macbook Pro is smoother, faster and feels a little bit lighter, everything seemed to be perfect, until yesterday.

### El Capitan broke my development environment

![captain hook](https://bntz.io/static/assets/images/content/captain_hook.jpeg)

Yes, I started to hate El Capitan, but as I dig deeper into the problem, I found why my dev environment is all fucked up.

The problem was with **Homebrew**.

### Homebrew vs SIP

As you know, Homebrew is a package manager for OS X, you probably have been using it to install things into your machine, like this:

```bash
brew install postgresql
```

Well, that’s awesome, but the problem with OS X El Capitan and Homebrew is that SIP (System Integrity Protection) doesn’t play very well with Homebrew at the moment, read more about it [here](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/El_Capitan_and_Homebrew.md).

SIP prevents you from writing to many system directories such as /usr, /System & /bin, regardless of whether or not you are root, that’s the problem (but a very nice security feature for normal users).

Obviously, Homebrew and SIP are nemeses.

### Hum… OK, but how do I fix it?

Ok, too much information for now, let’s get to the nitty gritty.

In order to fix your development environment, you’ll need to destroy it first.

**Install XCode CommandLine Tools**

This is because Homebrew depends on these tools.

```bash
xcode-select --install
```

**Note**: if something like this appears, just click “Install” (if you already have Xcode) or “Get Xcode” if you don’t.

**Reinstall Homebrew**

Handy scripts:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Note**: it may not be needed to reinstall Homebrew, however I did it because I wanted a clean install of my packages in my new OS X El Capitan, if you do so as well, feel free to reinstall Homebrew, but backup your local databases if you got any you’d like to keep, remember that Homebrew installed your DB’s (MySQL, PostgreSQL) and if you uninstall Homebrew, all your packages will be removed as well.

### Here comes the REAL solution

Welcome, rbenv.

![rbenv](https://bntz.io/static/assets/images/content/rbenv.png)

**Rbenv** is an awesome version manager for Ruby (similar to RVM).

This is the real solution to all of your problems regarding installations when you use rbenv, you isolate the installations of your packages or gems so you don’t fuck up your projects when versioning and so on.

**Install rbenv with Homebrew**

```bash
brew install rbenv ruby-build
```

**Add rbenv to bash so that it loads every time you open a terminal**

```bash
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
```

**Source your ~/.bash_profile**

```bash
source ~/.bash_profile
```

**Install Ruby with rbenv**

```bash
rbenv install 2.2.3
rbenv global 2.2.3
```
**Check your Ruby version**

```bash
ruby -v
```
**Install Rails**

```bash
gem install rails -v 4.2.4
```

This will install Rails 4.2.4 (recommended) in a rbenv environment.

**Tell rbenv about it with rehash**

```bash
rbenv rehash
```

**Verify Rails is installed**

```bash
rails -v
# Rails 4.2.4
```

**Setting up databases**

MySQL:

```bash
brew install mysql
```

PostgreSQL:

```bash
brew install postgresql
```

And that’s it! now you can continue working with Ruby on Rails as normal, try it by creating a new rails application.

```bash
rails new appname
```

And voila! Ruby on Rails working on OS X El Capitan with rbenv and Homebrew.

**Note**: just remember to source your bash_profile each time you want to work with rbenv and their virtual environments, if you don’t source it, you will not have any installations (because they are inside the rbenv environment, not in your local environment), it’s a way better way to manage your packages and/or gems don't you think? ;)

### Conclusion

I think that OS X El Capitan increases the security of our machines in a very good way, sometimes that’ll affect developers (like you and me) but the good thing is, now we are kind of forced to work with more security while developing apps, before the El Capitan upgrade, I didn’t have rbenv or a Ruby version manager at all, I just installed everything in my local machine configuration, which is bad practice when you start working with multiple applications that need different configurations and environments.

Oh, you may want to take a look at [Vagrant](https://www.vagrantup.com/) the next time you upgrade to a different OS, it’s a very elegant way to manage development environments, it’s worth to take a look and play with it, I just implemented Vagrant in my everyday development workflow, I’ll write about it soon, so stay updated ;)
