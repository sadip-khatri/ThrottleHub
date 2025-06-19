import React, { useState } from "react";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Successful login
      console.log("Login successful:", data);
      // Redirect or store token as needed
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="login-section">
      <h1>LOGIN</h1>
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

        {error && <p className="error-message">{error}</p>}

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
}

export default LogIn;
