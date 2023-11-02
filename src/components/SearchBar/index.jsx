import styles from "./index.module.css";
import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <div className={styles["search-bar"]}>
      <BiSearch color="gray" />
      <input type="text" placeholder="search" />
    </div>
  );
};
