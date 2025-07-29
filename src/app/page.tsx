"use client";
import React, { useEffect } from "react";
import { content } from "../content/content.en";

export default function Page() {
  useEffect(() => {
    try {
      const ads = window.adsbygoogle;
      if (ads && Array.isArray(ads)) {
        ads.push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <main className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)_200px] gap-4">
        {/* Vasak reklaamiala */}
        <div className="hidden lg:block">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "200px", height: "600px" }}
            data-ad-client="ca-pub-7058115116105378"
            data-ad-slot="3748465240"
            data-ad-format="vertical"
          ></ins>
        </div>

        {/* Keskne sisu */}
        <div>

          {/* ===== 1) Intro ===== */}
          <section className="prose mx-auto py-8">
            <div dangerouslySetInnerHTML={{ __html: content.intro16to8 }} />
          </section>

          {/* ===== 2) Timer/Form ===== */}
          <section className="my-8">
            <h2 className="text-xl font-bold mb-4">Calculate Fasting Time</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="lastMeal" className="block mb-1">When did you last eat?</label>
                <input type="datetime-local" id="lastMeal" name="lastMeal" className="border rounded px-2 py-1 w-full" />
              </div>
              <div>
                <label htmlFor="method" className="block mb-1">Choose your fasting method:</label>
                <select id="method" name="method" className="border rounded px-2 py-1 w-full">
                  <option value="16:8">16:8</option>
                  <option value="18:6">18:6</option>
                  <option value="20:4">20:4</option>
                  <option value="OMAD">OMAD</option>
                  <option value="24h">24h</option>
                  <option value="36h">36h</option>
                </select>
              </div>
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">🕐 Calculate Fasting Time</button>
            </form>
          </section>

          {/* ===== 3) Helpful Resources ===== */}
          <section className="prose mx-auto py-8">
            <h2>Helpful Resources</h2>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="btn-aff">Get Zero App</a>
              <a href="#" className="btn-aff">Fasting Guide</a>
              <a href="#" className="btn-aff">Meal Plans</a>
              <a href="#" className="btn-aff">Supplements</a>
            </div>
          </section>

          {/* ===== 4) Benefits ===== */}
          <section className="mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
            <ul className="list-disc marker:text-yellow-500 pl-5 space-y-2">
              {content.benefits.map((b: { title: string; description: string }, i: number) => (
                <li key={i}>
                  <strong>{b.title}:</strong> {b.description}
                </li>
              ))}
            </ul>
          </section>

          {/* ===== 5) FAQ ===== */}
          <section className="mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div className="space-y-6">
              {content.faqItems.map((f: { question: string; answer: string }, i: number) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold">{f.question}</h3>
                  <p className="mt-1">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4) Keskne AdSense-lohk sisällön jälkeen */}
          <div className="my-8 text-center">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-7058115116105378"
              data-ad-slot="3748465240"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>

        {/* Parem reklaamiala */}
        <div className="hidden lg:block">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "200px", height: "600px" }}
            data-ad-client="ca-pub-7058115116105378"
            data-ad-slot="3748465240"
            data-ad-format="vertical"
          ></ins>
        </div>

      </div>
    </main>
  );
}
