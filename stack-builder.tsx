import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { X, Star, ChevronRight } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const logoUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-text-5nD1ba3nPBXJpiJOxVW3LzBxAsrHdf.png";
const heroUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-stack-RtApEfbXxvjgjsvcbuhuDFgXf2LEAl.png";
const hamburgerUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hamburger-o6PQwWyUuYeOV45bLwbtVUJVWbfYEJ.png";

function TechIcon({
  tech,
  small = false,
}: {
  tech: Technology;
  small?: boolean;
}) {
  return (
    <div
      className={`tech-icon ${small ? "tech-icon-small" : ""} icon-${tech.category.toLowerCase()}`}
      aria-hidden="true"
    >
      {tech.icon}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <img src={hamburgerUrl} alt="" />
        </button>
        <a className="brand" href="#home">
          <img src={logoUrl} alt="Dev Stack" />
        </a>
        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {["Home", "Technologies", "Projects", "About", "Contact"].map(
            (link, index) => (
              <a
                key={link}
                className={index === 0 ? "active" : ""}
                href={index === 0 ? "#home" : `#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ),
          )}
        </div>
        <div className="nav-actions">
          <a href="#signin">Sign In</a>
          <a className="gradient-button small-button" href="#signup">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <h1>
          Build Your Ideal
          <br />
          <span>Development Stack</span>
        </h1>
        <p className="hero-description">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="hero-actions">
          <a className="gradient-button" href="#technologies">
            Explore Technologies <ChevronRight size={17} />
          </a>
          <a className="outline-button" href="#about">
            Learn More
          </a>
        </div>
      </div>
      <div className="hero-art">
        <img
          src={heroUrl}
          alt="Colorful layered development stack illustration"
        />
      </div>
    </section>
  );
}

function TechCard({
  tech,
  selected,
  onAdd,
}: {
  tech: Technology;
  selected: boolean;
  onAdd: () => void;
}) {
  return (
    <article className={`tech-card ${selected ? "selected" : ""}`}>
      <div className="card-top">
        <TechIcon tech={tech} />
        <span className="badge">{tech.badge}</span>
      </div>
      <h3>{tech.name}</h3>
      <p>{tech.description}</p>
      <div className="card-meta">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="rating">
          <Star size={12} fill="currentColor" /> {tech.rating}
        </span>
      </div>
      <button className="add-button" onClick={onAdd}>
        {selected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}