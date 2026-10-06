import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Cctv,
  DoorClosed,
  Headphones,
  Lamp,
  Lightbulb,
  Lock,
  MonitorCheck,
  ShieldAlert,
  ShieldCheck,
  Settings,
  Sparkles,
  Zap,
  Building,
  Factory,
  Home,
  Landmark,
  Store,
  Warehouse,
} from "lucide-react";

import "../services.css";

// Dynamic categories representing the core security sub-services
const securityServices = [
  {
    id: "fence",
    title: "Fence Électrique",
    icon: Zap,
    image: "/images/securite/fence-electrique.jpg",
    features: [
      "Clôtures électriques haute sécurité",
      "Électrificateurs puissants et fiables",
      "Détecteurs d'intrusions et alarmes instantanées",
      "Protection périmétrique dissuasive",
      "Installation professionnelle et maintenance",
    ],
  },
  {
    id: "cameras",
    title: "Caméras de Surveillance",
    icon: Camera,
    image: "/images/securite/cameras-surveillance.jpg",
    features: [
      "Caméras IP haute définition (Full HD & 4K)",
      "Vision nocturne et technologie infrarouge",
      "Enregistrement continu 24h/24 et 7j/7",
      "Accès à distance sur mobile, tablette & PC",
      "Installation et configuration complètes",
    ],
  },
  {
    id: "eclairage",
    title: "Éclairage Public",
    icon: Lamp,
    image: "/images/securite/eclairage-public.jpg",
    features: [
      "Lampadaires LED solaires et classiques",
      "Éclairage optimisé des rues, avenues et parkings",
      "Économie d'énergie et grande durabilité",
      "Étude, fourniture et pose d'équipements",
      "Service de maintenance préventive",
    ],
  },
  {
    id: "portes",
    title: "Portes Blindées",
    icon: DoorClosed,
    image: "/images/securite/portes-blindees.jpg",
    features: [
      "Portes blindées certifiées anti-effraction",
      "Haute résistance mécanique et coupe-feu",
      "Systèmes de verrouillage multipoints avancés",
      "Conception sur-mesure pour tous bâtiments",
      "Installation hautement sécurisée",
    ],
  },
  {
    id: "barriere",
    title: "Barrière Motorisée",
    icon: ShieldAlert,
    image: "/images/securite/barriere-motorisee.jpg",
    features: [
      "Barrières automatiques pour accès contrôlés",
      "Commandes à distance (télécommande, badge, LPR)",
      "Robustes, rapides et hautement sécurisées",
      "Intégration fluide avec contrôle d'accès",
      "Installation professionnelle et maintenance",
    ],
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Sécurité Renforcée",
    text: "Des solutions complètes et dissuasives pour protéger durablement vos infrastructures et vos biens.",
  },
  {
    icon: Settings,
    title: "Technologies Modernes",
    text: "Utilisation d'équipements de pointe intégrant les dernières innovations technologiques et réseau.",
  },
  {
    icon: MonitorCheck,
    title: "Installation Pro",
    text: "Pose et configuration réalisées par des techniciens qualifiés selon des normes strictes.",
  },
  {
    icon: Clock,
    title: "Maintenance Rapide",
    text: "Assistance technique et interventions réactives pour garantir une continuité de service 24/7.",
  },
  {
    icon: Headphones,
    title: "Service Client Réactif",
    text: "Un accompagnement personnalisé et une écoute constante pour répondre à tous vos besoins.",
  },
];

const engagements = [
  "Des équipements de qualité supérieure et certifiés.",
  "Respect rigoureux des normes et standards de sécurité internationaux.",
  "Solutions adaptées à vos contraintes opérationnelles et à votre budget.",
  "Intervention rapide et suivi technique personnalisé.",
  "Garantie formelle sur l'ensemble de nos produits et services.",
];

const applicationDomains = [
  { title: "Sites Industriels", icon: Factory, image: "/images/domaines/industriel.jpg" },
  { title: "Résidences Privées", icon: Home, image: "/images/domaines/residence.jpg" },
  { title: "Entreprises & Bureaux", icon: Building, image: "/images/domaines/bureaux.jpg" },
  { title: "Établissements Publics", icon: Landmark, image: "/images/domaines/public.jpg" },
  { title: "Complexes Commerciaux", icon: Store, image: "/images/domaines/commercial.jpg" },
  { title: "Entrepôts & Dépôts", icon: Warehouse, image: "/images/domaines/entrepot.jpg" },
];

export default function SecuritySystemsPage() {
  return (
    <main className="service-page security-page">
      {/* HERO SECTION */}
      <section className="service-hero">
        <div className="service-hero-image">
          <Image
            src="/images/securite/hero-security.jpg"
            alt="Systèmes de sécurité intelligents"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="service-hero-overlay" />

        <div className="service-container service-hero-content">
          <div className="service-number">
            <span>09</span>
            SERVICE
          </div>

          <div className="service-eyebrow">
            WB MINING SERVICES SARL
          </div>

          <h1>
            FENCE ÉLECTRIQUE, CAMÉRAS, <strong>ÉCLAIRAGE & SÉCURITÉ</strong>
          </h1>

          <div className="service-hero-extra">
            SOLUTIONS INTELLIGENTES DE PROTECTION
          </div>

          <p className="service-hero-slogan">
            Des solutions de sécurité intelligentes
            <br />
            pour une protection maximale et continue.
          </p>

          <p className="service-hero-description">
            WB MINING SERVICES SARL vous propose des systèmes de sécurité modernes, fiables et performants pour protéger vos personnes, vos biens et vos infrastructures. Nos équipements sont sélectionnés avec soin et installés par des professionnels qualifiés.
          </p>

          <div className="service-actions">
            <Link
              href="/contact"
              className="service-btn service-btn-primary"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#nos-equipements"
              className="service-btn service-btn-outline"
            >
              Nos solutions
            </Link>
          </div>
        </div>

        <a href="#nos-equipements" className="service-scroll" aria-label="Découvrir nos équipements">
          <span>Découvrir</span>
          <ArrowDown size={17} />
        </a>
      </section>

      {/* INTRO SECTION */}
      <section className="service-intro">
        <div className="service-container">
          <div className="service-intro-grid">
            <div>
              <div className="service-label">
                <span />
                SÉCURITÉ SMART & PROTECTION TOTALE
              </div>

              <h2>
                Protéger vos acquis.
                <br />
                Garantir votre sérénité 24h/24.
              </h2>
            </div>

            <div className="service-intro-text">
              <p>
                <strong>WB MINING SERVICES SARL</strong> conçoit, fournit et installe des architectures de sécurité électroniques et physiques de haut niveau. Nos dispositifs sont spécialement configurés pour s'adapter aux exigences extrêmes des sites miniers, industriels et tertiaires.
              </p>

              <p>
                Que ce soit pour le contrôle d'accès, la vidéosurveillance, la protection périmétrique ou l'éclairage de sécurité, nous garantissons une sérénité totale grâce à une exécution irréprochable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED EQUIPMENT / SERVICES GRID */}
      <section id="nos-equipements" className="service-offerings">
        <div className="service-container">
          <div className="service-heading">
            <div className="service-label">
              <span />
              NOS SOLUTIONS SUR-MESURE
            </div>

            <h2>
              Une protection intégrée
              <br />
              adaptée à chaque vulnérabilité.
            </h2>

            <p>
              Découvrez notre gamme complète d'équipements de sécurité de dernière génération.
            </p>
          </div>

          <div className="security-cards-grid">
            {securityServices.map((service) => {
              const Icon = service.icon;

              return (
                <article className="security-card" key={service.id}>
                  <div className="security-card-header">
                    <div className="security-card-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{service.title}</h3>
                  </div>

                  <div className="security-card-body">
                    <ul className="security-features-list">
                      {service.features.map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} className="feature-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="security-card-footer">
                    <Link href="/contact" className="security-card-link">
                      <span>En savoir plus</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ATOUTS SECTION */}
      <section className="service-advantages">
        <div className="service-container">
          <div className="service-heading service-heading-center">
            <div className="service-label">
              <span />
              NOS AVANTAGES
              <span />
            </div>

            <h2>
              Pourquoi faire confiance à
              <br />
              WB MINING SERVICES SARL ?
            </h2>
          </div>

          <div className="security-advantages-grid">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <article className="service-advantage-card" key={item.title}>
                  <div className="service-advantage-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS & QUALITE */}
      <section className="security-engagements-section">
        <div className="service-container">
          <div className="security-engagements-box">
            <div className="service-label service-label-light">
              <span />
              NOS ENGAGEMENTS QUALITÉ
            </div>

            <h2>
              Des normes strictes pour une
              <br />
              fiabilité sans compromis.
            </h2>

            <div className="engagements-list-grid">
              {engagements.map((eng, index) => (
                <div className="engagement-item" key={index}>
                  <div className="engagement-number">{`0${index + 1}`}</div>
                  <p>{eng}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINES D'APPLICATION */}
      <section className="security-domains-section">
        <div className="service-container">
          <div className="service-heading service-heading-center">
            <div className="service-label">
              <span />
              DOMAINES D'APPLICATION
              <span />
            </div>

            <h2>
              Nos interventions couvrent
              <br />
              tous les secteurs clés.
            </h2>
          </div>

          <div className="domains-grid">
            {applicationDomains.map((domain, idx) => {
              const Icon = domain.icon;

              return (
                <div className="domain-card" key={idx}>
                  <div className="domain-icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <h4>{domain.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="cleaning-final">
        <div className="service-container">
          <div className="cleaning-final-inner">
            <div className="cleaning-final-icon">
              <ShieldCheck size={32} />
            </div>

            <div>
              <span>SÉCURITÉ SMART, PROTECTION TOTALE</span>

              <h2>
                Prêt à sécuriser vos installations
                <br />
                <strong>avec nos experts ?</strong>
              </h2>

              <p>
                Contactez notre équipe dès aujourd'hui pour un audit de sécurité gratuit et une proposition technique sur-mesure.
              </p>
            </div>

            <Link href="/contact" className="service-btn service-btn-dark">
              Contactez-nous
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}