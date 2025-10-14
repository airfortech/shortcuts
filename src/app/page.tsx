import { Page } from "@/components/Page/Page";

export default function Home() {
  return (
    <div className="w-full font-sans grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-30 sm:pt-30 gap-16 sm:p-20 border border-amber-300 overflow-x-scroll">
      <Page title="vs code">
        <h1>test</h1>
        <button>test</button>
      </Page>
      <Page title="vs code" orientation="landscape">
        <h1>test</h1>
        <button>test</button>
      </Page>
    </div>
  );
}
