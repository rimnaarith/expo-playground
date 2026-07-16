import { TextInput } from "react-native";
type InputProps = {
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "email-address" | "default";
};
export function Input({
  placeholder,
  secureTextEntry,
  keyboardType,
}: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      enterKeyHint="next"
      onSubmitEditing={() => console.log("test")}
      className="text-foreground font-poppins-regular py-4 px-4 h-14 border rounded-sm border-border placeholder:text-gray-300"
    />
  );
}
