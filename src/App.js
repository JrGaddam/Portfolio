import { Briefcase, FileText, Github, Linkedin, Mail, Send, User } from 'lucide-react';
import React, { useState } from 'react';
import profilepic from "./pic.jpg";

const TechPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: {
      title: 'About Me',
      content: (
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={profilepic} 
              alt="Jayanth Reddy Gaddam"
              className="w-44 h-44 rounded-full object-cover border-2 border-gray-700"
            />
          </div>
          <p className="text-xl text-gray-300 font-mono">Senior Computer Science Student</p>
          <div className="mt-8">
            <p className="text-gray-400 font-mono max-w-2xl mx-auto">
              Passionate Computer Science senior at the University of Texas at Arlington, 
              specializing in full-stack development, mobile applications, and system-level programming. 
              Experienced in creating innovative solutions across web, mobile, and systems domains.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-mono font-semibold text-white mb-4 text-left">Education 🎓</h3>
            <div className="text-gray-300 font-mono text-left">
              <h4 className="text-xl">University of Texas at Arlington</h4>
              <p className="text-gray-400">Bachelor of Science in Computer Science</p>
              <p className="text-gray-400">January 2023 - Present</p>
              <div className="mt-2 text-gray-300">
                <strong>Relevant Coursework:</strong>
                <p className="text-gray-400 mt-1">
                  Operating Systems, Data Structures & Algorithms, Machine Learning, 
                  Artificial Intelligence, Databases, Software Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    works: {
      title: 'My Projects',
      content: (
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-900">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-mono font-semibold text-white">USACE Lake Water Level App</h3>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/YourGitHubRepoLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://play.google.com/store/YourAppLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Send size={20} />
                </a>
              </div>
            </div>
            <p className="text-gray-300 font-mono">
              Cross-platform mobile app | Technologies: Flutter, Dart, Firebase
            </p>
            <p className="text-gray-400 font-mono mt-2">
              Led a team to develop a mobile app providing real-time water levels and flood alerts 
              for 38 USACE lakes. Implemented advanced features like home screen widget and robust security.
            </p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-900">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-mono font-semibold text-white">Doctoral Database Management System</h3>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/YourGitHubRepoLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://yourwebsitelink.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Send size={20} />
                </a>
              </div>
            </div>
            <p className="text-gray-300 font-mono">
              Full Stack Web Application | Technologies: Python (Flask), React, MySQL
            </p>
            <p className="text-gray-400 font-mono mt-2">
              Developed a comprehensive database application managing data for 500+ PhD students and faculty, 
              featuring 50+ RESTful APIs and an interactive front-end.
            </p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-900">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-mono font-semibold text-white">SPL Compiler</h3>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/YourGitHubRepoLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            <p className="text-gray-300 font-mono">
              Compiler Development | Technologies: Java, Scala, JFlex, CUP
            </p>
            <p className="text-gray-400 font-mono mt-2">
              Created a compiler from scratch for a Small Programming Language, 
              implementing advanced parsing and optimization techniques.
            </p>
          </div>
        </div>
      )
    },
    experience: {
      title: 'Professional Journey',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-mono font-semibold text-white mb-4">
              Open to Opportunities 🚀
            </h3>
            <p className="text-gray-300 font-mono max-w-2xl mx-auto mb-4">
              As a dedicated Computer Science student, I'm eagerly seeking my first professional opportunity 
              to apply my technical skills and passion for innovative software development. 💻
            </p>
            <div className="text-gray-400 font-mono space-y-2">
              <p>
                🌟 Actively looking for internships or entry-level positions in software engineering
              </p>
              <p>
                🤝 Excited to contribute to dynamic teams and learn from industry professionals
              </p>
              <p>
                💡 Strong foundation in full-stack development, mobile apps, and system-level programming
              </p>
              <p>
                🔍 Open to opportunities in web development, mobile development, and software engineering roles
              </p>
            </div>
            <div className="mt-6">
              <a 
                href="mailto:ascii8192@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-mono py-2 px-4 rounded-lg transition-colors"
              >
                Contact Me for Opportunities
              </a>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-xl font-mono font-semibold text-white">Key Technical Skills</h3>
            <div className="text-gray-400 font-mono mt-2">
              <p><strong>Languages:</strong> Python, SQL, Java, C++, C, HTML, CSS, JavaScript, Dart, Scala</p>
              <p><strong>Frameworks:</strong> Flask, React, Flutter, Java Swing</p>
              <p><strong>Tools:</strong> Git, Postman, Docker, Kubernetes</p>
              <p><strong>Cloud & Platforms:</strong> AWS, Google Cloud Platform, Firebase</p>
            </div>
          </div>
        </div>
      )
    },
    contact: {
      title: 'Get in Touch',
      content: (
        <div className="text-center">
          <p className="text-gray-300 font-mono max-w-2xl mx-auto mb-6">
            If you like my work and want to collaborate or discuss exciting opportunities, 
            feel free to reach out. I'm always open to connecting with fellow developers, 
            potential employers, or anyone interested in technology and innovation.
          </p>
          <a 
            href="mailto:ascii8192@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-mono py-2 px-4 rounded-lg transition-colors inline-block"
          >
            Send Me an Email
          </a>
        </div>
      )
    }
  };

  const SocialLinks = () => {
    const socialItems = [
      { 
        icon: Github, 
        href: "https://github.com/JrGaddam",
        color: "hover:text-blue-500"
      },
      { 
        icon: Linkedin, 
        href: "https://www.linkedin.com/in/jrgaddam/",
        color: "hover:text-blue-500"
      },
      { 
        icon: Mail, 
        href: "mailto:ascii8192@gmail.com",
        color: "hover:text-blue-500"
      }
    ];

    return (
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        {socialItems.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
              text-white ${item.color} 
              transition-all duration-300 
              hover:scale-125
              mb-4
            `}
          >
            <item.icon size={24} />
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Social Links Sidebar */}
      <SocialLinks />

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
        <div className="text-2xl font-mono font-bold" style={{color: "white"}}>Jayanth Reddy Gaddam</div>
          <div className="flex space-x-6">
            {Object.keys(sections).map((section) => (
              <button 
                key={section}
                onClick={() => setActiveSection(section)}
                className={`
                  flex items-center space-x-2 
                  transition-all duration-300 ease-in-out
                  transform hover:scale-110 
                  font-mono 
                  ${activeSection === section 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'}
                  focus:outline-none
                  no-underline
                `}
              >
                {section === 'about' && <User size={18} />}
                {section === 'works' && <Briefcase size={18} />}
                {section === 'experience' && <FileText size={18} />}
                {section === 'contact' && <Send size={18} />}
                <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pl-16">
        <section>
          <h1 className="text-3xl font-mono font-bold mb-6 text-white">{sections[activeSection].title}</h1>
          {sections[activeSection].content}
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-4 text-center">
        <p className="text-gray-400 font-mono">
          © 2024 Jayanth Reddy Gaddam | Arlington, TX 
        </p>
      </footer>
    </div>
  );
};

export default TechPortfolio;