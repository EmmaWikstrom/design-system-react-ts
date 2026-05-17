import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

export function Input({
  value,
  onChange = () => {},
  placeholder = "Add a task",
  disabled = false,
}: InputProps) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      type="text"
    />
  );
}
