import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "neutral" | "subtle";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}
