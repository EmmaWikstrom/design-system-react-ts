import styles from "./Checkbox.module.css";
import type { CheckboxProps } from "./Checkbox.types";

export function Checkbox({
  label,
  checked = false,
  disabled = false,
  onChange,
}: CheckboxProps) {
  return (
    <label
      className={`${styles.wrapper} ${disabled ? styles.wrapperDisabled : ""}`}
    >
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}
