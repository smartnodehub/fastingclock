import React, { useEffect } from "react";
import { content } from "./src/content/src/content/content.en";

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
            <div
              dangerouslySetInnerHTML={{ __html: content.intro16to8 }}
            />
          </section>

          {/* ===== 2) Benefits ===== */}
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

          {/* ===== 3) FAQ ===== */}
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

          {/* 2) Timer-komponentti */}
          <section className="my-8">
            {/* …sinu Calculate Fasting Time -lomake ja painike… */}
          </section>

          {/* 3) Helpful Resources */}
          <section className="prose mx-auto py-8">
            <h2>Helpful Resources</h2>
            <div className="flex flex-wrap gap-4">
              <a href="AFF_LINK1" className="btn-aff">Get Zero App</a>
              <a href="AFF_LINK2" className="btn-aff">Fasting Guide</a>
              <a href="AFF_LINK3" className="btn-aff">Meal Plans</a>
              <a href="AFF_LINK4" className="btn-aff">Supplements</a>
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
