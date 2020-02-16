export function getScroller(el: HTMLElement): HTMLElement {
  let node = el;
  while (node && node.tagName !== "BODY") {
    const computedStyle = getComputedStyle(node);
    const overflowY = computedStyle.overflowY;
    if (overflowY && /auto|scroll/i.test(overflowY)) {
      return node;
    } else {
      node = node.parentNode as HTMLElement;
    }
  }
  return document.body;
}
