"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { resolutions } from "./resolutions";
import { useMonitorAdjustmentsStore } from "@/store/monitorAdjustments/monitorAdjustmentsStore";

export const AdjustMonitorToPrint = () => {
  const { settings, setDiagonal, setMonitorResolution } =
    useMonitorAdjustmentsStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^\d{0,2}$/.test(inputValue)) {
      setDiagonal(inputValue);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center gap-2">
        <label className="text-foreground text-sm">Monitor diagonal</label>
        <div className="relative inline-flex items-center">
          <span className="absolute right-3 text-foreground/60 text-sm font-medium z-10">
            in
          </span>
          <Input
            type="number"
            value={settings.diagonal}
            onChange={handleInputChange}
            min="4"
            max="99"
            className="w-22 h-8 rounded-full !bg-background pl-3 pr-8 !ring-1 !ring-border border-0 text-foreground/80"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <label className="text-foreground text-sm">Monitor resolution</label>
        <Select
          value={settings.monitorResolution}
          onValueChange={setMonitorResolution}
        >
          <SelectTrigger className="w-32 !h-8 rounded-full !bg-background !ring-1 !ring-border border-0 text-foreground/80">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {resolutions.map(group => (
              <SelectGroup key={group.aspectRatio}>
                <SelectLabel>{group.aspectRatio}</SelectLabel>
                {group.resolutions.map(resolution => (
                  <SelectItem key={resolution} value={resolution}>
                    {resolution}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
