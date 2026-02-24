import { Leaf, FlaskConical, HandPlatter, Package } from "lucide-react";

const trustItems = [
  { label: "100% Herbal", icon: Leaf },
  { label: "No Chemicals", icon: FlaskConical },
  { label: "Traditional Preparation", icon: HandPlatter },
  { label: "Small Batch Production", icon: Package },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#EBD8C3] py-12 border-y border-[#d6c2ac]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
        {trustItems.map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center">
            <Icon className="text-mutedGreen mb-4" size={32} />
            <p className="font-semibold text-brown">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
