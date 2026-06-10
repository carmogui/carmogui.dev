import {
  ContactPageIcon,
  CopyIcon,
  GithubIcon,
  MailIcon,
  OpenInNewIcon,
} from "../../static/icons";
import { DownloadIcon } from "../../static/icons/download";
import { Main } from "../main";
import styles from "./styles.module.css";

const GITHUB = "carmogui";
const GITHUB_LINK = "https://github.com/carmogui";
const EMAIL = "pexesim@gmail.com";

export function Contact() {
  function copyText(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <Main id="contact">
      <h2 className={styles.sectionTitle}>contact</h2>

      <div className={styles.contactsWrapper}>
        <div className={styles.contactContainer}>
          <div className={styles.startWrapper}>
            <GithubIcon />
            <span className={styles.text}>github</span>
          </div>

          <div className={styles.endWrapper}>
            <p className={styles.textInfo}>{GITHUB}</p>

            <div className={styles.cardButtons}>
              <div className={styles.popUpContainer}>
                <button
                  onClick={() => copyText(GITHUB_LINK)}
                  className={styles.button}
                >
                  <CopyIcon />
                </button>

                <span className={styles.popUp}>copied</span>
              </div>

              <a
                href="https://github.com/carmogui"
                target="_black"
                className={styles.button}
              >
                <OpenInNewIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.startWrapper}>
            <MailIcon />
            <span className={styles.text}>email</span>
          </div>

          <div className={styles.endWrapper}>
            <p className={styles.textInfo}>{EMAIL}</p>

            <div className={styles.cardButtons}>
              <div className={styles.popUpContainer}>
                <button
                  onClick={() => copyText(EMAIL)}
                  className={styles.button}
                >
                  <CopyIcon />
                </button>

                <span className={styles.popUp}>copied</span>
              </div>

              <a
                href={`mailto:${EMAIL}`}
                target="_black"
                className={styles.button}
              >
                <OpenInNewIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.startWrapper}>
            <ContactPageIcon />
            <span className={styles.text}>resume</span>
          </div>

          <div className={styles.endWrapper}>
            <p className={styles.textInfo}>resume.pdf</p>

            <div className={styles.cardButtons}>
              <div className={styles.popUpContainer}>
                <a
                  className={styles.button}
                  href="/resume.pdf"
                  download="resume"
                >
                  <DownloadIcon />
                </a>

                <span className={styles.popUp}>downloading</span>
              </div>

              <a href="/resume.pdf" target="_black" className={styles.button}>
                <OpenInNewIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
