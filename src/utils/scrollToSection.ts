export function scrollToSection(
  e: React.MouseEvent<HTMLAnchorElement>,
  DOM: string
) {
  e.preventDefault();

  const element = document.getElementById(DOM);

  if (element) {
    if (element.getBoundingClientRect().top === 0) {
      window.history.pushState(null, "", `#${DOM}`);
      return window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const yOffset = -150;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    const newUrl = `${window.location.pathname}#${DOM}`;
    window.history.pushState(null, "", newUrl);

    return window.history.pushState(null, "", newUrl);
  }
}