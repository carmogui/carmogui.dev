import { useEffect } from "react";
import { UnderConstruction } from "../../components/under-construction";

export default function V1() {
  useEffect(() => {
    document.body.dataset.theme = "light";
  }, []);

  return <UnderConstruction />;
}
