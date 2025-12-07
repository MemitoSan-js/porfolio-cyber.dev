import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón móvil */}
      <button
        className="md:hidden p-3 text-cyan-400 bg-slate-800/80 backdrop-blur-md fixed top-4 left-4 z-50 border border-cyan-300/50 rounded-lg hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"
        onClick={() => setOpen(!open)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay para cerrar en móvil */}
      {open && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar - Contenedor flotante transparente */}
      <aside
        className={`fixed top-4 -left-72 md:left-6 md:top-6 h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] w-64 bg-slate-800/40 backdrop-blur-xl border border-cyan-300/30 rounded-2xl text-white p-6 z-40 transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.2)]
        ${open ? "left-4" : "-left-72 md:left-6"}`}
      >
        <div className="mb-12 mt-12 md:mt-0">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
            Guillermo.dev
          </h1>
          <div className="h-px w-20 bg-gradient-to-r from-cyan-400/70 to-transparent"></div>
        </div>

        <nav className="flex flex-col gap-3">
          <Link 
            to="/" 
            className="group relative flex items-center gap-3 px-4 py-3.5 text-slate-200 hover:text-white transition-all duration-300 rounded-lg overflow-hidden hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/60 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
            <span className="relative text-cyan-300/70 group-hover:text-cyan-300 text-sm z-10 transition-transform duration-300 group-hover:translate-x-1">▸</span>
            <span className="relative text-base z-10 transition-transform duration-300 group-hover:translate-x-1">Inicio</span>
          </Link>
          <Link 
            to="/about" 
            className="group relative flex items-center gap-3 px-4 py-3.5 text-slate-200 hover:text-white transition-all duration-300 rounded-lg overflow-hidden hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/60 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
            <span className="relative text-cyan-300/70 group-hover:text-cyan-300 text-sm z-10 transition-transform duration-300 group-hover:translate-x-1">▸</span>
            <span className="relative text-base z-10 transition-transform duration-300 group-hover:translate-x-1">Sobre mí</span>
          </Link>
          <Link 
            to="/projects" 
            className="group relative flex items-center gap-3 px-4 py-3.5 text-slate-200 hover:text-white transition-all duration-300 rounded-lg overflow-hidden hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/60 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
            <span className="relative text-cyan-300/70 group-hover:text-cyan-300 text-sm z-10 transition-transform duration-300 group-hover:translate-x-1">▸</span>
            <span className="relative text-base z-10 transition-transform duration-300 group-hover:translate-x-1">Proyectos</span>
          </Link>
          <Link 
            to="/contact" 
            className="group relative flex items-center gap-3 px-4 py-3.5 text-slate-200 hover:text-white transition-all duration-300 rounded-lg overflow-hidden hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/60 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
            <span className="relative text-cyan-300/70 group-hover:text-cyan-300 text-sm z-10 transition-transform duration-300 group-hover:translate-x-1">▸</span>
            <span className="relative text-base z-10 transition-transform duration-300 group-hover:translate-x-1">Contacto</span>
          </Link>
        </nav>

        {/* Decoración inferior */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-3"></div>
          <p className="text-xs text-cyan-400/70 text-center font-mono"> © Gmemo.xco 2025</p>
        </div>
      </aside>
    </>
  );
}
