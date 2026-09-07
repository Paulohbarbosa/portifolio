"use client";

import { useState } from "react";
import data from "@/data/portfolio.json";
import ContactForm from "./ContactForm";

export default function CTA() {
  const [activeTab, setActiveTab] = useState<"whatsapp" | "email">("whatsapp");
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_LINK ||
    data?.ctaInfo.buttonUrl ||
    "#contato";

  return (
    <section id="contato" className="cta-section reveal">
      <div className="cta-container flex flex-col items-center">
        <h2 className="cta-headline">
          {data?.ctaInfo.primaryTitle}{" "}
          <span className="text-blue">{data?.ctaInfo.secondaryTitle}</span>
        </h2>

        <p className="cta-subtitle mb-8">{data?.ctaInfo.description}</p>

        {/* Tabs */}
        <div
          className=" w-[200px] flex justify-between items-center badge mb-8 cursor-pointer transition-all"
          style={{ padding: "0.375rem" }}
        >
          <button
            onClick={() => setActiveTab("whatsapp")}
            className={
              activeTab === "whatsapp"
                ? "badge-pill bg-blue-500/10 m-0"
                : " badge-pill bg-transparent badge-text-no-select m-0 transition-colors"
            }
          >
            App Mensagem
          </button>
          <button
            onClick={() => setActiveTab("email")}
            className={
              activeTab === "email"
                ? "badge-pill bg-blue-500/10 m-0"
                : " badge-pill bg-transparent badge-text-no-select m-0 transition-colors"
            }
          >
            E-mail
          </button>
        </div>

        <div className="w-full max-w-2xl flex flex-col items-center">
          {activeTab === "whatsapp" ? (
            <a
              href={whatsappUrl}
              target={whatsappUrl !== "#contato" ? "_blank" : undefined}
              rel={
                whatsappUrl !== "#contato" ? "noopener noreferrer" : undefined
              }
              className="btn-beam mt-4"
              style={{ height: "64px", padding: "0 3rem", fontSize: "1rem" }}
            >
              <div className="beam-border"></div>
              <div className="btn-content-bg">
                <div className="lines-overlay"></div>
                <div className="bottom-glow"></div>
              </div>
              <span
                style={{
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {data?.ctaInfo.buttonText}
              </span>
            </a>
          ) : (
            <ContactForm />
          )}
        </div>
      </div>
    </section>
  );
}
