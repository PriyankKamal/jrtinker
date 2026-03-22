import { Link } from "react-router-dom";
import { UserRoundPlus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useAuth } from "../Context/Auth";
import { Helmet } from "react-helmet-async";

const Login = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, loginWithGoogle } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleLoginWithGoogleSubmit = (e) => {
    e.preventDefault();
    loginWithGoogle();
  }; 

  return (
<>
<Helmet>
  <title>Login</title>
</Helmet>

    <section
      className="w-full min-h-screen pt-12 lg:pt-64 flex items-center justify-center lg:px-4 py-12 lg:bg-gradient-to-br bg-cover from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden"
      // style={{backgroundImage:"url('/images/login-bg.jpg')", backgroundRepeat:"no-repeat"}}
    >
      {/* Glow effect background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-300/20 via-purple-300/20 to-pink-300/20 blur-3xl opacity-70"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2 text-sm">Login to your account</p>
        </div>

        <form className="space-y-5" onSubmit={onSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              onChange={(e) => setEmail(e.target.value)}
              // autoComplete=""
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              required
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including a number, lowercase letter, and uppercase letter"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <Link to="#" className="hover:text-purple-600 transition">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold rounded-xl transition shadow-lg"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <span className="loading loading-spinner loading-md"></span> Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button
            onClick={handleLoginWithGoogleSubmit}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            <FcGoogle size={22} />
            <span className="font-medium text-gray-700">Continue with Google</span>
          </button>

          <Link
            to="/signup"
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            <UserRoundPlus size={22} />
            <span className="font-medium text-gray-700">Create a new account</span>
          </Link>
        </div>
      </div>
    </section>
</>

  );
};

export default Login;
