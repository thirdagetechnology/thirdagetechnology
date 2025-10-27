import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import styles from "./ThirdAgeLogin.module.css";
import { useEffect } from "react";

export default function ThirdAgeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        window.location.href = "/dashboard";
      }
    };
    checkSession();
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setMessage("✅ Logged in successfully!");
      window.location.href = "/dashboard"; // redirect after login
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Third Age Login</h2>
        <p className={styles.subtitle}>Sign in to view submissions</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className={styles.input}
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Signing in..." : "Log In"}
          </button>
        </form>

        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
}
