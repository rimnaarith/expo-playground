import { Pressable } from "react-native";

interface Props {
  children: React.ReactNode;
  onPress(): void;
}

export function TabBarItem({ children, onPress }: Props) {
  return (
    <Pressable onPress={onPress} className="flex-1 items-center justify-center">
      {children}
    </Pressable>
  );
}
