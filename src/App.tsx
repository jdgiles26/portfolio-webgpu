import { useState } from 'react';
import { MonitorPlay, Cpu, Box, ExternalLink, Activity, User, GitBranch, Code, Video, Image, Mic, Layers, Server, Shield, Brain } from 'lucide-react';
import './App.css';

// Define the Space interface
interface Space {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: React.ElementType;
  color: string;
}

// Portfolio Data
const SPACES: Space[] = [
  {
    id: 'about',
    title: 'About Joshua',
    description: 'Portfolio & GitHub Projects',
    url: '',
    tags: ['Portfolio', 'Profile'],
    icon: User,
    color: '#6366f1',
  },
  {
    id: 'lfm',
    title: 'LFM2.5-VL-450M WebGPU',
    description: 'Live video captioning and object tracking in your browser.',
    url: '/lfm2.5-space/index.html',
    tags: ['Computer Vision', 'Real-time', 'WebGPU'],
    icon: MonitorPlay,
    color: '#f43f5e',
  },
  {
    id: 'deepseek',
    title: 'DeepSeek-R1 WebGPU',
    description: 'DeepSeek-R1 running locally in your browser.',
    url: '/deepseek-space/index.html',
    tags: ['LLM', 'Reasoning', 'WebGPU'],
    icon: Brain,
    color: '#3b82f6',
  },
  {
    id: 'phi3',
    title: 'Phi-3.5 LLM',
    description: 'Microsoft Phi-3.5 instruction model running purely on device.',
    url: '/phi3-space/index.html',
    tags: ['LLM', 'NLP', 'WebGPU'],
    icon: Activity,
    color: '#10b981',
  },
  {
    id: 'smollm',
    title: 'SmolLM WebGPU',
    description: 'Compact language model for local text generation.',
    url: '/smollm-space/index.html',
    tags: ['LLM', 'Fast', 'WebGPU'],
    icon: Code,
    color: '#eab308',
  },
  {
    id: 'florence',
    title: 'Florence-2 WebGPU',
    description: 'Vision foundation model for captioning and detection.',
    url: '/florence-space/index.html',
    tags: ['Vision', 'Captioning', 'WebGPU'],
    icon: Image,
    color: '#ec4899',
  },
  {
    id: 'whisper',
    title: 'Whisper Web',
    description: 'Real-time speech recognition in your browser.',
    url: '/whisper-space/index.html',
    tags: ['Audio', 'Speech', 'WebGPU'],
    icon: Mic,
    color: '#a855f7',
  },
  {
    id: 'sam',
    title: 'Segment Anything',
    description: 'Meta\'s Segment Anything Model (SAM) running locally.',
    url: '/sam-space/index.html',
    tags: ['Vision', 'Segmentation', 'WebGPU'],
    icon: Layers,
    color: '#ec4899',
  },
  {
    id: 'clip',
    title: 'CLIP Image Classification',
    description: 'Zero-shot image classification running locally in your browser.',
    url: '/clip-space/index.html',
    tags: ['Vision', 'Classification', 'WebGPU'],
    icon: Box,
    color: '#06b6d4',
  },
  {
    id: 'embed',
    title: 'Embedding Benchmark',
    description: 'Compare text embedding performance across runtimes.',
    url: '/embed-space/index.html',
    tags: ['Benchmark', 'Embeddings', 'WebGPU'],
    icon: Server,
    color: '#f97316',
  },
  {
    id: 'janus',
    title: 'Janus Pro WebGPU',
    description: 'High-performance interactive visual models.',
    url: '/janus-space/index.html',
    tags: ['Vision', 'Interactive', 'WebGPU'],
    icon: Shield,
    color: '#84cc16',
  },
  {
    id: 'gemma',
    title: 'Gemma WebGPU',
    description: 'Google Gemma multimodal AI running locally.',
    url: '/gemma-space/index.html',
    tags: ['LLM', 'Multimodal', 'WebGPU'],
    icon: Video,
    color: '#14b8a6',
  }
];

const GITHUB_PROJECTS = [
  {
    name: "JDGiles Open Source Contributions",
    desc: "Various tooling and utilities for developer productivity. Highlighting my passion as an Open Source Enthusiast.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Cloud & Microservices Architecture",
    desc: "Scalable backend systems built with Node.js, Python, Docker, and Kubernetes on AWS.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Modern Frontend Web Apps",
    desc: "Beautiful, interactive interfaces using React, WebGPU, and modern CSS frameworks.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  }
];

function AboutProfile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % GITHUB_PROJECTS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + GITHUB_PROJECTS.length) % GITHUB_PROJECTS.length);

  return (
    <div className="about-profile">
      <div className="profile-header glass">
        <img src="https://avatars.githubusercontent.com/u/109544443?v=4" alt="Joshua Giles" className="profile-img" />
        <div className="profile-info">
          <h1>Joshua D. Giles</h1>
          <h2 className="text-gradient">Senior Software Engineer | Full-Stack Developer</h2>
          <p>
            Experienced software engineer with 6+ years crafting scalable solutions. Expertise in React, Node.js, AWS, and modern web technologies. IU Bloomington Alum and US ARMY Veteran. Lover of my Siberian Husky and Frenchie (Kodak and Amethyst).
          </p>
          <div className="skills-container">
            {['React', 'Node.js', 'TypeScript', 'AWS', 'Python', 'Docker', 'Kubernetes'].map(skill => (
              <span key={skill} className="badge">{skill}</span>
            ))}
          </div>
          <a href="https://github.com/jdgiles26" target="_blank" rel="noopener noreferrer" className="badge primary profile-link">
            <GitBranch size={16} /> @jdgiles26
          </a>
        </div>
      </div>
      
      <div className="carousel-section glass">
        <h3>Featured GitHub Projects & Themes</h3>
        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>&#8249;</button>
          
          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {GITHUB_PROJECTS.map((proj, idx) => (
                <div key={idx} className="carousel-slide">
                  <div className="slide-content" style={{ backgroundImage: `url(${proj.image})` }}>
                    <div className="slide-overlay">
                      <h4>{proj.name}</h4>
                      <p>{proj.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>&#8250;</button>
        </div>
        <div className="carousel-indicators">
          {GITHUB_PROJECTS.map((_, idx) => (
             <button 
               key={idx} 
               className={`indicator ${idx === currentIndex ? 'active' : ''}`}
               onClick={() => setCurrentIndex(idx)}
             />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeSpace, setActiveSpace] = useState<Space>(SPACES[0]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSidebarClick = (space: Space) => {
    setIsLoading(true);
    setActiveSpace(space);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header glass">
        <div className="logo-container">
          <Cpu size={28} className="text-gradient" />
          <span className="logo-text">
            WebGPU <span className="text-gradient">Portfolio</span>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Sidebar / Space Selector */}
        <aside className="sidebar">
          <div>
            <h3 className="section-title">My WebGPU Spaces</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Select a project below to interact with it directly in your browser.
            </p>
          </div>
          
          <div className="spaces-list">
            {SPACES.map((space) => {
              const Icon = space.icon;
              const isActive = activeSpace.id === space.id;
              return (
                <div 
                  key={space.id} 
                  className={`space-card glass ${isActive ? 'active' : ''}`}
                  style={isActive ? { borderColor: space.color, boxShadow: `0 0 15px ${space.color}44` } : {}}
                  onClick={() => handleSidebarClick(space)}
                >
                  <div className="space-title">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Icon size={20} color={isActive ? space.color : 'var(--text-main)'} />
                      {space.title}
                    </div>
                  </div>
                  <p className="space-desc">{space.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    {space.tags.map(tag => (
                      <span key={tag} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Space Viewer */}
        <section className="viewer-container glass">
          <div className="viewer-header">
            <div className="viewer-title-group">
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: activeSpace.color }} />
                {activeSpace.title}
              </h2>
              <div className="viewer-meta">
                <span>{activeSpace.id === 'about' ? 'Joshua D. Giles Portfolio' : 'Embedded WebGPU Experience'}</span>
              </div>
            </div>
            {activeSpace.id !== 'about' && (
              <a 
                href={activeSpace.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="badge primary"
                style={{ textDecoration: 'none', padding: '8px 16px', fontSize: '0.875rem' }}
              >
                Open Original <ExternalLink size={16} />
              </a>
            )}
          </div>
          
          <div className="iframe-wrapper">
            {activeSpace.id === 'about' ? (
              <AboutProfile />
            ) : (
              <>
                {isLoading && (
                  <div className="loading-overlay">
                    <div className="spinner"></div>
                    <p>Booting up WebGPU environment...</p>
                  </div>
                )}
                <iframe 
                  src={activeSpace.url}
                  className="space-iframe"
                  allow="camera; microphone; webgpu; display-capture"
                  title={activeSpace.title}
                  onLoad={() => setIsLoading(false)}
                />
              </>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
