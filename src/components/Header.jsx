import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="w-full border-b border-black/5 bg-[#f9f0d6]/90 backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    {/* Logo - Links to homepage */}
                    <Link to="/" className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                            Notely
                        </h1>
                    </Link>

                    {/* Navigation Menu */}
                    <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
                        <a href="#features" className="hover:text-black transition-colors">
                            Features
                        </a>
                        {user && (
                            <Link to="/workspace" className="hover:text-black transition-colors">
                                Workspace
                            </Link>
                        )}
                        <a href="#notes" className="hover:text-black transition-colors">
                            Notes
                        </a>
                        <a href="#about" className="hover:text-black transition-colors">
                            About
                        </a>
                    </nav>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    {user ? (
                        <>
                            <span className="text-sm text-black/60 hidden md:block">
                                Welcome, {user.username}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="px-5 py-2.5 rounded-lg border border-black/20 text-black text-sm font-medium hover:bg-black/5 transition-opacity"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-5 py-2.5 rounded-lg border border-black/20 text-black text-sm font-medium hover:bg-black/5 transition-opacity"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/register"
                                className="px-5 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile menu button (if you want to add mobile menu later) */}
            <button
                className="md:hidden absolute right-6 top-5"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile menu (optional) */}
            {isOpen && (
                <div className="md:hidden bg-[#f9f0d6] border-t border-black/5 px-6 py-4">
                    <nav className="flex flex-col gap-4 text-sm text-black/70">
                        <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-black transition-colors">
                            Features
                        </a>
                        {user && (
                            <Link to="/workspace" onClick={() => setIsOpen(false)} className="hover:text-black transition-colors">
                                Workspace
                            </Link>
                        )}
                        <a href="#notes" onClick={() => setIsOpen(false)} className="hover:text-black transition-colors">
                            Notes
                        </a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-black transition-colors">
                            About
                        </a>
                        {!user && (
                            <>
                                <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-black transition-colors">
                                    Log In
                                </Link>
                                <Link to="/register" onClick={() => setIsOpen(false)} className="hover:text-black transition-colors font-medium">
                                    Sign Up
                                </Link>
                            </>
                        )}
                        {user && (
                            <button onClick={() => {
                                handleLogout();
                                setIsOpen(false);
                            }} className="text-left hover:text-black transition-colors">
                                Log Out
                            </button>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;