import { FC } from "react";

interface Props {
  text: string;
}

const IntroSection: FC<Props> = ({ text }) => (
  <section className="prose max-w-2xl mx-auto py-8">
    <h1 className="text-3xl font-bold">What is 16:8 Fasting?</h1>
    {text.split("\n\n").map((para, i) => (
      <p key={i}>{para.trim()}</p>
    ))}
  </section>
);

export default IntroSection;
