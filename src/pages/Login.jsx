import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext1';

export default function Login() {
  const auth = useAuth(); 

  if (!auth) {
    return (
      <div className="min-h-screen bg-[#f9f0d6] flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl">
          <h2 className="text-red-600">Configuration Error</h2>
          <p>Auth context not available. Please check your app setup.</p>
        </div>
      </div>
    );
  }

  const { login } = auth; 

  const [formData, setFormData] = useState({
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

    const result = await login(formData.email, formData.password);

    if (result.success) {
      console.log('About to navigate to /workspace');
      navigate('/workspace');
      console.log('Navigate called');
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
            Welcome Back
          </h1>
          <p className="text-black/50 mt-3 leading-relaxed">
            Log in to continue writing and organizing your notes.
          </p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
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
              placeholder="Enter your password"
              required
              className="w-full px-5 py-4 rounded-2xl border border-black/10 outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-black/50 mt-8">
          Don't have an account?
          <Link to="/register" className="text-black font-medium cursor-pointer ml-1 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}