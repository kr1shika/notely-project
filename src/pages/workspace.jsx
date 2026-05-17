export default function NotesWorkspace() {
    return (
        <div className="h-screen bg-[#f7f6f3] flex overflow-hidden text-black">
            {/* SIDEBAR */}
            <aside className="w-[290px] border-r border-black/5 bg-[#fbfbfb] flex flex-col">

                {/* TOP */}
                <div className="p-4 border-b border-black/5">
                    <div className="flex items-center gap-3">


                        <div>
                            <h2 className="font-semibold text-lg">Notely</h2>
                        </div>
                    </div>
                </div>
                {/* SEARCH */}
                <div className="p-4">
                    <input
                        type="text"
                        placeholder="Search notes..."
                        className="w-full px-4 py-3 rounded-xl bg-black/5 outline-none focus:ring-2 focus:ring-black/10"
                    />
                </div>

                {/* ACTIONS */}
                <div className="px-4 pb-4">
                    <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
                        + New Page
                    </button>
                </div>

                {/* NOTES LIST */}
                <div className="flex-1 overflow-y-auto px-3 pb-6">
                    <p className="px-3 mb-3 text-xs uppercase tracking-[0.2em] text-black/40">
                        Pages
                    </p>

                    <div className="space-y-1">
                        {[
                            "Getting Started",
                            "Daily Journal",
                            "Project Ideas",
                            "Reading List",
                            "Design Inspiration",
                            "Meeting Notes",
                        ].map((note, index) => (
                            <button
                                key={index}
                                className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${index === 0
                                    ? "bg-black text-white"
                                    : "hover:bg-black/5 text-black/70"
                                    }`}
                            >
                                📄 {note}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* MAIN */}
            <main className="flex-1 overflow-y-auto">

                {/* TOPBAR */}
                <div className="h-16 border-b border-black/5 flex items-center justify-between px-8 bg-[#f7f6f3]/80 backdrop-blur sticky top-0 z-20">
                    <div className="flex items-center gap-3 text-sm text-black/50">
                        <span>Workspace</span>
                        <span>/</span>
                        <span className="text-black font-medium">
                            Getting Started
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 rounded-lg hover:bg-black/5 transition-colors text-sm">
                            Share
                        </button>

                        <button className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:opacity-90 transition-opacity">
                            Save
                        </button>
                    </div>
                </div>

                {/* EDITOR */}
                <div className="max-w-4xl mx-auto px-8 py-16">

                    {/* COVER */}
                    <div className="h-64 rounded-[2rem] bg-gradient-to-br from-zinc-200 to-zinc-100 mb-10 shadow-inner"></div>

                    {/* TITLE */}
                    <input
                        type="text"
                        defaultValue="Getting Started"
                        className="w-full bg-transparent text-6xl font-black tracking-tight outline-none placeholder:text-black/20"
                    />

                    {/* META */}
                    <div className="flex items-center gap-6 mt-6 text-sm text-black/40">
                        <p>Edited 2 mins ago</p>
                        <p>5 min read</p>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-14 space-y-8 text-lg leading-9 text-black/75">
                        <textarea
                            className="w-full min-h-[180px] bg-transparent outline-none resize-none placeholder:text-black/30"
                            placeholder="Start writing..."
                            defaultValue={`Welcome to Notely.

This is your personal workspace where you can write notes, organize projects, and store ideas.`}
                        />



                        <textarea
                            className="w-full min-h-[300px] bg-transparent outline-none resize-none placeholder:text-black/30"
                            placeholder="Continue writing..."
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}