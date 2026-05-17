import styles from "./ListItem.module.css";
import type { ListItemProps } from "./ListItem.types";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";

export function ListItem({
  label,
  checked,
  onToggle,
  onEdit,
  onDelete,
}: ListItemProps) {
  return (
    <div className={styles.listItem}>
      <Checkbox checked={checked} onChange={onToggle} />
      <span className={styles.label}>{label}</span>
      <div className={styles.actions}>
        <Button variant="neutral" size="sm" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="subtle" size="sm" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
