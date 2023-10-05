import styles from "./styles.module.css";
import Image from "next/image";
import profilePic from "./my-self.png";
import { ExpandMoreIcon } from "../../static/icons";
import { goToPosition } from "../../helper";

export function Presentation() {
  return (
    <div id="home" className={styles.main}>
      <div className={styles.imageWrapper}>
        <Image
          priority
          className={styles.profilePicture}
          src={profilePic}
          alt="picture of the author"
        ></Image>

        <div className={styles.nameWrapper}>
          <h2 className={styles.name}>Guilherme</h2>
          <h2 className={styles.lastName}>Carmo</h2>
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
