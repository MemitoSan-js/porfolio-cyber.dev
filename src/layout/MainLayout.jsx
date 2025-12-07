import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <Sidebar />
      <main className="w-full p-6 md:ml-64 md:p-12 relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
