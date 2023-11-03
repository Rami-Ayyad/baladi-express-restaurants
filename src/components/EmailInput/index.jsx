import styles from "./index.module.css";
import { BsSend } from "react-icons/bs";
export const EmailInput = () => {
  return (
    <div className={styles["email-input"]}>
      <input type="email" placeholder="Your email" />
      <button>
        <BsSend color="white" />
      </button>
    </div>
  );
};
