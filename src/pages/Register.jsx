import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext1';

export default function Register() {
    const { signup } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await signup(
            formData.username,
            formData.email,
            formData.password
        );

        if (result.success) {
            navigate('/workspace');
        } else {
            setError(result.error);
        }
        setLoading(false);
    };
    return (
        <div className="min-h-screen bg-[#f9f0d6] flex items-center justify-center px-6">
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

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            required
                            className="w-full px-5 py-4 rounded-2xl border border-black/10 outline-none focus:ring-2 focus:ring-black/10"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="w-full px-5 py-4 rounded-2xl border border-black/10 outline-none focus:ring-2 focus:ring-black/10"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            required
                            className="w-full px-5 py-4 rounded-2xl border border-black/10 outline-none focus:ring-2 focus:ring-black/10"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                {/* FOOTER */}
                <p className="text-center text-sm text-black/50 mt-8">
                    Already have an account?
                    <Link to="/login" className="text-black font-medium cursor-pointer ml-1 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}