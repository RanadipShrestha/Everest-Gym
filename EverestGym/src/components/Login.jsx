import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "./css/Login.module.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    if (!email.trim()) return "Email is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return "Enter a valid email";
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      if (onLogin) {
        await onLogin({ email, password, remember });
      } else {
        await new Promise((res) => setTimeout(res, 1000));

        // Demo login
        if (email !== "member@gym.com" || password !== "password123") {
          throw new Error(
            "Invalid credentials (try member@gym.com / password123)"
          );
        }
      }

      setLoading(false);
      setError("");

      // ✅ Redirect user to dashboard after login
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginCard}>
        {/* Left Side */}
        <div className={style.loginLeft}>
          <h2>Welcome back to FitFlow</h2>
          <p>
            Log in to track workouts, book classes, and manage your membership.
          </p>
          <img
            src="https://th.bing.com/th/id/R.fd5b4dab265befc4d5cb1d6bf9c547d6?rik=VlIi3FZWtlBPXA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f2754888%2foriginal.jpg&ehk=RvrXz5d5RQXRSXL9CHBoxrciFB7wlTKQKmeWe%2fpIUnI%3d&risl=&pid=ImgRaw&r=0"
            alt="gym"
          />
          <ul>
            <li>Personalized workout plans</li>
            <li>Class scheduling</li>
            <li>Progress tracking</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className={style.loginRight}>
          <h3>Sign in</h3>
          <p>Use your account to access your gym dashboard</p>

          {error && <div className={style.errorBox}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

            <label>Password</label>
            <div className={style.passwordBox}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className={style.showBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <div className={style.formOptions}>
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className={style.terms}>
              By signing in you agree to our <Link to="/terms">Terms</Link>.
            </p>
          </form>

          <div className={style.registerBox}>
            <span>New here? </span>
            <Link to="/register">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
