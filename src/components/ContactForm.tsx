"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const url = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    if (!url) {
      alert("Por favor, configure o NEXT_PUBLIC_FORMSPREE_URL no arquivo .env");
      return;
    }

    setStatus("loading");

    const formData = new FormData(form);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form-success flex flex-col gap-4 items-center text-center p-10 relative mx-auto w-full max-w-lg">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-[40px] -z-10 pointer-events-none"></div>

        {/* Success Icon */}
        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,235,0.2)]">
          <svg
            className="w-8 h-8 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
          Mensagem <span className="text-blue-400">Enviada!</span>
        </h3>

        <p className="text-zinc-400 mb-10 max-w-sm">
          Obrigado pelo contato. Recebi sua mensagem e retornarei o mais breve
          possível!
        </p>

        <button
          className="btn-beam w-full sm:w-auto"
          onClick={() => setStatus("idle")}
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
            Enviar outra mensagem
          </span>
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form flex flex-col gap-4 w-full max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="form-group flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm text-zinc-400 font-medium text-left"
        >
          Seu Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Ex: João Silva"
          className="input"
        />
      </div>

      <div className="form-group flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm text-zinc-400 font-medium text-left"
        >
          Seu E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Ex: joao@email.com"
          className="input"
        />
      </div>

      <div className="form-group flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm text-zinc-400 font-medium text-left"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Como posso te ajudar?"
          rows={5}
          className="textarea"
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn-beam mt-4"
        disabled={status === "loading"}
      >
        <div className="beam-border"></div>
        <div className="btn-content-bg">
          <div className="lines-overlay"></div>
          <div className="bottom-glow"></div>
        </div>
        <span style={{ position: "relative", zIndex: 10 }}>
          {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
        </span>
      </button>

      {status === "error" && (
        <div className="mt-6 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-red-400 font-semibold text-sm">
              Falha no Envio
            </h4>
            <p className="text-zinc-400 text-xs mt-1">
              Ocorreu um erro ao enviar sua mensagem. Verifique a URL do seu
              servidor de mensagens e tente novamente.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
