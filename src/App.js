import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './App.css';

const TechPortfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  // Add missing contentLoaded state
  const [contentLoaded, setContentLoaded] = useState(false);
  
  // References to sections
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Initialize content loaded state
  useEffect(() => {
    setContentLoaded(true);
  }, []);
  
  // Handle scroll event for progress bar and section visibility
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Check section visibility
      const checkVisibility = (ref, sectionClass) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top <= (window.innerHeight * 0.75);
          
          if (isVisible) {
            ref.current.classList.add('section-visible');
            
            // Activate fade-in elements within the section
            const fadeElements = ref.current.querySelectorAll('.fade-in');
            fadeElements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, i * 100); // Staggered animation
            });
            
            // Add visible class to project content elements
            const projectContents = ref.current.querySelectorAll('.project-content');
            projectContents.forEach((content, i) => {
              setTimeout(() => {
                content.classList.add('visible');
              }, i * 200 + 100); // Delayed after parent is visible
            });
          }
        }
      };
      
      // Check all sections
      checkVisibility(projectsRef, 'projects-section');
      checkVisibility(skillsRef, 'skills-section');
      checkVisibility(contactRef, 'contact-section');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Social links component
  const SocialLinks = () => {
    const socialItems = [
      { 
        icon: Github, 
        href: "https://github.com/JrGaddam",
        color: "hover:text-accent"
      },
      { 
        icon: Linkedin, 
        href: "https://www.linkedin.com/in/jrgaddam/",
        color: "hover:text-accent"
      },
      { 
        icon: Mail, 
        href: "mailto:ascii.8192@gmail.com",
        color: "hover:text-accent"
      }
    ];

    return (
      <div className="social-sidebar">
        {socialItems.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`social-icon ${item.color}`}
          >
            <item.icon size={20} />
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="portfolio-container">
      {/* Progress Bar */}
      <div 
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    
      {/* Social Links Sidebar */}
      <SocialLinks />

      {/* Main Content - Single Page Layout */}
      <div>
        {/* Hero Section - Simplified */}
        <section ref={heroRef} className="hero-section" id="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, this is Jayanth Reddy Gaddam
            </h1>
            
            <div className="scroll-prompt">
              Scroll to explore my work
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section ref={projectsRef} className="section-container projects-section" id="projects">
          <h1 className="page-title">Selected Projects</h1>
          <div className="projects-container">
            {/* USACE Lake Water Level App */}
            <div className="project-item" style={{ '--delay': '0.1s' }}>
              <div className="project-title">USACE Lake Water Level App</div>
              <div className="project-tags">
                <span>Mobile</span>
                <span>Flutter</span>
                <span>Firebase</span>
              </div>
              <div className="project-desc">
                Real-time water levels and safety alerts for 38+ USACE lakes. Offline-first, geofencing, and 90% code reusability.
              </div>
              <div className="project-links">
                <a href="https://github.com/JrGaddam/USACE-Lake-App" target="_blank" rel="noopener noreferrer">Code</a>
                <a href="https://jrgaddam.com/lake-app" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            {/* Krypto Project */}
            <div className="project-item" style={{ '--delay': '0.2s' }}>
              <div className="project-title">Krypto</div>
              <div className="project-tags">
                <span>Web</span>
                <span>Flask</span>
                <span>Cryptography</span>
              </div>
              <div className="project-desc">
                Secure file encryption platform with 5+ algorithms, zero data leakage, and scalable cloud storage.
              </div>
              <div className="project-links">
                <a href="https://github.com/JrGaddam/Krypto" target="_blank" rel="noopener noreferrer">Code</a>
                <a href="https://jrgaddam.com/krypto" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            {/* SPL Compiler Project */}
            <div className="project-item" style={{ '--delay': '0.3s' }}>
              <div className="project-title">SPL Compiler</div>
              <div className="project-tags">
                <span>Compiler</span>
                <span>JFlex</span>
                <span>CUP</span>
              </div>
              <div className="project-desc">
                Custom compiler for a strongly-typed language. AST generation, type checking, and semantic analysis.
              </div>
              <div className="project-links">
                <a href="https://github.com/JrGaddam/SPL-Compiler" target="_blank" rel="noopener noreferrer">Code</a>
                <a href="https://jrgaddam.com/compiler" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            {/* Software Testing Project */}
            <div className="project-item" style={{ '--delay': '0.4s' }}>
              <div className="project-title">Software Testing for PrintTokens</div>
              <div className="project-tags">
                <span>Testing</span>
                <span>JUnit</span>
                <span>JaCoCo</span>
              </div>
              <div className="project-desc">
                94% code coverage, 100% branch coverage, and 22 bugs fixed via systematic testing and review.
              </div>
              <div className="project-links">
                <a href="https://github.com/JrGaddam/Software-Testing" target="_blank" rel="noopener noreferrer">Code</a>
                <a href="https://jrgaddam.com/testing" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section ref={skillsRef} className="section-container skills-section" id="skills">
          <div className={`content-section ${contentLoaded ? 'visible' : ''}`}>
            <h1 className="page-title">Skills & Expertise</h1>
            <div className="skills-container">
              <div className="skills-intro fade-in">
                <p>I focus on building secure, scalable, and user-focused applications across multiple domains.</p>
              </div>
              
              <div className="skills-visuals fade-in">
                <div className="skill-category-visual">
                  <h3>Development</h3>
                  <div className="skill-bubbles">
                    <div className="skill-bubble primary">Python</div>
                    <div className="skill-bubble secondary">Java</div>
                    <div className="skill-bubble primary">React</div>
                    <div className="skill-bubble secondary">Flutter</div>
                    <div className="skill-bubble primary">Flask</div>
                  </div>
                </div>
                
                <div className="skill-category-visual">
                  <h3>Backend & Cloud</h3>
                  <div className="skill-bubbles">
                    <div className="skill-bubble secondary">Firebase</div>
                    <div className="skill-bubble primary">Supabase</div>
                    <div className="skill-bubble secondary">PostgreSQL</div>
                    <div className="skill-bubble primary">Cloudflare R2</div>
                  </div>
                </div>
                
                <div className="skill-category-visual">
                  <h3>Security & Testing</h3>
                  <div className="skill-bubbles">
                    <div className="skill-bubble primary">Cryptography</div>
                    <div className="skill-bubble secondary">JUnit</div>
                    <div className="skill-bubble primary">JaCoCo</div>
                    <div className="skill-bubble secondary">RBAC</div>
                  </div>
                </div>
              </div>
              
              <div className="looking-for-opportunities fade-in">
                <h3>Open to Opportunities</h3>
                <p>
                  Currently seeking roles where I can leverage my technical skills in full-stack development, 
                  mobile applications, and system architecture to create meaningful solutions.
                </p>
                <a href="mailto:ascii.8192@gmail.com" className="cta-button">
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section ref={contactRef} className="section-container contact-section" id="contact">
          <div className={`content-section ${contentLoaded ? 'visible' : ''}`}>
            <h1 className="page-title">Connect</h1>
            <div className="contact-container fade-in">
              <div className="contact-message">
                <p>
                  Have a project in mind or want to discuss potential opportunities? 
                  I'm always open to connecting with fellow developers and innovative teams.
                </p>
              </div>
              
              <div className="contact-methods">
                <a href="mailto:ascii.8192@gmail.com" className="contact-method email">
                  <Mail size={24} />
                  <div>
                    <h3>Email</h3>
                    <span>ascii.8192@gmail.com</span>
                  </div>
                </a>
                
                <a href="https://github.com/JrGaddam" target="_blank" rel="noopener noreferrer" className="contact-method github">
                  <Github size={24} />
                  <div>
                    <h3>GitHub</h3>
                    <span>@JrGaddam</span>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/jrgaddam/" target="_blank" rel="noopener noreferrer" className="contact-method linkedin">
                  <Linkedin size={24} />
                  <div>
                    <h3>LinkedIn</h3>
                    <span>Connect with me</span>
                  </div>
                </a>
              </div>
              
              <div className="location-detail">
                <span>Based in Arlington, TX</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2024 Jayanth Reddy Gaddam | <a href="https://jrgaddam.com" className="footer-link">jrgaddam.com</a>
        </p>
      </footer>
    </div>
  );
};

export default TechPortfolio;