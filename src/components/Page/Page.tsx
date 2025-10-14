"use client";

import { useRef } from "react";
import { Printer, FileText, Grip } from "lucide-react";
import {
  capturePageAsImage,
  printImageFromDataUrl,
  downloadImageFromDataUrl,
} from "./imageProccessing";
import { calculateA4Format } from "./calculateA4Format";
import { useMonitorAdjustmentsStore } from "@/store/monitorAdjustments/monitorAdjustmentsStore";

export const Page = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { settings } = useMonitorAdjustmentsStore();

  const handlePrintImage = async () => {
    if (contentRef.current) {
      const imageDataUrl = await capturePageAsImage(contentRef.current);
      if (imageDataUrl) {
        await printImageFromDataUrl(imageDataUrl);
      }
    }
  };

  const handleSaveAsImage = async () => {
    if (contentRef.current) {
      const imageDataUrl = await capturePageAsImage(contentRef.current);
      if (imageDataUrl) {
        downloadImageFromDataUrl(imageDataUrl);
      }
    }
  };

  const dimensions = calculateA4Format(settings);

  return (
    <div className="border-1 border-foreground/20">
      <div
        className="relative w-[210mm] h-[297mm] p-[10mm] bg-background"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          padding: dimensions.padding,
        }}
        ref={contentRef}
      >
        {title && (
          <p
            className="absolute top-0 right-0 flex items-center text-secondary-foregrounds text-muted-foreground"
            style={{ height: dimensions.padding, right: dimensions.padding }}
          >
            <Grip className="mr-2 w-4 text-muted-foreground" />
            {title}
          </p>
        )}
        <button
          className="absolute -top-1 -translate-y-full right-0 p-2 border-1s cursor-pointer"
          onClick={handlePrintImage}
        >
          <Printer className="text-neutral-500 hover:text-neutral-800 hover:dark:text-neutral-400 transition-colors" />
        </button>
        <button
          className="absolute -top-1 -translate-y-full right-12 p-2 border-1s cursor-pointer"
          onClick={handleSaveAsImage}
        >
          <FileText className="text-neutral-500 hover:text-neutral-800 hover:dark:text-neutral-400 transition-colors" />
        </button>
        <div
          className="w-full h-full flex flex-col gap-[10mm] border-1s"
          style={{
            gap: dimensions.padding
              ? 1.5 * dimensions.padding + "px"
              : undefined,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
