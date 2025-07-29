// File: src/components/FAQ.tsx
import { FC } from "react";

interface QA {
  question: string;
  answer: string;
}

interface Props {
  items: QA[];
}

const FAQ: FC<Props> = ({ items }) => (
  <section className="py-8 bg-gray-900 text-white">
    <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
    <div className="max-w-2xl mx-auto space-y-4">
      {items.map((qa, idx) => (
        <details key={idx} className="border border-gray-700 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">{qa.question}</summary>
          <p className="mt-2 text-gray-300">{qa.answer}</p>
        </details>
      ))}
    </div>
  </section>
);

export default FAQ;
