'use client'

import Head from 'next/head'
import { useEffect, useState } from "react"

type FastingOption = {
  label: string
  hours: number
  eatingWindow: number
  desc: string
}

const options: FastingOption[] = [
  { label: "16:8", hours: 16, eatingWindow: 8, desc: "16h fast, 8h eating" },
  { label: "18:6", hours: 18, eatingWindow: 6, desc: "18h fast, 6h eating" },
  { label: "20:4", hours: 20, eatingWindow: 4, desc: "20h fast, 4h eating" },
  { label: "OMAD", hours: 23, eatingWindow: 1, desc: "One meal a day" },
  { label: "24h", hours: 24, eatingWindow: 0, desc: "Full day fast" },
  { label: "36h", hours: 36, eatingWindow: 0, desc: "Extended fast" },
]

export default function Page() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [selected, setSelected] = useState<FastingOption>(options[0])
  const [canEatTime, setCanEatTime] = useState<Date | null>(null)
  const [now, setNow] = useState(new Date())
  const [startTime, setStartTime] = useState<Date | null>(null)

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  // AdSense initialization
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

  const calculate = () => {
    if (!date || !time) return
    const start = new Date(`${date}T${time}`)
    const end = new Date(start.getTime() + selected.hours * 60 * 60 * 1000)
    setStartTime(start)
    setCanEatTime(end)
  }

  const getTimeParts = (ms: number) => {
    const totalSec = Math.max(ms / 1000, 0)
    const h = Math.floor(totalSec / 3600)
    const m = Math.floor((totalSec % 3600) / 60)
    const s = Math.floor(totalSec % 60)
    return { h, m, s }
  }

  const totalDuration = selected.hours * 60 * 60 * 1000
  const elapsed = startTime ? now.getTime() - startTime.getTime() : 0
  const remaining = canEatTime ? canEatTime.getTime() - now.getTime() : 0
  const progress = Math.min((elapsed / totalDuration) * 100, 100)

  return (
    <>
      <Head>
        <title>FastingTimer - Intermittent Fasting Calculator</title>
        <meta
          name="description"
          content="Calculate your intermittent fasting schedule. Find out when you can eat again with our free fasting timer."
        />
        <meta
          name="keywords"
          content="intermittent fasting calculator, fasting timer, 16:8 fasting, OMAD, time-restricted eating"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fastingclock.com/" />
        
        {/* ✅ Google AdSense script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7058115116105378"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white p-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* FastingClock Professional Logo */}
          <div className="text-center mb-6 mt-10">
            <div className="text-5xl mb-2">⏰</div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              FastingClock
            </h1>
            <p className="text-slate-400 text-lg">Your Intermittent Fasting Timer</p>
          </div>

          <div className="bg-slate-700/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">When did you last eat?</h2>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <div>
                <label className="text-sm text-slate-300">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="datetime-input w-40 p-3 rounded-xl bg-slate-900 border border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="datetime-input w-40 p-3 rounded-xl bg-slate-900 border border-slate-600 text-white"
                />
              </div>
            </div>

            <h3 className="text-lg mb-2 font-medium">Choose your fasting method:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setSelected(opt)}
                  className={`p-3 rounded-xl text-left border transition ${
                    selected.label === opt.label
                      ? "bg-yellow-400 text-black font-bold"
                      : "bg-slate-800 text-white border-slate-600 hover:bg-slate-700"
                  }`}
                >
                  <div className="text-base">{opt.label}</div>
                  <div className="text-xs text-slate-300">{opt.desc}</div>
                </button>
              ))}
            </div>

            <button
  return (
    <main className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)_150px] gap-4">
        {/* Vasak reklaamiala – alati nähtav, mobiilis väiksem */}
        <div className="flex justify-center items-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", minHeight: "120px", maxHeight: "300px" }}
            data-ad-client="ca-pub-7058115116105378"
            data-ad-slot="3748465240"
            data-ad-format="vertical"
          ></ins>
        </div>

        {/* Keskne sisu */}
        <div>
          {/* 1) Artikkel/sisuloogika */}
          <article className="prose mx-auto py-8">
            {/* …siin on 300+ sõnaline artikkel, FAQ ja affiliate linkid… */}
          </article>

          {/* 2) Timer-komponent */}
          <section className="my-8">
            {/* …sinu fasting timer JSX… */}
          </section>

          {/* 3) Veel blogi- ja ressurssiosa */}
          <section className="prose mx-auto py-8">
            <h2>Blog & Resources</h2>
            {/* Linkid / esilehed / preview’d */}
          </section>

          {/* 4) Keskne AdSense loosko */}
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

        {/* Parem reklaamiala – alati nähtav, mobiilis väiksem */}
        <div className="flex justify-center items-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", minHeight: "120px", maxHeight: "300px" }}
            data-ad-client="ca-pub-7058115116105378"
            data-ad-slot="3748465240"
            data-ad-format="vertical"
          ></ins>
        </div>
      </div>
    </main>
  );
                </div>
              </div>
            )}

            {/* 💡 Affiliate buttons */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4 text-center">Helpful Resources</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="affiliate-btn">📱 Get Zero App</a>
                <a href="#" className="affiliate-btn">📚 Fasting Guide</a>
                <a href="#" className="affiliate-btn">🥗 Meal Plans</a>
                <a href="#" className="affiliate-btn">💊 Supplements</a>
              </div>
            </div>

            {/* Google AdSense display ad block */}
            <div className="mt-10 text-center">
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
        </div>
      </main>
    </>
  )
}
