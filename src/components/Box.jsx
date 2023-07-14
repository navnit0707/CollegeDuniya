import styles from "./box.module.css";
function box({ header, body, footer }) {
  return (
    <div className={styles.container}>
      <header className={styles.containerHeader}>{header}</header>
      <body className={styles.containerBody}>{body}</body>
      <footer className={styles.containerFooter}>{footer}</footer>
    </div>
  );
}

export default box;
