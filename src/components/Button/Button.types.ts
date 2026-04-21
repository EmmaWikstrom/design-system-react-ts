export type ButtonVariant = "primary" | "neutral" | "subtle";

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}
