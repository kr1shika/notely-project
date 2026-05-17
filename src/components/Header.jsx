import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b border-black/5 bg-[#f9f0d6]/90 backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-3">

                        <h1 className="text-2xl font-bold tracking-tight">Notely</h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
                        <a href="#features" className="hover:text-black transition-colors">
                            Features
                        </a>
                        <a href="workspace" className="hover:text-black transition-colors">
                            <Link to="/workspace" className="logo-text">
                                Workspace
                            </Link>

                        </a>
                        <a href="#notes" className="hover:text-black transition-colors">
                            Notes
                        </a>
                        <a href="#about" className="hover:text-black transition-colors">
                            About
                        </a>
                    </nav>
                </div>

                <div className="flex items-center gap-3">


                    <button className="px-5 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md">
                        Log In                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;