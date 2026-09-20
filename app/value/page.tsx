"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  Award,
  CheckCircle2,
  Clock3,
  Eye,
  HardHat,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";

import "./culture.css";

const principles = [
  {
    number: "01",
    title: "Rigueur",
    icon: CheckCircle2,
    text: "Nous travaillons avec méthode, précision et exigence afin de garantir la qualité de nos interventions.",
  },
  {
    number: "02",
    title: "Responsabilité",
    icon: ShieldCheck,
    text: "Nous assumons nos engagements et veillons à agir avec professionnalisme à chaque étape.",
  },
  {
    number: "03",
    title: "Esprit d'équipe",
    icon: Users,
    text: "Nous favorisons la collaboration, l'écoute et la complémentarité des compétences.",
  },
  {
    number: "04",
    title: "Orientation résultats",
    icon: TrendingUp,
    text: "Nous concentrons nos efforts sur des résultats concrets, mesurables et créateurs de valeur.",
  },
  {
    number: "05",
    title: "Sécurité",
    icon: HardHat,
    text: "La sécurité constitue une priorité dans notre manière de planifier et d'exécuter nos activités.",
  },
  {
    number: "06",
    title: "Amélioration continue",
    icon: Lightbulb,
    text: "Nous cherchons constamment à apprendre, optimiser nos méthodes et améliorer nos performances.",
  },
];

const workflow = [
  {
    number: "01",
    title: "ÉCOUTER",
    description:
      "Identifier les besoins, les attentes et les contraintes de nos clients et partenaires.",
    icon: Eye,
  },
  {
    number: "02",
    title: "COMPRENDRE",
    description:
      "Analyser chaque situation avant de définir une réponse adaptée et pertinente.",
    icon: Target,
  },
  {
    number: "03",
    title: "PLANIFIER",
    description:
      "Structurer les ressources, les étapes, les délais et les responsabilités.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "EXÉCUTER",
    description:
      "Transformer les plans en actions concrètes avec rigueur et professionnalisme.",
    icon: Award,
  },
  {
    number: "05",
    title: "AMÉLIORER",
    description:
      "Évaluer les résultats et faire évoluer continuellement nos méthodes.",
    icon: TrendingUp,
  },
];

export default function CulturePage() {
  return (
    <main className="culture-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="culture-hero">
        <div className="culture-hero-image">
          <Image
            src="/images/travail.png"
            alt="Équipe et environnement de travail de WB Mining Services"
            fill
            priority
            sizes="100vw"
            className="culture-image"
          />
        </div>

        <div className="culture-overlay" />
        <div className="culture-grid" />

        <div className="culture-yellow-bar" />

        <div className="culture-container culture-hero-content">
          <div className="culture-kicker">
            <span />
            WB MINING SERVICES SARL
          </div>

          <div className="culture-hero-layout">

            <div className="culture-hero-main">
              <div className="culture-label">
                <Users size={16} />
                <span>Notre Culture</span>
              </div>

              <h1>
                L'excellence
                <span>dans chaque</span>
                engagement.
              </h1>

              <p>
                Une culture fondée sur l'excellence, l'engagement et la
                création de valeur, qui guide notre manière de travailler,
                de collaborer et de servir nos clients.
              </p>

              <div className="culture-hero-actions">
                <Link href="/contact" className="culture-btn-primary">
                  <span>Travailler avec nous</span>
                  <ArrowRight size={18} />
                </Link>

                <a href="#culture" className="culture-btn-outline">
                  <span>Découvrir notre culture</span>
                  <ArrowDown size={17} />
                </a>
              </div>
            </div>

            <div className="culture-hero-side">
              <div className="culture-side-number">05</div>

              <div className="culture-side-line" />

              <span>CULTURE</span>

              <p>
                Une façon de travailler fondée sur la rigueur,
                la responsabilité et la confiance.
              </p>
            </div>

          </div>

          <div className="culture-hero-bottom">
            <div>
              <ShieldCheck size={17} />
              <span>Responsabilité</span>
            </div>

            <div>
              <Award size={17} />
              <span>Excellence</span>
            </div>

            <div>
              <Handshake size={17} />
              <span>Engagement</span>
            </div>

            <div>
              <TrendingUp size={17} />
              <span>Création de valeur</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="culture-intro" id="culture">
        <div className="culture-container">

          <div className="culture-section-heading">
            <div className="culture-section-number">
              <span>01</span>
              <i />
              <span>NOTRE CULTURE</span>
            </div>

            <div>
              <p className="culture-eyebrow">
                Une culture qui guide l'action
              </p>

              <h2>
                La confiance se gagne
                <span>par les résultats.</span>
              </h2>
            </div>
          </div>

          <div className="culture-intro-grid">

            <div className="culture-intro-image">
              <Image
                src="/images/travail.png"
                alt="Travail et opérations WB Mining Services"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />

              <div className="culture-image-overlay" />

              <div className="culture-image-caption">
                <span>WBMS</span>
                <strong>WORKING CULTURE</strong>
              </div>
            </div>

            <div className="culture-intro-content">

              <div className="culture-big-quote">
                “
              </div>

              <p className="culture-lead">
                Chez WB MINING SERVICES SARL, notre culture repose sur une
                conviction simple : la confiance se gagne par la qualité du
                travail, la tenue des engagements et la constance dans les
                résultats.
              </p>

              <div className="culture-divider" />

              <p>
                Nous cultivons un environnement professionnel fondé sur la
                rigueur, la responsabilité, le respect, l'esprit d'équipe et
                l'orientation résultats. Chaque collaborateur est encouragé à
                agir avec professionnalisme, à prendre des initiatives et à
                contribuer activement à la réussite collective.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CULTURE STATEMENT
      ===================================================== */}
      <section className="culture-statement">
        <div className="culture-statement-pattern" />

        <div className="culture-container">

          <div className="culture-statement-header">
            <div className="culture-section-number light">
              <span>02</span>
              <i />
              <span>NOTRE FAÇON DE TRAVAILLER</span>
            </div>

            <h2>
              Écouter.
              <span>Comprendre.</span>
              Planifier.
              <span>Exécuter.</span>
            </h2>
          </div>

          <div className="culture-workflow">

            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="culture-workflow-card"
                  key={item.number}
                >
                  <div className="workflow-top">
                    <span>{item.number}</span>

                    <div className="workflow-icon">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="workflow-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>

                  {index < workflow.length - 1 && (
                    <div className="workflow-connector">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          <div className="culture-statement-text">
            <p>
              Notre culture nous conduit à écouter avant d'agir, comprendre
              avant de proposer, planifier avant d'exécuter et améliorer
              continuellement nos méthodes.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          QUALITY / SECURITY / DEADLINES
      ===================================================== */}
      <section className="culture-standards">
        <div className="culture-container">

          <div className="culture-standards-grid">

            <div className="culture-standards-title">
              <div className="culture-section-number">
                <span>03</span>
                <i />
                <span>NOS STANDARDS</span>
              </div>

              <p className="culture-eyebrow">
                Une exigence quotidienne
              </p>

              <h2>
                Faire les choses
                <span>correctement.</span>
              </h2>

              <p className="culture-standards-intro">
                Nous accordons une attention particulière à la qualité,
                à la sécurité, au respect des délais et à la satisfaction
                de nos clients et partenaires.
              </p>
            </div>

            <div className="culture-standard-items">

              <div className="culture-standard-item">
                <div className="standard-icon">
                  <Award size={22} />
                </div>

                <div>
                  <span>01</span>
                  <h3>Qualité</h3>
                  <p>
                    Maintenir un niveau d'exigence élevé dans chacune de
                    nos prestations.
                  </p>
                </div>
              </div>

              <div className="culture-standard-item">
                <div className="standard-icon">
                  <HardHat size={22} />
                </div>

                <div>
                  <span>02</span>
                  <h3>Sécurité</h3>
                  <p>
                    Intégrer la sécurité dans notre planification et dans
                    l'exécution de nos activités.
                  </p>
                </div>
              </div>

              <div className="culture-standard-item">
                <div className="standard-icon">
                  <Clock3 size={22} />
                </div>

                <div>
                  <span>03</span>
                  <h3>Délais</h3>
                  <p>
                    Respecter les échéances et assurer une exécution
                    organisée des projets.
                  </p>
                </div>
              </div>

              <div className="culture-standard-item">
                <div className="standard-icon">
                  <Handshake size={22} />
                </div>

                <div>
                  <span>04</span>
                  <h3>Satisfaction</h3>
                  <p>
                    Construire des relations professionnelles fondées sur
                    l'écoute et la confiance.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="culture-principles">
        <div className="culture-container">

          <div className="culture-principles-header">
            <div>
              <div className="culture-section-number">
                <span>04</span>
                <i />
                <span>NOS PRINCIPES</span>
              </div>

              <p className="culture-eyebrow">
                Ce qui guide nos équipes
              </p>

              <h2>
                Une culture
                <span>en action.</span>
              </h2>
            </div>

            <p>
              Notre environnement professionnel encourage chaque
              collaborateur à prendre des initiatives, à assumer ses
              responsabilités et à contribuer à la réussite collective.
            </p>
          </div>

          <div className="culture-principles-grid">

            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className="culture-principle-card"
                  key={principle.number}
                >
                  <div className="principle-top">
                    <span>{principle.number}</span>

                    <div className="principle-icon">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="principle-letter">
                    {principle.title.charAt(0)}
                  </div>

                  <div className="principle-body">
                    <h3>{principle.title}</h3>

                    <p>{principle.text}</p>

                    <div className="principle-bottom">
                      <span>WBMS</span>
                      <i />
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          RELATIONSHIPS
      ===================================================== */}
      <section className="culture-relations">
        <div className="culture-container">

          <div className="culture-relations-grid">

            <div className="culture-relations-visual">
              <div className="relations-number">05</div>

              <div className="relations-circle relations-circle-one" />
              <div className="relations-circle relations-circle-two" />

              <div className="relations-center">
                <Handshake size={30} />
                <span>RELATIONS</span>
                <strong>DURABLES</strong>
              </div>

              <div className="relations-tag relations-tag-one">
                Transparence
              </div>

              <div className="relations-tag relations-tag-two">
                Fiabilité
              </div>

              <div className="relations-tag relations-tag-three">
                Engagement
              </div>
            </div>

            <div className="culture-relations-content">

              <div className="culture-section-number">
                <span>05</span>
                <i />
                <span>PARTENARIATS</span>
              </div>

              <p className="culture-eyebrow">
                Au-delà de la prestation
              </p>

              <h2>
                Construire des relations
                <span>qui durent.</span>
              </h2>

              <p>
                Au-delà de la réalisation de prestations, nous cherchons à
                construire des relations professionnelles durables, fondées
                sur la transparence, la fiabilité et le respect des
                engagements.
              </p>

              <div className="relations-points">

                <div>
                  <CheckCircle2 size={18} />
                  <span>Transparence dans nos échanges</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Fiabilité dans nos engagements</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Respect de nos responsabilités</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Vision de long terme</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL MANIFESTO
      ===================================================== */}
      <section className="culture-final">

        <div className="culture-final-image">
          <Image
            src="/images/engin.png"
            alt="Opération minière et industrielle"
            fill
            sizes="100vw"
          />
        </div>

        <div className="culture-final-overlay" />
        <div className="culture-final-grid" />

        <div className="culture-container culture-final-content">

          <div className="culture-final-label">
            <span />
            NOTRE ENGAGEMENT
            <span />
          </div>

          <h2>
            Travailler avec
            <span>rigueur.</span>
            Agir avec
            <span>responsabilité.</span>
          </h2>

          <p>
            Chez WB MINING SERVICES SARL, chacun de nos projets est une
            occasion de démontrer notre savoir-faire, de créer de la valeur
            et de bâtir une réputation qui dure.
          </p>

          <div className="culture-final-signature">
            <div className="signature-line" />

            <strong>
              Notre culture : travailler avec rigueur, agir avec
              responsabilité et créer de la valeur durable.
            </strong>
          </div>

          <Link href="/contact" className="culture-final-button">
            <span>Construisons ensemble</span>
            <ArrowRight size={19} />
          </Link>

        </div>

        <div className="culture-final-footer">
          <div>
            <span>RIGUEUR</span>
            <strong>01</strong>
          </div>

          <div>
            <span>RESPONSABILITÉ</span>
            <strong>02</strong>
          </div>

          <div>
            <span>ENGAGEMENT</span>
            <strong>03</strong>
          </div>

          <div>
            <span>VALEUR DURABLE</span>
            <strong>04</strong>
          </div>
        </div>

      </section>

    </main>
  );
}