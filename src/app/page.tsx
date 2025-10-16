import { Cheatsheet } from "@/components/Cheatsheet/Cheatsheet";
import { Page } from "@/components/Page/Page";

export default function Home() {
  return (
    <>
      <Page title="vs code">
        <Cheatsheet
          width={90}
          height={90}
          backHeight={20}
          backgroundColor="bg-violet-400"
          backBackgroundColor="bg-amber-400"
          border
        />
      </Page>
      <Page title="vs code" orientation="landscape">
        <Cheatsheet height={90} border />
      </Page>
    </>
  );
}
