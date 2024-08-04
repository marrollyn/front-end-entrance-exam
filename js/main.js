import { getPDFResume } from "./getPDF.js";

getPDFResume();

export function updateRange(rangeInput) {
  const value =
      ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) *
      100;
  rangeInput.style.setProperty("--value", value + "%");
}

const rangeInputs = document.querySelectorAll(".slider");

rangeInputs.forEach((input) => {
  input.addEventListener("input", () => updateRange(input));
  updateRange(input);
});