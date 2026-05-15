import image1 from '../assets/land.png';
import Header from '../components/Header';
export default function Landing() {
    return (
        <div className="min-h-screen bg-[#f9f0d6] text-black font-sans">
            {/* NAVBAR */}
            <Header />

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


                </div>

                {/* MOCKUP */}
                <div className="relative">
                    <img src={image1} alt="image" />

                </div>
            </section>

            {/* FEATURES */}
            <section
                id="features"
                className="max-w-7xl mx-auto px-6 py-8"
            >
                <div className="text-center max-w-3xl mx-auto mb-20">


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
