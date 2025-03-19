import { Main } from "../main";
import styles from "./styles.module.css";
import { OpenInNewIcon } from "../../static/icons";

export function Projects() {
  return (
    <Main id="projects">
      <h2 className={styles.sectionTitle}>projects</h2>
      <div className={styles.projectSection}>
        <div className={styles.project}>
          <span className={styles.projectInfo}>sep 2020 - present</span>

          <h3 className={styles.projectTitle}>CWI software</h3>

          <div>
            <span className={styles.text}>
              This is where I started my career in software development, where I
              embarked on an intensive three-month course, learning Java, SQL,
              JavaScript, React and Git. The course had a very high level of
              difficulty and was almost 24/7, but at the same time I learned a
              lot.
            </span>
          </div>

          <div>
            <span className={styles.text}>After this course I joined</span>{" "}
            <a
              className={styles.textLink}
              href="https://cwi.com.br/"
              target="_blank"
            >
              CWI Software
            </a>{" "}
            <span className={styles.text}>
              as an intern, and was allocated to
            </span>{" "}
            <a
              className={styles.textLink}
              href="https://www.arezzo.com.br/"
              target="_blank"
            >
              Arezzo&Co
            </a>
            <span className={styles.text}>
              , which is a very large fashion company in Brazil. I worked with
              incredible people who taught me a lot, and made me evolve even
              further.
            </span>
          </div>

          <div>
            <span className={styles.text}>
              I was soon hired, and I continued to commit and learn, working
              ever closer to the business, as I understood that at the end of
              the day it is much more about generating value and solving the
              customer's problem than writing code. Therefore, I always try to
              help, proposing solutions and refining ideas with the team to
              improve our product.
            </span>
          </div>

          <div>
            <span className={styles.text}>
              I participated in the transition from the old system to a new one,
              which we created with great technologies such as react, typescript
              and styled-components, and as soon as our new dashboard was
              published, my frontend colleague who was my mentor switched
              squads, and in this way I took on more responsibilities in
              decision-making regarding product technologies.
            </span>
          </div>
        </div>

        <div className={styles.project}>
          <span className={styles.projectInfo}>personal projects</span>
          <h3 className={styles.projectTitle}>sideuniverse</h3>
          <div>
            <a
              className={styles.textLink}
              href="https://www.sideuniverse.dev/"
              target="_blank"
            >
              sideuniverse
            </a>{" "}
            <span className={styles.text}>
              will be a community for developers, where we can share our
              personal projects and receive some cool feedbacks on where we can
              improve it.
            </span>
          </div>
          <div>
            <span className={styles.text}>
              I'm developing this project fullstack, following the{" "}
            </span>
            <a
              className={styles.textLink}
              href="https://curso.dev/"
              target="_blank"
            >
              curso.dev
            </a>{" "}
            <span className={styles.text}>
              course by a popular Brazilian developer called
            </span>{" "}
            <a
              className={styles.textLink}
              href="https://www.linkedin.com/in/filipedeschamps/"
              target="_blank"
            >
              Filipe Deschamps
            </a>{" "}
            <span className={styles.text}>
              based on his own community called
            </span>{" "}
            <a
              className={styles.textLink}
              href="https://www.tabnews.com.br/"
              target="_blank"
            >
              tabnews
            </a>
            <span className={styles.text}>.</span>
          </div>

          <div className={styles.buttonWrapper}>
            <a
              href="https://www.sideuniverse.dev/"
              target="_blank"
              className={styles.buttonVisitWebsite}
            >
              <span>visit website</span>
              <OpenInNewIcon />
            </a>
          </div>

          <br />

          <h3 className={styles.projectTitle}>
            Zeratami <span className={styles.text}>JS</span>
          </h3>
          <div>
            <a
              className={styles.textLink}
              href="https://zeratami.com/"
              target="_blank"
            >
              zeratami
            </a>{" "}
            <span className={styles.text}>
              is a game I created with JavaScript and React, with some new
              libraries for me, like{" "}
            </span>
            <a
              className={styles.textLink}
              href="https://zustand-demo.pmnd.rs/"
              target="_blank"
            >
              zustand
            </a>
            <span className={styles.text}>
              , for global state management, and{" "}
            </span>
            <a
              className={styles.textLink}
              href="https://r3f.docs.pmnd.rs/getting-started/introduction"
              target="_blank"
            >
              react three fiber
            </a>
            <span className={styles.text}>
              , for rendering and controlling 3d objects on the website.
            </span>
          </div>

          <div className={styles.buttonWrapper}>
            <a
              href="https://zeratami.com/"
              target="_blank"
              className={styles.buttonVisitWebsite}
            >
              <span>visit website</span>
              <OpenInNewIcon />
            </a>
          </div>

          <br />

          <h3 className={styles.projectTitle}>
            Zeratami <span className={styles.text}>Godot</span>
          </h3>
          <div>
            <span className={styles.text}>
              By facing some problems dealing with 3d particles in JavaScript, I
              restart the development of this game using the open source game
              engine{" "}
            </span>
            <a
              className={styles.textLink}
              href="https://godotengine.org/"
              target="_blank"
            >
              Godot
            </a>
          </div>
          <div>
            <span className={styles.text}>
              I learned a new development language (gdscript), and I was able to
              practice some object-oriented programming concepts again
            </span>
          </div>

          <div className={styles.buttonWrapper}>
            <a
              href="https://pexesan.itch.io/zeratami"
              target="_blank"
              className={styles.buttonVisitWebsite}
            >
              <span>visit website</span>
              <OpenInNewIcon />
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
}
