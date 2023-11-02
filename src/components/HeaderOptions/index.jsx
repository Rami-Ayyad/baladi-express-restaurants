import styles from "./index.module.css";
import { BiSearch } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";

export function HeaderOptions({ children, isBadge = false, isText = false }) {
  return (
    <div
      className={`${styles["header-option"]} ${isBadge && styles["badge"]} ${
        isText && styles["text"]
      }`}
    >
      {children}
    </div>
  );
}
