import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Pressable, Text } from "react-native";

export const buttonVariants = cva(
  "w-full px-8 self-start rounded-sm flex flex-row justify-center items-center",
  {
    variants: {
      variant: {
        default: "bg-primary",
      },
      size: {
        default: "h-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
export const buttonTextVariants = cva("font-poppins-medium", {
  variants: {
    variant: {
      default: "text-background",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = {
  title?: string;
  className?: string;
  textClassName?: string;
};

export function Button({
  title = "Button",
  className,
  textClassName,
  size,
  variant,
}: ButtonProps & VariantProps<typeof buttonVariants>) {
  return (
    <Pressable className={cn(buttonVariants({ variant, size, className }))}>
      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: textClassName }),
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
}
