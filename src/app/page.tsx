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
      // @ts-expect-error AdSense is not typed
      (window.adsbygoogle = window.adsbygoogle || []).push({});
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
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white p-4">
