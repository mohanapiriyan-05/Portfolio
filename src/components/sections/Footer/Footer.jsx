import "./Footer.css";
import {
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>
          V.Mohanapiriyan
        </h2>

        <p>
          Full Stack Developer | React • Node.js • MySQL
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/mohanapiriyan-05"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://wa.me/message/BNMHIDTUKOW4M1"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

        <div className="copyright">

          <span>
            © 2026 Mohanapiriyan
          </span>

          <span className="divider">
            •
          </span>

          <span>
            All Rights Reserved 🚀
          </span>

        </div>

      </div>

    </footer>
  );
}