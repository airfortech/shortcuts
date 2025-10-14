export interface ResolutionGroup {
  aspectRatio: string;
  resolutions: string[];
}

export const resolutions: ResolutionGroup[] = [
  {
    aspectRatio: "4:3",
    resolutions: ["800x600", "1024x768", "1280x960", "1600x1200", "2048x1536"],
  },
  {
    aspectRatio: "16:9",
    resolutions: [
      "1280x720",
      "1366x768",
      "1600x900",
      "1920x1080",
      "2560x1440",
      "3840x2160",
      "7680x4320",
    ],
  },
  {
    aspectRatio: "16:10",
    resolutions: [
      "1280x800",
      "1440x900",
      "1680x1050",
      "1920x1200",
      "2560x1600",
      "3840x2400",
    ],
  },
  {
    aspectRatio: "21:9",
    resolutions: ["2560x1080", "3440x1440", "3840x1600", "5120x2160"],
  },
  {
    aspectRatio: "32:9",
    resolutions: ["3840x1080", "5120x1440", "7680x2160"],
  },
];
