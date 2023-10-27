import counter from "./counter.js";
import { IncrementButton } from "./incrementButton.js";
import { DecrementButton } from "./decrementButton.js";

const rootElement = document.getElementById("root");

const CounterContainer = document.createElement("div");
CounterContainer.innerText = counter.getCount();

document.addEventListener("counter-change", () => {
  console.log("counter changed", counter.getCount());
  CounterContainer.innerText = counter.getCount();
});

rootElement.appendChild(CounterContainer);
rootElement.appendChild(DecrementButton());
rootElement.appendChild(IncrementButton());
