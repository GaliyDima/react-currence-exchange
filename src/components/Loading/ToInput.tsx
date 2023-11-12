import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.root}>
      <div className={styles.newtons_cradle}>
        <div className={styles.newtons_cradle_dot} />
        <div className={styles.newtons_cradle_dot} />
        <div className={styles.newtons_cradle_dot} />
        <div className={styles.newtons_cradle_dot} />
      </div>
    </div>
  );
};

export default Loading;
