import { MonitorSettings } from "@/store/monitorAdjustments/monitorAdjustmentsStore";

export interface A4Dimensions {
  width: number | undefined;
  height: number | undefined;
  padding: number | undefined;
}

export const calculateA4Format = (settings: MonitorSettings): A4Dimensions => {
  // Default values if settings are not available
  if (!settings.diagonal || !settings.monitorResolution) {
    return { width: undefined, height: undefined, padding: undefined };
  }

  const diagonal = parseFloat(settings.diagonal);
  const verticalResolution = parseInt(
    settings.monitorResolution.split("x")[1],
    10
  );
  const horizontalResolution = parseInt(
    settings.monitorResolution.split("x")[0],
    10
  );

  const diagonalCm = diagonal * 2.54;
  const ratioDiagonal = Math.sqrt(
    horizontalResolution ** 2 + verticalResolution ** 2
  );
  const physicalHeightCm = (verticalResolution / ratioDiagonal) * diagonalCm;

  const verticalPxpcm = verticalResolution / physicalHeightCm;

  const a4WidthCm = 21;
  const a4HeightCm = 29.7;
  const a4PaddingCm = 1;

  const width = Math.round(a4WidthCm * verticalPxpcm);
  const height = Math.round(a4HeightCm * verticalPxpcm);
  const padding = Math.round(a4PaddingCm * verticalPxpcm);

  return { width, height, padding };
};
