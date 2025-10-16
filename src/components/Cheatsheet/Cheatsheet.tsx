"use client";
import { cn } from "@/lib/utils";
import { calculateA4Format } from "../Page/calculateA4Format";
import { useMonitorAdjustmentsStore } from "@/store/monitorAdjustments/monitorAdjustmentsStore";

interface Props {
  width?: number | string;
  height: number;
  backHeight?: number;
  border?: boolean;
  cropMarks?: boolean;
  backgroundColor?: `bg-${string}`;
  backBackgroundColor?: `bg-${string}`;
  borderColor?: `border-${string}`;
}

export const Cheatsheet = ({
  width,
  height,
  backHeight,
  border,
  cropMarks = true,
  backgroundColor,
  backBackgroundColor,
  borderColor = "border-primary",
}: Props) => {
  const { settings } = useMonitorAdjustmentsStore();
  const { pxpmm } = calculateA4Format(settings);

  const _width =
    typeof width === "number" ? (pxpmm ? width * pxpmm : width) + "px" : width;
  const _height = pxpmm ? height * pxpmm + "px" : height + "mm";
  const _backHeight = backHeight
    ? pxpmm
      ? backHeight * pxpmm + "px"
      : backHeight + "mm"
    : _height;
  const crossSize = pxpmm ? 5 * pxpmm + "px" : "5mm";

  const Cross = ({
    position,
  }: {
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  }) => {
    const positions = {
      "top-left": {
        top: "-1px",
        left: "-1px",
        rotation: 180,
      },
      "top-right": {
        top: "-1px",
        left: "calc(100% + 1px)",
        rotation: 270,
      },
      "bottom-left": {
        top: "calc(100% + 1px)",
        left: "-1px",
        rotation: 90,
      },
      "bottom-right": {
        top: "calc(100% + 1px)",
        left: "calc(100% + 1px)",
        rotation: 0,
      },
    };

    return (
      <div
        className="absolute"
        style={{
          width: crossSize,
          height: crossSize,
          top: positions[position].top,
          left: positions[position].left,
          transformOrigin: "0 0",
          transform: `rotate(${positions[position].rotation}deg)`,
        }}
      >
        <div
          className="absolute -top-[2px] left-0 w-full h-[1px] bg-red-500"
          style={{ left: pxpmm ? 2 * pxpmm + "px" : "2mm" }}
        />
        <div
          className="absolute top-0 -left-[2px] w-[1px] h-full bg-red-500"
          style={{
            top: pxpmm ? 2 * pxpmm + "px" : "2mm",
          }}
        />
      </div>
    );
  };

  return (
    <div
      className={cn("relative w-full")}
      style={{
        width: _width,
      }}
    >
      {cropMarks && <Cross position="top-left" />}
      {cropMarks && <Cross position="top-right" />}
      {cropMarks && <Cross position="bottom-left" />}
      {cropMarks && <Cross position="bottom-right" />}
      <div
        className="relative"
        style={{
          height: _backHeight,
        }}
      >
        <div
          className={cn("absolute top-0 w-full h-full", backBackgroundColor)}
          style={{
            left: pxpmm ? -2 * pxpmm + "px" : "-2mm",
            width: pxpmm ? `calc(100% + ${4 * pxpmm}px)` : "calc(100% + 4mm)",
            top: pxpmm ? -2 * pxpmm + "px" : "-2mm",
            height: pxpmm ? `calc(100% + ${2 * pxpmm}px)` : "calc(100% + 2mm)",
          }}
        ></div>
        <div
          className={cn(
            "absolute w-full h-full",
            border && "border border-b-0",
            border && borderColor,
            backBackgroundColor
          )}
        />
      </div>
      <div className="relative" style={{ height: _height }}>
        <div
          className={cn("absolute top-0 w-full h-full", backgroundColor)}
          style={{
            left: pxpmm ? -2 * pxpmm + "px" : "-2mm",
            width: pxpmm ? `calc(100% + ${4 * pxpmm}px)` : "calc(100% + 4mm)",
            top: 0,
            height: pxpmm ? `calc(100% + ${2 * pxpmm}px)` : "calc(100% + 2mm)",
          }}
        ></div>
        <div
          className={cn(
            "relative w-full h-full",
            border && "border",
            border && borderColor,
            backgroundColor
          )}
        >
          Cheatsheet
        </div>
      </div>
    </div>
  );
};
