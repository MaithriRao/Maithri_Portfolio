import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar/NavbarMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import CVSection from "./components/cvSection/CVSection";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import BlogsSection from "./components/blogsSection/BlogsSection";
import FooterMain from "./components/footer/FooterMain";
import ProgressBarMain from "./components/progressbarSection/ProgressBarMain";
import BlogList from "./components/blog/BlogList";
import BlogPost from "./components/blog/BlogPost";
import ProjectDetail from "./components/projectsSection/ProjectDetail";
import Publications from "./components/publications/Publications"; 
import PublicationDetail from "./components/publications/PublicationDetail";
import "./i18n";

// Portfolio Layout Component - Blogs First Approach
const PortfolioLayout = () => (
  <>
    <ProgressBarMain />
    <NavbarMain />
    <BlogsSection />
    <AboutMeMain />
    <SkillsMain />
    <SubSkills />
    <ExperienceMain />
    <CVSection />
    <ProjectsMain />
    <FooterMain />
  </>
);

function App() {
  return (
    <Router>
      <main className="font-body">
        <Routes>
          <Route path="/" element={<PortfolioLayout />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/:slug" element={<PublicationDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
