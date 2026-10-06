'use client';

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Factory,
  Globe2,
  Handshake,
  HardHat,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="wb-page">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="contact-mini">
            <span><Phone size={13} fill="currentColor" /> +243 979 380 002</span>
            <span><Mail size={13} /> contact@wbminingservices.com</span>
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
          <a href="#" className="brand">
            <Image
              src="/logo/wb-mining-services.jpeg"
              alt="WB Mining Services"
              width={160}
              height={50}
              priority
              className="logo"
            />
          </a>

          <nav className="nav-links">
            {["Accueil", "À propos", "Services", "Secteurs", "Réalisations", "Actualités", "Contact"].map(
              (item, index) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className={index === 0 ? "active" : ""}>
                  {item}
                </a>
              )
            )}
          </nav>

          <a href="#contact" className="quote-btn">
            Demander un devis <ArrowRight size={15} />
          </a>

          <button className="mobile-menu" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="accueil">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">EXPLOITATION • SERVICES • SOLUTIONS DURABLES</div>

            <h1>
              Votre partenaire de confiance
              <br />
              dans le <span>secteur minier et industriel</span>
            </h1>

            <p>
              WB MINING SERVICES SARL accompagne les entreprises, les institutions
              et les partenaires dans leurs projets miniers, industriels et commerciaux
              en RDC et à l&apos;international.
            </p>

            <div className="hero-actions">
              <a href="#services" className="primary-btn">Nos services <ArrowRight size={17} /></a>
              <a href="#contact" className="outline-btn">Nous contacter</a>
            </div>
          </div>

          <QuoteForm />
        </div>

        <div className="trust-strip">
          <TrustItem icon={<ShieldCheck />} title="Fiabilité" text="Des solutions durables et sécurisées" />
          <TrustItem icon={<Wrench />} title="Expertise" text="Une équipe qualifiée et expérimentée" />
          <TrustItem icon={<Handshake />} title="Partenariat" text="Construisons ensemble votre succès" />
          <TrustItem icon={<Leaf />} title="Engagement" text="Pour un avenir plus durable" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="à-propos">
        <div className="about-image">
          <div className="yellow-shape" />
          
          <div 
            className="about-photo"
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0,0,0,.05), rgba(0,0,0,.05)), url("/images/travail.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center 15%'
            }}
          >
            <div className="photo-overlay">
              <HardHat size={28} />
              <span>WB MINING SERVICES</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="eyebrow dark">À PROPOS DE NOUS</div>
          <h2>WB MINING SERVICES <span>SARL</span></h2>
          <h3>Une expertise au service de vos ambitions</h3>
          <p>
            Nous sommes une entreprise spécialisée dans les activités minières,
            industrielles et commerciales. Notre mission est de fournir des solutions
            innovantes, fiables et durables pour répondre aux besoins de nos clients
            et contribuer au développement économique.
          </p>
          <a href="#contact" className="primary-btn">Découvrir notre entreprise <ArrowRight size={16} /></a>
        </div>

        <div className="stats">
          <Stat icon={<Users />} value="+10" label="Années d'expérience" />
          <Stat icon={<span className="diamond">◆</span>} value="+50" label="Projets réalisés" />
          <Stat icon={<Handshake />} value="+20" label="Partenaires de confiance" />
          <Stat icon={<Globe2 />} value="Présence" label="RDC & International" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark">NOS SERVICES</div>
            <h2>Des solutions complètes pour tous vos projets</h2>
            <p>Nous proposons une gamme complète de services adaptés à vos besoins spécifiques.</p>
          </div>
          <a href="#contact" className="small-btn">Voir tous nos services <ArrowRight size={14} /></a>
        </div>

        <div className="service-grid">
          <ServiceCard icon={<HardHat />} title="Exploitation minière" text="Extraction et valorisation des ressources minières avec rigueur." />
          <ServiceCard icon={<Wrench />} title="Services industriels" text="Maintenance, fournitures d'équipements et support technique." />
          <ServiceCard icon={<Truck />} title="Commerce général" text="Fourniture globale de biens et matériaux industriels." />
          <ServiceCard icon={<Factory />} title="Conseil & Ingénierie" text="Études de faisabilité, accompagnement et expertise technique." />
          <ServiceCard icon={<Truck />} title="Transport & Logistique" text="Acheminement sécurisé, rapide et efficace sur site." />
          <ServiceCard icon={<Leaf />} title="Environnement" text="Solutions écoresponsables pour une exploitation durable." />
        </div>
      </section>

      {/* SECTORS */}
      <section className="sectors" id="secteurs">
        <div className="sectors-inner">
          <div className="sector-intro">
            <div className="eyebrow">NOS SECTEURS D&apos;INTERVENTION</div>
            <h2>Nous intervenons dans <span>plusieurs secteurs</span></h2>
            <p>
              Nous servons des entreprises minières, industrielles, commerciales,
              des institutions et des partenaires internationaux avec excellence.
            </p>
            <a href="#contact" className="primary-btn">En savoir plus <ArrowRight size={16} /></a>
          </div>

          <div className="sector-cards">
            <Sector title="Mines" icon={<HardHat />} image="/images/mines.jpg" />
            <Sector title="Industrie" icon={<Factory />} image="/images/industrie.jpg" />
            <Sector title="Commerce" icon={<Truck />} image="/images/commerce.jpg" />
            <Sector title="Institutionnels" icon={<Factory />} image="/images/institutionnels.jpg" />
            <Sector title="International" icon={<Globe2 />} image="/images/international.jpg" />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta" id="contact">
        <div>
          <div className="eyebrow dark">UN PROJET ?</div>
          <h2>Parlons de votre prochain projet</h2>
          <p>Notre équipe est disponible pour étudier vos besoins et vous proposer une solution personnalisée.</p>
        </div>
        <a href="mailto:contact@wbminingservices.com" className="primary-btn">
          Nous contacter <ArrowRight size={16} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} WB MINING SERVICES SARL. Tous droits réservés.</div>
        <div>Kolwezi, République Démocratique du Congo</div>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #071b35; background: #fff; line-height: 1.5; }
        a { color: inherit; text-decoration: none; transition: all 0.2s ease; }
        button { font: inherit; cursor: pointer; }

        .wb-page { overflow: hidden; }
        
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
        .nav-inner { max-width: 1240px; height: 100%; margin: auto; display: flex; align-items: center; padding: 0 20px; gap: 30px; }
        .brand { display: flex; align-items: center; height: 100%; }
        .logo { max-height: 52px; width: auto; object-fit: contain; }

        .nav-links { display: flex; align-items: center; justify-content: center; gap: 28px; flex: 1; height: 100%; }
        .nav-links a { height: 100%; display: flex; align-items: center; font-size: 14px; font-weight: 600; color: #334155; position: relative; }
        .nav-links a:hover, .nav-links a.active { color: #071b35; font-weight: 700; }
        .nav-links a.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: #facc15; border-radius: 3px 3px 0 0; }
        
        .quote-btn, .primary-btn, .small-btn { background: #facc15; color: #071b35; border-radius: 8px; padding: 12px 22px; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; transition: transform 0.2s, background-color 0.2s; }
        .quote-btn:hover, .primary-btn:hover, .small-btn:hover { background: #eab308; transform: translateY(-1px); }
        .quote-btn { white-space: nowrap; }
        .mobile-menu { display: none; background: none; border: 0; color: #071b35; }

        /* HERO */
        .hero {
          position: relative;
          color: white;
          background-color: #021731;
          background-image:
            linear-gradient(90deg, rgba(2,23,49,.95) 0%, rgba(2,23,49,.85) 45%, rgba(2,23,49,.4) 70%, rgba(2,23,49,.85) 100%),
            url("/images/engin.png");
          background-repeat: no-repeat;
          background-position: 80% center;
          background-size: contain;
        }
        .hero-inner { max-width: 1240px; margin: auto; padding: 60px 20px 50px; display: flex; justify-content: space-between; align-items: center; gap: 40px; }
        .hero-copy { max-width: 680px; }
        .eyebrow { color: #facc15; font-size: 12px; font-weight: 800; letter-spacing: 1.2px; margin-bottom: 12px; text-transform: uppercase; }
        .hero h1 { font-size: 42px; line-height: 1.15; margin: 0 0 16px; font-weight: 800; letter-spacing: -.5px; }
        .hero h1 span { color: #facc15; }
        .hero p { font-size: 15px; line-height: 1.6; color: #cbd5e1; margin: 0 0 28px; max-width: 580px; }
        .hero-actions { display: flex; gap: 16px; align-items: center; }
        .outline-btn { border: 2px solid #facc15; color: #facc15; border-radius: 8px; padding: 10px 22px; font-size: 13px; font-weight: 700; transition: all 0.2s; }
        .outline-btn:hover { background: rgba(250, 204, 21, 0.1); }

        /* FORMULAIRE HERO */
        .quote-form { width: 340px; background: #071b35; border: 2px solid #facc15; border-radius: 12px; padding: 22px; box-shadow: 0 20px 35px rgba(0,0,0,.3); flex-shrink: 0; }
        .quote-title { display: flex; gap: 12px; align-items: center; margin-bottom: 16px; }
        .quote-title svg { color: #facc15; flex-shrink: 0; }
        .quote-title h3 { margin: 0; font-size: 18px; color: #fff; font-weight: 700; }
        .quote-title p { margin: 2px 0 0; font-size: 11px; color: #94a3b8; }
        .quote-form input, .quote-form select, .quote-form textarea { width: 100%; border: 1px solid #1e293b; outline: 0; background: #fff; color: #0f172a; border-radius: 6px; margin-bottom: 10px; padding: 10px 12px; font-size: 12px; font-weight: 500; }
        .quote-form textarea { height: 60px; resize: none; }
        .check { display: flex; gap: 8px; font-size: 10px; color: #94a3b8; margin: 4px 0 14px; align-items: flex-start; }
        .check input { width: 14px; height: 14px; margin-top: 1px; accent-color: #facc15; }
        .quote-submit { width: 100%; border: 0; background: #facc15; color: #071b35; border-radius: 6px; padding: 12px; font-size: 13px; font-weight: 800; transition: background 0.2s; }
        .quote-submit:hover { background: #eab308; }

        /* TRUST STRIP */
        .trust-strip { background: #031c3d; display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(255,255,255,0.08); }
        .trust-item { display: flex; align-items: center; gap: 16px; padding: 22px 30px; border-right: 1px solid rgba(250,204,21,.2); justify-content: center; }
        .trust-item:last-child { border-right: 0; }
        .trust-item svg { width: 32px; height: 32px; color: #facc15; flex-shrink: 0; }
        .trust-item h4 { margin: 0 0 2px; font-size: 14px; font-weight: 700; }
        .trust-item p { margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.3; }

        /* SECTION BASE */
        .section { max-width: 1240px; margin: auto; padding: 70px 20px; }
        
        /* ABOUT */
        .about { display: grid; grid-template-columns: 360px 1fr 240px; gap: 40px; align-items: center; }
        .about-image { height: 320px; position: relative; }
        .yellow-shape { position: absolute; left: -10px; top: 12px; width: 30px; height: 90%; background: #facc15; border-radius: 6px; }
        .about-photo { position: absolute; inset: 0; left: 10px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        
        .photo-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: rgba(255, 255, 255, 0.95);
          padding: 10px 16px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          color: #071b35;
        }
        .photo-overlay svg { color: #d97706; }
        .photo-overlay span { font-weight: 800; font-size: 12px; letter-spacing: 0.3px; }

        .about-content { border-right: 1px solid #e2e8f0; padding-right: 30px; }
        .eyebrow.dark { color: #d97706; font-size: 11px; }
        .about h2 { font-size: 28px; margin: 4px 0 2px; font-weight: 800; }
        .about h2 span { color: #d97706; }
        .about h3 { font-size: 16px; color: #475569; margin: 0 0 16px; font-weight: 600; }
        .about-content p { font-size: 13px; line-height: 1.6; color: #334155; margin: 0 0 20px; }
        
        .stats { display: flex; flex-direction: column; gap: 20px; }
        .stat { display: flex; align-items: center; gap: 14px; }
        .stat svg { width: 32px; height: 32px; color: #d97706; flex-shrink: 0; }
        .stat .diamond { color: #d97706; font-size: 24px; width: 32px; text-align: center; display: inline-block; }
        .stat strong { display: block; font-size: 18px; font-weight: 800; color: #071b35; }
        .stat span:last-child { display: block; font-size: 11px; color: #64748b; }

        /* SERVICES */
        .services { max-width: none; background: #f8fafc; padding: 70px max(20px, calc((100% - 1240px)/2)); border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; }
        .section-heading { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px; }
        .section-heading h2 { margin: 4px 0 6px; font-size: 26px; font-weight: 800; }
        .section-heading p { margin: 0; font-size: 13px; color: #64748b; }
        
        .service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .service-card { background: white; border-radius: 10px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,.03); border: 1px solid #e2e8f0; transition: transform 0.2s; position: relative; }
        .service-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,.06); }
        .service-card svg { width: 36px; height: 36px; color: #d97706; margin-bottom: 12px; }
        .service-card h4 { font-size: 15px; margin: 0 0 8px; font-weight: 700; color: #0f172a; }
        .service-card p { margin: 0; font-size: 12px; line-height: 1.5; color: #475569; }

        /* SECTORS */
        .sectors { color: white; background: linear-gradient(90deg, rgba(2,25,55,.95), rgba(2,25,55,.85)), url("https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2200&q=85") center/cover; padding: 70px 0; }
        .sectors-inner { max-width: 1240px; margin: auto; padding: 0 20px; display: grid; grid-template-columns: 360px 1fr; gap: 40px; }
        .sector-intro h2 { font-size: 26px; margin: 6px 0 12px; font-weight: 800; }
        .sector-intro h2 span { color: #facc15; }
        .sector-intro p { font-size: 13px; line-height: 1.6; color: #cbd5e1; margin: 0 0 24px; }
        
        .sector-cards { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
        .sector-card { height: 160px; border-radius: 8px; overflow: hidden; position: relative; background-size: cover; background-position: center; display: flex; align-items: flex-end; transition: transform 0.2s; }
        .sector-card:hover { transform: scale(1.02); }
        .sector-card::before { content: ""; position: absolute; inset: 0; background: linear-gradient(transparent 30%, rgba(0,0,0,.85)); }
        .sector-label { position: relative; z-index: 1; padding: 12px 10px; display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; }
        .sector-label svg { color: #facc15; width: 18px; height: 18px; flex-shrink: 0; }

        /* CONTACT CTA */
        .contact-cta { max-width: 1240px; margin: auto; padding: 60px 20px; display: flex; justify-content: space-between; align-items: center; gap: 20px; }
        .contact-cta h2 { margin: 4px 0 6px; font-size: 28px; font-weight: 800; }
        .contact-cta p { margin: 0; font-size: 14px; color: #64748b; }
        
        /* FOOTER */
        .footer { background: #071b35; color: #94a3b8; display: flex; justify-content: space-between; padding: 24px max(20px, calc((100% - 1240px)/2)); font-size: 12px; border-top: 1px solid rgba(255,255,255,0.05); }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1024px) {
          .about { grid-template-columns: 1fr; }
          .about-image { height: 260px; }
          .about-content { border-right: 0; padding-right: 0; }
          .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .service-grid { grid-template-columns: repeat(2, 1fr); }
          .sectors-inner { grid-template-columns: 1fr; }
          .sector-cards { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .nav-links, .quote-btn { display: none; }
          .mobile-menu { display: block; }
          .hero-inner { flex-direction: column; text-align: center; padding-top: 40px; }
          .hero-copy { max-width: 100%; }
          .hero p { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .quote-form { width: 100%; max-width: 400px; margin-top: 10px; }
          .trust-strip { grid-template-columns: repeat(2, 1fr); }
          .trust-item { border-bottom: 1px solid rgba(250,204,21,.2); }
        }

        @media (max-width: 640px) {
          .topbar { display: none; }
          .navbar { height: 64px; }
          .hero h1 { font-size: 30px; }
          .trust-strip { grid-template-columns: 1fr; }
          .trust-item { border-right: 0; justify-content: flex-start; }
          .service-grid { grid-template-columns: 1fr; }
          .sector-cards { grid-template-columns: repeat(2, 1fr); }
          .contact-cta { flex-direction: column; text-align: center; }
          .footer { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </main>
  );
}

function QuoteForm() {
  return (
    <div className="quote-form">
      <div className="quote-title">
        <Mail size={28} />
        <div>
          <h3>Demander un devis</h3>
          <p>Parlez-nous de votre projet, nous répondons sous 24h.</p>
        </div>
      </div>
      <input placeholder="Nom complet" />
      <input type="email" placeholder="Adresse e-mail" />
      <input placeholder="Téléphone (+243...)" />
      <select defaultValue="">
        <option value="" disabled>Type de demande</option>
        <option>Exploitation min</option>
        <option>Services industriels</option>
        <option>Commerce général</option>
        <option>d'autre services cpmplementaire</option>
      </select>
      <textarea placeholder="Décrivez succinctement votre besoin..." />
      <label className="check">
        <input type="checkbox" />
        <span>J&apos;accepte le traitement de mes données personnelles conformément à la Politique de confidentialité.</span>
      </label>
      <button className="quote-submit">Envoyer ma demande →</button>
    </div>
  );
}

function TrustItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="trust-item">
      {icon}
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="stat">
      {icon}
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="service-card">
      {icon}
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function Sector({ title, icon, image }: { title: string; icon: React.ReactNode; image: string }) {
  return (
    <div className="sector-card" style={{ backgroundImage: `url("${image}")` }}>
      <div className="sector-label">{icon}<span>{title}</span></div>
    </div>
  );
}