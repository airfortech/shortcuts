import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";
import { ShortcutsTable } from "@/types/Shortcuts";
import React, { Fragment } from "react";
import { Shortcut } from "./Shortcut";

interface Props {
  columns?: number;
  data: ShortcutsTable[];
}

export const Shortcuts = ({ columns = 2, data }: Props) => {
  console.table(data[0].shortcuts);
  return (
    <div
      className={
        "p-5 w-full h-full border-0 border-red-800 gap-5 tracking-wide"
      }
      style={{
        columns,
      }}
    >
      {data.map((table, index) => (
        <div
          className={cn(
            "break-inside-auto w-full text-sm",
            index < data.length - 1 && "mb-4",
            table.textColor || "text-white"
          )}
          key={index}
        >
          <div
            className={cn(
              "p-2 rounded-sm font-medium",
              table.headerColor,
              table.textHeaderColor
            )}
          >
            {table.header}
          </div>
          <ul
            className="grid"
            style={{
              gridTemplateColumns: "1fr auto",
            }}
          >
            {[
              ...table.shortcuts,
              ...new Array(table.emptyRows || 0)
                .fill(null)
                .map(() => ({ shortcut: "x", description: "" })),
            ].map((shortcut, i) => (
              <Fragment key={i}>
                <div
                  key={`${i}-col1`}
                  className={cn(
                    i % 2 === 1 && table.rowColor,
                    "break-inside-avoid-columns px-2 py-[5px] pr-8 font-light",
                    "rounded-l-sm",
                    "flex items-center",
                    i > table.shortcuts.length - 1 && "opacity-0"
                  )}
                >
                  <Shortcut
                    shortcut={shortcut.shortcut}
                    color={table.rowColor}
                    textColor={table.textColor}
                  />
                </div>
                <div
                  key={`${i}-col2`}
                  className={cn(
                    i % 2 === 1 && table.rowColor,
                    "break-inside-avoid-columns font-light px-2 py-[5px] pr-8",
                    "rounded-r-sm",
                    "flex items-center",
                    i > table.shortcuts.length - 1 && "opacity-0"
                  )}
                >
                  {shortcut.description}
                </div>
              </Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
