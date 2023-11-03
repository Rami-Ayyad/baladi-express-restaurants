import styles from "./index.module.css";

export const AppStoreBtn = ({ icon, title, text }) => {
  return (
    <button className={styles["app-store-btn"]}>
      {icon}
      <div>
        <span>{text}</span>
        <span>{title}</span>
      </div>
    </button>
  );
};
