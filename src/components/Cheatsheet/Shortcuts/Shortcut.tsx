import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";

interface Props {
  shortcut: string;
  color?: `bg-${string}`;
  textColor?: `text-${string}`;
}

export const Shortcut = ({ shortcut, color, textColor }: Props) => {
  const shortcuts = shortcut.split("+").map(s => s.trim());

  return (
    <KbdGroup>
      {shortcuts.map((key, index) => (
        <Kbd
          key={index}
          className={cn(
            "capitalize text-sm font-normal text-white",
            color,
            textColor
          )}
        >
          {key}
        </Kbd>
      ))}
    </KbdGroup>
  );
};
