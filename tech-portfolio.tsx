import React, { useState } from 'react';
import { Github, Linkedin, Mail, User, Briefcase, FileText, Send } from 'lucide-react';

const TechPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: {
      title: 'About Me',
      content: (
        <div className="text-center">
          <h1 className="text-4xl font-mono font-bold mb-4 text-white">Your Name</h1>
          <p className="text-xl text-gray-300 font-mono">Software Engineer | Digital Architect</p>
          <div className="mt-8">
            <p className="text-gray-400 font-mono max-w-2xl mx-auto">
              Passionate developer with a keen interest in creating innovative digital solutions. 
              Transforming complex problems into elegant, efficient code.
            </p>
          </div>
        </div>
      )
    },
    works: {
      title: 'My Projects',
      content: (
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-900">
            <h3 className="text-xl font-mono font-semibold text-white">Project 001</h3>
            <p className="text-gray-300 font-mono">
              Advanced web application | Technologies: React, Machine Learning
            </p>
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 font-mono underline"
            >
              View Project
            </a>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-900">
            <h3 className="text-xl font-mono font-semibold text-white">Project 002</h3>
            <p className="text-gray-300 font-mono">
              Data visualization platform | Technologies: D3.js, Python
            </p>
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 font-mono underline"
            >
              View Project
            </a>
          </div>
        </div>
      )
    },
    experience: {
      title: 'Professional Journey',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-xl font-mono font-semibold text-white">Senior Software Engineer</h3>
            <p className="text-gray-300 font-mono">Tech Innovations Inc. | 2021 - Present</p>
            <ul className="text-gray-400 font-mono list-disc pl-5 mt-2">
              <li>Developed scalable web applications</li>
              <li>Led cross-functional engineering teams</li>
              <li>Implemented cutting-edge technology solutions</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-xl font-mono font-semibold text-white">Software Developer</h3>
            <p className="text-gray-300 font-mono">Digital Solutions Ltd. | 2018 - 2021</p>
            <ul className="text-gray-400 font-mono list-disc pl-5 mt-2">
              <li>Designed responsive web interfaces</li>
              <li>Optimized application performance</li>
              <li>Collaborated on agile development projects</li>
            </ul>
          </div>
        </div>
      )
    },
    contact: {
      title: 'Get in Touch',
      content: (
        <div>
          <form className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg">
            <div className="mb-4">
              <label className="block mb-2 text-white font-mono">Name</label>
              <input 
                type="text" 
                className="w-full p-2 bg-black text-white border border-gray-700 rounded font-mono"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white font-mono">Email</label>
              <input 
                type="email" 
                className="w-full p-2 bg-black text-white border border-gray-700 rounded font-mono"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white font-mono">Message</label>
              <textarea 
                className="w-full p-2 bg-black text-white border border-gray-700 rounded font-mono"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              className="w-full bg-black text-white px-4 py-2 rounded border border-gray-700 hover:border-white transition-all font-mono"
            >
              Send Message
            </button>
          </form>
        </div>
      )
    }
  };

  const SocialLinks = () => {
    const socialItems = [
      { 
        icon: Github, 
        href: "https://github.com/yourusername",
        color: "hover:text-blue-500"
      },
      { 
        icon: Linkedin, 
        href: "https://linkedin.com/in/yourusername",
        color: "hover:text-blue-500"
      },
      { 
        icon: Mail, 
        href: "mailto:your.email@example.com",
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
          <div className="text-2xl font-mono font-bold text-white mb-4">Your Name</div>
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
          © 2024 Your Name. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default TechPortfolio;
