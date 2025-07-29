import { FC } from "react";
import { CheckCircle } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface Props {
  items: Benefit[];
}

const BenefitList: FC<Props> = ({ items }) => (
  <section className="py-8 bg-gray-50">
    <h2 className="text-2xl font-bold text-center mb-6">Key Benefits</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {items.map((b, i) => (
        <div key={i} className="flex items-start p-4 border rounded-lg shadow-sm">
          <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
          <div>
            <h3 className="font-semibold">{b.title}</h3>
            <p className="mt-1 text-sm">{b.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitList;
