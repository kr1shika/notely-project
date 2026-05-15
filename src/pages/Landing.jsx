export default function Landing() {
    return (
        <div className="min-h-screen bg-[#f7f6f3] text-black font-sans">
            {/* NAVBAR */}
            <header className="w-full border-b border-black/5 bg-[#f7f6f3]/90 backdrop-blur sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 border-2 border-black rounded-md flex items-center justify-center font-bold text-lg bg-white shadow-sm">
                                N
                            </div>
                            <h1 className="text-2xl font-bold tracking-tight">Notely</h1>
                        </div>

                        <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
                            <a href="#features" className="hover:text-black transition-colors">
                                Features
                            </a>
                            <a href="#workspace" className="hover:text-black transition-colors">
                                Workspace
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
                        <button className="px-4 py-2 text-sm rounded-lg hover:bg-black/5 transition-colors">
                            Log in
                        </button>

                        <button className="px-5 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md">
                            Try Notely Free
                        </button>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <p className="uppercase tracking-[0.25em] text-sm text-black/50 mb-5">
                        Organize your thoughts
                    </p>

                    <h2 className="text-5xl md:text-7xl leading-[0.95] font-black tracking-tight max-w-xl">
                        Notes for your ideas, projects & life.
                    </h2>

                    <p className="mt-8 text-lg text-black/60 max-w-lg leading-relaxed">
                        Write, plan, and stay organized in one clean workspace.
                        Inspired by the simplicity of modern note-taking tools.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-5 py-4 rounded-xl border border-black/10 bg-white outline-none focus:ring-2 focus:ring-black/20 w-full sm:w-80"
                        />

                        <button className="px-7 py-4 rounded-xl bg-black text-white font-medium hover:opacity-90 transition-opacity shadow-lg">
                            Sign up
                        </button>
                    </div>

                    <p className="mt-4 text-sm text-black/40">
                        Available for web, desktop & mobile.
                    </p>
                </div>

                {/* MOCKUP */}
                <div className="relative">
                    <div className="bg-white rounded-[2rem] border border-black/10 shadow-2xl overflow-hidden">
                        {/* WINDOW BAR */}
                        <div className="h-14 border-b border-black/5 flex items-center px-6 gap-2 bg-[#fafafa]">
                            <div className="w-3 h-3 rounded-full bg-red-300"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                            <div className="w-3 h-3 rounded-full bg-green-300"></div>
                        </div>

                        <div className="grid grid-cols-[240px_1fr] min-h-[520px]">
                            {/* SIDEBAR */}
                            <div className="border-r border-black/5 bg-[#fbfbfb] p-5">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold">
                                        N
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">My Workspace</h3>
                                        <p className="text-xs text-black/40">Personal</p>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <div className="px-4 py-3 rounded-xl bg-black text-white font-medium">
                                        Getting Started
                                    </div>

                                    <div className="px-4 py-3 rounded-xl hover:bg-black/5 transition-colors cursor-pointer">
                                        Daily Notes
                                    </div>

                                    <div className="px-4 py-3 rounded-xl hover:bg-black/5 transition-colors cursor-pointer">
                                        Design Ideas
                                    </div>

                                    <div className="px-4 py-3 rounded-xl hover:bg-black/5 transition-colors cursor-pointer">
                                        Reading List
                                    </div>

                                    <div className="px-4 py-3 rounded-xl hover:bg-black/5 transition-colors cursor-pointer">
                                        Project Tasks
                                    </div>
                                </div>
                            </div>

                            {/* EDITOR */}
                            <div className="p-10 overflow-hidden">
                                <div className="flex items-center justify-between mb-10">
                                    <div>
                                        <p className="text-sm text-black/40">Workspace / Notes</p>
                                        <h1 className="text-5xl font-black tracking-tight mt-2">
                                            Welcome to Notely
                                        </h1>
                                    </div>

                                    <button className="px-4 py-2 rounded-lg border border-black/10 hover:bg-black/5 transition-colors text-sm">
                                        Share
                                    </button>
                                </div>

                                <div className="space-y-6 text-black/70 leading-8 text-lg">
                                    <p>
                                        Notely helps you capture ideas, organize projects, and
                                        create a calm digital workspace.
                                    </p>

                                    <div className="bg-[#f6f6f6] border border-black/5 rounded-2xl p-6">
                                        <h3 className="text-black font-semibold mb-3 text-xl">
                                            ✨ Features
                                        </h3>

                                        <ul className="space-y-2 text-base">
                                            <li>• Rich text note editor</li>
                                            <li>• Beautiful minimal interface</li>
                                            <li>• Smart organization system</li>
                                            <li>• Fast search & filtering</li>
                                            <li>• Sync across devices</li>
                                        </ul>
                                    </div>

                                    <p>
                                        Build your second brain with clean writing spaces inspired
                                        by modern productivity apps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FLOATING CARD */}
                    <div className="absolute -bottom-10 -right-6 bg-white border border-black/10 rounded-2xl shadow-xl p-5 w-64 hidden md:block">
                        <p className="text-sm text-black/40 mb-2">Today</p>
                        <h3 className="font-bold text-xl mb-3">Quick Notes</h3>

                        <div className="space-y-3 text-sm">
                            <div className="p-3 rounded-xl bg-[#f5f5f5]">
                                Finish homepage design
                            </div>
                            <div className="p-3 rounded-xl bg-[#f5f5f5]">
                                Connect FastAPI backend
                            </div>
                            <div className="p-3 rounded-xl bg-[#f5f5f5]">
                                Push latest changes to GitHub
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section
                id="features"
                className="max-w-7xl mx-auto px-6 py-24"
            >
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="uppercase tracking-[0.25em] text-sm text-black/40 mb-5">
                        Features
                    </p>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        Built for clarity and focus.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Minimal Workspace',
                            text: 'A calm writing experience with distraction-free layouts.',
                        },
                        {
                            title: 'Smart Organization',
                            text: 'Structure notes with folders, tags, and categories.',
                        },
                        {
                            title: 'Fast & Responsive',
                            text: 'Designed with React and Tailwind for a smooth experience.',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm hover:-translate-y-1 transition-transform"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl mb-6">
                                {index + 1}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-black/60 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto bg-black text-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl">
                    <p className="uppercase tracking-[0.25em] text-sm text-white/50 mb-5">
                        Start writing
                    </p>

                    <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl mx-auto">
                        Your ideas deserve a beautiful workspace.
                    </h2>

                    <button className="mt-10 px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:opacity-90 transition-opacity shadow-lg">
                        Create Your Workspace
                    </button>
                </div>
            </section>
        </div>
    )
}
