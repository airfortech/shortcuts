export interface ShortcutsTable {
  header?: string;
  headerColor?: `bg-${string}`;
  rowColor?: `bg-${string}`;
  textColor?: `text-${string}`;
  textHeaderColor?: `text-${string}`;
  emptyRows?: number;
  shortcuts: ShortcutItem[];
}

export interface ShortcutItem {
  shortcut: string;
  description: string;
}
