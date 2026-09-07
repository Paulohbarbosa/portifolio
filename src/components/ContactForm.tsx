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
      <div className="contact-form-success flex flex-col items-center text-center p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Mensagem enviada com sucesso!
        </h3>
        <p className="text-zinc-400 mb-8">
          Obrigado pelo contato, retornarei o mais breve possível.
        </p>
        <button className="btn-beam" onClick={() => setStatus("idle")}>
          <div className="beam-border"></div>
          <div className="btn-content-bg"></div>
          <span style={{ position: "relative", zIndex: 10 }}>
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
        <p className="text-red-400 text-sm mt-2">
          Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.
        </p>
      )}
    </form>
  );
}
