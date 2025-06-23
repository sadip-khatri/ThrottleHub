import React, { useState, type FormEvent } from "react";
import api from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface User {
  name: string;
  email: string;
}

const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });

      const { token, user } = response.data;

      // Store token and user in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);

      toast.success(`Welcome, ${user.name}!`);

     
      // window.location.href = "/dashboard";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Login failed.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <section className="login-section">
      <ToastContainer position="top-right" autoClose={3000} />

      <h1>LOGIN</h1>
      {user && (
        <p className="user-greeting">
           Logged in as <strong>{user.name}</strong>
        </p>
      )}
      <p>
        New user? <a href="/create-account">Create an account</a>
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="visually-hidden">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john.doe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <img src="img/eye.svg" alt="Toggle password visibility" />
          </button>
        </div>

        <div className="form-options">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="/form-password">Forgot password?</a>
        </div>

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "LOGIN"}
        </button>
      </form>

      <div className="login-divider">
        <span>OR</span>
      </div>

      <div className="social-login">
        <button className="google-login">
          <img src="img/flat-color-icons-google.svg" alt="Google logo" />
          Continue with Google
        </button>
        <button className="facebook-login">
          <img src="img/bxl-facebook.svg" alt="Facebook logo" />
          Continue with Facebook
        </button>
      </div>

      <div className="login-divider">
        <span>OR</span>
      </div>

      <div className="resend-confirmation">
        <p>You didn't receive anything?</p>
        <button className="resend-button">Resend</button>
      </div>
    </section>
  );
};

export default LogIn;
