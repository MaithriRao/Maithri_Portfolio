---
title: "Sign Language Video Segmentation"
year: "2025"
---


Designing task-specific prompts used to mean writing detailed instructions for every new task. These were **hard prompts** - human-readable text that had to be crafted manually. I think of it as, write a new recipe for every single dish, even though the dishes could be incredibly similar to each other. Like Ice coffee, Iced Americano, Iced Latte etc.

Today, we can use **soft prompts**, which are not written words but **trainable vectors** the model learns directly. They act like a cook’s internal intuition: invisible, but powerful enough to guide how the “dish” (the output) is produced. 

Soft prompting falls under parameter-efficient fine-tuning (PEFT), and several techniques are widely used.

---
## 1. Prompt Tuning
A set of learned vectors is added to the input. Only these vectors are trained; the model itself stays frozen.

![Soft Tuning](/blog-images/softtuning1.png)