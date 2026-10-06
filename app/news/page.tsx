'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Tag,
  User,
  X,
} from "lucide-react";

export default function NewsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const pathname = usePathname();

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Secteurs", href: "/sectors" },
    { name: "Réalisations", href: "/projects" },
    { name: "Actualités", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappNumber = "243979380002";
  const emailAddress = "contact@wbminingservices.com";

  const categories = ["Tous", "BTP & Construction", "Service Public", "Sécurité", "RSE & Communauté"];

  const articles = [
    {
      id: 1,
      title: "WB MINING SERVICES renforce sa capacité de production de blocs de ciment à Kolwezi",
      category: "BTP & Construction",
      date: "02 Octobre 2026",
      readTime: "3 min de lecture",
      author: "Direction Technique",
      excerpt: "Afin de répondre à la demande croissante des chantiers dans la province du Lualaba, nous avons fait l'acquisition de nouvelles unités mécanisées pour le façonnage de briques et blocs de haute qualité.",
      featured: true,
    },
    {
      id: 2,
      title: "Campagne de salubrité publique : Nettoyage grandeur nature des marchés de Kolwezi",
      category: "Service Public",
      date: "25 Septembre 2026",
      readTime: "4 min de lecture",
      author: "Service Assainissement",
      excerpt: "Nos équipes d'assainissement se sont mobilisées avec des camions bennes pour évacuer plus de 50 tonnes de déchets dans les grands marchés urbains, en partenariat avec les autorités locales.",
      featured: false,
    },
    {
      id: 3,
      title: "Maintenance & nettoyage préventif des caméras de surveillance sur sites industriels",
      category: "Sécurité",
      date: "18 Septembre 2026",
      readTime: "3 min de lecture",
      author: "Équipe Caméras & IT",
      excerpt: "La poussière des chantiers peut réduire l'efficacité de vos optiques de 40%. Découvrez nos solutions de nettoyage en hauteur et de réglage préventif des caméras.",
      featured: false,
    },
    {
      id: 4,
      title: "Engagement RSE : Création d'emplois locaux et formation des jeunes aux métiers du BTP",
      category: "RSE & Communauté",
      date: "10 Septembre 2026",
      readTime: "5 min de lecture",
      author: "Ressources Humaines",
      excerpt: "Fidèle à nos valeurs d'ancrage local, WB MINING SERVICES forme cette année plus de 30 jeunes aux techniques de façonnage de matériaux et d'installation technique.",
      featured: false,
    },
  ];

  const filteredArticles = selectedCategory === "Tous"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <main className="wb-page">
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="contact-mini">
            <span><Phone size={13} fill="currentColor" /> +243 811 203 384</span>
            <span><Mail size={13} /> {emailAddress}</span>
            <span><MapPin size={13} fill="currentColor" /> Kolwezi, RDC</span>
          </div>

          <div className="social-mini">
            <span>in</span>
            <span>f</span>
            <span className="youtube">▶</span>
            <span className="flag">🇨🇩</span>
            <span>FR <ChevronDown size={11} /></span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <Image
              src="/logo/wb-mining-services.jpeg"
              alt="WB Mining Services"
              width={160}
              height={50}
              priority
              className="logo"
            />
          </Link>

          <nav className="nav-links">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link href="/contact#formulaire-contact" className="quote-btn">
            Demander un devis <ArrowRight size={15} />
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* OVERLAY & MOBILE DRAWER */}
        <div
          className={`mobile-overlay ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        />
        <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">WB MINING SERVICES</span>
            <button className="mobile-close-btn" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="mobile-nav-links">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mobile-drawer-footer">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn full-width"
            >
              Discuter sur WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO NEWS */}
      <section className="news-hero">
        <div className="news-hero-inner">
          <div className="eyebrow">ACTUALITÉS & COMMUNIQUÉS</div>
          <h1>Actualités <span>& Blog</span></h1>
          <p>Suivez les projets, interventions et innovations de WB MINING SERVICES dans la région du Lualaba.</p>
        </div>
      </section>

      {/* CATEGORIES FILTERS */}
      <section className="news-filter-section">
        <div className="news-filter-inner">
          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="news-grid-section">
        <div className="news-grid-inner">
          {filteredArticles.map((art) => (
            <article key={art.id} className={`news-card ${art.featured ? "featured" : ""}`}>
              <div className="news-card-badge">
                <Tag size={12} /> {art.category}
              </div>

              <div className="news-card-content">
                <div className="news-meta">
                  <span><Calendar size={13} /> {art.date}</span>
                  <span><Clock size={13} /> {art.readTime}</span>
                </div>

                <h2>{art.title}</h2>
                <p>{art.excerpt}</p>

                <div className="news-card-footer">
                  <span className="author"><User size={13} /> {art.author}</span>
                  <Link href="/contact" className="read-more-link">
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} WB MINING SERVICES SARL. Tous droits réservés.</div>
        <div>Kolwezi, République Démocratique du Congo</div>
      </footer>

      {/* STYLES GLOBAL */}
      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #071b35; background: #f8fafc; }
        a { text-decoration: none; color: inherit; }

        /* TOPBAR & NAVBAR */
        .topbar { height: 36px; background: #071b35; color: white; font-size: 12px; }
        .topbar-inner { max-width: 1240px; height: 100%; margin: auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; }
        .contact-mini, .social-mini { display: flex; align-items: center; gap: 20px; }
        .contact-mini span { display: flex; align-items: center; gap: 6px; }
        .contact-mini svg { color: #facc15; }
        .social-mini .youtube { background: #facc15; color: #071b35; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: 700; }

        .navbar { height: 80px; background: #fff; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,.06); }
        .nav-inner { max-width: 1240px; height: 100%; margin: auto; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; gap: 30px; }
        .logo { max-height: 52px; width: auto; object-fit: contain; }

        .nav-links { display: flex; gap: 28px; flex: 1; justify-content: center; height: 100%; }
        .nav-links a { display: flex; align-items: center; font-size: 14px; font-weight: 600; color: #334155; position: relative; }
        .nav-links a:hover, .nav-links a.active { color: #071b35; font-weight: 700; }
        .nav-links a.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: #facc15; }

        .quote-btn, .primary-btn { background: #facc15; color: #071b35; border-radius: 8px; padding: 12px 22px; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; border: 0; }
        .mobile-menu-btn { display: none; background: none; border: 0; color: #071b35; cursor: pointer; }

        /* MOBILE DRAWER */
        .mobile-overlay { position: fixed; inset: 0; background: rgba(7, 27, 53, 0.6); z-index: 998; opacity: 0; pointer-events: none; transition: 0.3s; }
        .mobile-overlay.open { opacity: 1; pointer-events: auto; }
        .mobile-drawer { position: fixed; top: 0; right: -100%; width: 82%; max-width: 320px; height: 100vh; background: #071b35; color: white; z-index: 999; padding: 24px; transition: 0.35s; display: flex; flex-direction: column; justify-content: space-between; }
        .mobile-drawer.open { right: 0; }
        .mobile-drawer-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; }
        .mobile-drawer-title { color: #facc15; font-weight: 800; font-size: 14px; }
        .mobile-close-btn { background: none; border: 0; color: white; cursor: pointer; }
        .mobile-nav-links { display: flex; flex-direction: column; gap: 16px; margin: 30px 0; }
        .mobile-nav-links a { font-size: 16px; color: #cbd5e1; font-weight: 600; }
        .mobile-nav-links a.active { color: #facc15; }
        .full-width { width: 100%; justify-content: center; }

        /* HERO & FILTERS */
        .news-hero { background: #021731; color: white; padding: 60px 20px; text-align: center; }
        .eyebrow { color: #facc15; font-size: 12px; font-weight: 800; letter-spacing: 1.2px; margin-bottom: 10px; }
        .news-hero h1 { font-size: 38px; font-weight: 800; margin: 0 0 12px; }
        .news-hero h1 span { color: #facc15; }
        .news-hero p { color: #cbd5e1; font-size: 15px; margin: 0; }

        .news-filter-section { max-width: 1240px; margin: 30px auto; padding: 0 20px; }
        .filter-pills { display: flex; gap: 10px; flex-wrap: wrap; }
        .filter-btn { background: #fff; border: 1px solid #cbd5e1; color: #475569; padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
        .filter-btn.active, .filter-btn:hover { background: #071b35; color: #facc15; border-color: #071b35; }

        /* GRID */
        .news-grid-section { max-width: 1240px; margin: 0 auto 80px; padding: 0 20px; }
        .news-grid-inner { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        
        .news-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 12px rgba(0,0,0,0.03); transition: transform 0.2s; }
        .news-card:hover { transform: translateY(-4px); border-color: #facc15; }
        .news-card.featured { grid-column: span 3; background: #071b35; color: white; border: none; }
        .news-card.featured h2 { color: #facc15; font-size: 24px; }
        .news-card.featured p { color: #cbd5e1; }

        .news-card-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 800; color: #d97706; background: #fef3c7; padding: 4px 10px; border-radius: 12px; width: fit-content; margin-bottom: 16px; }
        .news-card.featured .news-card-badge { background: rgba(250,204,21,0.2); color: #facc15; }

        .news-meta { display: flex; gap: 16px; font-size: 12px; color: #94a3b8; margin-bottom: 12px; }
        .news-meta span { display: flex; align-items: center; gap: 5px; }

        .news-card h2 { font-size: 18px; font-weight: 800; margin: 0 0 10px; color: #071b35; line-height: 1.3; }
        .news-card p { font-size: 13px; color: #64748b; margin: 0 0 20px; line-height: 1.5; }

        .news-card-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 12px; }
        .news-card.featured .news-card-footer { border-color: rgba(255,255,255,0.1); }
        .author { color: #94a3b8; display: flex; align-items: center; gap: 5px; }
        .read-more-link { font-weight: 800; color: #071b35; display: flex; align-items: center; gap: 5px; }
        .news-card.featured .read-more-link { color: #facc15; }

        /* FOOTER */
        .footer { background: #071b35; color: #94a3b8; display: flex; justify-content: space-between; padding: 24px max(20px, calc((100% - 1240px)/2)); font-size: 12px; }

        @media (max-width: 1024px) {
          .news-grid-inner { grid-template-columns: repeat(2, 1fr); }
          .news-card.featured { grid-column: span 2; }
        }
        @media (max-width: 900px) {
          .nav-links, .quote-btn { display: none; }
          .mobile-menu-btn { display: flex; }
        }
        @media (max-width: 640px) {
          .topbar { display: none; }
          .news-grid-inner { grid-template-columns: 1fr; }
          .news-card.featured { grid-column: span 1; }
          .footer { flex-direction: column; text-align: center; gap: 8px; }
        }
      `}</style>
    </main>
  );
}