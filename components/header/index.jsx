import { goToPosition } from "../../helper";
import { DarkModeIcon, LightModeIcon } from "../../static/icons";
import styles from "./styles.module.css";

export function Header({ theme, setTheme }) {
  function changeTheme() {
    setTheme((currentTheme) => {
      const storedTheme = localStorage.getItem("theme");

      const isSystemDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (currentTheme === "light") {
        const shouldRemoveStoredTheme =
          isSystemDarkMode && storedTheme === "light";
        if (shouldRemoveStoredTheme) {
          localStorage.removeItem("theme");
        } else {
          localStorage.setItem("theme", "dark");
        }

        document.body.dataset.theme = "dark";
        return "dark";
      }

      const shouldRemoveStoredTheme =
        !isSystemDarkMode && storedTheme === "dark";
      if (shouldRemoveStoredTheme) {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", "light");
      }

      document.body.dataset.theme = "light";
      return "light";
    });
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button
          onClick={() => {
            goToPosition("home");
          }}
          className={styles.titleWrapper}
        >
          <h1 className={styles.title}>carmogui</h1>

          <h1 className={styles.lastTitle}>.dev</h1>
        </button>

        <div className={styles.buttonsWrapper}>
          <button
            className={styles.anchorButton}
            onClick={() => {
              goToPosition("projects");
            }}
          >
            projects
          </button>

          <button
            className={styles.anchorButton}
            onClick={() => {
              goToPosition("contact");
            }}
          >
            contact
          </button>

          <div className={styles.buttonContainer}>
            <button onClick={changeTheme} className={styles.themeButton}>
              {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
