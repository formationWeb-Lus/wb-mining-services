import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Handshake,
  Layers3,
  PackageCheck,
  Settings2,
  ShieldCheck,
  Target,
  Truck,
  Users,
} from "lucide-react";

import "./about.css";

const capabilities = [
  {
    icon: PackageCheck,
    title: "Ressources",
    text: "Mobilisation des ressources nécessaires pour répondre aux exigences opérationnelles de nos clients.",
  },
  {
    icon: Settings2,
    title: "Efficacité opérationnelle",
    text: "Des solutions pensées pour soutenir la continuité et l'efficacité des activités.",
  },
  {
    icon: Layers3,
    title: "Approvisionnement",
    text: "Une capacité à accompagner les besoins d'approvisionnement et de fourniture.",
  },
  {
    icon: Truck,
    title: "Logistique",
    text: "Des prestations adaptées aux réalités logistiques et aux contraintes du terrain.",
  },
  {
    icon: Settings2,
    title: "Équipements",
    text: "Des solutions et ressources adaptées aux besoins en équipements et prestations techniques.",
  },
  {
    icon: Users,
    title: "Services associés",
    text: "Un accompagnement multiservices permettant de répondre à différents besoins au sein d'un même projet.",
  },
];

const principles = [
  "Comprendre les besoins",
  "Mobiliser les ressources appropriées",
  "Répondre aux exigences opérationnelles",
  "Respecter nos engagements",
  "Créer une valeur durable",
  "Construire des relations de confiance",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <Image
            src="/images/industrie.jpg"
            alt="Activité industrielle et minière"
            fill
            priority
            sizes="100vw"
            className="about-hero-image"
          />
        </div>

        <div className="about-hero-overlay" />

        <div className="about-container about-hero-content">
          <div className="about-eyebrow">
            <span />
            WB MINING SERVICES SARL
          </div>

          <h1>
            Plus qu'un prestataire,
            <strong>un partenaire fiable.</strong>
          </h1>

          <p>
            Une entreprise congolaise spécialisée dans la fourniture de
            services, solutions et prestations Multiservices destinés aux
            entreprises, institutions, organisations, entrepreneurs et
            particuliers.
          </p>

          <div className="about-hero-actions">
            <Link href="/services" className="about-btn about-btn-primary">
              Découvrir nos services
              <ArrowRight size={18} />
            </Link>

            <Link href="/contact" className="about-btn about-btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>

        <a href="#qui-sommes-nous" className="about-scroll">
          <span>Découvrir</span>
          <ArrowDown size={18} />
        </a>
      </section>

      {/* =========================================================
          QUI SOMMES-NOUS
      ========================================================== */}
      <section id="qui-sommes-nous" className="about-intro">
        <div className="about-container">
          <div className="about-section-heading">
            <div className="about-label">
              <span />
              QUI SOMMES-NOUS ?
            </div>

            <h2>
              Une entreprise congolaise
              <br />
              tournée vers la création de valeur.
            </h2>
          </div>

          <div className="about-intro-grid">
            <div className="about-intro-image">
              <Image
                src="/images/travail.png"
                alt="Équipe et opérations sur le terrain"
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
              />

              <div className="about-image-tag">
                <span>01</span>
                <div>
                  <strong>Expertise</strong>
                  <small>Engagement & proximité</small>
                </div>
              </div>
            </div>

            <div className="about-intro-content">
              <p className="about-lead">
                <strong>WB MINING SERVICES SARL</strong> est une entreprise
                congolaise spécialisée dans la fourniture de services, de
                solutions et de prestations Multiservices destinés aux
                entreprises minières, industrielles et commerciales, aux
                institutions, organisations, entrepreneurs et particuliers.
              </p>

              <p>
                Nous accompagnons nos clients et partenaires dans leurs
                activités en leur apportant des solutions adaptées à leurs
                exigences opérationnelles, fondées sur la{" "}
                <strong>qualité, la fiabilité, la réactivité</strong> et la
                création de valeur.
              </p>

              <div className="about-highlight">
                <div className="about-highlight-icon">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <strong>Une approche orientée vers les besoins réels</strong>
                  <p>
                    Notre objectif est de comprendre les réalités de nos
                    clients afin de proposer des réponses concrètes,
                    adaptées et performantes.
                  </p>
                </div>
              </div>

              <p>
                Notre positionnement s'appuie sur une compréhension concrète
                des enjeux auxquels les organisations sont confrontées au
                quotidien : disponibilité des ressources, efficacité
                opérationnelle, approvisionnement, logistique, équipements,
                prestations techniques et services associés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POSITIONNEMENT
      ========================================================== */}
      <section className="about-positioning">
        <div className="about-container">
          <div className="about-positioning-grid">
            <div className="about-positioning-copy">
              <div className="about-label about-label-light">
                <span />
                NOTRE POSITIONNEMENT
              </div>

              <h2>
                Comprendre.
                <br />
                Mobiliser.
                <br />
                Contribuer.
              </h2>

              <div className="about-line" />

              <p>
                À travers cette approche, WB MINING SERVICES SARL ambitionne
                d'être bien plus qu'un simple prestataire : un partenaire
                fiable et engagé, capable de comprendre les besoins, de
                mobiliser les ressources appropriées et de contribuer
                concrètement à la réussite de ses clients et partenaires.
              </p>

              <Link
                href="/mission"
                className="about-text-link"
              >
                Découvrir notre mission
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="about-positioning-visual">
              <div className="about-big-number">01</div>

              <div className="about-positioning-card">
                <Handshake size={32} />

                <h3>
                  Un partenaire
                  <br />
                  engagé
                </h3>

                <p>
                  Nous cherchons à construire des relations professionnelles
                  durables, fondées sur la confiance, la performance et le
                  respect des engagements.
                </p>
              </div>

              <div className="about-positioning-mini">
                <Target size={19} />
                <span>Orienté besoins & résultats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENJEUX
      ========================================================== */}
      <section className="about-capabilities">
        <div className="about-container">
          <div className="about-section-heading about-center">
            <div className="about-label">
              <span />
              NOS DOMAINES DE RÉPONSE
              <span />
            </div>

            <h2>
              Répondre aux enjeux
              <br />
              opérationnels du terrain.
            </h2>

            <p>
              Notre compréhension des réalités professionnelles nous permet
              d'orienter nos solutions vers les besoins essentiels de nos
              clients et partenaires.
            </p>
          </div>

          <div className="about-capabilities-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="about-capability-card"
                  key={item.title}
                >
                  <div className="about-capability-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="about-card-arrow">
                    <ArrowRight size={16} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CE QUI NOUS GUIDE
      ========================================================== */}
      <section className="about-guides">
        <div className="about-container">
          <div className="about-guides-header">
            <div>
              <div className="about-label">
                <span />
                CE QUI NOUS GUIDE
              </div>

              <h2>
                Une manière de travailler
                <br />
                fondée sur la confiance.
              </h2>
            </div>

            <p>
              Notre ambition est de construire une organisation capable
              d'apporter des réponses professionnelles, responsables et
              créatrices de valeur à chaque collaboration.
            </p>
          </div>

          <div className="about-principles">
            {principles.map((item, index) => (
              <div className="about-principle" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <CheckCircle2 size={18} />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL
      ========================================================== */}
      <section className="about-final">
        <div className="about-container">
          <div className="about-final-grid">
            <div className="about-final-image">
              <Image
                src="/images/engin.png"
                alt="Équipements et opérations"
                fill
                sizes="(max-width: 850px) 100vw, 42vw"
              />
            </div>

            <div className="about-final-content">
              <div className="about-label">
                <span />
                NOTRE ENGAGEMENT
              </div>

              <h2>
                Construire des
                <strong>partenariats durables.</strong>
              </h2>

              <p>
                WB MINING SERVICES SARL ne se limite pas à la réalisation
                d'une prestation. Nous voulons comprendre, accompagner et
                contribuer concrètement à la réussite de ceux qui nous font
                confiance.
              </p>

              <div className="about-final-quote">
                <div />
                <p>
                  « Un partenaire fiable, capable de comprendre les besoins,
                  de mobiliser les ressources appropriées et de contribuer
                  concrètement à la réussite de ses clients et partenaires. »
                </p>
              </div>

              <Link
                href="/contact"
                className="about-btn about-btn-dark"
              >
                Travaillons ensemble
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}