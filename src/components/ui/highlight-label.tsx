import { cn } from "@/lib/utils";

type HighlightLabelProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function HighlightLabel({ children, className, style }: HighlightLabelProps) {
  return (
    <p className={cn("text-sm font-semibold", className)} style={style}>
      <span className="relative inline-block text-primary">
        <span className="relative z-10">{children}</span>
        <span
          aria-hidden
          className="absolute bottom-[-0.04em] left-0 z-0 h-[0.42em] w-full -skew-x-3 rounded-sm bg-primary/20"
        />
      </span>
    </p>
  );
}

export { HighlightLabel };
