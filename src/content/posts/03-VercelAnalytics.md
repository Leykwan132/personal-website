---
title: "Free Web Analytics by Vercel"
publishedAt: 2023-09-11
description: "Track your web traffic with Vercel Web Analytics!"
slug: "vercelanalytics"
isPublish: true
---

Just came across a super cool feature offered by Vercel for web analytics! and it's <span style="color:red">free</span> and <span style="color:red">easy</span> to implement it!

<img src="https://vercel.com/_next/image?url=https://assets.vercel.com/image/upload/front/insights/analytics_dashboard_dark_mode.png&w=3840&q=75&dpl=dpl_GtN6Q2CkjqfemFP3nsRnUW7eQLKb" alt="drawing" width="600px"/>

_It offer Speed insights too! You can read more [here](https://vercel.com/docs)._

### What's does Vercel Web Analytics do?

It offer insights of your web traffic, such as <span style="color:red">top pages</span>, top referrers, and <span style="color:red">demographics</span> such as countries , operating systems, and browser information.

### Do you need this?

Personally, I implemented it because it's just so cool to track your web traffic and see where your visitors are from!

And most importantly, it's <span style="color:red">free</span>! So why not?

### How to implement it?

Since I'm using Astro JS, I'll briefly explain how to implement it in Astro JS.

I am assuming that you have already created a Vercel account and have a project in Vercel.

**Step 1**: Enable analytics in your `astro.config.mjs` file.

<img src="https://pbs.twimg.com/media/F0xWY1lWAAYzNw8?format=jpg&name=4096x4096" alt="drawing" width="600px"/>

_Source: [Astro on X](https://twitter.com/astrodotbuild/status/1678817260037632002/photo/1)_

**Step 2**: Go to your project in Vercel and click on the **Analytics** tab!

**Step 3**: Select your **framework** and copy the code snippet! Make sure to redeploy your project after adding the code snippet!
<img src="/images/analyticsframework.png" alt="drawing" width="600px"/>
You're all set!

### Limitation: You can't track everything.

If the user has certain **blocker extension** activated, the analytics will not be tracked as the script.js that was sent to the client will be **blocked**.

<img src="/images/scriptblocked.png" alt="drawing" width="600px"/>

_You could track it by inspecting the network tab in your browser._

Correct me if I'm wrong, but <span style="color:red">Incognito mode</span> will be tracked too!

That's all from me today! I hope you find this useful!
