import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Construction,
  Factory,
  HardHat,
  Layers3,
  Ruler,
  ShieldCheck,
  Target,
  Truck,
  Wrench,
} from "lucide-react";

import "../service.css";

const services = [
  {
    icon: Layers3,
    title: "Blocs de ciment",
    text: "Production, façonnage, vente et livraison de blocs de ciment destinés aux projets résidentiels, industriels, commerciaux et institutionnels.",
  },
  {
    icon: Factory,
    title: "Bâtiments industriels",
    text: "Construction de bâtiments et installations adaptés aux contraintes opérationnelles des secteurs minier, industriel et logistique.",
  },
  {
    icon: Building2,
    title: "Bureaux & logements",
    text: "Réalisation de bâtiments administratifs, bases-vie, logements et espaces professionnels fonctionnels, modernes et durables.",
  },
  {
    icon: Construction,
    title: "Infrastructures",
    text: "Construction et réhabilitation d'écoles, bâtiments communautaires, infrastructures techniques et ouvrages de service.",
  },
  {
    icon: Truck,
    title: "Routes & pistes minières",
    text: "Aménagement, ouverture, remise en état et entretien de routes, voies d'accès et pistes adaptées aux environnements industriels et miniers.",
  },
  {
    icon: Wrench,
    title: "Terrassement & fondations",
    text: "Préparation des sites, excavation, nivellement, compactage et réalisation de fondations selon les exigences techniques du projet.",
  },
  {
    icon: HardHat,
    title: "Réhabilitation d'ouvrages",
    text: "Rénovation, remise en état et amélioration d'infrastructures existantes afin d'en renforcer la sécurité, la fonctionnalité et la durabilité.",
  },
  {
    icon: ShieldCheck,
    title: "Drainage & assainissement",
    text: "Réalisation d'ouvrages de drainage, évacuation des eaux et assainissement pour sécuriser et pérenniser les infrastructures.",
  },
  {
    icon: Ruler,
    title: "Gestion & suivi de projets",
    text: "Planification, coordination, supervision et contrôle des différentes phases du projet jusqu'à sa réception.",
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Qualité maîtrisée",
    text: "Une attention constante portée à la conformité, à la finition et à la durabilité de chaque ouvrage.",
  },
  {
    icon: HardHat,
    title: "Culture sécurité",
    text: "La sécurité des équipes, des partenaires et des installations est intégrée à chaque phase d'exécution.",
  },
  {
    icon: Wrench,
    title: "Ressources adaptées",
    text: "Des moyens humains, techniques et matériels mobilisés en fonction des contraintes de chaque chantier.",
  },
  {
    icon: CheckCircle2,
    title: "Respect des engagements",
    text: "Une organisation orientée vers le respect des spécifications techniques, des délais et des objectifs convenus.",
  },
  {
    icon: Target,
    title: "Orientation résultats",
    text: "Chaque intervention vise un résultat concret, durable et parfaitement adapté aux besoins opérationnels du client.",
  },
];

const method = [
  {
    number: "01",
    title: "ANALYSE DU BESOIN",
    text: "Compréhension des objectifs, contraintes, délais et exigences techniques du projet.",
  },
  {
    number: "02",
    title: "ÉTUDE & PLANIFICATION",
    text: "Évaluation du terrain, définition de la solution technique et organisation des ressources.",
  },
  {
    number: "03",
    title: "MOBILISATION",
    text: "Déploiement des équipes, équipements, matériaux et moyens nécessaires au démarrage du chantier.",
  },
  {
    number: "04",
    title: "EXÉCUTION & CONTRÔLE",
    text: "Réalisation des travaux avec suivi opérationnel, contrôle qualité et supervision permanente.",
  },
  {
    number: "05",
    title: "RÉCEPTION & LIVRAISON",
    text: "Finalisation des travaux, vérifications, réception et livraison conformément aux engagements.",
  },
];

const projectShowcase = [
  {
    number: "01",
    image: "/images/industrie.jpg",
    alt: "Construction industrielle par WB Mining Services",
    title: "Construction industrielle",
    category: "Bâtiments & infrastructures",
  },
  {
    number: "02",
    image: "/images/travail.png",
    alt: "Travaux de génie civil WB Mining Services",
    title: "Travaux de génie civil",
    category: "Aménagement & infrastructures",
  },
  {
    number: "03",
    image: "/images/engin.png",
    alt: "Équipements de chantier WB Mining Services",
    title: "Opérations de chantier",
    category: "Terrassement & équipements",
  },
];

export default function ConstructionGenieCivilPage() {
  return (
    <main className="service-page construction-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="service-hero">
        <div className="service-hero-image">
          <Image
            src="/images/industrie.jpg"
            alt="Construction et génie civil - WB Mining Services SARL"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="service-hero-overlay" />

        <div className="service-container service-hero-content">
          <div className="service-number">
            <span>03</span>
            SERVICE
          </div>

          <div className="service-eyebrow">
            WB MINING SERVICES SARL
          </div>

          <h1>
            CONSTRUCTION
            <strong>& GÉNIE CIVIL</strong>
          </h1>

          <p className="service-hero-slogan">
            Des infrastructures solides.
            <br />
            Des projets conçus pour durer.
          </p>

          <p className="service-hero-description">
            WB Mining Services SARL accompagne les entreprises minières,
            industrielles, institutions et partenaires privés dans la
            conception, la réalisation et la réhabilitation d'infrastructures
            adaptées aux réalités du terrain.
          </p>

          <div className="service-actions">
            <Link
              href="/contact"
              className="service-btn service-btn-primary"
            >
              Demander une étude
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#nos-services"
              className="service-btn service-btn-outline"
            >
              Découvrir nos prestations
            </Link>
          </div>
        </div>

        <a
          href="#nos-services"
          className="service-scroll"
          aria-label="Découvrir nos services de construction"
        >
          <span>Découvrir</span>
          <ArrowDown size={17} />
        </a>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="service-intro">
        <div className="service-container">
          <div className="service-intro-grid">
            <div>
              <div className="service-label">
                <span />
                NOTRE EXPERTISE
              </div>

              <h2>
                Construire avec rigueur.
                <br />
                Livrer avec confiance.
              </h2>
            </div>

            <div className="service-intro-text">
              <p>
                Nos interventions couvrent plusieurs domaines du bâtiment,
                des travaux publics et du génie civil, depuis la préparation
                du site jusqu'à la réception finale des ouvrages.
              </p>

              <p>
                Notre approche repose sur une compréhension précise des
                besoins du client, une planification rigoureuse et une
                exécution adaptée aux exigences techniques, opérationnelles
                et environnementales du projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section id="nos-services" className="service-offerings">
        <div className="service-container">
          <div className="service-heading">
            <div className="service-label">
              <span />
              NOS DOMAINES D'INTERVENTION
            </div>

            <h2>
              Une expertise complète
              <br />
              pour vos infrastructures.
            </h2>

            <p>
              Nous mobilisons des compétences complémentaires pour intervenir
              sur des projets de différentes tailles, depuis les travaux
              préparatoires jusqu'à la réalisation complète des ouvrages.
            </p>
          </div>

          <div className="service-offerings-grid">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="service-offering-card"
                  key={item.title}
                >
                  <div className="service-offering-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <span className="service-card-line" />

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="service-card-arrow">
                    <ArrowRight size={16} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGAGEMENTS / ATOUTS
      ====================================================== */}
      <section className="service-advantages">
        <div className="service-container">
          <div className="service-heading service-heading-center">
            <div className="service-label">
              <span />
              NOS ENGAGEMENTS
              <span />
            </div>

            <h2>
              La performance au cœur
              <br />
              de chaque chantier.
            </h2>

            <p>
              Une organisation pensée pour assurer la qualité des ouvrages,
              la maîtrise des opérations et la satisfaction de nos partenaires.
            </p>
          </div>

          <div className="service-advantages-grid">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="service-advantage-card"
                  key={item.title}
                >
                  <div className="service-advantage-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROCHE
      ====================================================== */}
      <section className="service-method-section">
        <div className="service-container">
          <div className="service-method-grid">
            <div className="service-method-copy">
              <div className="service-label service-label-light">
                <span />
                NOTRE MÉTHODOLOGIE
              </div>

              <h2>
                Une maîtrise complète,
                <br />
                de l'étude à la livraison.
              </h2>

              <p>
                Chaque projet suit un processus structuré permettant
                d'anticiper les contraintes, de coordonner efficacement
                les ressources et de garantir la cohérence de l'exécution.
              </p>

              <div className="service-method-quote">
                <ClipboardCheck size={25} strokeWidth={1.7} />

                <span>
                  Planifier avec précision, exécuter avec rigueur et
                  contrôler chaque étape pour construire durablement.
                </span>
              </div>
            </div>

            <div className="service-method-list">
              {method.map((item) => (
                <div
                  className="service-method-item"
                  key={item.number}
                >
                  <span className="service-method-number">
                    {item.number}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}
      <section className="service-projects">
        <div className="service-container">
          <div className="service-heading service-heading-center">
            <div className="service-label">
              <span />
              SUR LE TERRAIN
              <span />
            </div>

            <h2>
              Notre savoir-faire
              <br />
              en action.
            </h2>

            <p>
              Des solutions concrètes pour répondre aux besoins des projets
              de construction, d'infrastructure et d'aménagement.
            </p>
          </div>

          <div className="service-project-grid">
            {projectShowcase.map((project) => (
              <article
                className="service-project-card"
                key={project.number}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />

                <div>
                  <span>{project.number}</span>

                  <strong>{project.title}</strong>

                  <small>{project.category}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="service-cta">
        <div className="service-container service-cta-inner">
          <div>
            <span>UN PROJET À RÉALISER ?</span>

            <h2>
              Construisons ensemble
              <br />
              des infrastructures durables.
            </h2>

            <p>
              Présentez-nous votre projet. Notre équipe étudiera votre besoin
              afin de vous proposer une approche adaptée à vos objectifs et
              aux réalités de votre environnement.
            </p>
          </div>

          <Link
            href="/contact"
            className="service-btn service-btn-dark"
          >
            Parler à notre équipe
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}