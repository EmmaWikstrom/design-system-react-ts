import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) {
  const variantClass = styles[variant];

  return (
    <button
      className={`${styles.button} ${variantClass}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
