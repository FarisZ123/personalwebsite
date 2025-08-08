import "../App.css";
import SplitText from "../components/SplitText";
import AnimatedContent from "../components/AnimatedContent";
import { useRef, useEffect, useState } from "react";
import ScrollArrow from "../components/ScrollArrow";

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectsPageProps {
  setIsProjectsPage: (is: boolean) => void;
}

const ProjectsPage = ({ setIsProjectsPage }: ProjectsPageProps) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScrollDown = () => {
    const projectsTop = projectsRef.current?.offsetTop || 0;
    const stopPosition = projectsTop - window.innerHeight * 0.2;

    window.scrollTo({
      top: stopPosition,
      behavior: "smooth",
    });
    setIsScrolled(true);
  };

  const [triggerReset, setTriggerReset] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsScrolled(false);
    setTriggerReset((prev) => !prev); // Toggle to trigger reset
  };

  useEffect(() => {
    setIsProjectsPage(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
      setLastScrollY(currentScrollY);

      // Going down
      if (scrollDirection === "down" && currentScrollY > 50 && !isScrolled) {
        handleScrollDown();
      }

      // Going up - hide nav when near top
      if (scrollDirection === "up" && currentScrollY < 30) {
        handleScrollUp();
        setIsScrolled(false);
        document.querySelector(".nav")?.classList.remove("nav-visible");
      }

      // Show nav only when scrolled down past threshold
      if (currentScrollY > 100) {
        document.querySelector(".nav")?.classList.add("nav-visible");
      } else {
        document.querySelector(".nav")?.classList.remove("nav-visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, lastScrollY]);

  const projects: Project[] = [
    {
      title: "Where it all began... 💕",
      description:
        "I was genuinely really worried if this was good enough for a proposal 💀",
      link: "/proposal",
    },
    {
      title: "Love at First Sight...? 😳",
      description: "I didn't know I could feel so close to someone so far...",
      link: "/scrapbook",
    },
    {
      title: "Under Construction 🚧",
      description: "New project otw!!!",
      link: "/openwhen",
    },
  ];

  return (
    <div className="projects-page" style={{ background: "#f6e9d9" }}>
      {/* Hero section that shows/hides based on scroll */}
      <div className={`hero-section ${isScrolled ? "hidden" : ""}`}>
        <div className="container">
          <h1 className="home-title" style={{ color: "#4c643b" }}>
            <SplitText
              text="For you, Puteriku 💝"
              className="custom-split-text playfair-font"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>
          <ScrollArrow onClick={handleScrollDown} />
        </div>
      </div>
      <div className="projects-fullview" ref={projectsRef}>
        <div className="projects-grid">
          {projects.map((p, index) => (
            <AnimatedContent
              key={`${index}-${triggerReset}`}
              distance={60}
              direction="vertical"
              delay={index * 0.2} // stagger manually
              animateOpacity
              reset={triggerReset}
            >
              <div className="project-card">
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                {p.link && (
                  <a href={p.link} className="project-link">
                    View →
                  </a>
                )}
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
