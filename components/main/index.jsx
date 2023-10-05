import styles from "./styles.module.css";

export function Main({ id, children }) {
  return (
    <div id={id} className={styles.main}>
      {children}
    </div>
  );
}
