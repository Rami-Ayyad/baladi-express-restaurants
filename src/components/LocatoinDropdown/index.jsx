import styles from "./index.module.css";
import { BiSearch } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";

export function LocatoinDropdown() {
  return (
    <Dropdown className={styles["dropdown"]}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Lusail, Qatar
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Location 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Location 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
