---
title: "Soft Prompting- Explained Simply"
date: 2025-09-18
draft: false
summary: "An introduction to LangChain's six core components and how they solve the challenges of building LLM-powered applications."
readTime: "7 min read"
---


Designing task-specific prompts used to mean writing detailed instructions for every new task. These were **hard prompts** - human-readable text that had to be crafted manually. I think of it as, write a new recipe for every single dish, even though the dishes could be incredibly similar to each other. Like Ice coffee, Iced Americano, Iced Latte etc.

Today, we can use **soft prompts**, which are not written words but **trainable vectors** the model learns directly. They act like a cook’s internal intuition: invisible, but powerful enough to guide how the “dish” (the output) is produced. 

Soft prompting falls under parameter-efficient fine-tuning (PEFT), and several techniques are widely used.

---
## 1. Prompt Tuning
A set of learned vectors is added to the input. Only these vectors are trained; the model itself stays frozen.

![Soft Tuning](/blog-images/softtuning1.png)

## 2. Prefix Tuning
Trainable vectors are added to every layer of the model, not just the input. They influence how information flows through the entire network. 

![Prefix Tuning](/blog-images/softtuning2.png)

## 3. P-Tuning
Soft prompt tokens can be placed anywhere in the input. A small encoder (e.g., LSTM) learns how to optimize them. Anchor tokens help structure the task. Several characteristics define P-Tuning:

* **Prompt tokens can appear anywhere in the input, not only at the beginning.**
* **Only the input layer is modified; deeper layers remain untouched.**
* **The inclusion of anchor tokens provides structural markers that help the model interpret relationships within the task input.**

In the culinary analogy, P-Tuning equips the cook with learned internal cues positioned at strategic points in the cooking workflow, such as reminders activated when chopping, sautéing, or seasoning. These cues help the cook maintain consistency across diverse tasks.

![Soft Tuning](/blog-images/softtuning3.png)

## 4. Multitask Prompt Tuning (MPT)
**Multitask Prompt Tuning (MPT)** solves this by learning **one shared prompt** that works across different tasks. The process has two phases: **Source Training** and **Target Adaptation.**

Below is a simplified and practical explanation.

### 1. Source Training: Learning a Shared Prompt
In the source training phase, the model learns prompts for multiple tasks and compresses shared knowledge into one matrix.

### Step 1: Learn a Prompt for Each Task
For each source task t, the model learns a soft prompt: P_t

### Step 2: Decompose Into Task-Specific Vectors
Each prompt P_t is decomposed into lower-dimensional vectors, which are then combined to form a matrix: W_t

**Why do this?** Because learning several small vectors is easier, faster, and more stable than learning one large matrix.

**Analogy:** Instead of memorizing a full recipe, a cook learns smaller skills like cutting, seasoning, and timing. Together, these skills reconstruct the recipe.

### Step 3: Combine With the Shared Prompt Matrix "P"
The task-specific prompt is produced using a Hadamard (elementwise) product:

Prompt_t = P ⊙ Wt 

(⊙ means element-wise multiplication)

### Step 4: Multitask Training Updates Only the Shared Matrix
Across all tasks t = 1…N, training updates:

Shared matrix: P

Task-specific mats: W_t

Over time, P becomes a **universal prompt** containing general knowledge from all source tasks.

### 2. Target Adaptation: Fine-Tuning for a New Task
For a new target task, we do **not** start from scratch. Instead:

### Step 1: Reuse the Shared Prompt P
### Step 2: Create a New Low-Rank Matrix L
This small matrix contains only task-specific adjustments.

### Step 3: Form the Target Prompt
Prompt_target = P ⊙ L

During training:

* **P is frozen**
* **Only L is updated**

This gives fast, lightweight adaptation.

**Why?** Because the shared prompt P already contains most of the knowledge. L only needs to add small corrections.

**Analogy:** If the cook already knows general cooking, they only need a few extra hints to make a new dish.

## 5. Context-Aware Prompt Tuning (CPT)
Only context embeddings are updated to improve few-shot performance. The full model remains frozen. The approach integrates ideas from in-context learning, soft prompting, and adversarial optimization.

### Why It Matters
Soft prompting methods enable fast, cost-efficient adaptation of large language models, especially when dealing with many small, specialized tasks.

Credits: Google, PEFT Library from HuggingFace
