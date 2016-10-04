---
layout: post
title: batch[0][batch[0].length - 1] (RC 26 July-22 September)
tags: [Programming, Recurse Center]
---

I get out of bed at 7:00 AM today. This is atypical for me. Usually I can sleep through the sound of the construction workers outside my window, smashing steel bars together toward whatever end, but today I can’t.

I decide that I’m going to be productive today, productive like I’ve been for the past three months. While I’m in the shower, I write a mental checklist of things to do.

I make oatmeal. I put on a sweater. I sit down at the table and open my laptop and discover that unplugging the router last night to make room for a box fan has somehow irreparably disabled the internet, so I spend 30 minutes unsuccessfully trying to debug it, while also not waking up my roommates, whose heads are just a few feet away from the modem.

This all has the flavor of a return to reality, and I don’t particularly like it.

- - -

If, for whatever reason, you’ve watched this space recently, you’ll notice that I made some semi-public commitments to making regular blog posts while in-batch at the Recurse Center. You’ll also notice that I only made 9 posts, not counting this one, all within the first month, and then radio silence.

Let the record show: this is not a negative reflection on RC or the people who are a part of it. If anything, the opposite is true: I became so joyously caught up in the details of programming and the day-to-day of existing in the community that I frankly just couldn’t find the time or spare scraps of mental energy to put down coherent thoughts every day. There’s plenty to be said, of course,  for forcing yourself to get out at least a few words on schedule, but I just gave it up and didn’t look back.

So, to catch up, a quick summary of things I ultimately (or at least partially) accomplished or contributed to at RC, in no particular order:

- [fielding-chat](https://github.com/tayloraburgess/fielding-chat), a small RESTful API server that provides the basic infrastructure for a stream-based, group-message chat system, using Node & Express. Also my first project working entirely in ES6 (transpiled with Babel).
- [expenses](https://github.com/leeorb321/expenses), a web app for tracking personal finances and visualizing the resulting data, built using Flask, Postgres, & (relatively) vanilla Javascript in the frontend (with [Chart.js](http://www.chartjs.org/) handling the visualizations). This was the project that taught me that trying to create modern, dynamic webpages using only jQuery as an aide is, if not “wrong”, at the very least inadvisably difficult, as is managing state via the contents of DOM nodes. Paired on this with Leeor.
- [rc-niceties](https://github.com/mjec/rc-niceties), a system for (hopefully) reliably allowing Recursers to write and send nice notes to other Recursers at the end of their batch. Backend in Flask & Postgres, frontend in React. My first experience with determining when a build is just reliable enough to go live, and then deciding it’s actually not reliable enough, and then agonizing over how and when to push updates without breaking the user experience. A nice welcome to the rest of my life, I suppose. Paired on this with Kang Ren.
- [markdown-preview](https://github.com/tayloraburgess/markdown-preview), a parser/interpreter/compiler for, well, Markdown, loosely written in Node. Debatable whether this one is an accomplishment (yet), as in its current refactor stage, it’s largely unusable and broken—but I feel comfortable putting it in this list due to the multiple evolutions it has undergone as I’ve learned more about Javascript specifically and programming generally. It’s also the project I came into Recurse with, intending to finish it within a week or two, and which has now outlasted everything else I’ve worked on. So, to kill this white whale, I’m working on a clean final version based on the [CommonMark spec’s parsing guidelines](http://spec.commonmark.org/0.26/#appendix-a-parsing-strategy), which I’ll modularize (and hopefully submit to npm), use as the base for a quick React app for demo purposes, and maybe also spin off as a command line utility.
- [YoutubeMusicLib](https://github.com/elenacaseyroby/YoutubeMusicLib), an app that tracks a user’s music listening habits on YouTube and makes recommendations using the collected data. Built with MySQL, Flask, and, again, relatively plain Javascript in the frontend. Spent a lot of time fiddling with OAuth here. Paired on this with Casey & Arpith.
- [Woog](https://github.com/lamarqua/Woog), a framework-less modular synthesizer written in Javascript, relying heavily on the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). This project is still a work-in-progress, as it’s hardcoded to the MIDI device we tested it with, but does have support for filters, polyphony, and several other parameter-controlled effects. Paired on this with Adrien.
- [Totes-Random](https://github.com/JKiely/Totes-Random), a pseudorandom number generator built with Haskell in the backend and plain Javascript in the frontend—additionally, as Haskell’s web framework selection is unsurprisingly paltry and poorly documented, we built an additional Flask server to host the main page (that’s in a separate repo [here](https://github.com/tayloraburgess/totes-desperate)). The app pulls “atmospheric data” from Twitter streams containing certain keywords and generates a pseudorandom number after a few mutations. Paired on this with John & Sean.
- [RoboDJ](https://github.com/JesseRap/RoboDJ), a Node app that analyzes audio tracks, looking for peaks, BPM, and section breaks, and lets the user mix & auto-crossfade between them. Also, experimentally, uses [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) (browser-based multithreading in Javascript) to render the interface and do audio analysis concurrently in a more timely manner. Paired on this with Jesse & Jake.

This, of course, doesn’t implicitly include countless warmup problems, quick exercises, workshops, books, meditation sessions, presentations, friends, dumplings, beers, cups of coffee, and late nights spent staring at monitors.

- - -

In the first post in this series (if you can call it that), I gave myself permission to emote a little more freely than I usually do on the internet, so I’ll do that one last time:

Without going into too much detail, I discovered the Recurse Center during what was, to date, one of the darkest periods of my life—personally, emotionally, intellectually, professionally. And while I won’t solely credit my time here with helping me begin to straighten things out—therapy, friends, family, and just plain willpower have mostly done that—I can’t help but describe, maybe tritely, the experience as something akin to seeing sunlight again after an interminable stretch spent stumbling around in a pitch-black cave, half-heartedly feeling the walls, and not even being sure if I actually wanted to see sunlight again.

This is not to oversell RC as some sort of magical, restorative utopia, but simply as a place where very good-hearted people gather to work on projects that interest them, learn whatever programming-related topics they feel like learning, and treat each other with immense respect and dignity. Seeing that in motion, in reality, and being granted the honor to participate, was enough to lift me off of the ground.

- - -

I put on some coffee, as my non-habitual early waking time means that by 10:00 AM, I’m already dragging a bit. I start to wonder if this is a sign that I won’t be able to keep up the relatively intense pace I maintained while I was at RC—or that without the structure around me, I’ll lack the motivation to do anything meaningful. Or that maybe that pace is unhealthy, and I should develop better work habits.

I fold up my bed. I wash some dishes. I start to get that taste again of things returning to normal after a long vacation or escape, and normal is not a state of being I have an especially comfortable relationship with right now. The typical slew of worries start: that the title of this blog post is stupid, that blogging is stupid, that I’m a stupid programmer, that programming is stupid.

And then I try to get some distance, and consider another perspective, and remind myself of what I talked with others in my batch about many times: that the whole experiment of the Recurse Center is arbitrary, is artificial, is a social and intellectual construction sustained solely by the active participation of the members of an ad-hoc community. Whatever was driving me to build and learn during the past three months is still there if I want it to be because it was entirely in my head to begin with.

I think this is a good place to start from.

(Some final) stray thoughts:

- Though my presentation of it has probably been a bit scattershot, and my singular experience doesn’t necessarily do the entire thing justice, if anything I’ve written seems to ring true and you’re interested in becoming a better programmer, strongly consider [applying](https://www.recurse.com/apply) to the Recurse Center. I’m also happy to talk about it at length; if you want, contact me via whatever medium works best for you.
- In the event that anyone actually reads this and is planning to do a batch at Recurse, or just might be in the SoHo area, the one piece of very practical advise I can give is to try as many local restaurants, bars, coffee shops, food stands, etc as you can reasonably afford, as there are so many fantastic choices within walking distance that it’s kind of overwhelming. Here are some that I consistently went back to (and many other Recursers did as well); there’s far too many to write descriptions for, so just going to list:
	- Lunch
		- Bahn Mi Saigon
		- The #1 SoHo Halal Guy (cart on Houston & Broadway)
		- Simple
		- Vanessa’s Dumpling House
		- Hoomos Asli
		- Wah Fung
		- Xi’an Famous Foods (Kenmare & Mott location)
		- Taim (Spring & Mulberry location)
		- Landmark Cafe
		- Hampton Chutney Co
		- Lahore Deli
	- Coffee
		- Happy Bones
		- Gasoline Alley (Grand & Lafayette location)
		- Saturdays Surf
		- Maman
		- Greecologies
		- Housing Works Bookstore Café