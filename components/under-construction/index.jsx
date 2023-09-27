import styles from "./styles.module.css";

export function UnderConstruction() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1>👨‍💻 carmogui</h1>
        <p>hello world, this is my space on the internet 🙋‍♂️</p>
        <h2>let's gooooo</h2>
        <a href="https://www.sideuniverse.dev" target="_blank">
          🌌 sideuniverse
        </a>

        <h3>contacts</h3>

        <div className={styles.contactWrapper}>
          <p>linkedin</p>
          <p>carmogui</p>
          <a href="https://www.linkedin.com/in/carmogui" target="_blank">
            <span>linkedin</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              viewBox="0 -960 960 960"
              width="16"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
            </svg>
          </a>
        </div>

        <div className={styles.contactWrapper}>
          <p>github</p>
          <p>carmogui</p>
          <a href="https://github.com/carmogui" target="_blank">
            <span>github</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              viewBox="0 -960 960 960"
              width="16"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
            </svg>
          </a>
        </div>

        <div className={styles.contactWrapper}>
          <p>mail</p>
          <p>contact@carmogui.dev</p>
          <a href="mailto:contact@carmogui.dev" target="_blank" rel="external">
            <span>send e-mail</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              viewBox="0 -960 960 960"
              width="16"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
