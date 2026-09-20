"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Check,
  Clock3,
  Globe2,
  Handshake,
  Lightbulb,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import "./vision.css";

const pillars = [
  {
    number: "01",
    letter: "P",
    title: "Professionnalisme",
    icon: Award,
    description:
      "Nous plaçons la rigueur, la compétence, la qualité et l'exigence professionnelle au cœur de chacune de nos interventions.",
  },
  {
    number: "02",
    letter: "I",
    title: "Intégralité",
    icon: ShieldCheck,
    description:
      "Nous adoptons une approche globale afin de comprendre les besoins de nos clients et d'apporter des réponses cohérentes.",
  },
  {
    number: "03",
    letter: "L",
    title: "Leadership",
    icon: TrendingUp,
    description:
      "Nous voulons être un acteur moteur dans nos secteurs en encourageant l'initiative, la responsabilité et l'excellence.",
  },
  {
    number: "04",
    letter: "I",
    title: "Innovation",
    icon: Lightbulb,
    description:
      "Nous recherchons constamment des méthodes, technologies et approches capables d'améliorer nos solutions.",
  },
  {
    number: "05",
    letter: "E",
    title: "Engagement",
    icon: Target,
    description:
      "Nous nous investissons pleinement dans nos missions et dans la réussite des projets qui nous sont confiés.",
  },
  {
    number: "06",
    letter: "R",
    title: "Respect des délais",
    icon: Clock3,
    description:
      "Nous considérons la ponctualité comme une composante essentielle de la confiance et de la performance.",
  },
  {
    number: "07",
    letter: "S",
    title: "Synergie",
    icon: Handshake,
    description:
      "Nous croyons à la force de la collaboration entre nos équipes, nos clients, nos fournisseurs et nos partenaires.",
  },
];

const ambitionCards = [
  {
    number: "01",
    title: "CONCRÈTES",
    text: "Des réponses directement adaptées aux besoins de nos clients.",
  },
  {
    number: "02",
    title: "DURABLES",
    text: "Des solutions conçues pour produire une valeur qui s'inscrit dans le temps.",
  },
  {
    number: "03",
    title: "PERFORMANTES",
    text: "Une recherche permanente d'efficacité, de qualité et de résultats.",
  },
  {
    number: "04",
    title: "CRÉATRICES DE VALEUR",
    text: "Des collaborations capables de générer un impact positif pour toutes les parties.",
  },
];

export default function VisionPage() {
  return (
    <main className="vision-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="vision-hero">
        <div className="vision-hero-image">
          <Image
            src="/images/engin.png"
            alt="Équipement minier et industriel - WB Mining Services"
            fill
            priority
            sizes="100vw"
            className="vision-image"
          />
        </div>

        <div className="vision-hero-overlay" />

        <div className="vision-grid" />

        <div className="vision-yellow-line" />

        <div className="vision-hero-content">
          <div className="vision-container">
            <div className="hero-kicker">
              <span className="hero-kicker-line" />
              <span>WB MINING SERVICES SARL</span>
            </div>

            <div className="hero-layout">
              <div className="hero-main">
                <div className="hero-label">
                  <Sparkles size={16} />
                  <span>Notre Vision</span>
                </div>

                <h1>
                  Construire
                  <span>aujourd'hui</span>
                  l'entreprise
                  <span>de demain.</span>
                </h1>

                <p className="hero-description">
                  Une vision portée par l'excellence, la fiabilité et
                  l'innovation pour accompagner durablement nos clients et
                  partenaires en République Démocratique du Congo et à
                  l'international.
                </p>

                <div className="hero-actions">
                  <Link href="/contact" className="btn-primary">
                    <span>Parlons de votre projet</span>
                    <ArrowRight size={18} />
                  </Link>

                  <a href="#vision" className="btn-outline">
                    <span>Découvrir notre vision</span>
                    <ArrowDown size={17} />
                  </a>
                </div>
              </div>

              <div className="hero-side">
                <div className="hero-side-number">01</div>

                <div className="hero-side-line" />

                <div className="hero-side-text">
                  <span>VISION</span>
                  <p>
                    Une direction claire pour une croissance responsable,
                    durable et ambitieuse.
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-bottom">
              <div className="hero-bottom-item">
                <Globe2 size={17} />
                <span>RDC & International</span>
              </div>

              <div className="hero-bottom-item">
                <ShieldCheck size={17} />
                <span>Excellence & Fiabilité</span>
              </div>

              <div className="hero-bottom-item">
                <Zap size={17} />
                <span>Solutions Multiservices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / MANIFESTO
      ===================================================== */}
      <section className="manifesto-section" id="vision">
        <div className="vision-container">
          <div className="section-intro">
            <div className="section-number">
              <span>01</span>
              <div />
              <span>VISION</span>
            </div>

            <div>
              <p className="section-eyebrow">Notre vision stratégique</p>

              <h2>
                Voir plus loin.
                <br />
                <span>Construire mieux.</span>
              </h2>
            </div>
          </div>

          <div className="manifesto-grid">
            <div className="manifesto-left">
              <div className="quote-mark">“</div>

              <blockquote>
                Devenir un partenaire stratégique de référence en République
                Démocratique du Congo et à l'international, reconnu pour
                l'excellence, la fiabilité et l'innovation de nos solutions
                Multiservices.
              </blockquote>

              <div className="quote-footer">
                <div className="quote-line" />
                <span>WB MINING SERVICES SARL</span>
              </div>
            </div>

            <div className="manifesto-right">
              <div className="vision-card-main">
                <div className="vision-card-top">
                  <span>NOTRE DIRECTION</span>
                  <MoveUpRight size={19} />
                </div>

                <div className="vision-card-content">
                  <div className="big-word">VISION</div>

                  <p>
                    Notre ambition est de construire une organisation capable
                    d'accompagner les projets miniers, industriels, commerciaux
                    et institutionnels avec une approche fondée sur la
                    confiance et la performance.
                  </p>
                </div>

                <div className="vision-card-bottom">
                  <span>01</span>
                  <div className="progress-line">
                    <span />
                  </div>
                  <span>EXCELLENCE</span>
                </div>
              </div>

              <div className="vision-mini-grid">
                <div>
                  <Award size={20} />
                  <strong>Excellence</strong>
                  <span>Élever nos standards.</span>
                </div>

                <div>
                  <ShieldCheck size={20} />
                  <strong>Fiabilité</strong>
                  <span>Tenir nos engagements.</span>
                </div>

                <div>
                  <Lightbulb size={20} />
                  <strong>Innovation</strong>
                  <span>Créer autrement.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AMBITION
      ===================================================== */}
      <section className="ambition-section">
        <div className="ambition-background">
          <div className="ambition-number">02</div>
        </div>

        <div className="vision-container ambition-container">
          <div className="ambition-header">
            <div className="section-number light">
              <span>02</span>
              <div />
              <span>AMBITION</span>
            </div>

            <div className="ambition-title-wrapper">
              <p className="section-eyebrow light-text">Notre ambition</p>

              <h2>
                Transformer les besoins
                <span>en solutions.</span>
              </h2>
            </div>
          </div>

          <div className="ambition-main">
            <div className="ambition-statement">
              <div className="statement-icon">
                <Target size={24} />
              </div>

              <p>
                Bâtir aujourd'hui un avenir plus grand en transformant les
                besoins de nos clients et partenaires en solutions concrètes,
                durables, performantes et créatrices de valeur.
              </p>

              <div className="statement-bottom">
                <span>UNE AMBITION QUI NOUS GUIDE</span>
                <ArrowRight size={18} />
              </div>
            </div>

            <div className="ambition-cards">
              {ambitionCards.map((card) => (
                <div className="ambition-card" key={card.number}>
                  <span className="ambition-card-number">
                    {card.number}
                  </span>

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>

                  <div className="card-arrow">
                    <ArrowRight size={17} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PILIERS INTRO
      ===================================================== */}
      <section className="pillars-intro">
        <div className="vision-container">
          <div className="pillars-intro-grid">
            <div>
              <div className="section-number">
                <span>03</span>
                <div />
                <span>VALEURS</span>
              </div>

              <p className="section-eyebrow">Nos fondations</p>

              <h2>
                Les valeurs qui
                <span>nous définissent.</span>
              </h2>
            </div>

            <div className="pillars-intro-text">
              <p className="large-text">
                Chez WB MINING SERVICES SARL, nos PILIERS ne sont pas de
                simples valeurs : ils sont les fondations sur lesquelles nous
                construisons la confiance, la performance et des partenariats
                durables.
              </p>

              <p>
                Nous sommes convaincus que la performance durable doit reposer
                sur des principes solides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PILIERS
      ===================================================== */}
      <section className="pillars-section">
        <div className="vision-container">
          <div className="pillars-heading">
            <div>
              <p className="section-eyebrow">P — I — L — I — E — R — S</p>
              <h2>Notre architecture de confiance.</h2>
            </div>

            <p>
              Sept principes qui orientent notre gouvernance, nos opérations,
              nos relations et notre contribution au développement économique
              et social.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article className="pillar-card" key={pillar.title}>
                  <div className="pillar-top">
                    <span className="pillar-number">{pillar.number}</span>

                    <div className="pillar-icon">
                      <Icon size={21} />
                    </div>
                  </div>

                  <div className="pillar-letter">
                    {pillar.letter}
                  </div>

                  <div className="pillar-content">
                    <h3>{pillar.title}</h3>

                    <p>{pillar.description}</p>

                    <div className="pillar-footer">
                      <span>WBMS</span>

                      <div className="pillar-footer-line" />

                      <MoveUpRight size={17} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="principles-section">
        <div className="vision-container">
          <div className="principles-grid">
            <div className="principles-visual">
              <div className="principles-circle circle-one" />
              <div className="principles-circle circle-two" />

              <div className="principles-center">
                <span>WBMS</span>
                <strong>PILIERS</strong>
                <small>NOTRE RÉFÉRENTIEL</small>
              </div>

              <div className="floating-tag tag-one">
                <Check size={14} />
                Confiance
              </div>

              <div className="floating-tag tag-two">
                <Check size={14} />
                Performance
              </div>

              <div className="floating-tag tag-three">
                <Check size={14} />
                Durabilité
              </div>
            </div>

            <div className="principles-content">
              <div className="section-number">
                <span>04</span>
                <div />
                <span>RÉFÉRENTIEL</span>
              </div>

              <p className="section-eyebrow">
                Des principes aux actions
              </p>

              <h2>
                La performance
                <span>doit avoir des fondations.</span>
              </h2>

              <p>
                Nos PILIERS constituent le référentiel qui guide notre
                gouvernance, nos opérations, nos relations avec nos clients et
                partenaires, ainsi que notre contribution au développement
                économique et social.
              </p>

              <div className="principles-list">
                <div>
                  <span>01</span>
                  <strong>Gouvernance</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Opérations</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Partenariats</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Développement</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="vision-final">
        <div className="vision-final-grid" />

        <div className="vision-container">
          <div className="final-content">
            <div className="final-label">
              <span />
              WB MINING SERVICES SARL
              <span />
            </div>

            <h2>
              Une vision.
              <span>Une ambition.</span>
              Un engagement.
            </h2>

            <p>
              Construisons ensemble des solutions capables de créer une valeur
              durable pour nos clients, nos partenaires et nos communautés.
            </p>

            <Link href="/contact" className="final-button">
              <span>Démarrer une conversation</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="final-bottom">
            <div>
              <span>VISION</span>
              <strong>01</strong>
            </div>

            <div>
              <span>AMBITION</span>
              <strong>02</strong>
            </div>

            <div>
              <span>PILIERS</span>
              <strong>03</strong>
            </div>

            <div>
              <span>ENGAGEMENT</span>
              <strong>04</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}