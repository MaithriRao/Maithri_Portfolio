  // Blog post interface (without manual ID)
export interface BlogPostData {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  slug: string;
  image?: string; // Optional - will show category icon if not provided
  featured: boolean;
}

// Blog post interface with auto-generated ID
export interface BlogPost extends BlogPostData {
  id: number;
}

// Blog data - just add new posts at the top, IDs auto-generated!
const blogPostsData: BlogPostData[] = [
    {
    title: "Soft Prompting- Explained Simply",
    excerpt: "Soft prompting uses trainable vectors to adapt large language models without manually crafting prompts for each task.",
    date: "2025-11-23",
    readTime: "7 min read",
    tags: ["AI", "LLMs","NLP", "PromptEngineering","PEFT"],
    category: "Artificial Intelligence",
    slug: "softPrompting",
    image: "/blog-images/softTuning.png",
    featured: true
  },
  {
    title: "AI Agents vs. Agentic AI",
    excerpt: "At its foundation, LangChain is built around six major components: Models, Prompts, Chains, Memory, Indexes, and Agents.",
    date: "2025-10-10",
    readTime: "7 min read",
    tags: ["AgenticAI", "AIagents", "AI"],
    category: "Artificial Intelligence",
    slug: "AI Agents vs. Agentic AI",
    image: "/blog-images/DiffernceAgenticAIvsAIAgents.png",
    featured: true
  },
  {
    title: "Is Your AI Content Sounding .... Identical?",
    excerpt: "Breaking down the architecture of Model Context Protocol with analogies and examples.",
    date: "2025-10-25",
    readTime: "7 min read",
    tags: ["AI", "Anthropic", "JSON-RPC 2.0", "Model Context Protocol", "MCP"],
    category: "Artificial Intelligence",
    slug: "AI-Content-Sounding-Identical",
    image: "/blog-images/Aisounding.jpg",
    featured: true
  }
];

// Auto-generate IDs based on array position (1-indexed)
export const blogPosts: BlogPost[] = blogPostsData.map((post, index) => ({
  ...post,
  id: index + 1
}));

// Helper functions
export const getFeaturedPosts = (): BlogPost[] => blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category: string): BlogPost[] => blogPosts.filter(post => post.category === category);
export const getPostBySlug = (slug: string): BlogPost | undefined => blogPosts.find(post => post.slug === slug);
export const getLatestPosts = (count: number = 6): BlogPost[] => blogPosts.slice(0, count);

// Blog configuration
export const blogConfig = {
  baseUrl: "https://blog.maithri-rao.com", // Your blog domain
  author: "Kavu Maithri Rao",
  title: "Maithri's Tech Blog",
  description: "Technical insights on DevOps, AI, System Administration, and Modern Development",
  categories: ["DevOps", "System Administration", "Networking", "Artificial Intelligence", "Web Development"],
  social: {
    github: "https://github.com/MaithriRao/",
    linkedin: "https://www.linkedin.com/in/maithri-rao/"
  }
};
