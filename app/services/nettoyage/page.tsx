import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Factory,
  HardHat,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Trash2,
  Truck,
  Building2,
  Store,
} from "lucide-react";

import "../service.css";

const services = [
  {
    icon: Sparkles,
    title: "Nettoyage industriel",
    text: "Nettoyage professionnel rigoureux des installations industrielles et des chaînes de production, adapté aux normes de sécurité exigées.",
  },
  {
    icon: HardHat,
    title: "Nettoyage en milieux miniers",
    text: "Interventions spécialisées sur sites miniers et infrastructures lourdes, garantissant conformité HSE et maîtrise des risques d'exploitation.",
  },
  {
    icon: Building2,
    title: "Espaces résidentiels & ménages",
    text: "Entretien méthodique des logements, camps de travailleurs et zones résidentielles nécessitant une intervention régulière et soignée.",
  },
  {
    icon: Store,
    title: "Bureaux, magasins & commerces",
    text: "Propreté optimale des surfaces de travail et espaces commerciaux pour assurer le confort, le bien-être et la sécurité hygiénique.",
  },
  {
    icon: Factory,
    title: "Marchés & espaces publics",
    text: "Assainissement et désinfection organisés d'infrastructures publiques et lieux d'échange à haute fréquentation.",
  },
  {
    icon: Trash2,
    title: "Collecte des déchets",
    text: "Systèmes de collecte planifiée pour tous types de résidus issus des activités industrielles, commerciales et extractives.",
  },
  {
    icon: Recycle,
    title: "Tri & valorisation",
    text: "Mise en place de circuits de tri sélectif rigoureux afin de maximiser la valorisation et le recyclage des matières.",
  },
  {
    icon: Truck,
    title: "Évacuation sécurisée",
    text: "Transport régulé et acheminement des matières résiduelles vers des centres de traitement agréés.",
  },
  {
    icon: ShieldCheck,
    title: "Gestion responsable & HSE",
    text: "Protocoles d'intervention conformes aux standards internationaux en matière de santé, hygiène, sécurité et environnement.",
  },
  {
    icon: Leaf,
    title: "Solutions environnementales",
    text: "Stratégies d'accompagnement écologiques visant à réduire l'empreinte environnementale des opérations.",
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Sécurité & Conformité",
    text: "Protocoles d'intervention stricts limitant la coactivité et les risques opérationnels sur vos installations.",
  },
  {
    icon: CheckCircle2,
    title: "Continuité Opérationnelle",
    text: "Des environnements sains et structurés réduisant les temps d'arrêt et améliorant la productivité globale.",
  },
  {
    icon: Leaf,
    title: "Responsabilité RSE",
    text: "Une politique active de réduction des impacts environnementaux et de traçabilité des déchets collectés.",
  },
  {
    icon: Sparkles,
    title: "Valorisation d'Image",
    text: "Un entretien exemplaire renforçant la crédibilité et la réputation de votre marque auprès des parties prenantes.",
  },
];

const wasteTypes = [
  {
    title: "Déchets solides",
    icon: Trash2,
    className: "waste-green",
  },
  {
    title: "Déchets dangereux",
    icon: ShieldCheck,
    className: "waste-dark",
  },
  {
    title: "Déchets recyclables",
    icon: Recycle,
    className: "waste-yellow",
  },
  {
    title: "Déchets liquides",
    icon: Droplets,
    className: "waste-blue",
  },
  {
    title: "Déchets spéciaux",
    icon: Factory,
    className: "waste-brown",
  },
];

const method = [
  {
    number: "01",
    title: "ÉVALUER",
    text: "Audit sur site, cartographie des flux de déchets et évaluation des contraintes opérationnelles.",
  },
  {
    number: "02",
    title: "PLANIFIER",
    text: "Élaboration d'un plan d'intervention sur mesure (moyens humains, équipements, sécurité et fréquence).",
  },
  {
    number: "03",
    title: "INTERVENIR",
    text: "Exécution des travaux de nettoyage et de gestion des flux selon les spécifications convenues.",
  },
  {
    number: "04",
    title: "TRIER & VALORISER",
    text: "Traitement sélectif sur place pour maximiser la réutilisation et acheminement sécurisé.",
  },
  {
    number: "05",
    title: "SUIVRE & AUDITER",
    text: "Rapports d'activité, suivi de performance et ajustements stratégiques continus.",
  },
];

export default function NettoyageIndustrielPage() {
  return (
    <main className="service-page cleaning-page">
      {/* HERO SECTION */}
      <section className="service-hero">
        <div className="service-hero-image">
          <Image
            src="/images/travail.png"
            alt="Nettoyage industriel et gestion des déchets"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="service-hero-overlay" />

        <div className="service-container service-hero-content">
          <div className="service-number">
            <span>04</span>
            SERVICE
          </div>

          <div className="service-eyebrow">
            WB MINING SERVICES SARL
          </div>

          <h1>
            NETTOYAGE <strong>INDUSTRIEL</strong>
          </h1>

          <div className="service-hero-extra">
            & GESTION DES DÉCHETS
          </div>

          <p className="service-hero-slogan">
            Des environnements propres, sûrs et durables
            <br />
            au service de votre performance opérationnelle.
          </p>

          <p className="service-hero-description">
            Partenaire de confiance des industries, des entreprises minières et des collectivité, nous déployons des solutions globales d'assainissement, de maintien de la propreté et de traitement responsable des matières résiduelles.
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
              href="#nos-services"
              className="service-btn service-btn-outline"
            >
              Nos prestations
            </Link>
          </div>
        </div>

        <a href="#nos-services" className="service-scroll" aria-label="Découvrir nos services">
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
                NETTOYAGE & ENVIRONNEMENT
              </div>

              <h2>
                Des espaces sous contrôle.
                <br />
                Des opérations maîtrisées.
              </h2>
            </div>

            <div className="service-intro-text">
              <p>
                <strong>WB MINING SERVICES SARL</strong> accompagne les acteurs industriels, miniers et tertiaires dans le maintien rigoureux de leurs infrastructures et l'optimisation de leurs cycles de déchets.
              </p>

              <p>
                Grâce à un personnel qualifié et des équipements adaptés, nos interventions concilient exigence d'hygiène, sécurité au travail et réduction ciblée des empreintes écologiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="nos-services" className="service-offerings">
        <div className="service-container">
          <div className="service-heading">
            <div className="service-label">
              <span />
              NOS SERVICES COMPRENHENSIFS
            </div>

            <h2>
              Une couverture complète
              <br />
              de vos exigences sur site.
            </h2>

            <p>
              Des protocoles sur-mesure ajustés aux contraintes réglementaires, géographiques et techniques de chaque infrastructure.
            </p>
          </div>

          <div className="service-offerings-grid">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article className="service-offering-card" key={item.title}>
                  <div className="service-offering-icon">
                    <Icon size={24} />
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

      {/* ATOUTS SECTION */}
      <section className="service-advantages cleaning-advantages">
        <div className="service-container">
          <div className="service-heading service-heading-center">
            <div className="service-label">
              <span />
              NOS ATOUTS STRATÉGIQUES
              <span />
            </div>

            <h2>
              L'excellence opérationnelle
              <br />
              comme standard d'intervention.
            </h2>
          </div>

          <div className="service-advantages-grid cleaning-advantages-grid">
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

      {/* GESTION DES DECHETS */}
      <section className="waste-section">
        <div className="service-container">
          <div className="waste-header">
            <div>
              <div className="service-label service-label-light">
                <span />
                GESTION DES DÉCHETS
              </div>

              <h2>
                Traitement spécialisé de
                <br />
                toutes typologies de matières.
              </h2>
            </div>

            <p>
              Une traçabilité intégrale et des procédés sûrs pour éliminer ou valoriser vos flux de résidus en conformité avec les réglementations environnementales.
            </p>
          </div>

          <div className="waste-grid">
            {wasteTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div className={`waste-card ${item.className}`} key={item.title}>
                  <Icon size={28} />
                  <strong>{item.title}</strong>
                </div>
              );
            })}
          </div>

          <div className="waste-note">
            <Leaf size={23} />

            <div>
              <strong>Engagement d'économie circulaire</strong>
              <p>
                Nos filières privilégient la revalorisation, le tri à la source et le traitement sécurisé pour minimiser l'impact environnemental ultime de vos activités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROCHE METHODOLOGIQUE */}
      <section className="service-method-section">
        <div className="service-container">
          <div className="service-method-grid">
            <div className="service-method-copy">
              <div className="service-label service-label-light">
                <span />
                NOTRE MÉTHODOLOGIE
              </div>

              <h2>
                Propreté.
                <br />
                Sécurité.
                <br />
                Performance.
              </h2>

              <p>
                Notre démarche qualité est fondée sur l'analyse précise des contraintes terrain, la formation continue des équipes et la rigueur d'exécution.
              </p>

              <div className="service-method-quote">
                <ShieldCheck size={24} />
                <span>
                  Un environnement de travail sain est le premier levier de la prévention des risques et de l'efficacité de vos équipes.
                </span>
              </div>
            </div>

            <div className="service-method-list">
              {method.map((item) => (
                <div className="service-method-item" key={item.number}>
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

      {/* REALISATIONS SECTION */}
      <section className="service-projects">
        <div className="service-container">
          <div className="service-heading service-heading-center">
            <div className="service-label">
              <span />
              INTERVENTIONS DE TERRAIN
              <span />
            </div>

            <h2>
              Des environnements
              <br />
              maîtrisés au quotidien.
            </h2>
          </div>

          <div className="service-project-grid">
            <div className="service-project-card">
              <Image
                src="/images/travail.png"
                alt="Maintenance et nettoyage industriel"
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
              />
              <div>
                <span>01</span>
                <strong>Nettoyage industriel</strong>
              </div>
            </div>

            <div className="service-project-card">
              <Image
                src="/images/industrie.jpg"
                alt="Entretien de sites d'exploitation"
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
              />
              <div>
                <span>02</span>
                <strong>Entretien des sites</strong>
              </div>
            </div>

            <div className="service-project-card">
              <Image
                src="/images/engin.png"
                alt="Gestion et logistique des déchets"
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
              />
              <div>
                <span>03</span>
                <strong>Gestion & évacuation</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT FINAL */}
      <section className="cleaning-final">
        <div className="service-container">
          <div className="cleaning-final-inner">
            <div className="cleaning-final-icon">
              <Leaf size={32} />
            </div>

            <div>
              <span>ENGAGEMENT CONTINU</span>

              <h2>
                Propreté, sécurité,
                <br />
                <strong>environnement & performance.</strong>
              </h2>

              <p>
                Faites confiance à notre expertise pour créer et maintenir des environnements de travail irréprochables, durables et conformes à vos enjeux.
              </p>
            </div>

            <Link href="/contact" className="service-btn service-btn-dark">
              Demander un devis
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}