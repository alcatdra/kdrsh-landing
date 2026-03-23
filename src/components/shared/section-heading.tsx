import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
