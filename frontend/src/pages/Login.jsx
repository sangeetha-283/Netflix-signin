import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const API_BASE = "https://netflix-signin-git-main-sangeethas-projects-a2fca69c.vercel.app/api";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setError("");
        if (!email.trim() || !password.trim()) {
            setError("Please enter email and password");
            return;
        }
        setLoading(true);

        try {
            const res = await axios.post(`${API_BASE}/login`, {
                email,
                password
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            navigate("/dashboard");

        } catch (err) {
            if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError("Network error");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="background-overlay" />
            <img src="netflix-logo.png" class="logo" alt="Netflix" />
            <div className="login-center-wrapper">
            <div className="login-box">
                <h1>Sign In</h1>
                {error && <div className="error">{error}</div>}
                <input
                    type="email"
                    placeholder="Email or phone number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="signin-btn" onClick={handleLogin} disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                </button>

                <p className="or-text">OR</p>

                <button className="code-btn">Use a sign-in code</button>

                <p className="forgot">Forgot Password?</p>
                <p className="signup-text">
                    New to Netflix? <span>Sign up now.</span>
                </p>

                <p className="captcha-text">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    <a href="#" className="anchor">Learn more.</a>
                </div>
                
            </div>
        <Footer />
        </div>
        
    );
}
