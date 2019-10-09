export const activeUnderline = (targetElement, activeElement) => {
  const target = document.querySelector(targetElement);
  const active = document.querySelector(activeElement);
  const rect = active.getBoundingClientRect();
  const left = active.getBoundingClientRect().left + window.pageXOffset;
  const top = active.getBoundingClientRect().top + window.pageYOffset + 3;
  const { width, height } = rect;
  target.style.width = `${width}px`;
  target.style.height = `${height}px`;
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
};
