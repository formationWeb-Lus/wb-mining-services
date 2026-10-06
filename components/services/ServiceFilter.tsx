"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const serviceOptions = [
  {
    slug: "construction",
    label: "Construction & Génie Civil",
    number: "03",
  },
  {
    slug: "nettoyage-industriel",
    label: "Nettoyage Industriel & Gestion des Déchets",
    number: "04",
  },
  {
    slug: "electricite",
    label: "Électricité & Solutions Énergétiques",
    number: "05",
  },
];

export default function ServiceFilter() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const currentSlug =
    pathname.split("/").filter(Boolean).pop() || "construction";

  const currentService =
    serviceOptions.find((service) => service.slug === currentSlug) ||
    serviceOptions[0];

  const handleChange = (slug: string) => {
    setOpen(false);
    router.push(`/services/${slug}`);
  };

  return (
    <div className="service-filter-wrapper">
      <div className="service-filter-label">
        <span>EXPLORER NOS SERVICES</span>
        <small>
          Découvrez l'ensemble des solutions proposées par WB Mining Services
          SARL.
        </small>
      </div>

      <div className="service-filter">
        <button
          type="button"
          className="service-filter-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className="service-filter-current">
            <span className="service-filter-number">
              {currentService.number}
            </span>

            <div>
              <small>SERVICE ACTUEL</small>
              <strong>{currentService.label}</strong>
            </div>
          </div>

          <ChevronDown
            size={21}
            className={open ? "service-filter-chevron open" : "service-filter-chevron"}
          />
        </button>

        {open && (
          <div className="service-filter-menu">
            {serviceOptions.map((service) => {
              const active = service.slug === currentSlug;

              return (
                <button
                  type="button"
                  key={service.slug}
                  className={
                    active
                      ? "service-filter-option active"
                      : "service-filter-option"
                  }
                  onClick={() => handleChange(service.slug)}
                >
                  <span className="service-filter-option-number">
                    {service.number}
                  </span>

                  <span className="service-filter-option-text">
                    {service.label}
                  </span>

                  {active && (
                    <span className="service-filter-active">
                      ACTUEL
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}