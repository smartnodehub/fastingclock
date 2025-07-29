import IntroSection from "../components/IntroSection";
import BenefitList from "../components/BenefitList";
import FAQ from "../components/FAQ";
import { content } from "../content/content.en";

export default function Home() {
  return (
    <main>
      <IntroSection text={content.intro16to8} />
      {/* TimerForm and ResourceLinks components go here */}
      <BenefitList items={content.benefits} />
      <FAQ items={content.faqItems} />
    </main>
  );
}
