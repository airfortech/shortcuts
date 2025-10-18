import { Cheatsheet } from "@/components/Cheatsheet/Cheatsheet";
import { Shortcuts } from "@/components/Cheatsheet/Shortcuts/Shortcuts";
import { Page } from "@/components/Page/Page";
import { ShortcutsTable } from "@/types/Shortcuts";

const data: ShortcutsTable[] = [
  {
    header: "File Operations",
    headerColor: "bg-blue-600",
    textHeaderColor: "text-black",
    rowColor: "bg-blue-500/20",
    // emptyRows: 2,
    shortcuts: [
      { shortcut: "Ctrl + N", description: "New File" },
      { shortcut: "Ctrl + O", description: "Open File" },
      { shortcut: "Ctrl + S", description: "Save File" },
      { shortcut: "Ctrl + Shift + S", description: "Save As" },
      { shortcut: "Ctrl + W", description: "Close File" },
    ],
  },
  {
    header: "Editing",
    headerColor: "bg-green-600",
    rowColor: "bg-green-500/20",
    shortcuts: [
      { shortcut: "Ctrl + X", description: "Cut Line" },
      { shortcut: "Ctrl + C", description: "Copy Line" },
      { shortcut: "Ctrl + V", description: "Paste" },
      { shortcut: "Ctrl + Z", description: "Undo" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Page title="vs code">
        <Cheatsheet
          width="100%"
          height={90}
          backHeight={90}
          backgroundColor="bg-gray-800"
          backBackgroundColor="bg-gray-200"
          // border
        >
          <Shortcuts columns={2} data={data} />
        </Cheatsheet>
      </Page>
      {/* <Page title="vs code" orientation="landscape">
        <Cheatsheet height={90} border />
      </Page> */}
    </>
  );
}
