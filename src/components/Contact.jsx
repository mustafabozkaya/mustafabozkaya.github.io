import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-wrapper">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Your Name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="Your Email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>

            <style>{`
        .contact-section {
          background: linear-gradient(to top, var(--bg-primary), var(--bg-secondary));
        }

        .contact-wrapper {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-family: var(--font-body);
        }

        input, textarea {
          padding: 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 1rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }

        button[type="submit"] {
          margin-top: 1rem;
        }
      `}</style>
        </section>
    );
};

export default Contact;
