'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Services", href: "/services" },
    { name: "Secteurs", href: "/secteurs" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Actualités", href: "/actualites" },
    { name: "Contact", href: "/contact" },
  ];

  // Formatage international des numéros pour les liens système
  const whatsappNumber = "243979380002";
  const phoneNumber = "+243811203384";
  const emailAddress = "contact@wbminingservices.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="wb-page">
      {/* TOP BAR */}
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
                className={item.name === "Contact" ? "active" : ""}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <a href="#formulaire-contact" className="quote-btn">
            Demander un devis <ArrowRight size={15} />
          </a>

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
                className={item.name === "Contact" ? "active" : ""}
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

      {/* HERO CONTACT */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="eyebrow">ASSISTANCE & PARTENARIAT • DISPONIBILITÉ 24/7</div>
          <h1>Contactez <span>WB MINING SERVICES</span></h1>
          <p>
            Vous avez un projet minier, industriel ou commercial ? Nos experts vous accompagnent 
            avec des solutions sur mesure. Choisissez le canal de communication qui vous convient.
          </p>
        </div>
      </section>

      {/* CARTES D'ACTION DIRECTE */}
      <section className="direct-actions-section">
        <div className="action-cards-grid">
          
          {/* BOUTON WHATSAPP */}
          <div className="action-card whatsapp-card">
            <div className="action-icon">
              <MessageSquare size={32} />
            </div>
            <h3>WhatsApp Direct</h3>
            <p>Échangez instantanément avec notre équipe commerciale et technique.</p>
            <span className="contact-val">+243 979 380 002</span>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Bonjour%20WB%20MINING%20SERVICES,%20je%20souhaite%20obtenir%20des%20informations.`}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn wa-btn"
            >
              Ouvrir le chat WhatsApp <ArrowRight size={16} />
            </a>
          </div>

          {/* BOUTON APPEL TÉLÉPHONIQUE */}
          <div className="action-card phone-card">
            <div className="action-icon">
              <Phone size={32} />
            </div>
            <h3>Appel Direct</h3>
            <p>Besoin d&apos;une réponse rapide ? Appelez directement notre ligne centrale.</p>
            <span className="contact-val">+243 811 203 384</span>
            <a
              href={`tel:${phoneNumber}`}
              className="action-btn call-btn"
            >
              Lancer l&apos;appel téléphonique <ArrowRight size={16} />
            </a>
          </div>

          {/* BOUTON EMAIL */}
          <div className="action-card email-card">
            <div className="action-icon">
              <Mail size={32} />
            </div>
            <h3>Courrier Électronique</h3>
            <p>Transmettez-nous vos dossiers, appels d&apos;offres et cahiers des charges.</p>
            <span className="contact-val">{emailAddress}</span>
            <a
              href={`mailto:${emailAddress}?subject=Demande%20d%27information%20-%20WB%20MINING%20SERVICES`}
              className="action-btn mail-btn"
            >
              Ouvrir votre boîte e-mail <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* FORMULAIRE & INFORMATIONS DÉTAILLÉES */}
      <section className="contact-body-section" id="formulaire-contact">
        <div className="contact-body-inner">
          
          {/* INFO SIDEBAR */}
          <div className="contact-info-panel">
            <div className="eyebrow dark">NOS COORDONNÉES</div>
            <h2>Restons en contact professionnel</h2>
            <p className="panel-desc">
              Que ce soit pour une demande d&apos;intervention sur site, une fourniture d&apos;équipements 
              ou un partenariat stratégique, nous sommes à votre disposition.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Adresse physique</h4>
                  <p>Siège opérationnel, Kolwezi, Lualaba, RDC</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Clock size={20} /></div>
                <div>
                  <h4>Heures d&apos;ouverture</h4>
                  <p>Lundi - Samedi : 07h30 - 17h00<br />Service d&apos;urgence 24/7 disponible</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><ShieldCheck size={20} /></div>
                <div>
                  <h4>Engagement qualité</h4>
                  <p>Réponse garantie sous 24 heures ouvrées</p>
                </div>
              </div>
            </div>

            <div className="location-box">
              <h3>Zone d&apos;intervention</h3>
              <p>Région du Katanga (Kolwezi, Lubumbashi), l&apos;ensemble de la RDC et l&apos;International.</p>
            </div>
          </div>

          {/* FORMULAIRE DÉTAILLÉ */}
          <div className="contact-form-panel">
            <div className="form-header">
              <h3>Envoyez-nous un message précis</h3>
              <p>Remplissez le formulaire ci-dessous pour recevoir une cotation ou une estimation.</p>
            </div>

            {submitted ? (
              <div className="success-message">
                <CheckCircle size={48} className="success-icon" />
                <h3>Message envoyé avec succès !</h3>
                <p>Merci de nous avoir contactés. Notre équipe examinera votre demande et vous répondra sous 24h.</p>
                <button onClick={() => setSubmitted(false)} className="submit-btn reset-btn">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="full-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Nom complet *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="ex: Jean Dupont"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Nom de l&apos;entreprise</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="ex: Enterprise Sarl"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Adresse e-mail *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nom@exemple.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+243..."
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Secteur ou service concerné</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Sélectionnez un service</option>
                    <option value="Exploitation minière">Exploitation minière</option>
                    <option value="Services industriels & Maintenance">Services industriels & Maintenance</option>
                    <option value="Commerce général & Fournitures">Commerce général & Fournitures</option>
                    <option value="Conseil, Ingénierie & Études">Conseil, Ingénierie & Études</option>
                    <option value="Transport & Logistique">Transport & Logistique</option>
                    <option value="Solutions Environnementales">Solutions Environnementales</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Détails de votre demande *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Précisez la nature de vos besoins, les délais ou le lieu du chantier..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={16} /> Envoyer votre message
                </button>
              </form>
            )}
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
        .quote-btn { white-space: nowrap; }

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

        /* CONTACT HERO */
        .contact-hero { background: #021731; color: white; padding: 60px 20px; text-align: center; }
        .contact-hero-inner { max-width: 800px; margin: auto; }
        .eyebrow { color: #facc15; font-size: 12px; font-weight: 800; letter-spacing: 1.2px; margin-bottom: 12px; text-transform: uppercase; }
        .contact-hero h1 { font-size: 38px; font-weight: 800; margin: 0 0 16px; }
        .contact-hero h1 span { color: #facc15; }
        .contact-hero p { color: #cbd5e1; font-size: 15px; margin: 0; line-height: 1.6; }

        /* DIRECT ACTION CARDS */
        .direct-actions-section { max-width: 1240px; margin: -30px auto 60px; padding: 0 20px; position: relative; z-index: 10; }
        .action-cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        .action-card { background: #fff; border-radius: 12px; padding: 30px 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; text-align: center; display: flex; flex-direction: column; align-items: center; transition: transform 0.25s, box-shadow 0.25s; }
        .action-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,0.12); }
        .action-icon { width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        
        .whatsapp-card .action-icon { background: #e8f5e9; color: #2e7d32; }
        .phone-card .action-icon { background: #eff6ff; color: #1d4ed8; }
        .email-card .action-icon { background: #fef3c7; color: #d97706; }

        .action-card h3 { font-size: 18px; font-weight: 800; margin: 0 0 8px; color: #071b35; }
        .action-card p { font-size: 13px; color: #64748b; margin: 0 0 16px; line-height: 1.5; }
        .contact-val { font-size: 15px; font-weight: 800; color: #0f172a; margin-bottom: 20px; display: block; }

        .action-btn { width: 100%; padding: 12px 18px; border-radius: 8px; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 8px; transition: opacity 0.2s; color: white; }
        .action-btn:hover { opacity: 0.9; }
        
        .wa-btn { background: #25d366; }
        .call-btn { background: #071b35; }
        .mail-btn { background: #d97706; }

        /* CONTACT BODY SECTION */
        .contact-body-section { max-width: 1240px; margin: 0 auto 70px; padding: 0 20px; }
        .contact-body-inner { display: grid; grid-template-columns: 400px 1fr; gap: 40px; align-items: start; }

        .contact-info-panel { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; }
        .eyebrow.dark { color: #d97706; font-size: 11px; }
        .contact-info-panel h2 { font-size: 24px; font-weight: 800; margin: 6px 0 12px; }
        .panel-desc { font-size: 13px; color: #475569; margin-bottom: 28px; line-height: 1.6; }

        .info-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 30px; }
        .info-item { display: flex; gap: 14px; align-items: flex-start; }
        .info-icon { background: #fff; border: 1px solid #cbd5e1; padding: 10px; border-radius: 8px; color: #071b35; flex-shrink: 0; }
        .info-item h4 { margin: 0 0 4px; font-size: 14px; font-weight: 700; color: #0f172a; }
        .info-item p { margin: 0; font-size: 12px; color: #64748b; line-height: 1.4; }

        .location-box { background: #071b35; color: white; border-radius: 8px; padding: 16px; }
        .location-box h3 { margin: 0 0 6px; font-size: 13px; color: #facc15; font-weight: 700; }
        .location-box p { margin: 0; font-size: 11px; color: #cbd5e1; }

        /* FORM PANEL */
        .contact-form-panel { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 36px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
        .form-header h3 { font-size: 22px; font-weight: 800; margin: 0 0 6px; }
        .form-header p { font-size: 13px; color: #64748b; margin: 0 0 28px; }

        .full-contact-form { display: flex; flex-direction: column; gap: 18px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 12px; font-weight: 700; color: #334155; }
        
        .form-group input, .form-group select, .form-group textarea {
          width: 100%; border: 1px solid #cbd5e1; border-radius: 6px; padding: 11px 14px; font-size: 13px; outline: none; transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: #071b35;
        }

        .submit-btn { background: #facc15; color: #071b35; border: none; border-radius: 8px; padding: 14px; font-size: 14px; font-weight: 800; display: inline-flex; align-items: center; justify-content: center; gap: 10px; transition: background 0.2s; margin-top: 10px; }
        .submit-btn:hover { background: #eab308; }

        .success-message { text-align: center; padding: 40px 20px; }
        .success-icon { color: #16a34a; margin-bottom: 16px; }
        .success-message h3 { font-size: 20px; font-weight: 800; margin: 0 0 8px; color: #071b35; }
        .success-message p { font-size: 14px; color: #64748b; margin: 0 0 24px; }
        .reset-btn { width: auto; padding: 10px 20px; margin: 0 auto; }

        /* FOOTER */
        .footer { background: #071b35; color: #94a3b8; display: flex; justify-content: space-between; padding: 24px max(20px, calc((100% - 1240px)/2)); font-size: 12px; border-top: 1px solid rgba(255,255,255,0.05); }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1024px) {
          .action-cards-grid { grid-template-columns: 1fr; }
          .contact-body-inner { grid-template-columns: 1fr; }
          .direct-actions-section { margin-top: -20px; }
        }

        @media (max-width: 900px) {
          .nav-links, .quote-btn { display: none; }
          .mobile-menu-btn { display: flex; align-items: center; justify-content: center; }
          .form-row { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .topbar { display: none; }
          .navbar { height: 64px; }
          .contact-hero h1 { font-size: 28px; }
          .contact-form-panel { padding: 20px; }
          .footer { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </main>
  );
}