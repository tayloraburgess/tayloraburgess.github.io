---
layout: post
title: Recurse Center Daily
tags: Programming
---
From July 5-September 22, I’m spending time at the [Recurse Center](http://recurse.com) in NYC. I’m going to do my best to post every day, detailing whatever I got up to. Hopefully I’ll be able to sum up series of daily events & work done such that even if they’re completely incoherent moment by moment as I live them, they’ll seem orderly in hindsight, and I’ll feel better. Additional things:

- I’ll add daily to this single post (static site etc), but if that approach seems clunky as I go, I’ll split it into individual posts.
- Going to keep things relatively short, both so I actually write every day and to not get too technical—want to focus here for the most part on what I did broadly so that there’s some sense of an arc/narrative to my time at Recurse. It’s also entirely possible no such story will reveal itself at all.
- I’ll also be using some first names and proper nouns that I may not always explain. In normal blog posts, I try to avoid that kind of inside baseball, but I’m writing these quickly and, frankly, for my own benefit. Maybe at the end I’ll go back and fill in some details—or write a glossary/add footnotes—but that’s not likely.

Anyway, here we go:

#### 05 July

The first day of any new major organizing life event (RC isn’t broadly comparable and understood like school, a job, or even my touring days, so don’t know what noun to call it by), no matter how positive, is always going to be a little disorienting (at least for me). And so it is at Recurse. The people are incredibly welcoming, the environment is warm and charged with lots of creative energy, and breakfast food and coffee abound. Still, there’s the reality of meeting ~75 new people in a short span of time while trying to gauge their interests, see where they overlap with yours, and also, you know, be a friendly human being. 

Luckily, the facilitators—James, Lisa, and Rose—advised us not to write any code today. So I didn’t. I started to read through a tutorial on web server hosting that Tracy from the Summer 1 Batch sent my way, but didn’t even get past the first page. I was so burnt out by all the decidedly non-technical parts of the day—introductory talks, pitas out for lunch with a small group, coffee with Dan & John from my batch, an afternoon meet & great with partner pairings that regenerated every 3 minutes—that when I found myself reading the same sentence over and over, getting nothing, I decided that was it—and so did John. We went to Brooklyn, grabbed a beer, and talked about Vonnegut and shanty choirs. As good an ending as any.

Stray thoughts:

- I’m not much of a dog person, but Ginger, canine Recurse resident, is adorable, hypoallergenic, never barks, and never seems to smell. Need to find a dog like this.
- Amongst my batchmates, two most common interests by far seem to be functional languages and machine learning. Not sure whether I’ll dive into either, honestly.
- Coffee is a hell of a drug, but I’m experimenting with not drinking much of it while I’m at Recurse. I already folded and grabbed a cup mid-afternoon, as mentioned above, but that’s better than my usual steady stream. Probably not smart to try beating a slight dependency like this right as you move into a completely new daily structure.
- If it wasn’t implicit in what I’ve already said, I’m not sure what exactly I’m going to work on while here, and while I have no problem working hard, I have no idea how to most effectively structure my time. There’s a workshop on that later this week that I’ll definitely be attending. More on that as I do (or don’t) figure it out.

#### 06 July

Started being productive (at least a little bit) today. Began doing morning check-ins, where <10 people meet in a group to basically just state what they did yesterday and what they’re planning to work on today (staff participate, too, so not everything is explicitly programming-related—just part of the overall work philosophy of the space). I was initially a bit skeptical of such a simple and non-binding sort of accountability, but interestingly enough, just knowing that you need to say something (and assuming you’re not comfortable lying to well-meaning people) is enough to push you to at least attempt things daily that can actually be summed up in a sentence or two.

Per some advice Rose gave to me yesterday, I’m going to return to my very hacked-together markdown interpreter, and see if I can’t finish it out (and structure it like a proper interpreter rather than a random mess of poorly-planned functions). I’ve found a [solid tutorial](https://ruslanspivak.com/lsbasi-part1/) for building a basic Pascal interpreter from the ground up. I’m going to implement the pre-written tutorial Python in Javascript so I really get it under my fingers, and then use the principles learned there to refactor the markdown interpreter. I’m hoping to get this done within the week, but are these sort of estimates ever accurate? No, they’re not.

Stray thoughts:

- I left around 5:30 PM to get drinks with Alex in the Financial District, but decided to come back to RC later on (~11:00). I was curious to see if anyone was still around—I’d heard that some RCers are night owls—and there were 5-6 people still there. I didn’t actually get much done, but had a brief chat with David, an alum, about jobs and doing what you’re interested in at RC, not necessarily what everyone else is working on (see bit in last post about machine learning). He also said that further along in the batch, more people stay late—so I’ll definitely be back.
- I rubber ducked today for Dan on a package manager similar to npm that he’s designing for Go. Really my first group anything, but was pleasantly surprised with how well I was able to understand the structure of the project despite having no experience with the particular technology involved and that I was able to make some actually useful comments (I think). Going to do more of this.

#### 07 July

Another individually productive day, but with a smattering of other experiences that kept things interesting. I chipped away at the Pascal interpreter tutorial. I was hoping to have it finished yesterday, but things are getting theoretical—lexical grammar, ASTs, etc—so progress is slower. But it’s fine by me, as I’m getting far outside my knowledge base, and that’s exciting.

Went to my first set of presentations today, where other people in the batch talk about a project for 5 minutes or less. They ranged from pretty technical—Harold’s talk on Elm went almost completely over my head—to user-facing and web-based—Tracy showed a color picker that scrapes Uniqlo’s site and pulls clothing matches. I’m definitely hesitant to give a talk myself, but Tracy reassured me that it doesn’t have to be polished or complete. Just interesting to the presenter.

I’m also already finding people I could actually collaborate with. While facilitating pairing is one of the reasons RC exists, I still didn’t entirely believe that I actually would due to my lower experience level. But Dan told me over dinner that he’d teach me some basic web hosting (using Express.js), and Junior overheard me talking about my interpreter and said he’d like to try to build some kind of virtual machine and a compiler that would work with it. He also asked me how interpreters work, and I found myself actually able to explain it (from what I know so far) and felt confident in what I was saying. Junior is much more experienced than me, so it was a conversation that I wasn’t expecting, but I’m very happy that this place exists and encourages interactions like that.

Stray thoughts:

- Stayed late again (until ~12:30 AM), and again wasn’t terribly productive past a certain point, but had some good conversations. The feeling of the room changes after the official hours are over—people talk more freely, alumni come and go, etc.
- I still can’t figure out exactly what it is, but something about the space is very soothing and so far has pushed me past the emotional cruft that I tend to have when I wake up and toward actual, enjoyable work. Might have something to do with the space being full of other people working—i.e. if I look up, I don’t really see distractions; I just see models for what I should actually be doing.

#### 08-10 July

Recurse is only officially open Monday-Thursday (or at least the expectation is for us to be in the space during the day then), so to cut myself some slack I’ll be covering my Fridays, Saturdays, and Sundays in one summary post. They’re technically my days off, but I’m going to try to keep ahead of projects anyway. Or, put another way, I can go in the Recurse space 24/7, and I’m already having a hard time truly taking even a day off (since my time at Recurse is so limited), so I’ll probably still have things to say in these posts.

That said, not much productive activity this weekend, which I justified to myself since it’s my first real one here. I did spend most of Friday in the space, but to diminishing returns as the day wore on. I finished the Pascal interpreter tutorial and started restructuring the markdown interpreter, but (as I’m writing this on Sunday) the rest of the day starts to get a little hazy in my memory, so I can say semi-confidently that not much happened. John asked me to work in a group on a BitTorrent client, so I learned a little basic Python in preparation, and while out for lunch, Adrien suggested we try to pair on synthesizer in Javascript.

Other than disccusing those project ideas, though, little work happened. I left the space around 9:30, went to a party full of RCers in midtown, and came home extremely late—and I think that’s okay. While there, had a very enthusiastic conversation with Irina about my idea to somehow redesign git for use with DAWs, but that might be well beyond my abilities at the moment. We’ll see.

As for Saturday and Sunday, I didn’t write a single line of code (I’m opening my laptop for the first time since Friday afternoon, and it’s 10:30 PM on Sunday). And I think that’s also okay. I wandered around various city spots I’d wanted to see—Greenwich Village, the High Line, Williamsburg, etc—and tried to give myself time to process what, for me, has been a pretty neck-snapping life transition. I don’t mean that in a negative sense, necessarily—there’s just a lot of new people, places, ideas, patterns of life, and I’m trying to be kind to myself as I take it in.

A common personal trap for me is believing I need to be much more accomplished at and much more adjusted to difficult things, like living in a new, huge city or programming effectively, than is realistic given the amount of time I’ve been exposed to them. I’ve only been at Recurse and in New York for one week, and when I step back from it and afford myself kindness, I’m pretty pleased with how I’ve been doing so far.

Stray thoughts:

- Interesting New York anecdote (that’s possibly common and thus only interesting to a city neophyte like me)—while near Washington Square Park on my way back to the apartment at 4:00 AM on Saturday morning, I saw someone, eyes closed, lying the middle of the street. His friends didn’t seem terribly concerned, and I was frankly a little too intoxicated to properly assess the situation.
- As a Southerner accustomed to easy access to washers and dryers in every place I’ve lived, figuring out how to (affordably) do my laundry today was a bit of an ordeal. It was ultimately painless to suck it up and go to the one self-serve laundromat within walking distance (SoHo seems to favor drop-off services), but I spent far too much time beforehand researching it and freaking myself out. Not too flattering, but true. Need to get in the habit of just doing new tasks like that, and deciding afterward whether they’re difficult or not, rather than the way I went about it today.
- On the way to the laundromat, I saw an (extremely minor) internet-famous person walking through SoHo, which isn’t actually interesting, I know, but was a little bit jarring. Having lived in smaller towns, I’m just not used to the sensation of unexpectedly seeing people IRL who, in this case, have written lots of things I’ve read.