// INFO: working package for image generation: https://www.npmjs.com/package/modern-screenshot
// no bugs so far like with html2canvas and forks:
// - fonts render correctly
// - css rotate renders correctly
import { domToPng } from "modern-screenshot";

export const capturePageAsImage = async (
  element: HTMLDivElement
): Promise<string | null> => {
  try {
    const dataUrl = await domToPng(element, {
      scale: 3,
      backgroundColor: null,
      quality: 1,
    });
    return dataUrl;
  } catch (error) {
    console.error("Error generating image with domToPng:", error);
    return null;
  }
};

export const printImageFromDataUrl = async (
  imageDataUrl: string
): Promise<void> => {
  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.documentElement.innerHTML = `
      <head>
        <title>Print Image</title>
        <style>
          @media print {
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              page-break-after: avoid;
            }
            img {
              max-width: 100%;
              max-height: 100vh;
              height: auto;
              object-fit: contain;
              page-break-inside: avoid;
              page-break-after: avoid;
            }
          }
          @page {
            size: A4;
            margin: 0mm;
          }
          @page:first {
            /* Only show first page */
          }
        </style>
      </head>
      <body>
        <img src="${imageDataUrl}" alt="Page content" />
      </body>
    `;

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  }
};

export const downloadImageFromDataUrl = (imageDataUrl: string): void => {
  const link = document.createElement("a");
  link.href = imageDataUrl;
  link.download = `page-${Date.now()}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
