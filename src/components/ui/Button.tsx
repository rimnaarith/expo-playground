import { Pressable, Text } from "react-native";

type ButtonProps = {
  title?: string;
};

export function Button({ title = "Button" }: ButtonProps) {
  return (
    <Pressable className="w-full py-4 px-8 bg-foreground self-start rounded-sm flex flex-row justify-center">
      <Text className="text-background font-poppins-medium text-base">
        {title}
      </Text>
    </Pressable>
  );
}
