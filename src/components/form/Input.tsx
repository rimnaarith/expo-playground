import { TextInput } from "react-native";
type InputProps = {
  placeholder?: string;
  secureTextEntry?: boolean;
};
export function Input({ placeholder, secureTextEntry }: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      className="text-foreground font-poppins-regular py-4 px-6 h-14 border rounded-sm border-foreground placeholder:text-gray-300"
    />
  );
}
