'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronDown,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Phone,
  Trash2,
  Video,
  X,
} from "lucide-react";

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tous");
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

  const projectCategories = ["Tous", "BTP & Blocs", "Caméras & Sécurité", "Salubrité & Déchets", "Minier"];

  const projects = [
    {
      id: 1,
      title: "Fourniture de 50 000 blocs de ciment pour un chantier résidentiel à Kolwezi",
      category: "BTP & Blocs",
      client: "Promoteur Immobilier Local",
      location: "Quartier Manika, Kolwezi",
      status: "Terminé avec succès",
      description: "Production, contrôle de qualité et livraison sur site de blocs ciment de haute résistance (15x20x40) pour la construction de logements modernes.",
      icon: <Boxes size={24} />,
    },
    {
      id: 2,
      title: "Installation & Maintenance du réseau de vidéosurveillance d'une concession commerciale",
      category: "Caméras & Sécurité",
      client: "Entreprise Commerciale",
      location: "Centre-ville Kolwezi",
      status: "Sous contrat annuel de maintenance",
      description: "Installation de 24 caméras IP HD infrarouges avec système d'enregistrement NVR et contrat de nettoyage périodique des optiques.",
      icon: <Video size={24} />,
    },
    {
      id: 3,
      title: "Opération Clean City : Assainissement et évacuation des déchets de marché",
      category: "Salubrité & Déchets",
      client: "Service Public / Partenariat Local",
      location: "Marché Central de Kolwezi",
      status: "Opération permanente",
      description: "Déploiement de camions bennes et d'agents d'assainissement pour la collecte et l'évacuation hebdomadaire de déchets solides.",
      icon: <Trash2 size={24} />,
    },
    {
      id: 4,
      title: "Aménagement de plateforme et préparation de sol sur site minier",
      category: "Minier",
      client: "Sous-traitant Minier",
      location: "Zone Industrielle de Fungurume",
      status: "Livré dans les délais",
      description: "Travaux de terrassement, nivellement et sécurisation de périmètre pour l'installation d'une base logistique temporaire.",
      icon: <HardHat size={24} />,
    },
  ];

  const filteredProjects = activeTab === "Tous"
    ? projects
    : projects.filter(p => p.category === activeTab);

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

        {/* OVERLAY & DRAWER */}
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

      {/* HERO PROJECTS */}
      <section className="projects-hero">
        <div className="projects-hero-inner">
          <div className="eyebrow">PORTFOLIO DE NOS CHANTIERS</div>
          <h1>Nos <span>Réalisations</span></h1>
          <p>Aperçu de nos interventions concrètes dans le BTP, la sécurité électronique et l'assainissement urbain.</p>
        </div>
      </section>

      {/* TABS */}
      <section className="projects-filter-section">
        <div className="projects-filter-inner">
          <div className="filter-pills">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <section className="projects-list-section">
        <div className="projects-list-inner">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div>
                <div className="project-card-header">
                  <div className="project-icon-box">{proj.icon}</div>
                  <div className="project-status">
                    <CheckCircle2 size={13} /> {proj.status}
                  </div>
                </div>

                <h3>{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
              </div>

              <div>
                <div className="project-meta-grid">
                  <div>
                    <span className="meta-label">Client / Secteur</span>
                    <span className="meta-val">{proj.client}</span>
                  </div>
                  <div>
                    <span className="meta-label">Localisation</span>
                    <span className="meta-val">{proj.location}</span>
                  </div>
                </div>

                <Link href="/contact#formulaire-contact" className="project-action-btn">
                  Lancer un projet similaire <ArrowRight size={14} />
                </Link>
              </div>
            </div>
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
        .projects-hero { background: #021731; color: white; padding: 60px 20px; text-align: center; }
        .eyebrow { color: #facc15; font-size: 12px; font-weight: 800; letter-spacing: 1.2px; margin-bottom: 10px; }
        .projects-hero h1 { font-size: 38px; font-weight: 800; margin: 0 0 12px; }
        .projects-hero h1 span { color: #facc15; }
        .projects-hero p { color: #cbd5e1; font-size: 15px; margin: 0; }

        .projects-filter-section { max-width: 1240px; margin: 30px auto; padding: 0 20px; }
        .filter-pills { display: flex; gap: 10px; flex-wrap: wrap; }
        .filter-btn { background: #fff; border: 1px solid #cbd5e1; color: #475569; padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
        .filter-btn.active, .filter-btn:hover { background: #071b35; color: #facc15; border-color: #071b35; }

        /* PROJECTS GRID */
        .projects-list-section { max-width: 1240px; margin: 0 auto 80px; padding: 0 20px; }
        .projects-list-inner { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

        .project-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, border-color 0.2s; }
        .project-card:hover { transform: translateY(-4px); border-color: #facc15; }

        .project-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .project-icon-box { background: #071b35; color: #facc15; padding: 10px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
        .project-status { font-size: 11px; font-weight: 800; color: #16a34a; background: #dcfce7; padding: 4px 10px; border-radius: 12px; display: inline-flex; align-items: center; gap: 5px; }

        .project-card h3 { font-size: 18px; font-weight: 800; color: #071b35; margin: 0 0 10px; line-height: 1.3; }
        .project-desc { font-size: 13px; color: #64748b; margin: 0 0 20px; line-height: 1.5; }

        .project-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #f8fafc; padding: 12px; border-radius: 8px; margin-bottom: 20px; }
        .meta-label { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; display: block; }
        .meta-val { font-size: 12px; font-weight: 700; color: #0f172a; }

        .project-action-btn { font-size: 13px; font-weight: 800; color: #071b35; display: inline-flex; align-items: center; gap: 6px; }
        .project-action-btn:hover { color: #d97706; }

        /* FOOTER */
        .footer { background: #071b35; color: #94a3b8; display: flex; justify-content: space-between; padding: 24px max(20px, calc((100% - 1240px)/2)); font-size: 12px; }

        @media (max-width: 900px) {
          .nav-links, .quote-btn { display: none; }
          .mobile-menu-btn { display: flex; }
          .projects-list-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .topbar { display: none; }
          .footer { flex-direction: column; text-align: center; gap: 8px; }
        }
      `}</style>
    </main>
  );
}