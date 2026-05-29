export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-black/50">
        <p> 2026 Notely by Kri</p>

        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <a href="/" className="hover:text-black transition-colors">
            Home
          </a>
          <a href="/workspace" className="hover:text-black transition-colors">
            Workspace
          </a>
          <a href="/login" className="hover:text-black transition-colors">
            Login
          </a>
        </div>
      </div>
    </footer>
  );
}