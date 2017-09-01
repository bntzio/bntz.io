---
title: Super Productive Programming with Tmux (Part 1)
date: 07/26/2016
slug: tmux-part-1
---

Tmux is a terminal multiplexer. It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal. And do a lot more. See the manual.

![tmux](https://bntz.io/static/assets/images/content/tmux.png)

Tmux is an incredibly useful tool to learn and use in your daily coding tasks, I’ve been using it for a couple of weeks now and I’m already feeling the blazing fast sensation of getting things done.

**If you love Vim, you’ll love tmux, I promise.**

## tmux in a nutshell, and what it can do

Tmux (as stated before) is a terminal multiplexer, that means it’s a program that lives in your terminal and lets you work on multiple things all at once, with tmux you can see things at a higher perspective, you’re seeing multiple terminal windows in just one.

Think of tmux as a terminal with superpowers, by accessing at a high speed to other environments or files you can accomplish a lot more when coding, imagine you’re running a tmux session with 5 panes (as in the picture above), three of them are your Vim project files and the other two are your normal terminal windows (one running tests and the other one doing the bundling process of your saved files), and you’re seeing the action on all the 5 panes at once, now that’s what I call awesomeness.

You know what, lets add one more pane to my tmux session.

![tmux](https://bntz.io/static/assets/images/content/tmux-gif-1.gif)

With just 4 keystrokes I can open up another tmux pane and start doing another thing to keep on going with my coding project, in this case, I opened a pane and navigated to my project root folder, finally I added all my untracked files using *git add .* to save my progress or commit my changes up to [my Github account](https://github.com/bntzio).

I can also open up another pane and start an express server and re-run my tests in just a few seconds, all in my current tmux session.

![tmux](https://bntz.io/static/assets/images/content/tmux-gif-2.gif)

Amazing, isn’t? And tmux can do a lot more.

Here’s a [tmux cheatsheet](https://gist.github.com/bntzio/9dc35f410c3c0547ca2ed46b8e37e3ac) I found very useful all the time.

### Navigation, creating sessions and working with panes

**A session in tmux is a separate working environment that contains one or more panes to work with**, sessions are useful if you’re working on multiple projects at once, for example, a *react session* and a *rails session*.

To create a session, you first need to fire up tmux, just type tmux in your terminal.

`tmux`

Now create a new session and give it a name.

`tmux new-session -s java`

To kill a session use:

`tmux kill-session -t java`

Now lets go with the basics of creating panes and moving around them.

**A tmux pane, as you may already know, is a new terminal window under a given tmux session**, you can have multiple panes in one session and move around them very quickly.

First let me introduce you very quickly the **tmux prefix key**, that’s the most important keyboard keys for tmux, it’s what you’ll be typing the most part of your time when using tmux.

The tmux prefix key gives most of the commands to tmux, for example when opening up tmux panes or moving around them.

**The default tmux prefix key is C-b (ctrl+b)**. You can configure it in your *~/.tmux.conf* file, here’s an example of mine.

```
unbind C-b
set -g prefix C-s
```

That tells tmux to unbind the default prefix key and to set a new one using *C-s (ctrl+s)*, which my muscle memory and hands prefer, feel free to use your own combination.

To create a vertically tmux pane type your prefix key and then “, like this:

`C-s “`

*Note: Assuming my prefix key is C-s.*

To create a horizontal tmux pane, use %, like down below:

`C-s %`

### Now you’re ready to get moving!

To move between tmux panes is very easy, all you need to do is use your prefix key + the arrow keys in the desired direction to move on, pretty easy, huh? ;)

## Conclusion

This is the first post of my **Super Productive Programming (SPP) Series**, featuring tmux at first!

As you can see, the possibilities to work with tmux are endless, you can do a lot of things, I found it very slow to get it at first but once you start using it for a couple of weeks everyday, you’ll fall in love.

You can configure and customize tmux as well! As we did with the *~/.tmux.conf* file, and tmux plays very nicely with Vim.

Tmux is now an essential tool for my programming productivity. I highly recommend it to you if you want to code faster and get shit done! 💻
