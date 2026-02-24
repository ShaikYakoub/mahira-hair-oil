import Image from "next/image";

interface IngredientCardTraditionalProps {
  title: string;
  description: string;
  image: string;
}

export default function IngredientCardTraditional({
  title,
  description,
  image,
}: IngredientCardTraditionalProps) {
  return (
    <div className="bg-[#F8EFE3] border border-[#e2cdb7] rounded-xl overflow-hidden shadow-sm shadow-brown/5 flex flex-col">
      <div className="relative w-full aspect-[16/9]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5 text-center flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-serif text-brown mb-2">{title}</h3>
        <p className="text-deepBrown text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
