import { Pressable, Text } from "react-native";

type ButtonProps = {
  title?: string;
};

export function Button({ title = "Button" }: ButtonProps) {
  return (
    <Pressable className="py-4 px-8 bg-white self-start rounded-sm flex flex-row">
      <Text className="text-black font-poppins-medium">{title}</Text>
    </Pressable>
  );
}
