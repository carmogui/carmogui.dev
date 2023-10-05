export function goToPosition(elementId) {
  if (elementId === "#") {
    window.scrollTo(0, 0);
    return;
  }

  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
}
