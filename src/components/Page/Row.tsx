import React from "react";
import { cn } from "@/lib/utils";
import { Grip } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  children: React.ReactNode;
  title?: string;
  link?: string;
  columns?: number[];
  items?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  className?: string;
}

export const Row = ({
  children,
  title,
  link,
  columns = [1],
  items = "start",
  justify = "start",
  className = "",
}: Props) => {
  const totalColumns = columns.reduce((sum, col) => sum + col, 0);
  const childrenArray = React.Children.toArray(children);

  const childrenWithSpans = childrenArray.map((child, index) => {
    const colSpan = columns[index % columns.length];
    return (
      <div
        key={index}
        className={cn(
          `w-full h-full border-1s border-amber-300 grid`,
          className
        )}
        style={{
          gridColumn: `span ${colSpan}`,
          justifyContent: justify,
          alignItems: items,
        }}
      >
        {child}
      </div>
    );
  });

  return (
    <div className="w-full">
      <div className="mb-4 flex gap-0 items-center">
        {title && (
          <p className="flex items-center text-lg text-foreground">
            <Grip className="mr-2 w-4 text-muted-foreground" />
            {title}
          </p>
        )}
        {link && (
          <Button size="sm" variant="link" className="text-muted-foreground">
            <a href={link} target="_blank">
              {link}
            </a>
          </Button>
        )}
      </div>
      <div
        className="grid grid-cols-3s gap-[10mm] borders border-amber-200/20"
        style={{
          gridTemplateColumns: `repeat(${totalColumns}, 1fr)`,
        }}
      >
        {childrenWithSpans}
      </div>
    </div>
  );
};
