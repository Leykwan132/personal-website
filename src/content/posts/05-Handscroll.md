---
title: "Is scrolling webpages with your hand practical?"
publishedAt: 2023-09-18
description: "We are here to investigate if scrolling webpages with your hand is practical! Let's find out!"
slug: "handfree"
isPublish: true
---

Have you ever felt tired of scrolling webpages with your hand? I did. So I decided to check out if there is any cool way of doing it...

And how lucky I am to find out this...

### **Handsfree - scroll your webpages handsfree!**

Handsfree is all about scrolling webpages with your hand using `computer vision` via your webcam.

<img src="/images/scrollingsample.gif" alt="drawing" width="600px"/>

Try it out _[here](https://handsfreejs.netlify.app/)_!

### **How does this work?**

<img src="/images/google.png" alt="drawing" width="600px"/>

The developer utilize `Hand pose detection model` provided by `Google`, more specifically,[tensorflow.js](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection) library to detect any hand poses efficiently.

The rest of the algorithm is still a mystery to me, but the entire project is open source, so feel free to check it out [here](https://github.com/ozramos/handsfree/blob/master/src/handsfree.js)

After trying out for a while, I came to some conclusions...

### **Takeaway**

### **1. Inconsistent scrolling**

<img src="/images/limitation1.gif" alt="drawing" width="600px"/>

_Scenario 1: inconsistent hand placement_

The precision of the hand pose detection model is not perfect since it depend only on the webcam.

If your hand is `slightly` off, the scrolling will be `inconsistent`.

What if you are in a dark room? What if you are wearing a glove? What if you are using a low quality webcam? It will be even worse.

### **2. Fatigue**

<img src="/images/pinchthumb.png" alt="drawing" width="600px"/>

_Scenario 2: thumb pinching_

The current implementation of the handsfree scrolling require you to `pinch your thumb`, which is how [Apple Vision Pro](https://www.apple.com/apple-vision-pro/) is implemented.

However, the most `critical` issue is to make sure the scrolling work well, the pinching has to be in the `correct` position, which is `uncomfortable` for long term usage.

### **My takeaway**

With only 1 source of input, it's hard to make the handsfree scrolling experience `consistent` and `comfortable`.

But for fun, it's definitely worth a try!

`Apple Vision Pro` handsfree scrolling worked flawlessly with `~10` sensors on the headset and because they're Apple...
<img src="/images/apv.png" alt="drawing" width="600px"/>

That's all from me today! I hope you find this useful!
