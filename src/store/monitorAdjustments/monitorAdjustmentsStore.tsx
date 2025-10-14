import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface MonitorSettings {
  diagonal: string;
  monitorResolution: string;
}

export interface MonitorAdjustmentsActions {
  setDiagonal: (diagonal: string) => void;
  setMonitorResolution: (resolution: string) => void;
}

export interface MonitorAdjustmentsStore extends MonitorAdjustmentsActions {
  settings: MonitorSettings;
}

export const defaultMonitorAdjustments: MonitorSettings = {
  diagonal: "27",
  monitorResolution: "2560x1440",
};

export const useMonitorAdjustmentsStore = create<MonitorAdjustmentsStore>()(
  persist(
    set => ({
      settings: defaultMonitorAdjustments,
      setDiagonal: (diagonal: string) =>
        set(state => ({
          settings: { ...state.settings, diagonal },
        })),
      setMonitorResolution: (monitorResolution: string) =>
        set(state => ({
          settings: { ...state.settings, monitorResolution },
        })),
    }),
    {
      name: "shortcuts-monitor-adjustments",
      version: 1,
    }
  )
);
