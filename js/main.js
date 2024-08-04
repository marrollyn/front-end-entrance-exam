import "../css/style.css";
import { updateRange } from "./slider.js";
import { getPDFResume } from "./getPDF.js";

getPDFResume();

const rangeInputs = document.querySelectorAll(".slider");

rangeInputs.forEach((input) => {
  input.addEventListener("input", () => updateRange(input));
  updateRange(input);
});