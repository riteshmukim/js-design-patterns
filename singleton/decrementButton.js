import singletonCounter from "./counter.js";

export const DecrementButton = () => {
  const button = document.createElement("button");
  button.innerText = "Decrement";
  button.style.backgroundColor = "red";
  button.addEventListener("click", () => {
    singletonCounter.decrement();
    document.dispatchEvent(new CustomEvent("counter-change"));
  });

  return button;
};
