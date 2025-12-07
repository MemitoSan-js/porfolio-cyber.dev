import { useState, useEffect } from 'react';

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Sistema Nissan - Producción Automotriz",
      description: "Gestión de líneas, sensores y máquinas en tiempo real",
      features: [
        "Dashboard con actualización en tiempo real",
        "Panel de máquinas y sensores IoT",
        "Reglas automáticas y notificaciones",
        "Monitoreo de estado de producción",
        "Análisis de rendimiento y métricas"
      ],
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "MYSQL", icon: "🔷" }
      ],
      images: [
        "/src/img/nissan1.png",
        "/src/img/nissan2.png",
        "/src/img/nissan3.png"
      ],
      github: "https://github.com/MemitoSan-js/nissan-production",
      demo: "https://demo-nissan.com",
      docs: "https://docs-nissan.com"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === projects[0].images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [projects]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === projects[0].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? projects[0].images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-start max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8 w-full">
        <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-300/30 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
          <div className="text-cyan-400 font-mono text-xs mb-4 tracking-wider">$ ls projects/</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-200">
              Proyectos
            </span>
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-cyan-300 to-transparent mb-6"></div>
          <p className="text-slate-200 text-base md:text-lg leading-relaxed">
            Proyectos destacados que demuestran mis habilidades en desarrollo full-stack y soluciones innovadoras.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-800/40 backdrop-blur-md border border-cyan-300/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:border-cyan-300/60 hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-all duration-500"
          >
            <div className="flex flex-col md:grid md:grid-cols-5 gap-0">
              {/* Image Carousel Section */}
              <div className="relative h-80 md:h-auto md:col-span-3 bg-slate-900/50 overflow-hidden group/carousel">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                
                {/* Images */}
                <div className="relative w-full h-full">
                  {project.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                        index === currentImageIndex 
                          ? 'opacity-90 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 backdrop-blur-sm border border-cyan-300/30 rounded-lg opacity-0 group-hover/carousel:opacity-100 hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 backdrop-blur-sm border border-cyan-300/30 rounded-lg opacity-0 group-hover/carousel:opacity-100 hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-cyan-400 w-8' 
                          : 'bg-cyan-300/30 hover:bg-cyan-300/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Counter Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-slate-900/80 backdrop-blur-sm border border-cyan-300/30 rounded-lg px-3 py-1">
                    <p className="text-cyan-300 text-xs font-mono">
                      {currentImageIndex + 1} / {project.images.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 md:col-span-2 flex flex-col justify-between">
                {/* Header with Icon */}
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg">
                      <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-slate-400 text-sm">{project.description}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-cyan-300 font-mono text-xs mb-3 tracking-wider">// Tecnologías:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/40 border border-cyan-300/30 rounded-lg text-sm hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          <span>{tech.icon}</span>
                          <span className="text-slate-200">{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-purple-300 font-mono text-xs mb-3 tracking-wider">Funciones:</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-cyan-400 mt-1">–</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-400/10 border border-purple-400/30 rounded-lg text-purple-300 hover:bg-purple-400/20 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-300 hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </a>
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/40 border border-slate-600/50 rounded-lg text-slate-300 hover:bg-slate-700/60 hover:border-slate-500 hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Documentación
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-300/10 blur-3xl rounded-full pointer-events-none"></div>
    </div>
  );
}