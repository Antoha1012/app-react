import spinner from "../../assets/images/spinner.gif";
import styles from "./style.module.css";

const Preloader = () => {
  return (
    <figure className={styles.imageWrapper}>
      <img className={styles.image} src={spinner} alt="spinner gif" />
    </figure>
  );
};

export default Preloader;
