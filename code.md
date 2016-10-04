---
layout: page
title: Projects
permalink: /code/
---

A short list of software projects (some finished, some in-progress, some in-between) that I've either written myself, contributed to, or paired on with other developers.

If I've accidentally left anything out, you can probably find it on [GitHub](https://github.com/tayloraburgess).

___

### fielding-chat

###### [GitHub](https://github.com/tayloraburgess/fielding-chat) / [Live Demo](https://fielding-chat.herokuapp.com/api/v1)

Client-agnostic RESTful API server for a chat system. Represents user, message, and log data for clients; and handles requests to manipulate those resources. Uses [application/hal+json](http://stateless.co/hal_specification.html) for resource representations and is fully discoverable from the root API url.

Built using Node.js, Express.js and MongoDB (via [Mongoose](http://mongoosejs.com/)). Written in ES6 and transpiled with [Babel](https://babeljs.io/).

**Status**: stable build.

___

### rc-niceties

###### [GitHub](https://github.com/mjec/rc-niceties) / [Build](https://niceties.recurse.com/) (requires Recurse Center authentication)

![rc-niceties]({{ '/assets/projects/rcniceties.png' | prepend: site.baseurl | prepend: site.url }})

App for [Recurse Center](https://www.recurse.com/) participants to send "niceties"--encouragement, support, praise, etc.--to other Recursers at the end of ["batches"](https://www.recurse.com/faq#start-date-question).

Simple interface allows users to write niceties to other Recursers and view niceties others Recursers have sent to them. Also includes basic administrative tools & print formatting for faculty use and local caching to avoid data loss.

Backend API built using Flask and Postgres; frontend built using React.js.

Original project structure by [mjec](https://github.com/mjec); I paired closely on the rest with [xtrntr](https://github.com/xtrntr).

**Status**: stable build; currently refactoring to make caching more secure, reduce backend request frequency, and leave code more maintable for future Recursers to work on.

___

### Totes-Random

###### [GitHub](https://github.com/JKiely/Totes-Random)

![Totes-Random]({{ '/assets/projects/totesrandom.png' | prepend: site.baseurl | prepend: site.url }})

Pseudorandom number generator that pulls “atmospheric data” from Twitter streams containing certain keywords and generates a pseudorandom number after a few mutations. Built mostly for a lark, but also the challenge of building a RESTful Haskell web API.

To that challenge--Haskell's existing web frameworks are a bit...tentative, so this app is actually split across two servers: one, in Haskell & [Snap](http://snapframework.com/), that sends requests to the Twitter API and generates the pseudorandom numbers, and another in Flask (repo [here](https://github.com/tayloraburgess/totes-desperate)) that requests that data from the Haskell server and serves it to the vanilla JS frontend.

Paired on this project with [JKieley](https://github.com/JKiely) and [phasedchirp](https://github.com/phasedchirp).

**Status**: currently broken--unicode decoding errors between the Haskell & Python servers. To be fixed ASAP.

___

### RoboDJ

###### [GitHub](https://github.com/JesseRap/RoboDJ)

Web app that analyzes audio tracks, looking for peaks, BPM, and section breaks, and lets the user mix & auto-crossfade between the tracks. Also, experimentally, uses [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) to render the interface and do audio analysis concurrently in a more timely manner.

Built with (very minimal) Node.js & Express.js in the backend and vanilla Javascript (with some jQuery) & [wavesurfer.js](https://wavesurfer-js.org/) in the frontend.

This is primarily [JesseRap](https://github.com/JesseRap/RoboDJ)'s project, but I paired on implementing the aforementioned Web Workers, wrote the backend, and added frontend file reading support.

**Status**: stable, but undeployed.

___

### expenses

###### [GitHub](https://github.com/leeorb321/expenses) / [Live Demo](http://fierce-cove-57868.herokuapp.com)

![expenses 1]({{ '/assets/projects/expenses_1.png' | prepend: site.baseurl | prepend: site.url }})
![expenses 2]({{ '/assets/projects/expenses_2.png' | prepend: site.baseurl | prepend: site.url }})

Personal finance tracker with data visualization. 

Built using Flask & Postgres in the backend and (relatively) vanilla Javascript in the frontend (with [Chart.js](http://www.chartjs.org/) handling the visualizations).

Paired on the majority of this project with [leeorb231](https://github.com/leeorb321).

**Status**: stable build, but currently refactoring to use React.js in the frontend.

___

### YouTubeMusicLib

###### [GitHub](https://github.com/elenacaseyroby/YoutubeMusicLib) / [Build](http://youtube-music-library.herokuapp.com)

![YouTubeMusicLib 1]({{ '/assets/projects/youtubemusiclib_1.png' | prepend: site.baseurl | prepend: site.url }})
![YouTubeMusicLib 2]({{ '/assets/projects/youtubemusiclib_2.png' | prepend: site.baseurl | prepend: site.url }})

Web app that tracks a user’s music listening habits on YouTube (via the YouTube API) and makes recommendations using the collected data.

Built with MySQL & Flask in the backend and vanilla Javascript (with jQuery etc.) in the frontend.

Primarily [elenacaseyroby](https://github.com/elenacaseyroby)'s project, but I implemented Google OAuth support, paired with [arpith](https://github.com/arpith) on deployment configuration, wrote code to request data from the [Last.fm API](http://www.last.fm/api), and did assorted other tasks across the front & backend.

**Status**: stable build.

___

### Woog

###### [GitHub](https://github.com/lamarqua/Woog)

Browser-based module synthesizer. Has support for filters, polyphony (currently only low-note priority), and several other parameter-controlled effets.

Currently written in framework-less Javascript (but with some help from [flow](https://flowtype.org/)), and hardcoded to only accept input from specific Akai MIDI keyboards. 

Paired on this with [lamarqua](https://github.com/lamarqua).

**Status**: in-progress--graphical web interface and support for custom MIDI keyboard control mapping to come.

___

### markdown-preview

###### [GitHub](https://github.com/tayloraburgess/markdown-preview)

Interpreter/compiler for Markdown, outputing HTML.

Built using Node.js & ES6.

**Status**: in the midst of a major refactor to restructure the parser to follow the [CommonMark spec's parsing strategy](http://spec.commonmark.org/0.26/#appendix-a-parsing-strategy). Master branch does have limited support for several block & span-level elements.