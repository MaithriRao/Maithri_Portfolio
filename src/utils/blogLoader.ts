// Blog post loader utility to read actual blog posts from the public folder

export interface BlogPostMetaData {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  categories: string[];
  slug: string;
  readTime: string;
  content: string;
}

export interface BlogPostMeta extends BlogPostMetaData {
  id: number;
}

// Your actual blog posts metadata - just add new posts, IDs auto-generated!
const blogPostsRawData: Omit<BlogPostMetaData, 'content'>[] = [
    {
    title: "Soft Prompting- Explained Simply",
    date: "2025-11-23",
    summary: "Soft prompting uses trainable vectors to adapt large language models without manually crafting prompts for each task.",
    tags: ["AI", "LLMs","NLP", "PromptEngineering","PEFT"],
    categories: ["AI"],
    slug: "softPrompting",
    readTime: "7 min read"
  },
  {
    title: "AI Agents vs. Agentic AI",
    date: "2025-10-10",
    summary: "At its foundation, LangChain is built around six major components: Models, Prompts, Chains, Memory, Indexes, and Agents.",
    tags: ["AgenticAI", "AIagents", "AI"],
    categories: ["AI"],
    slug: "AI Agents vs. Agentic AI",
    readTime: "7 min read"
  },
  {
    title: "Is Your AI Content Sounding .... Identical?",
    date: "2025-10-25",
    summary: "Breaking down the architecture of Model Context Protocol with analogies and examples.",
    tags: ["GenerativeAI", "Diversity", "AIEthics", "LLM", "FutureOfWork", "ContentStrategy"],
    categories: ["AI"],
    slug: "AI-Content-Sounding-Identical",
    readTime: "7 min read"
  },
  {
    title: "Model Context Protocol: Why It Matters",
    date: "2025-09-07",
    summary: "The WHY behind Model Context Protocol and its significance in AI interactions. Understanding the standardized way for AI systems to communicate with external tools.",
    tags: ["AI", "OpenAI", "Function Calling", "Model Context Protocol"],
    categories: ["AI"],
    slug: "model-context-protocol-why",
    readTime: "6 min read"
  },
  {
    title: "What Are Messages in LLM Chat Interfaces",
    date: "2025-07-02",
    summary: "Understanding the role of messages in LLM chat interfaces, their structure, and how they facilitate communication between users and AI models.",
    tags: ["AI", "LLM", "Chat Interfaces", "Machine Learning"],
    categories: ["AI"],
    slug: "what-are-messages-in-LLM-chat-interfaces",
    readTime: "7 min read"
  }
];

// Auto-generate IDs and add empty content field
export const blogPostsData: BlogPostMeta[] = blogPostsRawData.map((post, index) => ({
  ...post,
  id: index + 1,
  content: ""
}));

// Function to load blog post content from markdown file
export const loadBlogPostContent = async (slug: string): Promise<string> => {
  try {
    const response = await fetch(`/blog-posts/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load blog post: ${slug}`);
    }
    const content = await response.text();
    
    // Remove frontmatter (content between --- and ---)
    const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');
    return contentWithoutFrontmatter;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return `# Error Loading Post\n\nSorry, we couldn't load the blog post "${slug}". Please try again later.`;
  }
};

// Get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPostMeta | undefined => {
  return blogPostsData.find(post => post.slug === slug);
};

// Get all blog posts
export const getAllBlogPosts = (): BlogPostMeta[] => {
  return blogPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
