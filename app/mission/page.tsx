"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Eye,
  Handshake,
  Lightbulb,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

import "./mission.css";

const methodSteps = [
  {
    number: "01",
    title: "ÉCOUTER",
    icon: Users,
    text: "Nous accordons une attention particulière aux besoins, attentes et enjeux de nos clients et partenaires afin de comprendre précisément leurs priorités.",
  },
  {
    number: "02",
    title: "ANALYSER",
    icon: Search,
    text: "Nous examinons chaque situation avec méthode et rigueur afin d'identifier les contraintes, les priorités, les risques et les opportunités.",
  },
  {
    number: "03",
    title: "CONCEVOIR",
    icon: Lightbulb,
    text: "Nous élaborons des solutions sur mesure, pertinentes, innovantes et adaptées aux réalités du terrain.",
  },
  {
    number: "04",
    title: "EXÉCUTER",
    icon: Wrench,
    text: "Nous transformons nos engagements en résultats grâce à une exécution rigoureuse, professionnelle et orientée vers la performance, dans le respect des exigences convenues.",
  },
  {
    number: "05",
    title: "ACCOMPAGNER",
    icon: Handshake,
    text: "Nous inscrivons chaque collaboration dans le long terme à travers un suivi de proximité, une amélioration continue et un accompagnement adapté à l'évolution des besoins de nos clients et partenaires.",
  },
];

const engagementItems = [
  {
    icon: Target,
    title: "Solutions pertinentes",
    text: "Transformer chaque besoin identifié en une réponse concrète, adaptée et créatrice de valeur.",
  },
  {
    icon: TrendingUp,
    title: "Projets réussis",
    text: "Contribuer à la réalisation des objectifs de nos clients grâce à une exécution rigoureuse et orientée résultats.",
  },
  {
    icon: Handshake,
    title: "Partenariats durables",
    text: "Construire des relations professionnelles fondées sur la confiance, la performance et la responsabilité.",
  },
];

const standards = [
  "Excellence",
  "Réactivité",
  "Qualité",
  "Sécurité",
  "Conformité",
  "Respect des engagements",
];

export default function MissionPage() {
  return (
    <main className="mission-page">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="mission-hero">
        <div className="mission-hero-bg">
          <Image
            src="/images/engin.png"
            alt="Équipements et opérations minières"
            fill
            priority
            sizes="100vw"
            className="mission-hero-image"
          />
        </div>

        <div className="mission-hero-overlay" />

        <div className="mission-container mission-hero-content">
          <div className="mission-eyebrow">
            <span />
            NOTRE MISSION
            <span />
          </div>

          <h1>
            Transformer les besoins
            <strong>en solutions, les défis en opportunités
            et les projets en valeur durable.</strong>
          </h1>

          <div className="mission-hero-actions">
            <Link href="/services" className="mission-btn mission-btn-primary">
              Découvrir nos services
              <ArrowRight size={18} />
            </Link>

            <Link href="/contact" className="mission-btn mission-btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>

        <a href="#mission" className="mission-scroll">
          <span>Découvrir</span>
          <ArrowDown size={18} />
        </a>
      </section>

      {/* =========================================================
          MISSION
      ========================================================== */}
      <section id="mission" className="mission-main-section">
        <div className="mission-container">
          <div className="mission-section-heading">
            <div className="mission-label">
              <span />
              NOTRE MISSION
            </div>

            <h2>
              Donner une réponse concrète
              <br />
              aux enjeux de nos partenaires.
            </h2>
          </div>

          <div className="mission-main-grid">
            <div className="mission-main-visual">
              <div className="mission-image-frame">
                <Image
                  src="/images/travail.png"
                  alt="Équipe en activité sur le terrain"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>

              <div className="mission-image-badge">
                <BarChart3 size={22} />
                <div>
                  <strong>Orientée résultats</strong>
                  <span>Performance & valeur durable</span>
                </div>
              </div>
            </div>

            <div className="mission-main-copy">
              <p className="mission-lead">
                Chez <strong>WB MINING SERVICES SARL</strong>, nous mettons
                notre expertise et notre capacité opérationnelle au service
                des entreprises minières, industrielles et commerciales, des
                institutions, organisations, entrepreneurs et particuliers.
              </p>

              <p>
                Nous leur apportons des solutions Multiservices sur mesure,
                fiables et performantes, conçues pour répondre efficacement à
                leurs besoins, soutenir leurs activités et générer des
                résultats concrets et durables.
              </p>

              <p>
                Notre engagement envers <strong>l'excellence</strong>, la{" "}
                <strong>réactivité</strong> et la <strong>qualité</strong>{" "}
                guide chacune de nos interventions.
              </p>

              <p>
                Nous contribuons ainsi à la réalisation des projets de nos
                clients et partenaires, à l'optimisation de leurs activités et
                à la création d'une valeur durable, mesurable et mutuellement
                bénéfique.
              </p>

              <div className="mission-standards">
                {standards.map((item) => (
                  <div className="mission-standard" key={item}>
                    <CheckCircle2 size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mission-sdg-note">
                <div className="mission-sdg-icon">
                  <Compass size={23} />
                </div>

                <div>
                  <strong>Un engagement qui dépasse le projet</strong>
                  <p>
                    Chaque action compte et contribue concrètement à la
                    réalisation des objectifs de développement durable (ODD).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROCHE
      ========================================================== */}
      <section className="mission-approach">
        <div className="mission-container">
          <div className="mission-approach-grid">
            <div className="mission-approach-copy">
              <div className="mission-label mission-label-light">
                <span />
                NOTRE APPROCHE
              </div>

              <h2>
                Comprendre avant d'agir,
                <br />
                Exécuter avec professionnalisme.
              </h2>

              <div className="mission-line" />

              <p>
                Chez WB MINING SERVICES SARL, nous plaçons au cœur de chacune
                de nos actions une compréhension approfondie des besoins et
                des enjeux de nos clients et partenaires.
              </p>

              <p>
                Notre approche repose également sur une exécution rigoureuse
                fondée sur la <strong>qualité, la sécurité, la conformité</strong>{" "}
                et le respect de nos engagements.
              </p>

              <p>
                Chaque intervention est conçue pour apporter une réponse
                concrète, efficace et créatrice de valeur, en tenant compte
                des réalités du terrain et des exigences propres à chaque
                projet.
              </p>

              <p>
                Nous privilégions ainsi des solutions adaptées, pragmatiques
                et orientées vers les résultats, tout en construisant des
                relations professionnelles durables fondées sur la confiance,
                la performance et la responsabilité.
              </p>
            </div>

            <div className="mission-approach-card">
              <div className="mission-approach-icon">
                <Eye size={32} />
              </div>

              <span className="mission-card-number">01</span>

              <h3>Une compréhension approfondie</h3>

              <p>
                Chaque projet commence par l'écoute et la compréhension des
                réalités, des contraintes et des objectifs de nos partenaires.
              </p>

              <div className="mission-card-footer">
                <ShieldCheck size={18} />
                <span>Qualité • Sécurité • Conformité</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MÉTHODE
      ========================================================== */}
      <section className="mission-method">
        <div className="mission-container">
          <div className="mission-section-heading mission-heading-center">
            <div className="mission-label">
              <span />
              NOTRE MÉTHODE
              <span />
            </div>

            <h2>
              Une démarche structurée,
              <br />
              du besoin au résultat.
            </h2>

            <p>
              Notre méthode permet de transformer une compréhension précise
              des besoins en solutions concrètes et en résultats durables.
            </p>
          </div>

          <div className="mission-method-grid">
            {methodSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="mission-method-card" key={step.number}>
                  <div className="mission-method-top">
                    <span>{step.number}</span>
                    <Icon size={25} />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                  <div className="mission-method-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGAGEMENT
      ========================================================== */}
      <section className="mission-engagement">
        <div className="mission-engagement-bg">
          <Image
            src="/images/mines.jpg"
            alt="Activité minière en République Démocratique du Congo"
            fill
            sizes="100vw"
          />
        </div>

        <div className="mission-engagement-overlay" />

        <div className="mission-container mission-engagement-content">
          <div className="mission-label mission-label-light">
            <span />
            NOTRE ENGAGEMENT
          </div>

          <h2>
            Faire de chaque besoin une solution pertinente,
            <br />
            <strong>de chaque project une reussite et de chaque partenariat une relation durable.</strong>
          </h2>


          <div className="mission-engagement-grid">
            {engagementItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="mission-engagement-card"
                  key={item.title}
                >
                  <div className="mission-engagement-card-icon">
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

      {/* =========================================================
          MANIFESTO / CTA
      ========================================================== */}
      <section className="mission-final">
        <div className="mission-container">
          <div className="mission-final-inner">
            <div className="mission-final-icon">
              <ClipboardCheck size={30} />
            </div>

            <div className="mission-final-content">
              <span>WB MINING SERVICES SARL</span>

              <h2>
                Faire de chaque projet
                <br />
                une création de valeur durable.
              </h2>

              <p>
                Faire de chaque besoin une solution pertinente, de chaque
                projet une réussite et de chaque partenariat une relation
                durable.
              </p>
            </div>

            <Link
              href="/contact"
              className="mission-btn mission-btn-dark"
            >
              Parlons de votre projet
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}