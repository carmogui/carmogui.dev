import styles from "./styles.module.css";
import { ExpandMoreIcon } from "../../static/icons";
import { goToPosition } from "../../helper";

export function Presentation() {
  return (
    <div id="home" className={styles.main}>
      <div className={styles.imageWrapper}>
        <div className={styles.nameWrapper}>
          <h2 className={styles.name}>Guilherme</h2>
          <h2 className={styles.lastName}>Carmo</h2>
        </div>

        <h3>software engineer --- typescript / react</h3>
        <h4 className={styles.secondary}>frontend specialist</h4>
        <h4>backend beginner</h4>
      </div>

      <button
        onClick={() => {
          goToPosition("projects");
        }}
        className={styles.arrowsWrapper}
      >
        <div className={styles.arrow}>
          <ExpandMoreIcon />
        </div>
        <div className={styles.arrow1}>
          <ExpandMoreIcon />
        </div>
        <div className={styles.arrow2}>
          <ExpandMoreIcon />
        </div>
        <div className={styles.arrow3}>
          <ExpandMoreIcon />
        </div>
      </button>
    </div>
  );
}
