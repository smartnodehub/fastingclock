// File: src/components/IntroSection.tsx
import { FC } from "react";

interface Props { text: string; }

const IntroSection: FC<Props> = ({ text }) => (
  <section className="prose max-w-3xl mx-auto py-8 px-4 text-gray-100">
    <h1 className="text-4xl font-bold text-center mb-4">What is 16:8 Fasting?</h1>
    {text.trim().split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
  </section>
);

export default IntroSection;
