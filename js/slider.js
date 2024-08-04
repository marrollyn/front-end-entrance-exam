export function updateRange(rangeInput) {
    const value =
        ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) *
        100;
    rangeInput.style.setProperty("--value", value + "%");
}


