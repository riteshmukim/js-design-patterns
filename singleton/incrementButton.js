import singletonCounter from "./counter.js";

export const IncrementButton = () => {
  const button = document.createElement("button");
  button.innerText = "Increment";
  button.style.backgroundColor = "green";
  button.addEventListener("click", () => {
    singletonCounter.increment();
    document.dispatchEvent(new CustomEvent("counter-change"));
  });

  return button;
};
