import React from "react";

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#1e3a8a' }}>ANZIA Bright Academy</h1>
      <p>Home Tuition for Classes 1 to 10 | All Subjects</p>

      <h2 style={{ color: '#2563eb' }}>Subjects Offered:</h2>
      <ul>
        <li>Mathematics</li>
        <li>Science</li>
        <li>Social Science</li>
        <li>English</li>
        <li>Hindi & Other Subjects (on request)</li>
      </ul>

      <h2 style={{ color: '#2563eb' }}>Location:</h2>
      <p>Ranchi, Lalpur - 834001</p>

      <h2 style={{ color: '#2563eb' }}>Contact for Home Tuition</h2>
      <p>📞 Call: <a href="tel:+917562812885">+91 7562812885</a></p>
      <p>💬 WhatsApp: <a href="https://wa.me/917562812885">Chat on WhatsApp</a></p>

      <h2 style={{ color: '#2563eb' }}>Request a Tuition</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd9D-ExampleFormLink/viewform?embedded=true"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Tuition Request Form"
      >Loading…</iframe>
    </div>
  );
}