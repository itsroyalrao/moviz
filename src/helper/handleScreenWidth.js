export function handleScreenWidth(setScreenWidth) {
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });
}
