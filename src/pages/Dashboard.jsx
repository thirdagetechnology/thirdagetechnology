import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        window.location.href = "/third-age-login";
      } else {
        fetchContacts();
      }
    };
    checkSession();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from("ContactTable")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/third-age-login";
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirmDelete) return;

    try {
      const { error } = await supabase
        .from("ContactTable")
        .delete()
        .eq("id", id);
      if (error) throw error;

      // remove deleted item from local state
      setContacts((prev) => prev.filter((contact) => contact.id !== id));
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Contacts</h2>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {loading && <p className={styles.status}>Loading contacts...</p>}
      {error && <p className={styles.statusError}>❌ {error}</p>}

      {!loading && contacts.length === 0 && (
        <p className={styles.status}>No contacts found.</p>
      )}

      {!loading && contacts.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                <td>{new Date(c.created_at).toLocaleString()}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.message}</td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
