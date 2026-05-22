export default function Register() {
    return (
        <div className="min-h-screen bg-[#f7f6f3] flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-white rounded-[2rem] shadow-xl border border-black/5 p-10">

                {/* LOGO */}
                <div className="flex flex-col items-center text-center mb-10">


                    <h1 className="text-4xl font-black tracking-tight">
                        Create Account
                    </h1>

                    <p className="text-black/50 mt-3 leading-relaxed">
                        Start building your second brain with Notely.
                    </p>
                </div>

                {/* FORM */}
                <form className="space-y-5">

                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-5 py-4 rounded-2xl border border-black/10 outline-none focus:ring-2 focus:ring-black/10"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-5 py-4 rounded-2xl border border-black/10 outline-none focus:ring-2 focus:ring-black/10"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-5 py-4 rounded-2xl border border-black/10 outline-none focus:ring-2 focus:ring-black/10"
                        />
                    </div>

                    <button className="w-full py-4 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition-opacity shadow-lg">
                        Create Account
                    </button>
                </form>

                {/* FOOTER */}
                <p className="text-center text-sm text-black/50 mt-8">
                    Already have an account?
                    <span className="text-black font-medium cursor-pointer ml-1">
                        Log in
                    </span>
                </p>
            </div>
        </div>
    )
}