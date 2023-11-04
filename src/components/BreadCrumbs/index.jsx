import styles from "./index.module.css";

export const BreadCrumbs = () => {
  return (
    <div className={styles["bread-crumbs"]}>
      <p>
        {`Home>`}
        <span>Restaurants</span>
      </p>
    </div>
  );
};
