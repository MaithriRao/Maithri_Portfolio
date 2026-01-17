export interface Project {
    name: string;
    year: string;
    align: "left" | "right";
    image: string;
    link: string;
    slug: string;
}

export const projects: Project[] = [
    {
        name: "Sign Language Video Segmentation using Temporal Boundary Identification",
        year: "2025",
        align: "right",
        image: "/images/sign_portfolio.jpg",
        link: "https://github.com/MaithriRao/Thesis",
        slug: "sign-language-video-segmentation",
    },
    {
        name: "End-to-End MLOps Pipeline: Real-Time YouTube Sentiment Analysis via AWS CI/CD",
        year: "2025",
        align: "left",
        image: "/images/yt.jpg",
        link: "https://github.com/MaithriRao/YouTube-Sentiment-Analysis",
        slug: "end-to-end-mlops-pipeline",
    },
    {
        name: "RAG Medical Chatbot with LLMs, LangChain, Pinecone, Flask & AWS",
        year: "2025",
        align: "right",
        image: "/images/website-img-3.jpg",
        link: "https://github.com/MaithriRao/Medical-RAG-Chatbot-with-LLMs-LangChain-Pinecone-Flask-AWS",
        slug: "rag-medical-chatbot",
    },
];