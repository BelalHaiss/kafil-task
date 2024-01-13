export function handleAriaExpanded(element: HTMLElement) {
  const isExpanded = element.getAttribute('aria-expanded') === 'true';
  element.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
}
