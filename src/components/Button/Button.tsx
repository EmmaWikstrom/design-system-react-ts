import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}: ButtonProps) {
  const variantClass = styles[variant];
  const sizeClass = styles[size];

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
