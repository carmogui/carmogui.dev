import styles from "./styles.module.css";
import { ExpandMoreIcon } from "../../static/icons";
import { goToPosition } from "../../helper";

export function Presentation() {
  return (
    <div id="home" className={styles.main}>
      <div className={styles.imageWrapper}>
        <div className={styles.nameWrapper}>
          <h2 className={styles.name}>Software</h2>
          <h2 className={styles.lastName}>Engineer</h2>
        </div>

        <h3></h3>

        <div className={styles.welcomeContainer}>
          <div className={styles.welcomeWrapper}>
            <span className={styles.welcomeText}>
              Hi, my name is <strong>Guilherme Carmo</strong>
            </span>
            <span className={styles.welcomeTextDown}>
              and I work with software development
            </span>
          </div>

          <div className={styles.welcomeWrapper}>
            <span className={styles.welcomeText}>
              I primary evolved my <strong>frontend skills</strong>,
            </span>
            <span className={styles.welcomeTextDown}>
              and now I'm learning some{" "}
              <strong>backend and devops skills</strong>
            </span>
          </div>

          <div className={styles.welcomeWrapper}>
            <span className={styles.welcomeText}>
              I like being <strong>part of a team</strong>
            </span>
            <span className={styles.welcomeTextDown}>
              where everyone feels good <strong>collaborating</strong>
            </span>
          </div>

          <span>...</span>

          <div>
            <span>some code drafts I created: </span>
            <a
              className={styles.draftboxButton}
              href="https://draftbox.carmogui.dev/"
              target="_blank"
            >
              draftbox
            </a>
          </div>
        </div>
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
