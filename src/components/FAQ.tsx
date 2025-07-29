import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

interface QA {
  question: string;
  answer: string;
}

interface Props {
  items: QA[];
}

const FAQ: FC<Props> = ({ items }) => (
  <section className="py-8">
    <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
    <Accordion type="multiple" className="max-w-2xl mx-auto space-y-4">
      {items.map((qa, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger>{qa.question}</AccordionTrigger>
          <AccordionContent>{qa.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default FAQ;
