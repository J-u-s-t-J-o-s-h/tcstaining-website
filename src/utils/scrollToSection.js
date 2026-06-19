const NAVBAR_OFFSET = 80;

export function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_OFFSET;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
