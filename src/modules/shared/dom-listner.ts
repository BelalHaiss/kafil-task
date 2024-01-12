export function handleClickOutside(
  elementToCheck: HTMLElement,
  exitHandler: Function,
  safeNode?: HTMLElement
) {
  document.addEventListener('mousedown', (event) => {
    const isClickInsideElement = elementToCheck.contains(event.target as Node);
    let isSafeNode = safeNode ? event.target === safeNode : false;
    if (safeNode) {
      if (safeNode.contains(event.target as Node)) return;
    }
    if (!isClickInsideElement && !isSafeNode) {
      exitHandler();
    }
  });
}
