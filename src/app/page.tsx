import { Page } from "@/components/Page/Page";
import { GemIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full font-sans grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-30 sm:pt-30 gap-16 sm:p-20">
      <Page title="buttons">
        <h1>test</h1>
        <button>test</button>
      </Page>
    </div>
  );
}
