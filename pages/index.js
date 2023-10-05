import { useEffect, useState } from "react";
import { Header, Presentation, Projects, Contact } from "../components";

function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
      document.body.dataset.theme = storedTheme;
      return;
    }

    const isSystemDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (!isSystemDarkMode) {
      setTheme("light");
      document.body.dataset.theme = "light";
    } else {
      document.body.dataset.theme = "dark";
    }
  }, []);

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />

      <Presentation />

      <Projects />

      <Contact />
    </div>
  );
}

export default Home;
