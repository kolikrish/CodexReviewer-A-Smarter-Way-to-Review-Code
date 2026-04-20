import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Terminal,
  Cpu,
  Sparkles,
  Braces
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import "./FrontPage.css";

const FrontPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="front-page-container">
      <div className="bg-glow"></div>
      
      <nav className="navbar">
        <div className="logo">
          <Code2 size={28} />
          Codex<span>Reviewer</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="https://github.com/kolikrish/CodexReviewer">Github</a>
          <a href="#docs">Docs</a>
        </div>
        <div className="nav-auth">
          <button className="btn-secondary" onClick={() => navigate("/login")}>Log in</button>
          <button className="btn-primary" onClick={() => navigate("/signup")}>Get Started</button>
        </div>
      </nav>

      <main className="hero">
        <motion.div 
          className="badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cpu size={14} />
          <span>Powered by Gemini 1.5 Flash</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Refine your <br />
          <span className="accent">code logic.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A minimalist workspace for high-performance code analysis. 
          Instant insights, elegant execution, and AI-driven precision.
        </motion.p>

        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="btn-primary" onClick={() => navigate("/login")}>
            Start analyzing <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </button>
          <a 
            href="https://github.com/kolikrish/CodexReviewer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <FaGithub size={18} style={{ marginRight: "8px" }} />
            View Repository
          </a>
     
        </motion.div>
      </main>

      <motion.section 
        className="features"
        id="features"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon">
            <Zap size={24} />
          </div>
          <h3>Speed & Velocity</h3>
          <p>Get instant feedback on your PRs. Results in seconds, not hours. Accelerated development workflow.</p>
        </motion.div>

        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon">
            <Braces size={24} />
          </div>
          <h3>Deep Precision</h3>
          <p>Advanced semantic analysis that understands context, logic flow, and potential edge cases.</p>
        </motion.div>

        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon">
            <ShieldCheck size={24} />
          </div>
          <h3>Secure by Design</h3>
          <p>Early detection of vulnerabilities and anti-patterns. Keep your production codebase bulletproof.</p>
        </motion.div>
      </motion.section>

      {/* How it Works Section */}
      <section className="workflow-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge">Workflow</span>
          <h2>The Smarter Way to Review</h2>
          <p>CodexReviewer integrates advanced AI to transform your development cycle.</p>
        </motion.div>

        <div className="vertical-workflow">
          {[
            {
              step: "01",
              title: "Connect Your Workspace",
              desc: "Seamlessly integrate with your existing Git repositories or paste code snippets directly into our environment.",
              icon: <Terminal size={28} />
            },
            {
              step: "02",
              title: "Deep AI Scanning",
              desc: "Our neural engine performs a multi-dimensional scan of your code to detect vulnerabilities and logic gaps.",
              icon: <Cpu size={28} />
            },
            {
              step: "03",
              title: "Instant Refinement",
              desc: "Receive production-ready suggestions and automated fixes that you can implement with a single click.",
              icon: <Braces size={28} />
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              className={`workflow-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="workflow-visual">
                <div className="workflow-icon">{item.icon}</div>
                <div className="workflow-number-bg">{item.step}</div>
              </div>
              <div className="workflow-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="workflow-line"></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: "1.5rem" }}>
              <Code2 size={24} />
              Codex<span>Reviewer</span>
            </div>
            <p className="footer-desc">
              Elevating code standards through intelligent AI analysis. 
              Built for developers who strive for excellence.
            </p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#github">Integrations</a>
              <a href="/login">Dashboard</a>
              <a href="/signup">Pricing</a>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#docs">Documentation</a>
              <a href="#api">API Reference</a>
              <a href="#community">Community</a>
              <a href="#blog">Blog</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Security</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 CodexReviewer. All rights reserved.</p>
          <div className="footer-status">
            <span className="status-dot"></span>
            Systems Operational
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;