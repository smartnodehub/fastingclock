// File: src/components/TimerForm.tsx
"use client";
import { FC, useState } from "react";

const methods = [
  { key: "16:8", label: "16:8", desc: "16h fast, 8h eating" },
  { key: "18:6", label: "18:6", desc: "18h fast, 6h eating" },
  { key: "20:4", label: "20:4", desc: "20h fast, 4h eating" },
  { key: "OMAD", label: "OMAD", desc: "One meal a day" },
  { key: "24h", label: "24h", desc: "Full day fast" },
  { key: "36h", label: "36h", desc: "Extended fast" }
];

const TimerForm: FC = () => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [method, setMethod] = useState<string>(methods[0].key);

  return (
    <section className="py-8 bg-blue-900 text-white">
      <h2 className="text-2xl font-semibold text-center mb-4">When did you last eat?</h2>
      <div className="flex justify-center space-x-4 mb-6">
        <input type="date" className="p-2 bg-blue-800 rounded-md" value={date} onChange={e => setDate(e.target.value)} />
        <input type="time" className="p-2 bg-blue-800 rounded-md" value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
        {methods.map(m => (
          <button key={m.key} onClick={() => setMethod(m.key)} className={`${method===m.key?"bg-yellow-400 text-black":"bg-blue-800 text-white"} p-4 rounded-lg`}>
            <div className="font-semibold text-lg">{m.label}</div>
            <div className="text-sm">{m.desc}</div>
          </button>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold">Calculate Fasting Time</button>
      </div>
    </section>
  );
};

export default TimerForm;
