'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Boxes,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Trash2,
  Truck,
  X,
} from "lucide-react";

export default function SectorsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Les 4 grandes activités associées aux sous-dossiers de /app/services/
  const sectorsData = [
    {
      id: "construction-materiaux",
      servicePath: "/services/construction",
      number: "01",
      badge: "Secteur BTP & Matériaux",
      title: "Construction & Façonnage de Briques et Blocs de Ciment",
      icon: <Boxes size={24} />,
      description:
        "Acteur majeur dans la modernisation des infrastructures à Kolwezi et dans le Lualaba. Nous produisons des matériaux de construction de haute résistance et assurons la réalisation de travaux de génie civil et de bâtiment avec un contrôle qualité rigoureux.",
      subActivities: [
        {
          title: "Façonnage & Fabrication de Blocs",
          desc: "Fabrication industrielle de briques, blocs de ciment comprimé, pavés et bordures répondant aux normes de résistance mécanique.",
        },
        {
          title: "Bâtiment & Gros Œuvre",
          desc: "Construction de fondations, structures en béton armé, bâtiments industriels, bureaux et résidences privées.",
        },
        {
          title: "Fourniture de Agglomérés et Agrégats",
          desc: "Approvisionnement régulier sur chantiers en matériaux de construction fiables pour les entreprises minières et les particuliers.",
        },
      ],
      features: ["Haute résistance à la compression", "Capacité de production à grande échelle", "Livraison directe sur chantier"],
    },
    {
      id: "securite-technologies",
      servicePath: "/services/finceellectic",
      number: "02",
      badge: "Technologies & Sécurité",
      title: "Clôture Électrique & Caméras de Surveillance",
      icon: <Camera size={24} />,
      description:
        "Nous sécurisons vos résidences, bureaux et sites industriels grâce à des clôtures électrifiées et des systèmes de surveillance électronique de pointe, accompagnés d'un service complet de maintenance.",
      subActivities: [
        {
          title: "Clôtures Électriques & Électrification",
          desc: "Installation de systèmes d'électrification haute sécurité pour périmètres industriels, concessionnaires et propriétés privées.",
        },
        {
          title: "Installation de Caméras Haute Définition",
          desc: "Pose et configuration de systèmes de vidéosurveillance IP/Analogique, caméras infrarouges avec accès à distance sur smartphone.",
        },
        {
          title: "Nettoyage & Entretien d'Optiques",
          desc: "Dépoussiérage, dégraissage et nettoyage des lentilles et boîtiers de caméras en hauteur pour une visibilité optimale 24/7.",
        },
      ],
      features: ["Vision nocturne HD & AI", "Protection périmétrique active", "Support technique disponible 24/7"],
    },
    {
      id: "service-public-assainissement",
      servicePath: "/services/nettoyage",
      number: "03",
      badge: "Service Public & Environnement",
      title: "Salubrité Publique, Ramassage des Déchets & Nettoyage",
      icon: <Trash2 size={24} />,
      description:
        "Partenaire privilégié des collectivités et des espaces commerciaux, WB MINING SERVICES s'engage pour une ville propre. Nous gérons le ramassage, le transport et le traitement responsable des déchets ménagers et industriels.",
      subActivities: [
        {
          title: "Assainissement des Marchés & Lieux Publics",
          desc: "Opérations régulières et programmées de balayage, désinfection et nettoyage en profondeur des marchés urbains et axes routiers.",
        },
        {
          title: "Ramassage & Collecte des Ordures",
          desc: "Collecte systématique des bacs à ordures dans les quartiers, résidences, espaces commerciaux et sites d'entreprises.",
        },
        {
          title: "Gestion & Évacuation des Déchets",
          desc: "Transport sécurisé à l'aide de camions bennes vers les sites de décharge autorisés dans le respect des normes environnementales.",
        },
      ],
      features: ["Flotte de camions bennes dédiée", "Interventions périodiques ou d'urgence", "Contribution à l'hygiène publique"],
    },
    {
      id: "services-miniers-logistique",
      servicePath: "/services",
      number: "04",
      badge: "Infrastructures & Mines",
      title: "Support aux Entreprises Minières & Logistique",
      icon: <Truck size={24} />,
      description:
        "Implanté au cœur de la région minière de Kolwezi, WB MINING SERVICES fournit des prestations d'appui logistique, de sous-traitance industrielle et d'aménagement de bases de vie pour les opérateurs du secteur minier.",
      subActivities: [
        {
          title: "Aménagement & Génie Civil sur Site",
          desc: "Terrassement, préparation de sols et construction d'infrastructures d'appui au sein des concessions minières.",
        },
        {
          title: "Fournitures Générales & Subcontracting",
          desc: "Approvisionnement en équipements de protection individuelle (EPI), consommables industriels et outillage technique.",
        },
        {
          title: "Maintenance et Logistique Intégrée",
          desc: "Mise à disposition de main-d'œuvre qualifiée pour la maintenance préventive d'installations de surface.",
        },
      ],
      features: ["Conformité aux exigences QHSE", "Équipes qualifiées & locales", "Réponse rapide aux appels d'offres"],
    },
  ];

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

          {/* Navigation Ordinateur */}
          <nav className="nav-links">
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

          <Link href="/contact#formulaire-contact" className="quote-btn">
            Demander un devis <ArrowRight size={15} />
          </Link>

          {/* Bouton Hamburger Mobile */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Overlay Arrière-plan Mobile */}
        <div
          className={`mobile-overlay ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Tiroir Mobile */}
        <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">WB MINING SERVICES</span>
            <button
              className="mobile-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
            >
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
              onClick={() => setMenuOpen(false)}
            >
              Discuter sur WhatsApp <ArrowRight size={16} />
            </a>

            <div className="mobile-contact-info">
              <p><Phone size={14} /> +243 811 203 384</p>
              <p><Mail size={14} /> {emailAddress}</p>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTEURS */}
      <section className="sectors-hero">
        <div className="sectors-hero-inner">
          <div className="eyebrow">NOS DOMAINES D&apos;EXPERTISES • KOLWEZI & LUALABA</div>
          <h1>Nos Secteurs <span>d&apos;Activité</span></h1>
          <p>
            Des solutions intégrées dans le domaine du BTP, de la sécurité électronique, 
            du service public d&apos;assainissement et du soutien aux infrastructures minières.
          </p>
        </div>
      </section>

      {/* CARTES DE NAVIGATION RAPIDE */}
      <section className="quick-nav-section">
        <div className="quick-nav-grid">
          {sectorsData.map((sec) => (
            <a key={sec.id} href={`#${sec.id}`} className="quick-nav-card">
              <span className="quick-num">{sec.number}</span>
              <div className="quick-content">
                <h4>{sec.badge}</h4>
                <p>{sec.title.split(" ")[0]} {sec.title.split(" ")[1]}</p>
              </div>
              <ChevronRight size={18} className="quick-arrow" />
            </a>
          ))}
        </div>
      </section>

      {/* LISTE DÉTAILLÉE DES 4 SECTEURS */}
      <section className="sectors-detail-section">
        <div className="sectors-detail-inner">
          {sectorsData.map((sector, idx) => (
            <div
              key={sector.id}
              id={sector.id}
              className={`sector-block ${idx % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="sector-info-side">
                <div className="sector-badge-tag">{sector.badge}</div>
                <div className="sector-header">
                  <div className="sector-icon-box">{sector.icon}</div>
                  <h2>{sector.title}</h2>
                </div>

                <p className="sector-main-desc">{sector.description}</p>

                {/* Sous-activités */}
                <div className="sub-activities-list">
                  {sector.subActivities.map((sub, sIdx) => (
                    <div key={sIdx} className="sub-act-item">
                      <div className="sub-act-bullet">✓</div>
                      <div>
                        <h4 className="sub-act-title">{sub.title}</h4>
                        <p className="sub-act-desc">{sub.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Points forts */}
                <div className="features-tags">
                  {sector.features.map((feat, fIdx) => (
                    <span key={fIdx} className="feat-pill">
                      <CheckCircle2 size={13} /> {feat}
                    </span>
                  ))}
                </div>

                <div className="sector-action-group">
                  <Link href={sector.servicePath} className="primary-btn">
                    Voir la page service <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact#formulaire-contact" className="secondary-outline-btn">
                    Demander un devis
                  </Link>
                </div>
              </div>

              <div className="sector-visual-side">
                <div className="visual-card-frame">
                  <div className="visual-card-bg">
                    <span className="big-number">{sector.number}</span>
                    <div className="visual-content">
                      <HardHat size={48} className="visual-icon-glow" />
                      <h3>WB MINING SERVICES</h3>
                      <p>Qualité • Rigueur • Engagement Pro</p>
                      <div className="visual-divider" />
                      <div className="visual-stat">
                        <span>Disponibilité</span>
                        <strong>Service 24/7</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-inner">
          <ShieldCheck size={48} className="cta-icon" />
          <h2>Prêt à concrétiser votre projet avec un partenaire de confiance ?</h2>
          <p>
            Que vous soyez une entreprise, une municipalité ou un particulier, nous mettons notre 
            savoir-faire technique et nos équipements à votre service.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-primary">
              Contactez-nous maintenant <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              Échanger sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} WB MINING SERVICES SARL. Tous droits réservés.</div>
        <div>Kolwezi, République Démocratique du Congo</div>
      </footer>

      {/* STYLES CSS */}
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #071b35; background: #fff; line-height: 1.5; }
        a { color: inherit; text-decoration: none; transition: all 0.2s ease; }
        button { font: inherit; cursor: pointer; }

        .wb-page { overflow-x: hidden; position: relative; }

        /* TOPBAR */
        .topbar { height: 36px; background: #071b35; color: white; font-size: 12px; }
        .topbar-inner { max-width: 1240px; height: 100%; margin: auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; }
        .contact-mini, .social-mini { display: flex; align-items: center; gap: 20px; }
        .contact-mini span, .social-mini span { display: flex; align-items: center; gap: 6px; }
        .contact-mini svg { color: #facc15; }
        .social-mini { gap: 15px; font-weight: 700; }
        .social-mini .youtube { background: #facc15; color: #071b35; padding: 2px 6px; border-radius: 4px; font-size: 9px; }
        .social-mini .flag { font-size: 14px; }

        /* NAVBAR */
        .navbar { height: 80px; background: #fff; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,.06); }
        .nav-inner { max-width: 1240px; height: 100%; margin: auto; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; gap: 30px; }
        .brand { display: flex; align-items: center; height: 100%; }
        .logo { max-height: 52px; width: auto; object-fit: contain; }

        .nav-links { display: flex; align-items: center; justify-content: center; gap: 28px; flex: 1; height: 100%; }
        .nav-links a { height: 100%; display: flex; align-items: center; font-size: 14px; font-weight: 600; color: #334155; position: relative; }
        .nav-links a:hover, .nav-links a.active { color: #071b35; font-weight: 700; }
        .nav-links a.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: #facc15; border-radius: 3px 3px 0 0; }

        .quote-btn, .primary-btn { background: #facc15; color: #071b35; border-radius: 8px; padding: 12px 22px; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; transition: transform 0.2s, background-color 0.2s; }
        .quote-btn:hover, .primary-btn:hover { background: #eab308; transform: translateY(-1px); }

        .secondary-outline-btn { border: 1px solid #cbd5e1; color: #071b35; border-radius: 8px; padding: 12px 22px; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; transition: background-color 0.2s; }
        .secondary-outline-btn:hover { background: #f8fafc; }

        .sector-action-group { display: flex; gap: 12px; flex-wrap: wrap; }

        .mobile-menu-btn { display: none; background: none; border: 0; color: #071b35; padding: 6px; }

        /* MENU MOBILE DRAWER */
        .mobile-overlay { position: fixed; inset: 0; background: rgba(7, 27, 53, 0.6); backdrop-filter: blur(4px); z-index: 998; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
        .mobile-overlay.open { opacity: 1; pointer-events: auto; }

        .mobile-drawer { position: fixed; top: 0; right: -100%; width: 82%; max-width: 320px; height: 100vh; background: #071b35; color: white; z-index: 999; display: flex; flex-direction: column; justify-content: space-between; padding: 24px; transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: -10px 0 30px rgba(0,0,0,0.3); }
        .mobile-drawer.open { right: 0; }
        .mobile-drawer-header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .mobile-drawer-title { font-weight: 800; font-size: 14px; letter-spacing: 0.5px; color: #facc15; }
        .mobile-close-btn { background: none; border: none; color: #fff; padding: 4px; display: flex; align-items: center; }

        .mobile-nav-links { display: flex; flex-direction: column; gap: 16px; margin: 30px 0; }
        .mobile-nav-links a { font-size: 16px; font-weight: 600; color: #cbd5e1; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .mobile-nav-links a.active, .mobile-nav-links a:hover { color: #facc15; padding-left: 6px; }

        .mobile-drawer-footer { display: flex; flex-direction: column; gap: 20px; }
        .full-width { width: 100%; }
        .mobile-contact-info { font-size: 12px; color: #94a3b8; display: flex; flex-direction: column; gap: 8px; }
        .mobile-contact-info p { margin: 0; display: flex; align-items: center; gap: 8px; }

        /* SECTORS HERO */
        .sectors-hero { background: #021731; color: white; padding: 70px 20px; text-align: center; }
        .sectors-hero-inner { max-width: 800px; margin: auto; }
        .eyebrow { color: #facc15; font-size: 12px; font-weight: 800; letter-spacing: 1.2px; margin-bottom: 12px; text-transform: uppercase; }
        .sectors-hero h1 { font-size: 40px; font-weight: 800; margin: 0 0 16px; }
        .sectors-hero h1 span { color: #facc15; }
        .sectors-hero p { color: #cbd5e1; font-size: 16px; margin: 0; line-height: 1.6; }

        /* QUICK NAV CARDS */
        .quick-nav-section { max-width: 1240px; margin: -30px auto 60px; padding: 0 20px; position: relative; z-index: 10; }
        .quick-nav-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        
        .quick-nav-card { background: #fff; border-radius: 10px; padding: 20px; border: 1px solid #e2e8f0; box-shadow: 0 8px 24px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 14px; transition: transform 0.2s, border-color 0.2s; }
        .quick-nav-card:hover { transform: translateY(-4px); border-color: #facc15; }
        .quick-num { font-size: 22px; font-weight: 900; color: #facc15; background: #071b35; width: 42px; height: 42px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .quick-content h4 { font-size: 11px; color: #64748b; margin: 0 0 2px; text-transform: uppercase; font-weight: 700; }
        .quick-content p { font-size: 13px; font-weight: 800; color: #071b35; margin: 0; }
        .quick-arrow { color: #cbd5e1; margin-left: auto; flex-shrink: 0; }

        /* SECTORS DETAIL LIST */
        .sectors-detail-section { max-width: 1240px; margin: 0 auto 80px; padding: 0 20px; }
        .sectors-detail-inner { display: flex; flex-direction: column; gap: 90px; }

        .sector-block { display: grid; grid-template-columns: 1fr 420px; gap: 60px; align-items: center; }
        .sector-block.reverse { grid-template-columns: 420px 1fr; }
        .sector-block.reverse .sector-info-side { order: 2; }
        .sector-block.reverse .sector-visual-side { order: 1; }

        .sector-badge-tag { display: inline-block; background: #fef3c7; color: #b45309; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; margin-bottom: 12px; }
        .sector-header { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
        .sector-icon-box { background: #071b35; color: #facc15; padding: 12px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sector-header h2 { font-size: 26px; font-weight: 800; margin: 0; color: #071b35; line-height: 1.2; }

        .sector-main-desc { font-size: 15px; color: #475569; margin-bottom: 24px; line-height: 1.6; }

        .sub-activities-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }
        .sub-act-item { display: flex; gap: 12px; align-items: flex-start; }
        .sub-act-bullet { background: #e0f2fe; color: #0284c7; font-weight: 900; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; margin-top: 2px; }
        .sub-act-title { font-size: 14px; font-weight: 800; color: #0f172a; margin: 0 0 2px; }
        .sub-act-desc { font-size: 13px; color: #64748b; margin: 0; line-height: 1.4; }

        .features-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
        .feat-pill { background: #f8fafc; border: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; color: #334155; padding: 6px 12px; border-radius: 6px; display: inline-flex; align-items: center; gap: 6px; }
        .feat-pill svg { color: #16a34a; }

        /* VISUAL SIDE CARD */
        .visual-card-frame { position: relative; }
        .visual-card-bg { background: linear-gradient(135deg, #071b35 0%, #0f3566 100%); border-radius: 16px; padding: 40px 30px; color: white; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(7,27,53,0.15); }
        .big-number { position: absolute; right: -10px; top: -20px; font-size: 140px; font-weight: 900; color: rgba(255,255,255,0.04); user-select: none; pointer-events: none; }
        
        .visual-content { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .visual-icon-glow { color: #facc15; margin-bottom: 16px; filter: drop-shadow(0 0 10px rgba(250,204,21,0.3)); }
        .visual-content h3 { font-size: 18px; font-weight: 900; margin: 0 0 4px; letter-spacing: 0.5px; }
        .visual-content p { font-size: 12px; color: #cbd5e1; margin: 0 0 20px; }
        .visual-divider { width: 50px; height: 3px; background: #facc15; margin-bottom: 20px; border-radius: 2px; }
        
        .visual-stat { background: rgba(255,255,255,0.08); width: 100%; border-radius: 8px; padding: 12px; backdrop-filter: blur(5px); display: flex; flex-direction: column; gap: 2px; }
        .visual-stat span { font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; }
        .visual-stat strong { font-size: 15px; color: #facc15; font-weight: 800; }

        /* CALL TO ACTION */
        .cta-section { background: #071b35; color: white; padding: 70px 20px; text-align: center; }
        .cta-inner { max-width: 760px; margin: auto; display: flex; flex-direction: column; align-items: center; }
        .cta-icon { color: #facc15; margin-bottom: 16px; }
        .cta-section h2 { font-size: 30px; font-weight: 800; margin: 0 0 14px; }
        .cta-section p { font-size: 15px; color: #cbd5e1; margin: 0 0 30px; line-height: 1.6; }

        .cta-buttons { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
        .cta-primary { background: #facc15; color: #071b35; padding: 14px 28px; border-radius: 8px; font-weight: 800; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; }
        .cta-primary:hover { background: #eab308; }
        .cta-secondary { background: rgba(255,255,255,0.1); color: white; padding: 14px 28px; border-radius: 8px; font-weight: 700; font-size: 14px; border: 1px solid rgba(255,255,255,0.2); }
        .cta-secondary:hover { background: rgba(255,255,255,0.2); }

        /* FOOTER */
        .footer { background: #021731; color: #94a3b8; display: flex; justify-content: space-between; padding: 24px max(20px, calc((100% - 1240px)/2)); font-size: 12px; border-top: 1px solid rgba(255,255,255,0.05); }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1024px) {
          .quick-nav-grid { grid-template-columns: repeat(2, 1fr); }
          .sector-block, .sector-block.reverse { grid-template-columns: 1fr; gap: 30px; }
          .sector-block.reverse .sector-info-side { order: 1; }
          .sector-block.reverse .sector-visual-side { order: 2; }
          .visual-card-bg { padding: 30px 20px; }
        }

        @media (max-width: 900px) {
          .nav-links, .quote-btn { display: none; }
          .mobile-menu-btn { display: flex; align-items: center; justify-content: center; }
        }

        @media (max-width: 640px) {
          .topbar { display: none; }
          .navbar { height: 64px; }
          .sectors-hero h1 { font-size: 28px; }
          .quick-nav-grid { grid-template-columns: 1fr; }
          .cta-section h2 { font-size: 22px; }
          .cta-buttons { flex-direction: column; width: 100%; }
          .cta-primary, .cta-secondary { width: 100%; justify-content: center; }
          .footer { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </main>
  );
}