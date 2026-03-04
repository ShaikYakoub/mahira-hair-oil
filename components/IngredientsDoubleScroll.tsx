import IngredientsScroll, { Ingredient } from "@/components/IngredientsScroll";

interface IngredientsDoubleScrollProps {
  ingredients: Ingredient[];
  secondRowStartFrom?: string;
  className?: string;
  topRowClassName?: string;
  bottomRowClassName?: string;
}

export default function IngredientsDoubleScroll({
  ingredients,
  secondRowStartFrom = "Coconut & Castor",
  className = "",
  topRowClassName = "mb-10",
  bottomRowClassName = "",
}: IngredientsDoubleScrollProps) {
  return (
    <div className={className}>
      <IngredientsScroll
        ingredients={ingredients}
        direction="left"
        double
        className={topRowClassName}
      />
      <IngredientsScroll
        ingredients={ingredients}
        startFrom={secondRowStartFrom}
        direction="right"
        double
        className={bottomRowClassName}
      />
    </div>
  );
}
